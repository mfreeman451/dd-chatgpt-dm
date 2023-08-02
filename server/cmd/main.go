package main

import (
	"context"
	"fmt"
	grpcMiddleware "github.com/grpc-ecosystem/go-grpc-middleware"
	grpcPrometheus "github.com/grpc-ecosystem/go-grpc-prometheus"
	"github.com/improbable-eng/grpc-web/go/grpcweb"
	"github.com/mfreeman451/dd-chatgpt-dm/server/pb/game"
	"github.com/prometheus/client_golang/prometheus"
	"github.com/prometheus/client_golang/prometheus/promhttp"
	"github.com/thejerf/suture/v4"
	"net/http"
	"os"
	"os/signal"
	"strconv"
	"syscall"

	"github.com/joho/godotenv"
	"github.com/mfreeman451/dd-chatgpt-dm/server/internal/logger"
	"github.com/mfreeman451/dd-chatgpt-dm/server/internal/redis" // Use the custom redis package
	"github.com/mfreeman451/dd-chatgpt-dm/server/internal/server"
	"github.com/mfreeman451/dd-chatgpt-dm/server/internal/service"
	"github.com/mfreeman451/dd-chatgpt-dm/server/pkg/db"
	"github.com/mfreeman451/dd-chatgpt-dm/server/pkg/watermill"
	"google.golang.org/grpc"
)

func main() {
	var log = logger.New()

	// Read in .env
	err := godotenv.Load()
	if err != nil {
		log.Fatal().Err(err).Msg("failed to load .env file")
	}

	// Register a counter metric to track incoming requests.
	requestsCounter := prometheus.NewCounter(prometheus.CounterOpts{
		Name: "dnd_requests_total",
		Help: "Total number of incoming requests",
	})
	prometheus.MustRegister(requestsCounter)

	// Create DB instance, pass in .env variables
	dbConnStr := os.Getenv("DB_CONN_STR")
	dbType := os.Getenv("DB_TYPE")

	dbInstance, err := db.NewDB(dbConnStr, dbType)
	if err != nil {
		log.Fatal().Err(err).Msg("failed to create DB instance")
	}

	// Create Redis client using the custom package
	rdb := redis.NewClient(&redis.Options{
		Address:  os.Getenv("REDIS_ADDRESS"),
		Password: os.Getenv("REDIS_PASSWORD"),
		DB:       0,
	})

	// test Redis connection
	redRes, err := rdb.Ping(context.Background())
	if err != nil {
		log.Fatal().Err(err).Msg("failed to connect to Redis")
	}
	log.Info().Msgf("Redis ping result: %s", redRes)

	// Create a new suture supervisor
	supervisor := suture.New("main", suture.Spec{})

	// Create Service
	srv := service.NewService(dbInstance, rdb)

	// Create GRPC server
	grpcPort, err := strconv.Atoi(os.Getenv("GRPC_PORT"))
	if err != nil {
		log.Fatal().Err(err).Msg("failed to convert GRPC_PORT to int")
	}
	grpcServer := server.NewGRPCServer(srv, grpcPort, log)

	// Add the GRPC server as a service to the supervisor
	supervisor.Add(grpcServer)

	// Create a context for the supervisor
	ctx, cancel := context.WithCancel(context.Background())
	defer cancel()

	// Start the supervisor in a separate goroutine
	go func() {
		err := supervisor.Serve(ctx)
		if err != nil {
			log.Fatal().Err(err).Msg("failed to start supervisor")
		}
	}()

	// Apply Prometheus middleware to the gRPC server
	grpcOptions := []grpc.ServerOption{
		grpc.UnaryInterceptor(grpcMiddleware.ChainUnaryServer(
			grpcPrometheus.UnaryServerInterceptor, // Prometheus logging middleware
		)),
	}

	// Set options for the gRPC server
	grpcServer.SetOptions(grpcOptions...)

	grpcWebServer := grpcweb.WrapServer(grpcServer.GetGRPCServer())

	grpcWebService := &server.GRPCWebService{
		GrpcWebServer: grpcWebServer,
		Port:          8080, // replace with the actual port
		Log:           log,
	}
	supervisor.Add(grpcWebService)

	// Register service implementation
	game.RegisterGameServer(grpcServer.GetGRPCServer(), srv)

	// Expose Prometheus metrics via HTTP endpoint
	http.Handle("/metrics", promhttp.Handler())

	// Start HTTP server for Prometheus metrics
	go func() {
		log.Info().Msg("Starting Prometheus Metrics server")
		httpPort, err := strconv.Atoi(os.Getenv("PROMETHEUS_PORT"))
		if err != nil {
			log.Fatal().Err(err).Msg("failed to convert PROMETHEUS_PORT to int")
		}
		httpAddr := fmt.Sprintf(":%d", httpPort)
		log.Info().Msgf("Prometheus metrics server listening on %s", httpAddr)
		if err := http.ListenAndServe(httpAddr, nil); err != nil {
			log.Fatal().Err(err).Msg("failed to start Prometheus metrics server")
		}
	}()

	// Create the CQRS components
	commandProcessor, eventProcessor, err := watermill.NewCQRS()
	if err != nil {
		log.Fatal().Err(err).Msg("failed to create CQRS components")
	}

	createGameCommandHandler := watermill.CreateGameCommandHandler{}
	err = commandProcessor.AddHandlers(createGameCommandHandler)
	if err != nil {
		return
	}

	gameCreatedEventHandler := watermill.GameCreatedEventHandler{}
	err = eventProcessor.AddHandlers(gameCreatedEventHandler)
	if err != nil {
		return
	}

	// Set up signal handling for graceful shutdown
	stop := make(chan os.Signal, 1)
	signal.Notify(stop, os.Interrupt, syscall.SIGTERM)

	// Wait for the termination signal
	<-stop

	log.Info().Msg("Shutting down server...")

	// Gracefully stop the GRPC server
	cancel()

	log.Info().Msg("Server gracefully stopped")
}
