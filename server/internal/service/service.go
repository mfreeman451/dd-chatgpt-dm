package service

import (
	"context"
	"github.com/ThreeDotsLabs/watermill"
	"github.com/ThreeDotsLabs/watermill/message"
	"github.com/google/uuid"
	gamev1 "github.com/mfreeman451/dd-chatgpt-dm/gen/game/v1"
	"github.com/mfreeman451/dd-chatgpt-dm/gen/game/v1/gamev1connect"
	playerv1 "github.com/mfreeman451/dd-chatgpt-dm/gen/player/v1"
	roomv1 "github.com/mfreeman451/dd-chatgpt-dm/gen/room/v1"
	mydb "github.com/mfreeman451/dd-chatgpt-dm/server/pkg/db"
	"github.com/mfreeman451/dd-chatgpt-dm/server/pkg/db/cache"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
	"google.golang.org/protobuf/proto"
	"time"
)

// Service is a gRPC service
type Service struct {
	gamev1connect.UnimplementedGameHandler
	mydb.DB
	publisher message.Publisher
}

// NewService creates a new gRPC service
func NewService(db mydb.DB, redisClient cache.Client, publisher message.Publisher) *Service {
	return &Service{gamev1connect.UnimplementedGameHandler{}, db, publisher}
}

func (s *Service) Login(ctx context.Context, req *gamev1.LoginRequest) (*gamev1.LoginResponse, error) {
	player, err := s.DB.GetPlayer(ctx, req.PlayerId)
	if err != nil {
		return nil, status.Errorf(codes.Internal, "failed to retrieve player: %v", err)
	}

	if player == nil {
		return nil, status.Errorf(codes.NotFound, "player not found")
	}

	// TODO: Verify the password. This is just a placeholder.
	if req.Password != "password" {
		return nil, status.Errorf(codes.Unauthenticated, "invalid password")
	}

	// TODO: Generate a token. This is just a placeholder.
	token := "token"

	return &gamev1.LoginResponse{Token: token}, nil
}

// PublishNewPlayerEvent sends a message to the room channel notifying other players about the new player
func (s *Service) PublishNewPlayerEvent(ctx context.Context, newPlayerID string, roomID *playerv1.Coordinates) error {
	// Create a message indicating that a new player has joined the room
	myMsg := "Player " + newPlayerID + " has joined the room."

	// Create a message indicating that a new player has joined the game to the new_user channel
	msg := message.NewMessage(uuid.New().String(), []byte(myMsg))

	// Publish the message to the new_user channel
	if err := s.publisher.Publish("user_created", msg); err != nil {
		return err
	}

	return nil
}

// GetPlayer retrieves a player by ID
func (s *Service) GetPlayer(ctx context.Context, req *playerv1.GetPlayerRequest) (*playerv1.GetPlayerResponse, error) {
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
	response := &playerv1.GetPlayerResponse{
		Player: player,
	}

	return response, nil
}

func (s *Service) CreatePlayer(ctx context.Context, req *playerv1.CreatePlayerRequest) (*playerv1.CreatePlayerResponse, error) {
	// Set the default room ID on the player object
	defaultRoom := &playerv1.Coordinates{
		X: 1,
		Y: 1,
		Z: 1,
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

	// Create the response with the player object
	response := &playerv1.CreatePlayerResponse{
		Player: player,
	}

	// Publish a message to the room channel notifying other players that a new player has joined
	err = s.PublishNewPlayerEvent(ctx, player.Id, player.DefaultRoom)
	if err != nil {
		return nil, status.Errorf(codes.Internal, "failed to publish new player event: %v", err)
	}

	return response, nil
}

// ListPlayers lists all players
func (s *Service) ListPlayers(ctx context.Context, _ *playerv1.ListPlayersRequest) (*playerv1.ListPlayersResponse, error) {
	// Get all players from the database
	players, err := s.DB.ListPlayers(ctx)
	if err != nil {
		return nil, status.Errorf(codes.Internal, "failed to retrieve players: %v", err)
	}

	// Create the response with the list of players
	response := &playerv1.ListPlayersResponse{
		Players: players,
	}

	return response, nil
}

// UpdatePlayer updates an existing player in the database based on the provided player object.
func (s *Service) UpdatePlayer(ctx context.Context, req *playerv1.UpdatePlayerRequest) (*playerv1.UpdatePlayerResponse, error) {
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
	response := &playerv1.UpdatePlayerResponse{
		Player: existingPlayer,
	}

	return response, nil
}

// GetRoomState retrieves the state of a room
func (s *Service) GetRoomState(ctx context.Context, req *roomv1.GetRoomStateRequest) (*roomv1.GetRoomStateResponse, error) {
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
	response := &roomv1.GetRoomStateResponse{
		RoomState: room,
	}

	return response, nil
}

func (s *Service) CreateGame(ctx context.Context, req *gamev1.CreateGameCommand) (*gamev1.GameCreatedEvent, error) {
	// Implement your game creation logic here.
	// For example, you might create a new game in your database and return its ID.

	// ... game creation logic ...

	// Create the response with the game ID
	response := &gamev1.GameCreatedEvent{
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

// ExecuteCommand executes a command in the game
func (s *Service) ExecuteCommand(ctx context.Context, req *gamev1.ExecuteCommandRequest) (*gamev1.ExecuteCommandResponse, error) {
	// Create a new CommandExecuted event
	event := &gamev1.CommandExecutedEvent{
		GameId:   req.GameId,
		PlayerId: req.PlayerId,
		Command:  req.Command,
	}

	// Marshal the event into a protobuf message
	data, err := proto.Marshal(event)
	if err != nil {
		return nil, err
	}

	// Create a new Watermill message with the protobuf data
	msg := message.NewMessage(watermill.NewUUID(), data)

	// Publish the message to the "command_executed" topic
	if err := s.publisher.Publish("command_executed", msg); err != nil {
		return nil, err
	}

	// Create and return the response
	response := &gamev1.ExecuteCommandResponse{
		GameId:  req.GameId,
		Command: req.Command,
	}

	return response, nil
}
