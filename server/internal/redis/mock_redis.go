// mock_redis.go
package redis

import (
	"context"
	"github.com/mfreeman451/dd-chatgpt-dm/server/internal/model"
	"github.com/redis/go-redis/v9"
	"time"
)

// mockRedis is a mock implementation of the Redis interface.
type mockRedis struct {
	roomState *model.RoomState
	err       error
	client    *redis.Client
}

// NewMockRedis creates a new mockRedis instance.
func NewMockRedis() Redis {
	return &mockRedis{}
}

func (m *mockRedis) GetRoomState(ctx context.Context, roomID string) (*model.RoomState, error) {
	// Return the mock room state
	return m.roomState, m.err
}

func (m *mockRedis) SetRoomState(ctx context.Context, roomID string, state *model.RoomState) error {
	// Update the mock room state
	m.roomState = state
	return m.err
}

func (m *mockRedis) Set(ctx context.Context, key string, value interface{}, expiration time.Duration) error {
	// Implement the Set method for mockRedis
	// For example, you can store the key-value pair in a map
	// set an expiration of 5 minutes
	return m.client.Set(ctx, key, value, expiration).Err()
}

func (m *mockRedis) Get(ctx context.Context, key string) (interface{}, error) {
	return m.client.Get(ctx, key).Result()
}

func (m *mockRedis) Delete(ctx context.Context, key string) error {
	return m.client.Del(ctx, key).Err()
}

func (m *mockRedis) Publish(ctx context.Context, channel string, message interface{}) error {
	// Implement the Publish method for mockRedis
	return m.err
}

// Add other method implementations for interacting with Redis as needed
