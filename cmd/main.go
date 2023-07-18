package main

import (
	"context"
	"log"
	"net"

	"github.com/mfreeman451/dd-chatgpt-dm/proto"
	"google.golang.org/grpc"
)

type GameServer struct{}

func (s *GameServer) CreatePlayer(ctx context.Context, req *proto.CreatePlayerRequest) (*proto.CreatePlayerResponse, error) {
	// Logic to create player

	return &proto.CreatePlayerResponse{
		Player: &proto.Player{
			// Populate player details
		},
	}, nil
}

func (s *GameServer) MovePlayer(ctx context.Context, req *proto.MovePlayerRequest) (*proto.MovePlayerResponse, error) {
	// Logic to move player

	return &proto.MovePlayerResponse{}, nil
}

func main() {
	lis, err := net.Listen("tcp", ":50051")

	if err != nil {
		log.Fatalf("Failed to listen: %v", err)
	}

	s := grpc.NewServer()

	proto.RegisterGameServer(s, &GameServer{})

	if err := s.Serve(lis); err != nil {
		log.Fatalf("Failed to serve: %v", err)
	}
}
