package janitor

import (
	"github.com/ThreeDotsLabs/watermill/message"
	"github.com/mfreeman451/dd-chatgpt-dm/server/internal/janitor"
	"github.com/mfreeman451/dd-chatgpt-dm/server/internal/logger"
)

func SetupJanitorBot(subscriber message.Subscriber, log logger.Logger) *janitor.Bot {
	// Create the Janitor Bot
	return janitor.NewJanitorBot(subscriber, log)
}
