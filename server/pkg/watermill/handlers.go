// Package watermill server/pkg/watermill/handlers.go
package watermill

import (
	"github.com/ThreeDotsLabs/watermill"
	"github.com/ThreeDotsLabs/watermill/message"
	"github.com/golang/protobuf/proto"
	"github.com/mfreeman451/dd-chatgpt-dm/server/pb/game"
	"github.com/rs/zerolog/log"
)

// CreateGameCommandHandler handles the CreateGameCommand
func CreateGameCommandHandler(msg *message.Message) ([]*message.Message, error) {
	cmd := &game.CreateGameCommand{}
	err := proto.Unmarshal(msg.Payload, cmd)
	if err != nil {
		return nil, err
	}

	log.Info().Msgf("Received CreateGameCommand for watermill ID: %s", cmd.GameId)

	// TODO: Add logic for creating a watermill here

	// After the watermill is created, publish a GameCreatedEvent
	event := &game.GameCreatedEvent{
		GameId: cmd.GameId,
	}
	eventPayload, err := proto.Marshal(event)
	if err != nil {
		return nil, err
	}
	eventMsg := message.NewMessage(watermill.NewUUID(), eventPayload)

	return []*message.Message{eventMsg}, nil
}

// GameCreatedEventHandler handles the GameCreatedEvent
func GameCreatedEventHandler(msg *message.Message) error {
	event := &game.GameCreatedEvent{}
	err := proto.Unmarshal(msg.Payload, event)
	if err != nil {
		return err
	}

	log.Info().Msgf("Received GameCreatedEvent for watermill ID: %s", event.GameId)

	// TODO: Add logic for handling a watermill creation event here

	return nil
}
