package watermill

import (
	"github.com/ThreeDotsLabs/watermill"
	"github.com/rs/zerolog"
)

type ZerologAdapter struct {
	logger zerolog.Logger
}

func (a ZerologAdapter) Info(msg string, fields ...watermill.LogFields) {
	a.logger.Info().Fields(toFields(fields)).Msg(msg)
}

func (a ZerologAdapter) Error(msg string, err error, fields ...watermill.LogFields) {
	a.logger.Error().Err(err).Fields(toFields(fields)).Msg(msg)
}

func (a ZerologAdapter) Debug(msg string, fields ...watermill.LogFields) {
	a.logger.Debug().Fields(toFields(fields)).Msg(msg)
}

func (a ZerologAdapter) Trace(msg string, fields ...watermill.LogFields) {
	a.logger.Trace().Fields(toFields(fields)).Msg(msg)
}

func toFields(watermillFields []watermill.LogFields) map[string]interface{} {
	fields := make(map[string]interface{})
	for _, wf := range watermillFields {
		for k, v := range wf {
			fields[k] = v
		}
	}
	return fields
}
