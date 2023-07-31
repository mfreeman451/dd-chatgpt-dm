package db

import (
	"context"
	"fmt"
	"github.com/mfreeman451/dd-chatgpt-dm/server/pb/game"
)

// DB is a database interface
type DB interface {
	GetPlayer(ctx context.Context, id string) (*game.Player, error)
	CreatePlayer(ctx context.Context, player *game.Player) (string, error)
	UpdatePlayer(ctx context.Context, player *game.Player) error
	ListPlayers(ctx context.Context) ([]*game.Player, error)
	GetRoomState(ctx context.Context, roomID string) (*game.RoomState, error)
	GetLocationByCoordinates(ctx context.Context, coordinates *game.Coordinates) (*game.Location, error)
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
