package main

import (
	"context"
	"github.com/mfreeman451/dd-chatgpt-dm/client/pb/game"
	"github.com/mfreeman451/dd-chatgpt-dm/server/pkg/db"
	"google.golang.org/grpc"
	"log"
)

func main() {

	conn, err := grpc.Dial("localhost:50051", grpc.WithInsecure())
	if err != nil {
		log.Fatalf("failed to dial: %v", err)
	}
	defer conn.Close()

	db, err := db.NewPostgresDB()

	client := game.NewGameClient(conn)

	// Create player
	req := &game.CreatePlayerRequest{Name: "John"}
	resp, err := client.CreatePlayer(context.Background(), req)

	if err != nil {
		log.Fatalf("failed to create player: %v", err)
	}

	log.Printf("Created player: %v", resp.Player)
}
