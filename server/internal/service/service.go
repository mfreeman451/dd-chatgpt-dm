package service

import (
	"context"
	"fmt"
	"github.com/ThreeDotsLabs/watermill/message"
	"github.com/google/uuid"
	"github.com/mfreeman451/dd-chatgpt-dm/server/internal/redis"
	"github.com/mfreeman451/dd-chatgpt-dm/server/pb/game"
	mydb "github.com/mfreeman451/dd-chatgpt-dm/server/pkg/db"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
	"google.golang.org/protobuf/proto"
	"time"
)

// Service is a gRPC service
type Service struct {
	game.UnimplementedGameServer
	mydb.DB
	redis     redis.Client
	publisher message.Publisher
}

// NewService creates a new gRPC service
func NewService(db mydb.DB, redisClient redis.Client, publisher message.Publisher) *Service {
	return &Service{game.UnimplementedGameServer{}, db, redisClient, publisher}
}

// PublishNewPlayerEvent sends a message to the room channel notifying other players about the new player
func (s *Service) PublishNewPlayerEvent(ctx context.Context, roomID, newPlayerID string) error {
	// Create a message indicating that a new player has joined the room
	myMsg := "Player " + newPlayerID + " has joined the room."

	// Publish the message to the room channel
	err := s.redis.Publish(ctx, roomID, myMsg)
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
	// Set the default room ID on the player object
	defaultRoom := &game.Coordinates{
		X: 0,
		Y: 0,
		Z: 0,
	}
	req.Player.DefaultRoom = defaultRoom

	// set the lastLogin to now
	req.Player.LastLogin = time.Now().Format(time.RFC3339Nano)

	// create a new ID based on uuidv4
	req.Player.Id = uuid.New().String()

	// Create the player in the database
	id, err := s.DB.CreatePlayer(ctx, req)
	if err != nil {
		return nil, status.Errorf(codes.Internal, "failed to create player: %v", err)
	}

	// Set the ID
	player := req.Player
	player.Id = id

	fmt.Println("player id: ", id)

	// Create the response with the player object
	response := &game.CreatePlayerResponse{
		Player: player,
	}

	fmt.Println("DefaultRoom: ", player.DefaultRoom, "PlayerID: ", player.Id, "Req", req.Player.DefaultRoom)

	// Publish a message to the room channel notifying other players that a new player has joined
	err = s.PublishNewPlayerEvent(ctx, player.DefaultRoom.String(), player.Id)
	if err != nil {
		return nil, status.Errorf(codes.Internal, "failed to publish new player event: %v", err)
	}

	return response, nil
}

// ListPlayers lists all players
func (s *Service) ListPlayers(ctx context.Context, _ *game.ListPlayersRequest) (*game.ListPlayersResponse, error) {
	// Get all players from the database
	players, err := s.DB.ListPlayers(ctx)
	if err != nil {
		return nil, status.Errorf(codes.Internal, "failed to retrieve players: %v", err)
	}

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

func (s *Service) CreateGame(ctx context.Context, req *game.CreateGameCommand) (*game.GameCreatedEvent, error) {
	// Implement your game creation logic here.
	// For example, you might create a new game in your database and return its ID.

	// ... game creation logic ...

	// Create the response with the game ID
	response := &game.GameCreatedEvent{
		GameId: "123",
	}

	// Marshal the response into a protobuf message
	data, err := proto.Marshal(response)
	if err != nil {
		return nil, err
	}

	// Create a new Watermill message with the protobuf data
	msg := message.NewMessage("1", data)

	// Publish the message to the "game_created" topic
	if err := s.publisher.Publish("game_created", msg); err != nil {
		return nil, err
	}

	return response, nil
}
