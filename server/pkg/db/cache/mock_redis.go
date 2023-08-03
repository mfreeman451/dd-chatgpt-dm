package cache

import (
	"context"
	"github.com/mfreeman451/dd-chatgpt-dm/server/pb/game"
	"time"
)

// mockRedis is a mock implementation of the Redis interface.
type mockRedis struct {
	roomState *game.RoomState
	err       error
	data      map[string]interface{}
}

// NewMockRedis creates a new mockRedis instance.
func NewMockRedis() Client {
	return &mockRedis{
		data: make(map[string]interface{}),
	}
}

func (m *mockRedis) GetRoomState(ctx context.Context, roomID string) (*game.RoomState, error) {
	// Return the mock room state
	return m.roomState, m.err
}

func (m *mockRedis) SetRoomState(ctx context.Context, roomID string, state *game.RoomState) error {
	// Update the mock room state
	m.roomState = state
	return m.err
}

func (m *mockRedis) Set(ctx context.Context, key string, value interface{}, expiration time.Duration) error {
	// Implement the Set method for mockRedis
	// For example, you can store the key-value pair in the map
	m.data[key] = value
	return nil
}

func (m *mockRedis) Get(ctx context.Context, key string) (interface{}, error) {
	// Implement the Get method for mockRedis
	// For example, you can retrieve the value from the map based on the key
	value, ok := m.data[key]
	if !ok {
		return nil, nil
	}
	return value, nil
}

func (m *mockRedis) Delete(ctx context.Context, key string) error {
	// Implement the Delete method for mockRedis
	// For example, you can delete the key-value pair from the map
	delete(m.data, key)
	return nil
}

func (m *mockRedis) Publish(ctx context.Context, channel string, message interface{}) error {
	// Implement the Publish method for mockRedis
	return m.err
}

// Ping
func (m *mockRedis) Ping(ctx context.Context) (string, error) {
	return "PONG", nil
}

// Add other method implementations for interacting with Redis as needed
