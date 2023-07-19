package logger

import (
	"os"

	"github.com/rs/zerolog"
	"github.com/rs/zerolog/log"
)

// New creates a logger with stdout and file output
func New() *zerolog.Logger {

	logger := log.Output(zerolog.ConsoleWriter{Out: os.Stdout})

	f, _ := os.OpenFile("logs.txt", os.O_CREATE|os.O_APPEND|os.O_RDWR, 0666)
	logger = logger.Output(f)

	return &logger
}
