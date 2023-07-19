package db

import (
	"context"
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
	db *dynamodb.DynamoDB
}

// NewDynamoDB creates a new DynamoDB database
func NewDynamoDB(region string) (DB, error) {
	sess, err := session.NewSession(&aws.Config{
		Region: aws.String(region)},
	)
	if err != nil {
		return nil, err
	}

	return &DynamoDB{db: dynamodb.New(sess)}, nil
}

// CreatePlayer creates a new player
func (db *DynamoDB) CreatePlayer(ctx context.Context, player *model.Player) (string, error) {
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

	_, err = db.db.PutItem(input)
	if err != nil {
		fmt.Println("Error inserting player:", err)
		return "", err
	}

	return player.ID, nil
}

// GetPlayer retrieves a player by ID
func (db *DynamoDB) GetPlayer(ctx context.Context, id string) (*model.Player, error) {
	// Fetch player from the database based on the given ID
	result, err := db.db.GetItem(&dynamodb.GetItemInput{
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
