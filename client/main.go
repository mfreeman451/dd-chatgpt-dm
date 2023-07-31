package main

import (
	"context"
	"fmt"
	"github.com/joho/godotenv"
	"github.com/mfreeman451/dd-chatgpt-dm/client/pb/game"
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials/insecure"
	"log"
	"os"
)

func main() {
	// load .env
	if err := godotenv.Load(); err != nil {
		log.Fatalf("failed to load .env: %v", err)
	}
	grpcServer := fmt.Sprintf("%s:%s", "localhost", os.Getenv("GRPC_PORT"))
	conn, err := grpc.Dial(grpcServer,
		grpc.WithTransportCredentials(insecure.NewCredentials()))
	if err != nil {
		log.Fatalf("failed to dial: %v", err)
	}
	defer func(conn *grpc.ClientConn) {
		err := conn.Close()
		if err != nil {
			log.Fatalf("failed to close connection: %v", err)
		}
	}(conn)

	client := game.NewGameClient(conn)

	// Create player
	req := &game.CreatePlayerRequest{
		Player: &game.Player{
			Name: "Test Player",
		},
	}
	resp, err := client.CreatePlayer(context.Background(), req)

	if err != nil {
		log.Fatalf("failed to create player: %v", err)
	}

	log.Printf("Created player: %v", resp.Player)

	// List Players
	req2 := &game.ListPlayersRequest{}
	resp2, err := client.ListPlayers(context.Background(), req2)
	if err != nil {
		log.Fatalf("failed to list players: %v", err)
	}

	for _, player := range resp2.Players {
		log.Printf("Player: %v\n", player)
	}
}
