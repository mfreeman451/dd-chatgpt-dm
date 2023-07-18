package server

import (
	"context"
	mygrpc "github.com/mfreeman451/dd-chatgpt-dm/adapters/mygrpc/pkg/proto"
	pb "github.com/mfreeman451/dd-chatgpt-dm/pb/pkg/proto"
	"google.golang.org/grpc"
	"net"
)

type GRPCServer struct{}

func (s *GRPCServer) CreatePlayer(ctx context.Context, req *pb.CreatePlayerRequest) (*pb.CreatePlayerResponse, error) {
	// Player creation logic
	return &pb.CreatePlayerResponse{}, nil
}

func (s *GRPCServer) MovePlayer(ctx context.Context, req *pb.MovePlayerRequest) (*pb.MovePlayerResponse, error) {
	// add stub implementation
	return &pb.MovePlayerResponse{}, nil
}

func (s *GRPCServer) GetLocation(ctx context.Context, req *pb.GetLocationRequest) (*pb.GetLocationResponse, error) {
	// add stub
	return &pb.GetLocationResponse{}, nil
}

// Embed unmimplemented methods
func (*GRPCServer) mustEmbedUnimplementedGameServer() {}

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
