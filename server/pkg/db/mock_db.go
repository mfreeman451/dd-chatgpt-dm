package db

import (
	"context"
	playerv1 "github.com/mfreeman451/dd-chatgpt-dm/gen/player/v1"
	roomv1 "github.com/mfreeman451/dd-chatgpt-dm/gen/room/v1"
)

// MockDB is a mock database implementation for testing
type MockDB struct {
	players    map[string]*playerv1.Player
	roomStates map[string]*roomv1.RoomState
	err        error
}

// NewMockDB creates a new instance of the MockDB
func NewMockDB() *MockDB {
	return &MockDB{
		players:    make(map[string]*playerv1.Player),
		roomStates: make(map[string]*roomv1.RoomState),
	}
}

func (m *MockDB) GetPlayer(ctx context.Context, id string) (*playerv1.Player, error) {
	player, ok := m.players[id]
	if !ok {
		return nil, nil
	}
	return player, m.err
}

func (m *MockDB) CreatePlayer(ctx context.Context, req *playerv1.CreatePlayerRequest) (string, error) {
	player := req.Player
	id := "123" // For testing purposes, generate a mock ID
	player.Id = id
	m.players[id] = player
	return id, m.err
}

func (m *MockDB) UpdatePlayer(ctx context.Context, req *playerv1.UpdatePlayerRequest) error {
	player := req.Player
	m.players[player.Id] = player
	return m.err
}

func (m *MockDB) ListPlayers(ctx context.Context) ([]*playerv1.Player, error) {
	players := make([]*playerv1.Player, 0, len(m.players))
	for _, player := range m.players {
		players = append(players, player)
	}
	return players, m.err
}

func (m *MockDB) GetRoomState(ctx context.Context, roomID string) (*roomv1.RoomState, error) {
	roomState, ok := m.roomStates[roomID]
	if !ok {
		return nil, nil
	}
	return roomState, m.err
}

func (m *MockDB) GetLocationByCoordinates(ctx context.Context, coordinates *roomv1.Coordinates) (*roomv1.Location, error) {
	// Implement this method for testing if needed.
	return nil, m.err
}
