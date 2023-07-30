package service

import (
	"context"
	"fmt"
	"github.com/mfreeman451/dd-chatgpt-dm/server/internal/model"
	redis "github.com/mfreeman451/dd-chatgpt-dm/server/internal/redis"
	pb "github.com/mfreeman451/dd-chatgpt-dm/server/pb/game"
	mydb "github.com/mfreeman451/dd-chatgpt-dm/server/pkg/db"
	"github.com/rs/zerolog/log"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
	"google.golang.org/protobuf/proto"
	"reflect"
	"time"
)

// Service is a gRPC service
type Service struct {
	pb.UnimplementedGameServer
	mydb.DB
	redis redis.Client
}

// NewService creates a new gRPC service
func NewService(db mydb.DB, redisClient redis.Client) *Service {
	return &Service{pb.UnimplementedGameServer{}, db, redisClient}
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
func (s *Service) GetPlayer(ctx context.Context, req *pb.GetPlayerRequest) (*pb.GetPlayerResponse, error) {
	// Fetch player from the database based on the given ID
	player, err := s.DB.GetPlayer(ctx, req.PlayerId)
	if err != nil {
		return nil, status.Errorf(codes.Internal, "failed to retrieve player: %v", err)
	}

	// Return NotFound error if the player with the provided ID does not exist
	if player == nil {
		return nil, status.Errorf(codes.NotFound, "player not found")
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
		Name:  req.Player.Name,
		Race:  req.Player.Race,
		Class: req.Player.Class,
		Level: req.Player.Level,
		DefaultRoom: &pb.Coordinates{
			X: 0,
			Y: 0,
			Z: 0,
		},
		LastLogin: time.Now(),
	}

	// Create the player in the database
	id, err := s.DB.CreatePlayer(ctx, player)
	if err != nil {
		return nil, status.Errorf(codes.Internal, "failed to create player: %v", err)
	}

	// Set the ID and default room ID on the player object
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

// Helper function to convert a slice of strings to a slice of pointers to a protobuf message
func convertStringsToPBMessages(strSlice []string, pbMsg interface{}) (resultSlice interface{}) {
	pbType := reflect.TypeOf(pbMsg)
	pbSlice := reflect.MakeSlice(reflect.SliceOf(pbType), len(strSlice), len(strSlice))

	for i, str := range strSlice {
		myPb := reflect.New(pbType).Interface()
		pbElem := reflect.ValueOf(myPb).Elem()
		pbElem.FieldByName("Name").SetString(str)
		pbSlice.Index(i).Set(pbElem)
	}

	return pbSlice.Interface()
}

// convertMapToPBMessages is a helper function to convert a map of strings to int32 to a slice of pointers to a protobuf message
func convertMapToPBMessages(m map[string]int32, msg proto.Message) interface{} {
	switch msg.(type) {
	case *pb.AbilityScoreBonus:
		var bonuses []*pb.AbilityScoreBonus
		for key, value := range m {
			bonuses = append(bonuses, &pb.AbilityScoreBonus{
				Name:  key,
				Value: value,
			})
		}
		return bonuses
	default:
		return nil
	}
}

func convertPlayerToProto(player *model.Player) *pb.Player {

	// ray.Ray(player)
	// Convert slices of strings to slices of pointers to protobuf messages
	var skills []*pb.Skill
	if player.Skills == nil {
		// player.Skills = []string{}
		skills = []*pb.Skill{}
	} else {
		skills = convertStringsToPBMessages(player.Skills, &pb.Skill{}).([]*pb.Skill)
	}
	features := convertStringsToPBMessages(player.Features, &pb.Feature{}).([]*pb.Feature)
	savingThrows := convertStringsToPBMessages(player.SavingThrows, &pb.SavingThrow{}).([]*pb.SavingThrow)
	languages := convertStringsToPBMessages(player.Languages, &pb.Language{}).([]*pb.Language)
	equipment := convertStringsToPBMessages(player.Equipment, &pb.Equipment{}).([]*pb.Equipment)
	spells := convertStringsToPBMessages(player.Spells, &pb.Spell{}).([]*pb.Spell)
	abilityScoreBonuses := convertMapToPBMessages(player.AbilityScoreBonuses, &pb.AbilityScoreBonus{}).([]*pb.AbilityScoreBonus)
	specialAbilities := convertStringsToPBMessages(player.SpecialAbilities, &pb.SpecialAbility{}).([]*pb.SpecialAbility)
	rtLanguages := convertStringsToPBMessages(player.RacialTraits.Languages, &pb.Language{}).([]*pb.Language)
	rtSpecialAbilities := convertStringsToPBMessages(player.RacialTraits.SpecialAbilities, &pb.SpecialAbility{}).([]*pb.SpecialAbility)

	pbPlayer := &pb.Player{
		Id:                 player.ID,
		Discord:            player.Discord,
		Name:               player.Name,
		Race:               player.Race,
		Class:              player.Class,
		Level:              player.Level,
		Alignment:          player.Alignment,
		Background:         player.Background,
		Strength:           player.Strength,
		Dexterity:          player.Dexterity,
		Constitution:       player.Constitution,
		Intelligence:       player.Intelligence,
		Wisdom:             player.Wisdom,
		Charisma:           player.Charisma,
		HitPoints:          player.HitPoints,
		TemporaryHitPoints: player.TemporaryHitPoints,
		MaxHitPoints:       player.MaxHitPoints,
		ArmorClass:         player.ArmorClass,
		ProficiencyBonus:   player.ProficiencyBonus,
		Skills:             skills,
		SavingThrows:       savingThrows,
		Languages:          languages,
		Equipment:          equipment,
		Features:           features,
		Spells:             spells,
		SpellSlots:         player.SpellSlots,
		CurrentSpellSlots:  player.CurrentSpellSlots,
		ExperiencePoints:   player.ExperiencePoints,
		Initiative:         player.Initiative,
		Speed:              player.Speed,
		HitDice:            player.HitDice,
		DeathSaves: &pb.DeathSaves{
			Successes: int32(player.DeathSaves.Successes),
			Failures:  int32(player.DeathSaves.Failures),
		},
		AbilityScoreBonuses: abilityScoreBonuses,
		SpecialAbilities:    specialAbilities,
		RacialTraits: &pb.RacialTraits{
			Name:                player.RacialTraits.Name,
			Description:         player.RacialTraits.Description,
			Darkvision:          int32(player.RacialTraits.Darkvision),
			Size:                player.RacialTraits.Size,
			Speed:               int32(player.RacialTraits.Speed),
			Languages:           rtLanguages,
			AbilityScoreBonuses: int32(player.RacialTraits.AbilityScoreBonuses),
			SpecialAbilities:    rtSpecialAbilities,
		},
	}

	// Initialize slices to empty if nil
	if pbPlayer.Skills == nil {
		pbPlayer.Skills = []*pb.Skill{}
	}
	if pbPlayer.Features == nil {
		pbPlayer.Features = []*pb.Feature{}
	}
	if pbPlayer.SavingThrows == nil {
		pbPlayer.SavingThrows = []*pb.SavingThrow{}
	}
	if pbPlayer.Languages == nil {
		pbPlayer.Languages = []*pb.Language{}
	}
	if pbPlayer.Equipment == nil {
		pbPlayer.Equipment = []*pb.Equipment{}
	}
	if pbPlayer.Spells == nil {
		pbPlayer.Spells = []*pb.Spell{}
	}
	if pbPlayer.AbilityScoreBonuses == nil {
		pbPlayer.AbilityScoreBonuses = []*pb.AbilityScoreBonus{}
	}
	if pbPlayer.SpecialAbilities == nil {
		pbPlayer.SpecialAbilities = []*pb.SpecialAbility{}
	}
	if pbPlayer.RacialTraits.Languages == nil {
		pbPlayer.RacialTraits.Languages = []*pb.Language{}
	}
	if pbPlayer.RacialTraits.SpecialAbilities == nil {
		pbPlayer.RacialTraits.SpecialAbilities = []*pb.SpecialAbility{}
	}
	pbPlayer.DeathSaves = &pb.DeathSaves{}
	pbPlayer.RacialTraits = &pb.RacialTraits{}

	log.Printf("Converted Player:\n%+v\n", pbPlayer)

	return pbPlayer
}

func (s *Service) MovePlayer(ctx context.Context, req *pb.MovePlayerRequest) (*pb.MovePlayerResponse, error) {
	// Fetch the player from the database based on the provided player ID
	playerID := req.PlayerId
	existingPlayer, err := s.DB.GetPlayer(ctx, playerID)
	if err != nil {
		return nil, status.Errorf(codes.Internal, "failed to retrieve player: %v", err)
	}

	// Return NotFound error if the player with the provided ID does not exist
	if existingPlayer == nil {
		return nil, status.Errorf(codes.NotFound, "player not found")
	}

	// Update the player's LastLogout time to the current time
	existingPlayer.LastLogout = time.Now()

	// Update the player's location
	existingPlayer.Coordinates = req.NewLocation

	// Update the player in the database
	err = s.DB.UpdatePlayer(ctx, existingPlayer)
	if err != nil {
		return nil, status.Errorf(codes.Internal, "failed to update player: %v", err)
	}

	// Convert the updated player to the protobuf message
	pbPlayer := convertPlayerToProto(existingPlayer)

	// Create the response with the updated player object
	response := &pb.MovePlayerResponse{
		Player: pbPlayer,
	}

	return response, nil
}

func (s *Service) GetLocation(ctx context.Context, req *pb.GetLocationRequest) (*pb.GetLocationResponse, error) {
	// Fetch the location from the database based on the provided coordinates
	location, err := s.DB.GetLocationByCoordinates(ctx, req.Coordinates)
	if err != nil {
		return nil, status.Errorf(codes.Internal, "failed to retrieve location: %v", err)
	}

	// If the location is not found, return NotFound error
	if location == nil {
		return nil, status.Errorf(codes.NotFound, "location not found")
	}

	// Convert the location to the protobuf message
	pbLocation := convertLocationToProto(location)

	// Create the response with the location object
	response := &pb.GetLocationResponse{
		Location: pbLocation,
	}

	return response, nil
}

// convertLocationToProto is a helper function to convert a model.Location to pb.Location
func convertLocationToProto(location *model.Location) *pb.Location {
	pbLocation := &pb.Location{
		Id:          location.ID,
		Description: location.Description,
	}

	// Convert slices of model.Item and model.NPC to slices of pb.Item and pb.NPC
	for _, item := range location.Items {
		pbLocation.Items = append(pbLocation.Items, &pb.Item{
			Name: item.Name,
		})
	}

	for _, npc := range location.NPCs {
		pbLocation.Npcs = append(pbLocation.Npcs, &pb.NPC{
			Name: npc.Name,
		})
	}

	return pbLocation
}

// mustEmbedUnimplementedGameServer ensures that Service implements pb.GameServer
func (s *Service) mustEmbedUnimplementedGameServer() {}

// expirationDuration is the duration after which the room state will expire in Redis
const expirationDuration = 10 * time.Minute

func (s *Service) GetRoomState(ctx context.Context, roomID string) (*model.RoomState, error) {
	// Try to get the room state from Redis
	cachedState, err := s.redis.Get(ctx, roomID)
	if err != nil {
		return nil, err
	}

	// Extract the result from the Redis response
	serializedState, ok := cachedState.(string)
	if !ok {
		// Handle error: Failed to extract the result
		return nil, fmt.Errorf("failed to extract Redis result")
	}

	// Deserialize the room state
	roomState := model.DeserializeRoomState(serializedState)

	// If the room state is nil, it means it was not found in Redis, so fetch it from the database
	if roomState == nil {
		roomState, err = s.DB.GetRoomState(ctx, roomID)
		if err != nil {
			return nil, err
		}

		// Store the room state in Redis for future access
		// Serialize the room state before storing it in Redis
		serializedState := model.SerializeRoomState(roomState)
		err := s.redis.Set(ctx, roomID, serializedState, expirationDuration)
		if err != nil {
			// Handle error
			return nil, err
		}
	}

	return roomState, nil
}

// LogoutPlayer logs out a player
func (s *Service) LogoutPlayer(ctx context.Context, playerID string) error {
	// Fetch the player from the database based on the provided player ID
	existingPlayer, err := s.DB.GetPlayer(ctx, playerID)
	if err != nil {
		return status.Errorf(codes.Internal, "failed to retrieve player: %v", err)
	}

	// Return NotFound error if the player with the provided ID does not exist
	if existingPlayer == nil {
		return status.Errorf(codes.NotFound, "player not found")
	}

	// Update the player's LastLogout time to the current time
	existingPlayer.LastLogout = time.Now()

	// Update the player in the database
	err = s.DB.UpdatePlayer(ctx, existingPlayer)
	if err != nil {
		return status.Errorf(codes.Internal, "failed to update player: %v", err)
	}

	return nil
}
