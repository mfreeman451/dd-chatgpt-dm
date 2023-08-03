package db

import (
	"context"
	"errors"
	"fmt"
	"github.com/aws/aws-sdk-go/aws"
	"github.com/aws/aws-sdk-go/aws/session"
	"github.com/aws/aws-sdk-go/service/dynamodb"
	"github.com/aws/aws-sdk-go/service/dynamodb/dynamodbattribute"
	"github.com/google/uuid"
	"github.com/mfreeman451/dd-chatgpt-dm/server/pb/game"
)

// DynamoDB is a DynamoDB database
type DynamoDB struct {
	*dynamodb.DynamoDB
}

// NewDynamoDB creates a new DynamoDB database
func NewDynamoDB(region string) (DB, error) {
	sess, err := session.NewSession(&aws.Config{
		Region: aws.String(region)},
	)
	if err != nil {
		return nil, err
	}

	return &DynamoDB{dynamodb.New(sess)}, nil
}

// GetLocationByCoordinates retrieves a location from the database based on the provided coordinates.
func (db *DynamoDB) GetLocationByCoordinates(ctx context.Context, coordinates *game.Coordinates) (*game.Location, error) {
	// Fetch location from the database based on the given coordinates
	// Note: Implement the logic to fetch the location using the provided coordinates.
	// For example, you can use the Scan method or GetItem method with a proper filter condition.
	// The exact implementation will depend on how your location data is stored in the database.

	// For this example, let's assume you have a table named "Locations" and you want to fetch the location
	// based on the X, Y, and Z coordinates.

	// Convert the coordinates to a DynamoDB map attribute value
	av, err := dynamodbattribute.MarshalMap(coordinates)
	if err != nil {
		fmt.Println("Error marshalling coordinates:", err)
		return nil, err
	}

	// Define the DynamoDB query or scan input based on the coordinates
	input := &dynamodb.ScanInput{
		TableName:        aws.String("Locations"),
		FilterExpression: aws.String("X = :x AND Y = :y AND Z = :z"),
		ExpressionAttributeValues: map[string]*dynamodb.AttributeValue{
			":x": av["X"],
			":y": av["Y"],
			":z": av["Z"],
		},
	}

	// Execute the query or scan
	result, err := db.Scan(input)
	if err != nil {
		fmt.Println("Error retrieving location:", err)
		return nil, err
	}

	// Check if the location was found
	if len(result.Items) == 0 {
		return nil, nil // Return nil if location not found
	}

	// Unmarshal the first item into a Location object
	location := &game.Location{}
	err = dynamodbattribute.UnmarshalMap(result.Items[0], location)
	if err != nil {
		fmt.Println("Error unmarshalling location:", err)
		return nil, err
	}

	return location, nil
}

// UpdatePlayer updates an existing player in the database based on the provided player object.
func (db *DynamoDB) UpdatePlayer(ctx context.Context, req *game.UpdatePlayerRequest) error {
	player := req.Player
	// Check if the player ID is empty
	if player.Id == "" {
		return errors.New("player ID is empty")
	}

	av, err := dynamodbattribute.MarshalMap(player)
	if err != nil {
		fmt.Println("Error marshalling player:", err)
		return err
	}

	input := &dynamodb.PutItemInput{
		Item:      av,
		TableName: aws.String("Players"),
	}

	_, err = db.PutItem(input)
	if err != nil {
		fmt.Println("Error updating player:", err)
		return err
	}

	return nil
}

// CreatePlayer creates a new player
func (db *DynamoDB) CreatePlayer(ctx context.Context, req *game.CreatePlayerRequest) (string, error) {
	fmt.Println("Creating player in Dynamo..")
	player := req.Player

	// TODO: update this, I don't think we should be doing this anymore
	// Generate ID
	player.Id = uuid.New().String()

	av, err := dynamodbattribute.MarshalMap(player)
	if err != nil {
		fmt.Println("Error marshalling player:", err)
		return "", err
	}

	input := &dynamodb.PutItemInput{
		Item:      av,
		TableName: aws.String("Players"),
	}

	_, err = db.PutItem(input)
	if err != nil {
		fmt.Println("Error inserting player:", err)
		return "", err
	}

	return player.Id, nil
}

// GetPlayer retrieves a player by ID
func (db *DynamoDB) GetPlayer(ctx context.Context, id string) (*game.Player, error) {
	// Fetch player from the database based on the given ID
	result, err := db.GetItem(&dynamodb.GetItemInput{
		TableName: aws.String("Players"),
		Key: map[string]*dynamodb.AttributeValue{
			"ID": {
				S: aws.String(id),
			},
		},
	})
	if err != nil {
		fmt.Println("Error retrieving player:", err)
		return nil, err
	}

	if result.Item == nil {
		return nil, nil // Return nil if player not found
	}

	player := &game.Player{}
	err = dynamodbattribute.UnmarshalMap(result.Item, player)
	if err != nil {
		fmt.Println("Error unmarshalling player:", err)
		return nil, err
	}

	return player, nil
}

// ListPlayers retrieves all players
func (db *DynamoDB) ListPlayers(ctx context.Context) ([]*game.Player, error) {
	// Define an empty slice to store the players
	var players []*game.Player

	// Scan the "Players" table to retrieve all players
	input := &dynamodb.ScanInput{
		TableName: aws.String("Players"),
	}
	result, err := db.Scan(input)
	if err != nil {
		fmt.Println("Error retrieving players:", err)
		return nil, err
	}

	// Unmarshal each item into a Player object and add it to the slice
	for _, item := range result.Items {
		player := &game.Player{}
		err = dynamodbattribute.UnmarshalMap(item, player)
		if err != nil {
			fmt.Println("Error unmarshalling player:", err)
			return nil, err
		}
		players = append(players, player)
	}

	return players, nil
}

// GetRoomState retrieves the state of a room by ID
func (db *DynamoDB) GetRoomState(ctx context.Context, roomID string) (*game.RoomState, error) {
	return nil, errors.New("not implemented")
}
