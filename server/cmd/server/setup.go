package server

import (
	"context"
	"fmt"
	"github.com/ThreeDotsLabs/watermill/message"
	"github.com/mfreeman451/dd-chatgpt-dm/server/cmd/metrics"
	"github.com/mfreeman451/dd-chatgpt-dm/server/internal/logger"
	"github.com/mfreeman451/dd-chatgpt-dm/server/internal/server"
	"github.com/mfreeman451/dd-chatgpt-dm/server/internal/service"
	"github.com/mfreeman451/dd-chatgpt-dm/server/pkg/db"
	"github.com/mfreeman451/dd-chatgpt-dm/server/pkg/db/cache"
	"github.com/mfreeman451/dd-chatgpt-dm/server/pkg/watermill"
	"golang.org/x/net/http2"
	"golang.org/x/net/http2/h2c"
	"net/http"
	"os"
	"strconv"
)

func SetupServer(log logger.Logger) (*server.ConnectServer, message.Subscriber, *metrics.Service, error) {
	// Create DB instance, pass in .env variables
	dbConnStr := os.Getenv("DB_CONN_STR")
	dbType := os.Getenv("DB_TYPE")

	dbInstance, err := db.NewDB(dbConnStr, dbType)
	if err != nil {
		log.Fatal().Err(err).Msg("failed to create DB instance")
		return nil, nil, nil, err
	}

	// Create Redis client using the custom package
	rdb := cache.NewClient(&cache.Options{
		Address:  os.Getenv("REDIS_ADDRESS"),
		Password: os.Getenv("REDIS_PASSWORD"),
		DB:       0,
	})

	// test Redis connection
	redRes, err := rdb.Ping(context.Background())
	if err != nil {
		log.Fatal().Err(err).Msg("failed to connect to Redis")
		return nil, nil, nil, err
	}
	log.Info().Msgf("Redis ping result: %s", redRes)

	// Create the CQRS components
	commandProcessor, eventProcessor, publisher, subscriber, err := watermill.NewCQRS(log)
	if err != nil {
		log.Fatal().Err(err).Msg("failed to create CQRS components")
		return nil, nil, nil, err
	}

	// Create the command handler
	createGameCommandHandler := &watermill.CreateGameCommandHandler{}

	// Add the command handler to the command processor
	err = commandProcessor.AddHandlers(createGameCommandHandler)
	if err != nil {
		log.Fatal().Err(err).Msg("failed to add command handler")
	}

	// Create the event handler
	gameCreatedEventHandler := &watermill.GameCreatedEventHandler{}

	// Add the event handler to the event processor
	err = eventProcessor.AddHandlers(gameCreatedEventHandler)
	if err != nil {
		log.Fatal().Err(err).Msg("failed to add event handler")
	}

	// Create Service
	srv := service.NewService(dbInstance, rdb, publisher)

	// Create Connect server
	mux := http.NewServeMux()
	// TODO: fix this
	// mux.Handle(gamev1.NewGameServiceHandler(srv)) // Assuming you have the appropriate handler for your service

	httpPort, err := strconv.Atoi(os.Getenv("CONNECT_PORT"))
	if err != nil {
		log.Fatal().Err(err).Msg("failed to convert CONNECT_PORT to int")
		return nil, nil, nil, err
	}
	httpAddr := fmt.Sprintf("localhost:%d", httpPort)

	connectServer := &server.ConnectServer{
		Addr:    httpAddr,
		Handler: h2c.NewHandler(mux, &http2.Server{}),
		Log:     log,
	}

	metricsService := metrics.NewMetricsService(log)

	return connectServer, subscriber, metricsService, nil
}
