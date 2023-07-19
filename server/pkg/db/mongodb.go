package db

import (
	"context"
	"errors"
	"fmt"
	"github.com/google/uuid"
	"github.com/mfreeman451/dd-chatgpt-dm/server/internal/model"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

// MongoDB is a MongoDB database
type MongoDB struct {
	db *mongo.Database
}

// NewMongoDB creates a new MongoDB database
func NewMongoDB(connStr string) (DB, error) {
	client, err := mongo.Connect(context.Background(), options.Client().ApplyURI(connStr))
	if err != nil {
		return nil, err
	}

	return &MongoDB{db: client.Database("your_database_name")}, nil
}

// CreatePlayer creates a new player
func (db *MongoDB) CreatePlayer(ctx context.Context, player *model.Player) (string, error) {
	fmt.Println("Creating player in MongoDB..")
	// Generate ID
	player.ID = uuid.New().String()

	// Create player in the database
	res, err := db.db.Collection("players").InsertOne(ctx, player)
	if err != nil {
		fmt.Println("Error inserting player:", err)
		return "", err
	}
	fmt.Println("Inserted player with ID:", res.InsertedID)

	return player.ID, nil
}

// GetPlayer retrieves a player by ID
func (db *MongoDB) GetPlayer(ctx context.Context, id string) (*model.Player, error) {
	// Fetch player from the database based on the given ID
	player := &model.Player{}
	err := db.db.Collection("players").FindOne(ctx, bson.M{"id": id}).Decode(player)
	if err != nil {
		if errors.Is(err, mongo.ErrNoDocuments) {
			return nil, nil // Return nil if player not found
		}
		fmt.Println("Error retrieving player:", err)
		return nil, err
	}

	return player, nil
}
