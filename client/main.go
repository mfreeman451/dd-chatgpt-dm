package main

import (
	"context"
	"github.com/mfreeman451/dd-chatgpt-dm/client/pb/game"
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials/insecure"
	"log"
)

func main() {

	// Load certificate
	/*
		cert, err := tls.LoadX509KeyPair("cert.pem", "key.pem")
		if err != nil {
			log.Fatal(err)
		}

		// Create TLS config
		config := &tls.Config{
			Certificates: []tls.Certificate{cert},
			ServerName:   "example.com", // For hostname verification
		}

		// Create client credentials
		creds := credentials.NewTLS(config)

		// Dial server
		conn, err := grpc.Dial("localhost:50051", grpc.WithTransportCredentials(creds))
	*/

	conn, err := grpc.Dial("localhost:8080",
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
	req := &game.CreatePlayerRequest{Name: "John"}
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
