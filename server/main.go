package main

import (
	"context"
	"github.com/mfreeman451/dd-chatgpt-dm/server/pb/game"
	"google.golang.org/grpc"
	"log"
	"net"
)

type server struct {
	game.UnimplementedGameServer
}

func (s *server) CreatePlayer(ctx context.Context, req *game.CreatePlayerRequest) (*game.CreatePlayerResponse, error) {

	// Create player logic...

	return &game.CreatePlayerResponse{
		Player: &game.Player{
			// Player details
		},
	}, nil
}

func main() {

	lis, err := net.Listen("tcp", ":50051")
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}

	grpcServer := grpc.NewServer()

	game.RegisterGameServer(grpcServer, &server{})

	if err := grpcServer.Serve(lis); err != nil {
		log.Fatalf("failed to serve: %v", err)
	}
}
