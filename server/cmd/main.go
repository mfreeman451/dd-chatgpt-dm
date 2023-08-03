package main

import (
	"context"
	"github.com/joho/godotenv"
	"github.com/mfreeman451/dd-chatgpt-dm/server/internal/janitor"
	"os"
	"os/signal"
	"syscall"

	"github.com/mfreeman451/dd-chatgpt-dm/server/cmd/server"
	"github.com/mfreeman451/dd-chatgpt-dm/server/internal/logger"
	"github.com/thejerf/suture/v4"
)

func main() {
	log := logger.New()

	// load .env
	if err := godotenv.Load(); err != nil {
		log.Fatal().Err(err).Msg("failed to load .env file")
	}

	// Create a new suture supervisor
	supervisor := suture.New("main", suture.Spec{})

	// Create a context for the supervisor
	supCtx, cancel := context.WithCancel(context.Background())
	defer cancel()

	// Start the supervisor in a separate goroutine
	go func() {
		grpcServer, grpcWebService, subscriber, err := server.SetupServer(log)
		if err != nil {
			log.Fatal().Err(err).Msg("failed to set up server")
			return
		}

		// Add the GRPC server and GRPC web service to the supervisor
		supervisor.Add(grpcServer)
		supervisor.Add(grpcWebService)

		// Create the Janitor Bot
		janitorBot := janitor.NewJanitorBot(subscriber, log)

		// Add the Janitor Bot as a service to the supervisor
		supervisor.Add(janitorBot)

		// You can also add the subscriber to the supervisor if it implements the suture.Service interface

		err = supervisor.Serve(supCtx)
		if err != nil {
			log.Fatal().Err(err).Msg("failed to start supervisor")
		}
	}()

	// Set up signal handling for graceful shutdown
	stop := make(chan os.Signal, 1)
	signal.Notify(stop, os.Interrupt, syscall.SIGTERM)

	// Wait for the termination signal
	<-stop

	log.Info().Msg("Shutting down server...")

	// Gracefully stop the GRPC server
	cancel()

	log.Info().Msg("Server gracefully stopped")
}
