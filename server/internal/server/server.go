package server

import (
	"google.golang.org/grpc"
	"net"

	pb "github.com/mfreeman451/dd-chatgpt-dm/server/pb"
)

type GRPCServer struct {
	// Embedded gRPC server
	grpc *grpc.Server
}

// Constructor function
func NewGRPCServer(service pb.GameServiceServer) *GRPCServer {

	// Initialize gRPC server
	grpcServer := grpc.NewServer()

	// Register service implementation
	pb.RegisterGameServerServer(grpcServer, service)

	return &GRPCServer{
		grpc: grpcServer,
	}
}

// Start gRPC server
func (s *GRPCServer) Start() error {
	lis, err := net.Listen("tcp", ":50051")
	if err != nil {
		return err
	}

	return s.grpc.Serve(lis)
}
