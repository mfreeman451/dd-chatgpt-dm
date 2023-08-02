package logger

import (
	"github.com/rs/zerolog"
	"github.com/rs/zerolog/log"
	"io"
	"os"
)

type Logger interface {
	Info() *zerolog.Event
	Error() *zerolog.Event
	Debug() *zerolog.Event
	Fatal() *zerolog.Event
	Zerolog() *zerolog.Logger
}

type ZerologLogger struct {
	logger zerolog.Logger
}

func (z *ZerologLogger) Info() *zerolog.Event {
	return z.logger.Info()
}

func (z *ZerologLogger) Error() *zerolog.Event {
	return z.logger.Error()
}

func (z *ZerologLogger) Debug() *zerolog.Event {
	return z.logger.Debug()
}

func (z *ZerologLogger) Fatal() *zerolog.Event {
	return z.logger.Fatal()
}

func (z *ZerologLogger) Zerolog() *zerolog.Logger {
	return &z.logger
}

// New creates a logger with both stdout and file output
func New() Logger {
	// Open the log file
	f, err := os.OpenFile("logs.txt", os.O_CREATE|os.O_APPEND|os.O_RDWR, 0666)
	if err != nil {
		log.Fatal().Err(err).Msg("failed to open log file")
	}

	// Create a multi-writer that combines the console writer and the file writer
	multiWriter := io.MultiWriter(os.Stdout, f)

	// Create a new logger with the multi-writer as the output
	logger := zerolog.New(multiWriter).With().Timestamp().Logger()

	return &ZerologLogger{logger: logger}
}
