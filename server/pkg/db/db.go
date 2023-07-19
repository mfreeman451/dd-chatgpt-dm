package db

import (
	"context"
	"github.com/mfreeman451/dd-chatgpt-dm/server/internal/model"
)

// DB is a database interface
type DB interface {
	GetPlayer(ctx context.Context, id string) (*model.Player, error)
	CreatePlayer(ctx context.Context, player *model.Player) (string, error)
	// Other data access methods...
}

// NewDB creates a new database instance
func NewDB(connStr string) (DB, error) {
	return NewGormDB(connStr)
}
