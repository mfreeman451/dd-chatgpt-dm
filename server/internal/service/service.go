package service

import (
	"context"
	"fmt"
	"github.com/mfreeman451/dd-chatgpt-dm/server/internal/redis"
	"github.com/mfreeman451/dd-chatgpt-dm/server/pb/game"
	mydb "github.com/mfreeman451/dd-chatgpt-dm/server/pkg/db"
	"github.com/octoper/go-ray"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
	"time"
)

// Service is a gRPC service
type Service struct {
	game.UnimplementedGameServer
	mydb.DB
	redis redis.Client
}

// NewService creates a new gRPC service
func NewService(db mydb.DB, redisClient redis.Client) *Service {
	return &Service{game.UnimplementedGameServer{}, db, redisClient}
}

// PublishNewPlayerEvent sends a message to the room channel notifying other players about the new player
func (s *Service) PublishNewPlayerEvent(ctx context.Context, roomID, newPlayerID string) error {
	// Create a message indicating that a new player has joined the room
	message := "Player " + newPlayerID + " has joined the room."

	// Publish the message to the room channel
	err := s.redis.Publish(ctx, roomID, message)
	if err != nil {
		// Handle error
		return err
	}

	return nil
}

// GetPlayer retrieves a player by ID
func (s *Service) GetPlayer(ctx context.Context, req *game.GetPlayerRequest) (*game.GetPlayerResponse, error) {
	// Fetch player from the database based on the given ID
	player, err := s.DB.GetPlayer(ctx, req.PlayerId)
	if err != nil {
		return nil, status.Errorf(codes.Internal, "failed to retrieve player: %v", err)
	}

	// Return NotFound error if the player with the provided ID does not exist
	if player == nil {
		return nil, status.Errorf(codes.NotFound, "player not found")
	}

	// Create the response with the player
	response := &game.GetPlayerResponse{
		Player: player,
	}

	return response, nil
}

func (s *Service) CreatePlayer(ctx context.Context, req *game.CreatePlayerRequest) (*game.CreatePlayerResponse, error) {

	ray.Ray("service/CreatePlayer: ", req.Player)

	// Set the default room ID on the player object
	req.Player.DefaultRoom = &game.Coordinates{
		X: 0,
		Y: 0,
		Z: 0,
	}
	// set the lastLogin to now
	req.Player.LastLogin = time.Now().Format(time.RFC3339Nano)

	// Create the player in the database
	id, err := s.DB.CreatePlayer(ctx, req)
	if err != nil {
		return nil, status.Errorf(codes.Internal, "failed to create player: %v", err)
	}

	// Set the ID
	player := req.Player
	player.Id = id

	// Create the response with the player object
	response := &game.CreatePlayerResponse{
		Player: player,
	}

	return response, nil
}

// ListPlayers lists all players
func (s *Service) ListPlayers(ctx context.Context, _ *game.ListPlayersRequest) (*game.ListPlayersResponse, error) {
	fmt.Println("ListPlayers")

	// Get all players from the database
	players, err := s.DB.ListPlayers(ctx)
	if err != nil {
		return nil, status.Errorf(codes.Internal, "failed to retrieve players: %v", err)
	}

	ray.Ray(players)
	// Create the response with the list of players
	response := &game.ListPlayersResponse{
		Players: players,
	}

	return response, nil
}

// UpdatePlayer updates an existing player in the database based on the provided player object.
func (s *Service) UpdatePlayer(ctx context.Context, req *game.UpdatePlayerRequest) (*game.UpdatePlayerResponse, error) {
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
	err = s.DB.UpdatePlayer(ctx, req)
	if err != nil {
		return nil, status.Errorf(codes.Internal, "failed to update player: %v", err)
	}

	// Create the response with the updated player object
	response := &game.UpdatePlayerResponse{
		Player: existingPlayer,
	}

	return response, nil
}

// GetRoomState retrieves the state of a room
func (s *Service) GetRoomState(ctx context.Context, req *game.GetRoomStateRequest) (*game.GetRoomStateResponse, error) {
	// Fetch room from the database based on the given ID
	room, err := s.DB.GetRoomState(ctx, req.RoomId)
	if err != nil {
		return nil, status.Errorf(codes.Internal, "failed to retrieve room: %v", err)
	}

	// Return NotFound error if the room with the provided ID does not exist
	if room == nil {
		return nil, status.Errorf(codes.NotFound, "room not found")
	}

	// Create the response with the room
	response := &game.GetRoomStateResponse{
		RoomState: room,
	}

	return response, nil
}
