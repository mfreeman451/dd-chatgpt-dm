package main

import (
	"fmt"
	"github.com/joho/godotenv"
	"github.com/mfreeman451/dd-chatgpt-dm/server/internal/server"
	"github.com/mfreeman451/dd-chatgpt-dm/server/internal/service"
	"github.com/mfreeman451/dd-chatgpt-dm/server/pkg/db"
	"log"
	"os"
)

func main() {
	// read in .env
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

	dbInstance, err := db.NewPostgresDB(pgConnStr)
	if err != nil {
		log.Fatalf("failed to create database instance: %v", err)
	}

	// Create Service
	srv := service.NewService(dbInstance)

	// Create GRPC server
	grpc := server.NewGRPCServer(srv)

	fmt.Println("Starting server")

	// Start GRPC server
	if err := grpc.Start(); err != nil {
		log.Fatalf("failed to start gRPC server: %v", err)
	}
}
