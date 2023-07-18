package grpc

import (
	"context"
	"net"

	"github.com/mfreeman451/dd-chatgpt-dm/internal/adapters/grpc"
	"github.com/mfreeman451/dd-chatgpt-dm/internal/pb"
	"google.golang.org/grpc"
)

type GRPCServer struct{}

func (s *GRPCServer) CreatePlayer(ctx context.Context, req *pb.CreatePlayerRequest) (*pb.CreatePlayerResponse, error) {
	// Player creation logic
	return &pb.CreatePlayerResponse{}, nil
}

// Other RPC methods

func NewServer() *GRPCServer {
	return &GRPCServer{}
}

func (s *GRPCServer) Start() error {
	lis, err := net.Listen("tcp", ":50051")
	if err != nil {
		return err
	}

	grpcServer := grpc.NewServer()

	// Register with generated gRPC code
	pb.RegisterGameServer(grpcServer, s)

	return grpcServer.Serve(lis)
}
