// Package watermill server/pkg/watermill/cqrs.go
package watermill

import (
	"github.com/ThreeDotsLabs/watermill/components/cqrs"
	"github.com/ThreeDotsLabs/watermill/message"
	"github.com/ThreeDotsLabs/watermill/pubsub/gochannel"
	"github.com/mfreeman451/dd-chatgpt-dm/server/internal/logger"
)

func NewProtobufMarshaler() *ProtobufMarshaler {
	return &ProtobufMarshaler{}
}

func NewCQRS(log logger.Logger) (*cqrs.CommandProcessor, *cqrs.EventProcessor, message.Publisher, message.Subscriber, error) {
	// Create a Pub/Sub
	watermillLogger := logger.NewWatermillLoggerAdapter(log)
	publisher := gochannel.NewGoChannel(
		gochannel.Config{},
		watermillLogger,
	)

	// Create a router
	router, err := message.NewRouter(message.RouterConfig{}, watermillLogger)
	if err != nil {
		return nil, nil, nil, nil, err
	}

	// Create a marshaler
	marshaler := NewProtobufMarshaler()

	// Create a command processor
	cmdConfig := cqrs.CommandProcessorConfig{
		GenerateSubscribeTopic: func(params cqrs.CommandProcessorGenerateSubscribeTopicParams) (string, error) {
			return params.CommandName, nil
		},
		SubscriberConstructor: func(params cqrs.CommandProcessorSubscriberConstructorParams) (message.Subscriber, error) {
			return publisher, nil
		},
		Marshaler:                marshaler,
		Logger:                   watermillLogger,
		AckCommandHandlingErrors: false,
	}

	commandProcessor, err := cqrs.NewCommandProcessorWithConfig(
		router,
		cmdConfig,
	)

	if err != nil {
		return nil, nil, nil, nil, err
	}

	// Create an event processor
	eventConfig := cqrs.EventProcessorConfig{
		GenerateSubscribeTopic: func(params cqrs.EventProcessorGenerateSubscribeTopicParams) (string, error) {
			return params.EventName, nil
		},
		SubscriberConstructor: func(params cqrs.EventProcessorSubscriberConstructorParams) (message.Subscriber, error) {
			return publisher, nil
		},
		Marshaler: marshaler,
		Logger:    watermillLogger,
	}

	eventProcessor, err := cqrs.NewEventProcessorWithConfig(
		router,
		eventConfig,
	)

	if err != nil {
		return nil, nil, nil, nil, err
	}

	return commandProcessor, eventProcessor, publisher, publisher, nil
}
