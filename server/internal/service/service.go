package service

import (
	"context"
	"fmt"
	"github.com/mfreeman451/dd-chatgpt-dm/server/internal/model"
	pb "github.com/mfreeman451/dd-chatgpt-dm/server/pb/game"
	mydb "github.com/mfreeman451/dd-chatgpt-dm/server/pkg/db"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
	"reflect"
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

// GetPlayer retrieves a player by ID
func (s *Service) GetPlayer(ctx context.Context, req *pb.GetPlayerRequest) (*pb.GetPlayerResponse, error) {
	// Fetch player from the database based on the given ID
	player, err := s.DB.GetPlayer(ctx, req.PlayerId)
	if err != nil {
		return nil, status.Errorf(codes.Internal, "failed to retrieve player: %v", err)
	}

	// Convert the player to protobuf format
	protoPlayer := convertPlayerToProto(player)

	// Create the response with the player
	response := &pb.GetPlayerResponse{
		Player: protoPlayer,
	}

	return response, nil
}

func (s *Service) CreatePlayer(ctx context.Context, req *pb.CreatePlayerRequest) (*pb.CreatePlayerResponse, error) {
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

	// Convert the player object to the protobuf message
	pbPlayer := convertPlayerToProto(player)

	// Create the response with the player object
	response := &pb.CreatePlayerResponse{
		Player: pbPlayer,
	}

	return response, nil
}

// ListPlayers lists all players
func (s *Service) ListPlayers(ctx context.Context, req *pb.ListPlayersRequest) (*pb.ListPlayersResponse, error) {
	fmt.Println("ListPlayers")

	// Get all players from the database
	players, err := s.DB.ListPlayers(ctx)
	if err != nil {
		return nil, status.Errorf(codes.Internal, "failed to retrieve players: %v", err)
	}

	// Convert the players to protobuf format
	protoPlayers := make([]*pb.Player, len(players))
	for i, player := range players {
		protoPlayers[i] = convertPlayerToProto(player)
	}

	// Create the response with the list of players
	response := &pb.ListPlayersResponse{
		Players: protoPlayers,
	}

	return response, nil
}

// UpdatePlayer updates an existing player in the database based on the provided player object.
func (s *Service) UpdatePlayer(ctx context.Context, req *pb.UpdatePlayerRequest) (*pb.UpdatePlayerResponse, error) {
	// Get the player from the database based on the provided player ID
	playerID := req.PlayerId
	existingPlayer, err := s.DB.GetPlayer(ctx, playerID)
	if err != nil {
		return nil, status.Errorf(codes.Internal, "failed to retrieve player: %v", err)
	}

	// Return NotFound error if the player with the provided ID does not exist
	if existingPlayer == nil {
		return nil, status.Errorf(codes.NotFound, "player not found")
	}

	// Update the existing player object with the fields from the request
	if req.Player.Name != "" {
		existingPlayer.Name = req.Player.Name
	}
	// Add more fields here for updating other player properties...

	// Update the player in the database
	err = s.DB.UpdatePlayer(ctx, existingPlayer)
	if err != nil {
		return nil, status.Errorf(codes.Internal, "failed to update player: %v", err)
	}

	// Convert the updated player to the protobuf message
	pbPlayer := convertPlayerToProto(existingPlayer)

	// Create the response with the updated player object
	response := &pb.UpdatePlayerResponse{
		Player: pbPlayer,
	}

	return response, nil
}

// convertPlayerToProto converts a model.Player to pb.Player
func convertPlayerToProto(player *model.Player) *pb.Player {
	pbPlayer := &pb.Player{}
	playerValue := reflect.ValueOf(player).Elem()
	pbPlayerValue := reflect.ValueOf(pbPlayer).Elem()

	for i := 0; i < playerValue.NumField(); i++ {
		field := playerValue.Type().Field(i)
		fieldValue := playerValue.Field(i)

		pbFieldName := field.Tag.Get("protobuf")
		if pbFieldName == "" {
			pbFieldName = field.Name
		}

		pbField := pbPlayerValue.FieldByName(pbFieldName)
		if pbField.IsValid() {
			pbField.Set(fieldValue)
		}
	}

	return pbPlayer
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
