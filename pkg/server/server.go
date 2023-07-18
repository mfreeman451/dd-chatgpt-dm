package server

import (
	"context"
	mygrpc "github.com/mfreeman451/dd-chatgpt-dm/adapters/mygrpc"
	"google.golang.org/grpc"
	"net"
)

type GRPCServer struct{}

func (s *GRPCServer) CreatePlayer(ctx context.Context, req *mygrpc.CreatePlayerRequest) (*mygrpc.CreatePlayerResponse, error) {
	// Player creation logic
	return &mygrpc.CreatePlayerResponse{}, nil
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
	mygrpc.RegisterGameServer(gsrv, s)

	return gsrv.Serve(lis)
}
