package db

import (
	"context"
	"github.com/mfreeman451/dd-chatgpt-dm/server/pb/game"
)

// MockDB is a mock database implementation for testing
type MockDB struct {
	players    map[string]*game.Player
	roomStates map[string]*game.RoomState
	err        error
}

// NewMockDB creates a new instance of the MockDB
func NewMockDB() *MockDB {
	return &MockDB{
		players:    make(map[string]*game.Player),
		roomStates: make(map[string]*game.RoomState),
	}
}

func (m *MockDB) GetPlayer(ctx context.Context, id string) (*game.Player, error) {
	player, ok := m.players[id]
	if !ok {
		return nil, nil
	}
	return player, m.err
}

func (m *MockDB) CreatePlayer(ctx context.Context, req *game.CreatePlayerRequest) (string, error) {
	player := req.Player
	id := "123" // For testing purposes, generate a mock ID
	player.Id = id
	m.players[id] = player
	return id, m.err
}

func (m *MockDB) UpdatePlayer(ctx context.Context, req *game.UpdatePlayerRequest) error {
	player := req.Player
	m.players[player.Id] = player
	return m.err
}

func (m *MockDB) ListPlayers(ctx context.Context) ([]*game.Player, error) {
	players := make([]*game.Player, 0, len(m.players))
	for _, player := range m.players {
		players = append(players, player)
	}
	return players, m.err
}

func (m *MockDB) GetRoomState(ctx context.Context, roomID string) (*game.RoomState, error) {
	roomState, ok := m.roomStates[roomID]
	if !ok {
		return nil, nil
	}
	return roomState, m.err
}

func (m *MockDB) GetLocationByCoordinates(ctx context.Context, coordinates *game.Coordinates) (*game.Location, error) {
	// Implement this method for testing if needed.
	return nil, m.err
}
