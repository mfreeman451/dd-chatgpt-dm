package db

import (
	"context"
	"errors"
	"fmt"
	"github.com/google/uuid"
	"github.com/mfreeman451/dd-chatgpt-dm/server/internal/model"
	"github.com/rs/zerolog/log"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

// MongoDB is a MongoDB database
type MongoDB struct {
	*mongo.Database
}

// NewMongoDB creates a new MongoDB database
func NewMongoDB(connStr string) (DB, error) {
	fmt.Println("connsStr:", connStr)
	client, err := mongo.Connect(context.Background(), options.Client().ApplyURI(connStr))
	if err != nil {
		return nil, err
	}

	return &MongoDB{client.Database("dnd")}, nil
}

// CreatePlayer creates a new player
func (db *MongoDB) CreatePlayer(ctx context.Context, player *model.Player) (string, error) {
	fmt.Println("Creating player in MongoDB..")
	// Generate ID
	player.ID = uuid.New().String()

	// Create player in the database
	res, err := db.Collection("players").InsertOne(ctx, player)
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
	err := db.Collection("players").FindOne(ctx, bson.M{"id": id}).Decode(player)
	if err != nil {
		if errors.Is(err, mongo.ErrNoDocuments) {
			return nil, nil // Return nil if player not found
		}
		fmt.Println("Error retrieving player:", err)
		return nil, err
	}

	return player, nil
}

// ListPlayers retrieves all players
func (db *MongoDB) ListPlayers(ctx context.Context) ([]*model.Player, error) {
	// Define an empty slice to store the players
	players := []*model.Player{}

	// Find all players in the database
	cursor, err := db.Collection("players").Find(ctx, bson.M{})
	if err != nil {
		fmt.Println("Error retrieving players:", err)
		return nil, err
	}
	defer func(cursor *mongo.Cursor, ctx context.Context) {
		err := cursor.Close(ctx)
		if err != nil {
			log.Error().Err(err).Msg("failed to close cursor")
		}
	}(cursor, ctx)

	// Iterate over the cursor and decode each player into a model.Player object
	for cursor.Next(ctx) {
		player := &model.Player{}
		if err := cursor.Decode(player); err != nil {
			fmt.Println("Error decoding player:", err)
			return nil, err
		}
		players = append(players, player)
	}

	if err := cursor.Err(); err != nil {
		fmt.Println("Cursor error:", err)
		return nil, err
	}

	return players, nil
}
