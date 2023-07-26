package redis

import (
	"context"
	"github.com/mfreeman451/dd-chatgpt-dm/server/internal/model"
	"time"
)

// Redis is an interface for a Redis client.
type Redis interface {
	GetRoomState(ctx context.Context, roomID string) (*model.RoomState, error)
	SetRoomState(ctx context.Context, roomID string, state *model.RoomState) error
	// Set a key/value pair
	Set(ctx context.Context, key string, value interface{}, expiration time.Duration) error
	// Get a value by key
	Get(ctx context.Context, key string) (interface{}, error)
	// Delete a key/value pair
	Delete(ctx context.Context, key string) error
	// Publish a message to a channel
	Publish(ctx context.Context, channel string, message interface{}) error
}

type Client interface {
	Set(ctx context.Context, key string, value interface{}, expiration time.Duration) error
	Get(ctx context.Context, key string) (interface{}, error)
	Delete(ctx context.Context, key string) error
	GetRoomState(ctx context.Context, roomID string) (*model.RoomState, error)
	SetRoomState(ctx context.Context, roomID string, state *model.RoomState) error
	Publish(ctx context.Context, channel string, message interface{}) error
}
