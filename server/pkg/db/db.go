package db

import (
	"context"
	"fmt"
	"github.com/google/uuid"
)

// Player model
type Player struct {
	ID   string
	Name string
	// Other fields...
}

// DB is a database interface
type DB interface {
	GetPlayer(ctx context.Context, id string) (*Player, error)
	CreatePlayer(ctx context.Context, name string) (string, error)
	// Other data access methods...
}

// CreatePlayer creates a new player
func (db *PostgresDB) CreatePlayer(ctx context.Context, name string) (string, error) {
	// Generate ID
	id := uuid.New()

	// Insert player in database
	err := db.insertPlayer(ctx, id.String(), name)
	if err != nil {
		fmt.Print("Error inserting player: " + err.Error())
		return "", err
	}

	return id.String(), nil
}

// GetPlayer gets a player
func (db *PostgresDB) GetPlayer(ctx context.Context, id string) (*Player, error) {
	// PostgreSQL implementation...
	return &Player{}, nil
}

// insertPlayer inserts a player
func (db *PostgresDB) insertPlayer(ctx context.Context, id string, name string) error {

	// SQL query to insert player
	stmt := "INSERT INTO players (id, name) VALUES ($1::text, $2)"

	_, err := db.ExecContext(ctx, stmt, id, name)

	return err
}
