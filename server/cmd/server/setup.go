package server

import (
	"context"
	"github.com/ThreeDotsLabs/watermill/message"
	"github.com/mfreeman451/dd-chatgpt-dm/server/cmd/metrics"
	"github.com/mfreeman451/dd-chatgpt-dm/server/pb/game"
	"github.com/mfreeman451/dd-chatgpt-dm/server/pkg/watermill"
	"os"
	"strconv"

	grpcMiddleware "github.com/grpc-ecosystem/go-grpc-middleware"
	grpcPrometheus "github.com/grpc-ecosystem/go-grpc-prometheus"
	"github.com/improbable-eng/grpc-web/go/grpcweb"
	"github.com/mfreeman451/dd-chatgpt-dm/server/internal/logger"
	"github.com/mfreeman451/dd-chatgpt-dm/server/internal/server"
	"github.com/mfreeman451/dd-chatgpt-dm/server/internal/service"
	"github.com/mfreeman451/dd-chatgpt-dm/server/pkg/db"
	"github.com/mfreeman451/dd-chatgpt-dm/server/pkg/db/cache"
	"google.golang.org/grpc"
)

func SetupServer(log logger.Logger) (*server.GRPCServer, *server.GRPCWebService, message.Subscriber, *metrics.Service, error) {
	// Create DB instance, pass in .env variables
	dbConnStr := os.Getenv("DB_CONN_STR")
	dbType := os.Getenv("DB_TYPE")

	dbInstance, err := db.NewDB(dbConnStr, dbType)
	if err != nil {
		log.Fatal().Err(err).Msg("failed to create DB instance")
		return nil, nil, nil, nil, err
	}

	// Create Redis client using the custom package
	rdb := cache.NewClient(&cache.Options{
		Address:  os.Getenv("REDIS_ADDRESS"),
		Password: os.Getenv("REDIS_PASSWORD"),
		DB:       0,
	})

	// test Redis connection
	redRes, err := rdb.Ping(context.Background())
	if err != nil {
		log.Fatal().Err(err).Msg("failed to connect to Redis")
		return nil, nil, nil, nil, err
	}
	log.Info().Msgf("Redis ping result: %s", redRes)

	// Create the CQRS components
	commandProcessor, eventProcessor, publisher, subscriber, err := watermill.NewCQRS(log)
	if err != nil {
		log.Fatal().Err(err).Msg("failed to create CQRS components")
		return nil, nil, nil, nil, err
	}

	// Create the command handler
	createGameCommandHandler := &watermill.CreateGameCommandHandler{}

	// Add the command handler to the command processor
	err = commandProcessor.AddHandlers(createGameCommandHandler)
	if err != nil {
		log.Fatal().Err(err).Msg("failed to add command handler")
	}

	// Create the event handler
	gameCreatedEventHandler := &watermill.GameCreatedEventHandler{}

	// Add the event handler to the event processor
	err = eventProcessor.AddHandlers(gameCreatedEventHandler)
	if err != nil {
		log.Fatal().Err(err).Msg("failed to add event handler")
	}

	// Create Service
	srv := service.NewService(dbInstance, rdb, publisher)

	// Create GRPC server
	grpcPort, err := strconv.Atoi(os.Getenv("GRPC_PORT"))
	if err != nil {
		log.Fatal().Err(err).Msg("failed to convert GRPC_PORT to int")
		return nil, nil, nil, nil, err
	}
	grpcServer := server.NewGRPCServer(srv, grpcPort, log)

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

	// Register service implementation
	game.RegisterGameServer(grpcServer.GetGRPCServer(), srv)

	metricsService := metrics.NewMetricsService(log)

	return grpcServer, grpcWebService, subscriber, metricsService, nil
}
