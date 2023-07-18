package db

import (
	"database/sql"
	_ "github.com/lib/pq" // postgres driver
)

// PostgresDB is a PostgreSQL database
type PostgresDB struct {
	*sql.DB
}

// NewPostgresDB creates a new PostgreSQL database
func NewPostgresDB() (*PostgresDB, error) {
	db, err := sql.Open("postgres", "postgres://postgres:postgres@localhost:5432/chatgptdm?sslmode=disable")
	if err != nil {
		return nil, err
	}

	return &PostgresDB{DB: db}, nil
}
