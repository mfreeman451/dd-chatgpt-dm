package main

import (
	"github.com/mfreeman451/dd-chatgpt-dm/server/internal/server"
	"github.com/mfreeman451/dd-chatgpt-dm/server/internal/service"
	"github.com/mfreeman451/dd-chatgpt-dm/server/pkg/db"
	"log"
)

func main() {

	database := &db.PostgresDB{}
	var dbInstance db.DB = database

	// Create Service
	srv := service.NewService(dbInstance)

	// Create GRPC server
	grpc := server.NewGRPCServer(srv)

	// Start GRPC server
	if err := grpc.Start(); err != nil {
		log.Fatalf("failed to start gRPC server: %v", err)
	}

}
