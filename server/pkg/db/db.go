package db

import (
	"context"
	"database/sql"
	"github.com/google/uuid"
)

// Player model
type Player struct {
	ID   string
	Name string
	// Other fields...
}

type PostgresDB struct {
	*sql.DB
}

// DB interface
type DB interface {
	GetPlayer(ctx context.Context, id string) (*Player, error)
	// CreatePlayer(ctx context.Context, player *Player) error
	CreatePlayer(ctx context.Context, name string) (string, error)
	// Other data access methods...
}

// DB implementation
func NewPostgresDB() (*PostgresDB, error) {
	db, err := sql.Open("postgres", "postgres://postgres:postgres@localhost:5432/chatgptdm?sslmode=disable")
	if err != nil {
		return nil, err
	}

	return &PostgresDB{DB: db}, nil
}

func (db *PostgresDB) CreatePlayer(ctx context.Context, name string) (string, error) {
	// Generate ID
	id := uuid.New()

	// Insert player in database
	err := db.insertPlayer(ctx, id.String(), name)
	if err != nil {
		return "", err
	}

	return id.String(), nil
}

func (db *PostgresDB) GetPlayer(ctx context.Context, id string) (*Player, error) {
	// PostgreSQL implementation...
	return &Player{}, nil
}

func (db *PostgresDB) insertPlayer(ctx context.Context, id string, name string) error {

	// SQL query to insert player
	stmt := "INSERT INTO players (id, name) VALUES ($1, $2)"

	_, err := db.ExecContext(ctx, stmt, id, name)

	return err
}
