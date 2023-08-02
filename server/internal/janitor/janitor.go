package janitor

import (
	"context"
	"errors"
	"github.com/ThreeDotsLabs/watermill/message"
	"github.com/mfreeman451/dd-chatgpt-dm/server/internal/logger"
)

type Bot struct {
	subscriber message.Subscriber
	logger     logger.Logger
	cancel     context.CancelFunc
}

func (j *Bot) Serve(ctx context.Context) error {
	// Start the JanitorBot here
	if err := j.Start(ctx, "game_created"); err != nil {
		return errors.New("failed to start JanitorBot")
	}

	// Wait for the context to be cancelled
	<-ctx.Done()

	return nil
}

func (j *Bot) Stop() {
	// Stop the JanitorBot here
	j.cancel()
}

func NewJanitorBot(subscriber message.Subscriber, logger logger.Logger) *Bot {
	return &Bot{
		subscriber: subscriber,
		logger:     logger,
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
	for {
		select {
		case msg := <-msgs:
			j.logger.Info().Msgf("Received message: %s", msg.UUID)

			// TODO: Add logic for processing the message here

			msg.Ack()
		case <-ctx.Done():
			// The context has been cancelled, so stop processing messages
			return
		}
	}
}
