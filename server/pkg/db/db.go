package db

import (
	"context"
	"fmt"
	playerv1 "github.com/mfreeman451/dd-chatgpt-dm/gen/player/v1"
	roomv1 "github.com/mfreeman451/dd-chatgpt-dm/gen/room/v1"
)

// DB is a database interface
type DB interface {
	GetPlayer(ctx context.Context, id string) (*playerv1.Player, error)
	CreatePlayer(ctx context.Context, request *playerv1.CreatePlayerRequest) (string, error)
	UpdatePlayer(ctx context.Context, request *playerv1.UpdatePlayerRequest) error
	ListPlayers(ctx context.Context) ([]*playerv1.Player, error)
	GetRoomState(ctx context.Context, roomID string) (*roomv1.RoomState, error)
	GetLocationByCoordinates(ctx context.Context, coordinates *roomv1.Coordinates) (*roomv1.Location, error)
	// Other data access methods...
}

// NewDB creates a new database instance
func NewDB(connStr string, dbType string) (DB, error) {
	switch dbType {
	case "mongodb":
		return NewMongoDB(connStr)
	case "dynamodb":
		return NewDynamoDB(connStr)
	default:
		return nil, fmt.Errorf("unsupported database type: %s", dbType)
	}
}
