package main

import (
	"context"
	"fmt"
	grpcMiddleware "github.com/grpc-ecosystem/go-grpc-middleware"
	grpcPrometheus "github.com/grpc-ecosystem/go-grpc-prometheus" // Import the grpc_prometheus package
	pb "github.com/mfreeman451/dd-chatgpt-dm/server/pb/game"
	"github.com/prometheus/client_golang/prometheus"
	"github.com/prometheus/client_golang/prometheus/promhttp"
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

	"google.golang.org/grpc" // Import the grpc package
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
		Name: "myapp_requests_total",
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

	// Create Service
	srv := service.NewService(dbInstance, rdb)

	// Create GRPC server
	grpcServer := server.NewGRPCServer(srv)

	// Apply Prometheus middleware to the gRPC server
	grpcOptions := []grpc.ServerOption{
		grpc.UnaryInterceptor(grpcMiddleware.ChainUnaryServer(
			grpcPrometheus.UnaryServerInterceptor, // Prometheus logging middleware
		)),
	}

	// Set options for the gRPC server
	grpcServer.SetOptions(grpcOptions...)

	// Register service implementation
	pb.RegisterGameServer(grpcServer.GetGRPCServer(), srv)

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

	// Start GRPC server in a separate goroutine
	go func() {
		log.Info().Msgf("Starting GRPC server on port %s", os.Getenv("GRPC_PORT"))

		grpcPort, err := strconv.Atoi(os.Getenv("GRPC_PORT"))
		if err != nil {
			log.Fatal().Err(err).Msg("failed to convert GRPC_PORT to int")
		}
		if err := grpcServer.Start(grpcPort); err != nil {
			log.Fatal().Err(err).Msg("failed to start server")
		}
	}()

	// Set up signal handling for graceful shutdown
	stop := make(chan os.Signal, 1)
	signal.Notify(stop, os.Interrupt, syscall.SIGTERM)

	// Wait for the termination signal
	<-stop

	log.Info().Msg("Shutting down server...")

	// Gracefully stop the GRPC server
	grpcServer.Stop()

	log.Info().Msg("Server gracefully stopped")
}
