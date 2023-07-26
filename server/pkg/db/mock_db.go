package db

import (
	"context"
	"github.com/mfreeman451/dd-chatgpt-dm/server/internal/model"
	"github.com/mfreeman451/dd-chatgpt-dm/server/pb/game"
)

// MockDB is a mock database implementation for testing
type MockDB struct {
	players    map[string]*model.Player
	roomStates map[string]*model.RoomState
	err        error
}

// NewMockDB creates a new instance of the MockDB
func NewMockDB() *MockDB {
	return &MockDB{
		players:    make(map[string]*model.Player),
		roomStates: make(map[string]*model.RoomState),
	}
}

func (m *MockDB) GetPlayer(ctx context.Context, id string) (*model.Player, error) {
	player, ok := m.players[id]
	if !ok {
		return nil, nil
	}
	return player, m.err
}

func (m *MockDB) CreatePlayer(ctx context.Context, player *model.Player) (string, error) {
	id := "123" // For testing purposes, generate a mock ID
	player.ID = id
	m.players[id] = player
	return id, m.err
}

func (m *MockDB) UpdatePlayer(ctx context.Context, player *model.Player) error {
	m.players[player.ID] = player
	return m.err
}

func (m *MockDB) ListPlayers(ctx context.Context) ([]*model.Player, error) {
	players := make([]*model.Player, 0, len(m.players))
	for _, player := range m.players {
		players = append(players, player)
	}
	return players, m.err
}

func (m *MockDB) GetRoomState(ctx context.Context, roomID string) (*model.RoomState, error) {
	roomState, ok := m.roomStates[roomID]
	if !ok {
		return nil, nil
	}
	return roomState, m.err
}

func (m *MockDB) GetLocationByCoordinates(ctx context.Context, coordinates *game.Coordinates) (*model.Location, error) {
	// Implement this method for testing if needed.
	return nil, m.err
}
