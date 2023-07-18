package main

import (
	"log"
	"net"

	"github.com/mfreeman451/dd-chatgpt-dm/api/grpc"
	"github.com/mfreeman451/dd-chatgpt-dm/pkg/dnd"
	"google.golang.org/grpc"
)

func main() {
	// Create a gRPC server
	s := grpc.NewServer()

	// Register the RoomServiceServer with the gRPC server
	dnd.RegisterRoomServiceServer(s, &grpc.RoomServiceServer{})

	// Listen on a TCP port
	lis, err := net.Listen("tcp", ":50051")
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}

	// Start the gRPC server
	if err := s.Serve(lis); err != nil {
		log.Fatalf("failed to serve: %v", err)
	}
}
