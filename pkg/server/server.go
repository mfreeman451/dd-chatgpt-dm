package server

import (
	"context"
	"net"

	"github.com/mfreeman451/dd-chatgpt-dm/pb"

	grpc "github.com/mfreeman451/dd-chatgpt-dm/adapters/grpc"

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

	gsrv := grpc.NewServer()

	// Register service with generated code
	pb.RegisterGameServer(gsrv, s)

	return gsrv.Serve(lis)
}
