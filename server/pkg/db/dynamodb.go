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
	"github.com/mfreeman451/dd-chatgpt-dm/server/internal/model"
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

// UpdatePlayer updates an existing player in the database based on the provided player object.
func (db *DynamoDB) UpdatePlayer(ctx context.Context, player *model.Player) error {
	// Check if the player ID is empty
	if player.ID == "" {
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
func (db *DynamoDB) CreatePlayer(ctx context.Context, player *model.Player) (string, error) {
	fmt.Println("Creating player in Dynamo..")
	// Generate ID
	player.ID = uuid.New().String()

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

	return player.ID, nil
}

// GetPlayer retrieves a player by ID
func (db *DynamoDB) GetPlayer(ctx context.Context, id string) (*model.Player, error) {
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

	player := &model.Player{}
	err = dynamodbattribute.UnmarshalMap(result.Item, player)
	if err != nil {
		fmt.Println("Error unmarshalling player:", err)
		return nil, err
	}

	return player, nil
}

// ListPlayers retrieves all players
func (db *DynamoDB) ListPlayers(ctx context.Context) ([]*model.Player, error) {
	// Define an empty slice to store the players
	var players []*model.Player

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
		player := &model.Player{}
		err = dynamodbattribute.UnmarshalMap(item, player)
		if err != nil {
			fmt.Println("Error unmarshalling player:", err)
			return nil, err
		}
		players = append(players, player)
	}

	return players, nil
}
