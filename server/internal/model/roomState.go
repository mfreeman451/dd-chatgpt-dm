package model

import (
	"encoding/json"
)

type RoomState struct {
	ID      string
	Players []Player
	// Other fields...
}

// SerializeRoomState serializes the RoomState to a JSON string.
func SerializeRoomState(state *RoomState) string {
	data, _ := json.Marshal(state)
	return string(data)
}

// DeserializeRoomState deserializes the JSON string to a RoomState.
func DeserializeRoomState(data string) *RoomState {
	var state RoomState
	_ = json.Unmarshal([]byte(data), &state)
	return &state
}

// DB is an interface for a database containing room state information.
/*
type DB interface {
	GetRoomState(ctx context.Context, roomID string) (*RoomState, error)
	// Add other methods as needed for interacting with your database.
}

*/

// RedisConfig holds the configuration for the Redis client.
type RedisConfig struct {
	Address  string
	Password string
	DB       int
}
