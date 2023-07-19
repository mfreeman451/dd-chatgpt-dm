package db

import (
	"context"
	"errors"
	"fmt"
	"github.com/google/uuid"
	"github.com/mfreeman451/dd-chatgpt-dm/server/internal/model"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

// GormDB is a GORM database
type GormDB struct {
	db *gorm.DB
}

// NewGormDB creates a new GORM database
func NewGormDB(connStr string) (*GormDB, error) {
	db, err := gorm.Open(postgres.Open(connStr), &gorm.Config{})
	if err != nil {
		return nil, err
	}

	return &GormDB{db: db}, nil
}

// CreatePlayer creates a new player
func (db *GormDB) CreatePlayer(ctx context.Context, player *model.Player) (string, error) {
	// Generate ID
	player.ID = uuid.New().String()

	// Create player in the database
	result := db.db.Create(player)
	if result.Error != nil {
		fmt.Println("Error inserting player:", result.Error)
		return "", result.Error
	}

	return player.ID, nil
}

// GetPlayer retrieves a player by ID
func (db *GormDB) GetPlayer(ctx context.Context, id string) (*model.Player, error) {
	// Fetch player from the database based on the given ID
	player := &model.Player{}
	result := db.db.Where("id = ?", id).First(player)
	if result.Error != nil {
		if errors.Is(result.Error, gorm.ErrRecordNotFound) {
			return nil, nil // Return nil if player not found
		}
		fmt.Println("Error retrieving player:", result.Error)
		return nil, result.Error
	}

	return player, nil
}

// Migrate runs database migrations
func (db *GormDB) Migrate() error {
	return db.db.AutoMigrate(&model.Player{}, &model.DeathSaves{}, &model.RacialTraits{})
}
