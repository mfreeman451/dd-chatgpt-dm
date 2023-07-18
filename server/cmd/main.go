package main

import (
	"github.com/mfreeman451/dd-chatgpt-dm/server/internal/server"
	"github.com/mfreeman451/dd-chatgpt-dm/server/internal/service"
	"github.com/mfreeman451/dd-chatgpt-dm/server/pkg/db"
	"log"
)

func main() {

	dbInstance, err := db.NewPostgresDB()
	if err != nil {
		log.Fatalf("failed to create database instance: %v", err)
	}

	// Create Service
	srv := service.NewService(dbInstance)

	// Create GRPC server
	grpc := server.NewGRPCServer(srv)

	// Start GRPC server
	if err := grpc.Start(); err != nil {
		log.Fatalf("failed to start gRPC server: %v", err)
	}

}
