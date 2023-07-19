package server

import (
	"fmt"
	"net"

	"google.golang.org/grpc"

	pb "github.com/mfreeman451/dd-chatgpt-dm/server/pb/game"
)

// GRPCServer is a gRPC server
type GRPCServer struct {
	// Embedded gRPC server
	grpc *grpc.Server
}

// NewGRPCServer creates a new gRPC server
func NewGRPCServer(service pb.GameServer) *GRPCServer {
	// Initialize gRPC server
	grpcServer := grpc.NewServer()

	// Register service implementation
	pb.RegisterGameServer(grpcServer, service)

	// Return the gRPC server
	return &GRPCServer{
		grpc: grpcServer,
	}
}

// Start starts the gRPC server
func (s *GRPCServer) Start(port int) error {
	lis, err := net.Listen("tcp", fmt.Sprintf(":%d", port))
	if err != nil {
		return err
	}

	return s.grpc.Serve(lis)
}

// Stop stops the gRPC server
func (s *GRPCServer) Stop() {
	s.grpc.GracefulStop()
}
