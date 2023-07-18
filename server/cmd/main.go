package main

import (
	"github.com/mfreeman451/dd-chatgpt-dm/server/internal/server"
	"log"
)

func main() {

	// Initialize dependencies
	db := newDB()
	service := newService(db)

	// Create gRPC server
	grpc := server.NewGRPCServer(service)

	// Start gRPC server
	if err := grpc.Start(); err != nil {
		log.Fatalf("failed to start gRPC server: %v", err)
	}
}

func newDB() DB {
	// Connect to database
	return &DB{}
}

func newService(db DB) Service {
	return &Service{
		db: db,
	}
}

/*
type server struct {
	game.UnimplementedGameServer
}

func (s *server) CreatePlayer(ctx context.Context, req *game.CreatePlayerRequest) (*game.CreatePlayerResponse, error) {

	fmt.Print("CreatePlayer called\n")

	// Create player logic...
	return &game.CreatePlayerResponse{
		Player: &game.Player{
			Id:       "",
			Name:     req.Name,
			Location: nil,
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


*/
