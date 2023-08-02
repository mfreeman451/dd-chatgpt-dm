// Package watermill server/pkg/watermill/handlers.go
package watermill

import (
	"context"
	"fmt"
	"github.com/ThreeDotsLabs/watermill"
	"github.com/ThreeDotsLabs/watermill/message"
	"github.com/golang/protobuf/proto"
	"github.com/mfreeman451/dd-chatgpt-dm/server/pb/game"
	"github.com/rs/zerolog/log"
)

type CreateGameCommandHandler struct{}

func (h CreateGameCommandHandler) HandlerName() string {
	return "CreateGameCommandHandler"
}

func (h CreateGameCommandHandler) NewCommand() interface{} {
	return &game.CreateGameCommand{}
}

func (h CreateGameCommandHandler) Handle(ctx context.Context, cmd interface{}) error {
	command, ok := cmd.(*game.CreateGameCommand)
	if !ok {
		return fmt.Errorf("unexpected command type: %T", cmd)
	}

	log.Info().Msgf("Received CreateGameCommand for watermill ID: %s", command.GameId)

	// TODO: Add logic for creating a watermill here

	// After the watermill is created, publish a GameCreatedEvent
	event := &game.GameCreatedEvent{
		GameId: command.GameId,
	}
	eventPayload, err := proto.Marshal(event)
	if err != nil {
		return err
	}
	eventMsg := message.NewMessage(watermill.NewUUID(), eventPayload)

	// Publish the event
	// ...
	fmt.Println("EventMsg", eventMsg)

	return nil
}

type GameCreatedEventHandler struct{}

func (h GameCreatedEventHandler) HandlerName() string {
	return "GameCreatedEventHandler"
}

func (h GameCreatedEventHandler) NewEvent() interface{} {
	return &game.GameCreatedEvent{}
}

func (h GameCreatedEventHandler) Handle(ctx context.Context, ev interface{}) error {
	event, ok := ev.(*game.GameCreatedEvent)
	if !ok {
		return fmt.Errorf("unexpected event type: %T", ev)
	}

	log.Info().Msgf("Received GameCreatedEvent for watermill ID: %s", event.GameId)

	// TODO: Add logic for handling a watermill creation event here

	return nil
}

type MovePlayerCommandHandler struct{}

func (h MovePlayerCommandHandler) HandlerName() string {
	return "MovePlayerCommandHandler"
}

func (h MovePlayerCommandHandler) NewCommand() interface{} {
	return &game.MovePlayerCommand{}
}

func (h MovePlayerCommandHandler) Handle(ctx context.Context, cmd interface{}) error {
	command, ok := cmd.(*game.MovePlayerCommand)
	if !ok {
		return fmt.Errorf("unexpected command type: %T", cmd)
	}

	// Handle the command
	// ...
	fmt.Println("Command", command)

	return nil
}

type PlayerMovedEventHandler struct{}

func (h PlayerMovedEventHandler) HandlerName() string {
	return "PlayerMovedEventHandler"
}

func (h PlayerMovedEventHandler) NewEvent() interface{} {
	return &game.PlayerMovedEvent{}
}

func (h PlayerMovedEventHandler) Handle(ctx context.Context, ev interface{}) error {
	event, ok := ev.(*game.PlayerMovedEvent)
	if !ok {
		return fmt.Errorf("unexpected event type: %T", ev)
	}

	// Handle the event
	// ...
	fmt.Println("Event", event)

	return nil
}
