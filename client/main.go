package main

import (
	"context"
	"flag"
	"fmt"
	"github.com/joho/godotenv"
	"github.com/mfreeman451/dd-chatgpt-dm/client/pb/game"
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials/insecure"
	"log"
	"os"
)

func main() {
	// Define flags
	createUserFlag := flag.Bool("create-user", false, "Create a new user")
	listUsersFlag := flag.Bool("list-users", false, "List all users")
	createGameFlag := flag.Bool("create-game", false, "Create a new game")
	flag.Parse()

	// Check if any flags were provided
	if !*createUserFlag && !*createGameFlag {
		fmt.Println("Usage: main [-create-user] [-create-game]")
		fmt.Println("  -create-user: Create a new user")
		fmt.Println("  -create-game: Create a new game")
		os.Exit(0)
	}

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

	if *createUserFlag {
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
	}

	if *listUsersFlag {
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

	if *createGameFlag {
		createGame, err := client.CreateGame(context.Background(), &game.CreateGameCommand{
			GameId:   "dnd",
			PlayerId: "test-player",
		})
		if err != nil {
			log.Fatalf("failed to create game: %v", err)
		}

		fmt.Println("Game created: ", createGame.GameId)
	}
}
