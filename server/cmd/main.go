package main

import (
	"github.com/mfreeman451/dd-chatgpt-dm/server/internal/server"
	. "github.com/mfreeman451/dd-chatgpt-dm/server/pkg/db"
	"log"
)

func main() {

	// Initialize dependencies
	db := newDB()
	service := newService(db)

	// Create gRPC server
	grpc := server.NewGRPCServer(service)

	// Start gRPC server
	if err := grpc.Start(); err != nil {
		log.Fatalf("failed to start gRPC server: %v", err)
	}
}

func newDB() DB {
	// Connect to database
	return &DB{}
}

func newService(db DB) Service {
	return &Service{
		db: db,
	}
}
