package service

import (
	"context"
	"fmt"
	"github.com/mfreeman451/dd-chatgpt-dm/server/internal/model"
	pb "github.com/mfreeman451/dd-chatgpt-dm/server/pb/game"
	mydb "github.com/mfreeman451/dd-chatgpt-dm/server/pkg/db"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

// Service is a gRPC service
type Service struct {
	pb.UnimplementedGameServer
	mydb.DB
}

// NewService creates a new gRPC service
func NewService(db mydb.DB) *Service {
	return &Service{pb.UnimplementedGameServer{}, db}
}

// CreatePlayer creates a new player
func (s *Service) CreatePlayer(ctx context.Context, req *pb.CreatePlayerRequest) (*pb.CreatePlayerResponse, error) {
	fmt.Println("CreatePlayer")

	// Create the player object
	player := &model.Player{
		Name: req.Name,
	}

	// Create the player in the database
	id, err := s.DB.CreatePlayer(ctx, player)
	if err != nil {
		return nil, status.Errorf(codes.Internal, "failed to create player: %v", err)
	}

	// Set the ID in the player object
	player.ID = id

	// Create the response with the player object
	response := &pb.CreatePlayerResponse{
		Player: convertPlayerToProto(player),
	}

	return response, nil
}

// convertPlayerToProto converts a model.Player to pb.Player
func convertPlayerToProto(player *model.Player) *pb.Player {
	return &pb.Player{
		Id:   player.ID,
		Name: player.Name,
		// Include other fields as needed
	}
}

// MovePlayer moves a player
func (s *Service) MovePlayer(ctx context.Context, req *pb.MovePlayerRequest) (*pb.MovePlayerResponse, error) {
	// TODO: implement
	return nil, status.Errorf(codes.Unimplemented, "not implemented yet")
}

// GetLocation gets a location
func (s *Service) GetLocation(ctx context.Context, req *pb.GetLocationRequest) (*pb.GetLocationResponse, error) {
	// TODO: implement
	return nil, status.Errorf(codes.Unimplemented, "not implemented yet")
}

// mustEmbedUnimplementedGameServer ensures that Service implements pb.GameServer
func (s *Service) mustEmbedUnimplementedGameServer() {}
