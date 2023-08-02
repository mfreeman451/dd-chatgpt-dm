package logger

import (
	"github.com/ThreeDotsLabs/watermill"
)

type WatermillLoggerAdapter struct {
	logger Logger
}

func (w *WatermillLoggerAdapter) Error(msg string, err error, fields watermill.LogFields) {
	e := w.logger.Error().Err(err)
	for k, v := range fields {
		e = e.Interface(k, v)
	}
	e.Msg(msg)
}

func (w *WatermillLoggerAdapter) Info(msg string, fields watermill.LogFields) {
	e := w.logger.Info()
	for k, v := range fields {
		e = e.Interface(k, v)
	}
	e.Msg(msg)
}

func (w *WatermillLoggerAdapter) Debug(msg string, fields watermill.LogFields) {
	e := w.logger.Debug()
	for k, v := range fields {
		e = e.Interface(k, v)
	}
	e.Msg(msg)
}

func (w *WatermillLoggerAdapter) Trace(msg string, fields watermill.LogFields) {
	// Zerolog doesn't have a Trace level, so we'll use Debug instead
	e := w.logger.Debug()
	for k, v := range fields {
		e = e.Interface(k, v)
	}
	e.Msg(msg)
}

func (w *WatermillLoggerAdapter) With(fields watermill.LogFields) watermill.LoggerAdapter {
	// This method is supposed to return a new LoggerAdapter with some additional context.
	// Since Zerolog logger doesn't support this feature directly, we'll just return the same logger.
	return w
}

func NewWatermillLoggerAdapter(logger Logger) *WatermillLoggerAdapter {
	return &WatermillLoggerAdapter{logger: logger}
}
