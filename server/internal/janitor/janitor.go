package janitor

import (
	"context"
	"github.com/ThreeDotsLabs/watermill/message"
	"github.com/mfreeman451/dd-chatgpt-dm/server/internal/logger"
)

type Bot struct {
	subscriber message.Subscriber
	logger     logger.Logger
	ctx        context.Context
	cancel     context.CancelFunc
}

func (j *Bot) Serve() {
	// Start the JanitorBot here
	if err := j.Start(j.ctx, "game_created"); err != nil {
		j.logger.Fatal().Err(err).Msg("Failed to start JanitorBot")
	}
}

func (j *Bot) Stop() {
	// Stop the JanitorBot here
	j.cancel()
}

func NewJanitorBot(subscriber message.Subscriber, logger logger.Logger) *Bot {
	ctx, cancel := context.WithCancel(context.Background())
	return &Bot{
		subscriber: subscriber,
		logger:     logger,
		ctx:        ctx,
		cancel:     cancel,
	}
}

func (j *Bot) Start(ctx context.Context, topic string) error {
	msgs, err := j.subscriber.Subscribe(ctx, topic)
	if err != nil {
		return err
	}

	go j.processMessages(ctx, msgs)

	return nil
}

func (j *Bot) processMessages(ctx context.Context, msgs <-chan *message.Message) {
	for msg := range msgs {
		j.logger.Info().Msgf("Received message: %s", msg.UUID)

		// TODO: Add logic for processing the message here

		msg.Ack()
	}
}
