package db

import (
	"context"
	"fmt"
	"github.com/mfreeman451/dd-chatgpt-dm/server/internal/model"
)

// DB is a database interface
type DB interface {
	GetPlayer(ctx context.Context, id string) (*model.Player, error)
	CreatePlayer(ctx context.Context, player *model.Player) (string, error)
	UpdatePlayer(ctx context.Context, player *model.Player) error
	ListPlayers(ctx context.Context) ([]*model.Player, error)
	GetRoomState(ctx context.Context, roomID string) (*model.RoomState, error)
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
