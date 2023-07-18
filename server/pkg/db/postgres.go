package db

import (
	"database/sql"
	_ "github.com/lib/pq" // postgres driver
)

// PostgresDB is a PostgreSQL database
type PostgresDB struct {
	*sql.DB
}

// NewPostgresDB creates a new PostgresSQL database
func NewPostgresDB(connStr string) (*PostgresDB, error) {
	db, err := sql.Open("postgres", connStr)
	if err != nil {
		return nil, err
	}

	return &PostgresDB{DB: db}, nil
}
