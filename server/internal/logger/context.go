package logger

import (
	"context"

	"github.com/rs/zerolog"
)

type contextKey string

func (c contextKey) String() string {
	return string(c)
}

var ContextKeyLogger = contextKey("logger")

// SetLoggerInContext sets the logger in the context
func SetLoggerInContext(ctx context.Context, logger Logger) context.Context {
	return context.WithValue(ctx, ContextKeyLogger, logger)
}

// GetLoggerFromContext gets the logger from the context
func GetLoggerFromContext(ctx context.Context) *zerolog.Logger {
	logger, ok := ctx.Value(ContextKeyLogger).(*zerolog.Logger)
	if !ok {
		return nil
	}
	return logger
}
