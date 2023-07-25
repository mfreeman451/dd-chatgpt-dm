package main

import (
	"context"
	"os"
	"os/signal"
	"strconv"
	"syscall"

	"github.com/joho/godotenv"
	"github.com/mfreeman451/dd-chatgpt-dm/server/internal/logger"
	"github.com/mfreeman451/dd-chatgpt-dm/server/internal/server"
	"github.com/mfreeman451/dd-chatgpt-dm/server/internal/service"
	"github.com/mfreeman451/dd-chatgpt-dm/server/pkg/db"
)

func main() {
	var log = logger.New()

	// Read in .env
	err := godotenv.Load()
	if err != nil {
		log.Fatal().Err(err).Msg("failed to load .env file")
	}

	// Create DB instance, pass in .env variables
	dbConnStr := os.Getenv("DB_CONN_STR")
	dbType := os.Getenv("DB_TYPE")

	dbInstance, err := db.NewDB(dbConnStr, dbType)
	if err != nil {
		log.Fatal().Err(err).Msg("failed to create DB instance")
	}

	// Create Redis client
	redisClient, err := server.NewRedisClient(server.RedisConfig{
		Address:  os.Getenv("REDIS_ADDRESS"),
		Password: os.Getenv("REDIS_PASSWORD"),
		DB:       0,
	})

	// test Redis connection
	redRes, err := redisClient.Ping(context.Background()).Result()
	if err != nil {
		log.Fatal().Err(err).Msg("failed to connect to Redis")
	}
	log.Info().Msgf("Redis ping result: %s", redRes)

	// Create Service
	srv := service.NewService(dbInstance, redisClient)

	// Create GRPC server
	grpc := server.NewGRPCServer(srv)

	// Start GRPC server in a separate goroutine
	go func() {
		log.Info().Msg("Server starting up")

		grpcPort, err := strconv.Atoi(os.Getenv("GRPC_PORT"))
		if err != nil {
			log.Fatal().Err(err).Msg("failed to convert GRPC_PORT to int")
		}
		if err := grpc.Start(grpcPort); err != nil {
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
	grpc.Stop()

	log.Info().Msg("Server gracefully stopped")

}
