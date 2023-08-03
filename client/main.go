package main

import (
	"context"
	"flag"
	"fmt"
	"github.com/joho/godotenv"
	"github.com/mfreeman451/dd-chatgpt-dm/client/pb/watermill"
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
	executeCommandFlag := flag.String("execute-command", "", "Execute a command")
	helpFlag := flag.Bool("help", false, "Display help message")

	flag.Parse()

	// If the help flag is provided, print help message and exit
	if *helpFlag {
		fmt.Println("Usage: main [options]")
		fmt.Println("Options:")
		fmt.Println("  -create-user: Create a new user")
		fmt.Println("  -list-users: List all users")
		fmt.Println("  -create-game: Create a new game")
		fmt.Println("  -execute-command: Execute a command")
		fmt.Println("  -help: Display this help message")
		os.Exit(0)
	}

	// Check if any flags were provided
	if !*createUserFlag && !*createGameFlag && *executeCommandFlag == "" {
		fmt.Println("Usage: main [-create-user] [-create-game] [-execute-command command] [-help]")
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

	client := watermill.NewGameClient(conn)

	if *createUserFlag {
		// Create player
		req := &watermill.CreatePlayerRequest{
			Player: &watermill.Player{
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
		req2 := &watermill.ListPlayersRequest{}
		resp2, err := client.ListPlayers(context.Background(), req2)
		if err != nil {
			log.Fatalf("failed to list players: %v", err)
		}

		for _, player := range resp2.Players {
			log.Printf("Player: %v\n", player)
		}
	}

	if *createGameFlag {
		createGame, err := client.CreateGame(context.Background(), &watermill.CreateGameCommand{
			GameId:   "dnd",
			PlayerId: "test-player",
		})
		if err != nil {
			log.Fatalf("failed to create game: %v", err)
		}

		fmt.Println("Game created: ", createGame.GameId)
	}

	if *executeCommandFlag != "" {
		// Execute command
		req := &watermill.ExecuteCommandRequest{
			Command: *executeCommandFlag,
		}
		resp, err := client.ExecuteCommand(context.Background(), req)

		if err != nil {
			log.Fatalf("failed to execute command: %v", err)
		}

		log.Printf("Command executed: %v", resp)
	}
}
