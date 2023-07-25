package logger

import (
	"github.com/rs/zerolog"
	"github.com/rs/zerolog/log"
	"io"
	"os"
)

// New creates a logger with both stdout and file output
func New() *zerolog.Logger {
	// Open the log file
	f, err := os.OpenFile("logs.txt", os.O_CREATE|os.O_APPEND|os.O_RDWR, 0666)
	if err != nil {
		log.Fatal().Err(err).Msg("failed to open log file")
	}

	// Create a multi-writer that combines the console writer and the file writer
	multiWriter := io.MultiWriter(os.Stdout, f)

	// Create a new logger with the multi-writer as the output
	logger := log.Output(zerolog.ConsoleWriter{Out: multiWriter})

	return &logger
}
