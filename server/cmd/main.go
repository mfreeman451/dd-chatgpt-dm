package main

import (
	"fmt"
	"log"
	"os"
	"os/signal"
	"syscall"

	"github.com/joho/godotenv"
	"github.com/mfreeman451/dd-chatgpt-dm/server/internal/server"
	"github.com/mfreeman451/dd-chatgpt-dm/server/internal/service"
	"github.com/mfreeman451/dd-chatgpt-dm/server/pkg/db"
)

func main() {
	// Read in .env
	err := godotenv.Load()
	if err != nil {
		log.Fatalf("failed to load .env file: %v", err)
	}

	// Create DB instance, pass in .env variables
	pgConnStr := fmt.Sprintf("postgres://%s:%s@%s:%s/%s?sslmode=disable",
		os.Getenv("POSTGRES_USER"),
		os.Getenv("POSTGRES_PASSWORD"),
		os.Getenv("POSTGRES_HOST"),
		os.Getenv("POSTGRES_PORT"),
		os.Getenv("POSTGRES_DB"),
	)

	dbInstance, err := db.NewGormDB(pgConnStr)
	if err != nil {
		log.Fatalf("failed to create database instance: %v", err)
	}

	// Run database migrations
	err = dbInstance.Migrate()
	if err != nil {
		log.Fatalf("failed to run database migrations: %v", err)
	}

	// Create Service
	srv := service.NewService(dbInstance)

	// Create GRPC server
	grpc := server.NewGRPCServer(srv)

	// Start GRPC server in a separate goroutine
	go func() {
		fmt.Println("Starting server")

		if err := grpc.Start(50051); err != nil {
			log.Fatalf("failed to start gRPC server: %v", err)
		}
	}()

	// Set up signal handling for graceful shutdown
	stop := make(chan os.Signal, 1)
	signal.Notify(stop, os.Interrupt, syscall.SIGTERM)

	// Wait for the termination signal
	<-stop

	fmt.Println("Shutting down server...")

	// Gracefully stop the GRPC server
	grpc.Stop()

	fmt.Println("Server gracefully stopped")

}
