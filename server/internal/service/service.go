package service

import (
	"context"
	"fmt"
	"github.com/mfreeman451/dd-chatgpt-dm/server/internal/model"
	pb "github.com/mfreeman451/dd-chatgpt-dm/server/pb/game"
	mydb "github.com/mfreeman451/dd-chatgpt-dm/server/pkg/db"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
	"google.golang.org/protobuf/proto"
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

// CreatePlayer creates a new player
func (s *Service) CreatePlayer(ctx context.Context, req *pb.CreatePlayerRequest) (*pb.CreatePlayerResponse, error) {
	fmt.Println("CreatePlayer")

	// Create the player object
	player := &model.Player{
		Name: req.Name,
	}

	fmt.Println("Inserting player")
	// Create the player in the database
	id, err := s.DB.CreatePlayer(ctx, player)
	if err != nil {
		return nil, status.Errorf(codes.Internal, "failed to create player: %v", err)
	}

	// Set the ID in the player object
	player.ID = id

	fmt.Println("Creating response")
	// Create the response with the player object
	response := &pb.CreatePlayerResponse{
		Player: convertPlayerToProto(player),
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

// convertPlayerToProto converts a model.Player to pb.Player
func convertPlayerToProto(player *model.Player) *pb.Player {

	// Convert slices of strings to slices of pointers to protobuf messages
	skills := convertStringsToPBMessages(player.Skills, &pb.Skill{}).([]*pb.Skill)
	features := convertStringsToPBMessages(player.Features, &pb.Feature{}).([]*pb.Feature)
	savingThrows := convertStringsToPBMessages(player.SavingThrows, &pb.SavingThrow{}).([]*pb.SavingThrow)
	languages := convertStringsToPBMessages(player.Languages, &pb.Language{}).([]*pb.Language)
	equipment := convertStringsToPBMessages(player.Equipment, &pb.Equipment{}).([]*pb.Equipment)
	spells := convertStringsToPBMessages(player.Spells, &pb.Spell{}).([]*pb.Spell)
	abilityScoreBonuses := convertMapToPBMessages(player.AbilityScoreBonuses, &pb.AbilityScoreBonus{}).([]*pb.AbilityScoreBonus)
	specialAbilities := convertStringsToPBMessages(player.SpecialAbilities, &pb.SpecialAbility{}).([]*pb.SpecialAbility)
	rtLanguages := convertStringsToPBMessages(player.RacialTraits.Languages, &pb.Language{}).([]*pb.Language)
	rtSpecialAbilities := convertStringsToPBMessages(player.RacialTraits.SpecialAbilities, &pb.SpecialAbility{}).([]*pb.SpecialAbility)

	return &pb.Player{
		Id:                 player.ID,
		Discord:            player.Discord,
		Name:               player.Name,
		Race:               player.Race,
		Class:              player.Class,
		Level:              int32(player.Level),
		Alignment:          player.Alignment,
		Background:         player.Background,
		Strength:           int32(player.Strength),
		Dexterity:          int32(player.Dexterity),
		Constitution:       int32(player.Constitution),
		Intelligence:       int32(player.Intelligence),
		Wisdom:             int32(player.Wisdom),
		Charisma:           int32(player.Charisma),
		HitPoints:          int32(player.HitPoints),
		TemporaryHitPoints: int32(player.TemporaryHitPoints),
		MaxHitPoints:       int32(player.MaxHitPoints),
		ArmorClass:         int32(player.ArmorClass),
		ProficiencyBonus:   int32(player.ProficiencyBonus),
		Skills:             skills,
		SavingThrows:       savingThrows,
		Languages:          languages,
		Equipment:          equipment,
		Features:           features,
		Spells:             spells,
		SpellSlots:         int32(player.SpellSlots),
		CurrentSpellSlots:  int32(player.CurrentSpellSlots),
		ExperiencePoints:   int32(player.ExperiencePoints),
		Initiative:         int32(player.Initiative),
		Speed:              int32(player.Speed),
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
