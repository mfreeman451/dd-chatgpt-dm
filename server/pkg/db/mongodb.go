package db

import (
	"context"
	"errors"
	"fmt"
	"github.com/mfreeman451/dd-chatgpt-dm/server/pb/game"
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
	client, err := mongo.Connect(context.Background(), options.Client().ApplyURI(connStr))
	if err != nil {
		return nil, err
	}

	return &MongoDB{client.Database("dnd")}, nil
}

// UpdatePlayer updates an existing player in the database based on the provided player object.
func (db *MongoDB) UpdatePlayer(ctx context.Context, req *game.UpdatePlayerRequest) error {
	player := req.Player

	// Check if the player ID is empty
	if player.Id == "" {
		return errors.New("player ID is empty")
	}

	fmt.Println("UpdatePlayer ID:", player.Id)

	// Update the player in the database
	filter := bson.M{"_id": player.Id}
	update := bson.M{"$set": player}

	res, err := db.Collection("players").UpdateOne(ctx, filter, update)
	if err != nil {
		fmt.Println("Error updating player:", err)
		return err
	}

	fmt.Println("UpdatePlayer result:", res.UpsertedID, res.ModifiedCount, res.MatchedCount)

	return nil
}

func (db *MongoDB) CreatePlayer(ctx context.Context, req *game.CreatePlayerRequest) (string, error) {
	player := req.Player
	// Explicitly set the DefaultRoom field on the player document
	player.DefaultRoom = &game.Coordinates{
		X: 0,
		Y: 0,
		Z: 0,
	}

	// Create player in the database
	res, err := db.Collection("players").InsertOne(ctx, player)
	if err != nil {
		fmt.Println("Error inserting player:", err)
		return "", err
	}

	fmt.Println("CreatePlayer result:", res.InsertedID)
	// Return the ID of the newly created player
	return player.Id, nil
}

// GetPlayer retrieves a player by ID
func (db *MongoDB) GetPlayer(ctx context.Context, id string) (*game.Player, error) {
	// Fetch player from the database based on the given ID
	player := &game.Player{}
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
func (db *MongoDB) ListPlayers(ctx context.Context) ([]*game.Player, error) {
	// Define an empty slice to store the players
	var players []*game.Player

	// Find all players in the database
	cursor, err := db.Collection("players").Find(ctx, bson.M{})
	if err != nil {
		log.Err(err).Msg("failed to retrieve players")
		return nil, err
	}
	defer func(cursor *mongo.Cursor, ctx context.Context) {
		err := cursor.Close(ctx)
		if err != nil {
			log.Error().Err(err).Msg("failed to close cursor")
		}
	}(cursor, ctx)

	// Iterate over the cursor and decode each player into a watermill.Player object
	for cursor.Next(ctx) {
		player := &game.Player{}

		if err := cursor.Decode(player); err != nil {
			log.Err(err).Msg("failed to decode player")
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

// GetLocationByCoordinates retrieves a location by coordinates
func (db *MongoDB) GetLocationByCoordinates(ctx context.Context, coordinates *game.Coordinates) (*game.Location, error) {
	filter := bson.M{"coordinates": coordinates}
	location := &game.Location{}
	err := db.Collection("rooms").FindOne(ctx, filter).Decode(location)
	if err != nil {
		if errors.Is(err, mongo.ErrNoDocuments) {
			return nil, nil // Return nil if location not found
		}
		log.Err(err).Msg("failed to retrieve location")
		return nil, err
	}
	return location, nil
	// return nil, errors.New("GetLocationByCoordinates not implemented")
}

// GetRoomState retrieves the state of a room
func (db *MongoDB) GetRoomState(ctx context.Context, roomID string) (*game.RoomState, error) {
	return nil, errors.New("GetRoomState not implemented")
}
