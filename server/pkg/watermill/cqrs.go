// Package watermill server/pkg/watermill/cqrs.go
package watermill

import (
	"github.com/ThreeDotsLabs/watermill"
	"github.com/ThreeDotsLabs/watermill/components/cqrs"
	"github.com/ThreeDotsLabs/watermill/message"
	"github.com/ThreeDotsLabs/watermill/pubsub/gochannel"
)

func NewProtobufMarshaler() *ProtobufMarshaler {
	return &ProtobufMarshaler{}
}

func NewCQRS() (*cqrs.CommandProcessor, *cqrs.EventProcessor, error) {
	// Create a logger
	logger := watermill.NewStdLogger(false, false)

	// Create a Pub/Sub
	pubsub := gochannel.NewGoChannel(
		gochannel.Config{},
		logger,
	)

	// Create a router
	router, err := message.NewRouter(message.RouterConfig{}, logger)
	if err != nil {
		return nil, nil, err
	}

	// Create a marshaler
	marshaler := NewProtobufMarshaler()

	// Create a command processor
	cmdConfig := cqrs.CommandProcessorConfig{
		GenerateSubscribeTopic: func(params cqrs.CommandProcessorGenerateSubscribeTopicParams) (string, error) {
			return params.CommandName, nil
		},
		SubscriberConstructor: func(params cqrs.CommandProcessorSubscriberConstructorParams) (message.Subscriber, error) {
			return pubsub, nil
		},
		/*
			OnHandle: func(params cqrs.CommandProcessorOnHandleParams) error {
				if params.Err != nil {
					logger.Error(params.Err, "Error occurred while handling command", "command", params.CommandName)
					return params.Err
				}
				return nil
			},
		*/
		Marshaler:                marshaler,
		Logger:                   logger,
		AckCommandHandlingErrors: false,
	}

	commandProcessor, err := cqrs.NewCommandProcessorWithConfig(
		router,
		cmdConfig,
	)

	if err != nil {
		return nil, nil, err
	}

	// Create an event processor
	eventConfig := cqrs.EventProcessorConfig{
		GenerateSubscribeTopic: func(params cqrs.EventProcessorGenerateSubscribeTopicParams) (string, error) {
			return params.EventName, nil
		},
		SubscriberConstructor: func(params cqrs.EventProcessorSubscriberConstructorParams) (message.Subscriber, error) {
			return pubsub, nil
		},
	}

	eventProcessor, err := cqrs.NewEventProcessorWithConfig(
		router,
		eventConfig,
	)

	if err != nil {
		return nil, nil, err
	}

	return commandProcessor, eventProcessor, nil
}
