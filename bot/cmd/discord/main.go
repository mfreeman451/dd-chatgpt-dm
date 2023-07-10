package main

import (
	"fmt"
	"github.com/joho/godotenv"
	"github.com/mfreeman451/dd-chatgpt-dm/bot/pkg/discord"
	"log"
	"os"
	"os/signal"
	"syscall"
)

func main() {
	// bring in .env
	err := godotenv.Load()
	if err != nil {
		log.Fatalln("Error loading .env file")
	}

	authToken := os.Getenv("DISCORD_AUTH_TOKEN")
	if authToken == "" {
		log.Fatalln("DISCORD_AUTH_TOKEN not set")
	}

	discordService, err := discord.NewService("Bot " + authToken)
	if err != nil {
		panic(err)
	}

	// connect to discord server
	err = discordService.Open()
	if err != nil {
		panic(err)
	}
	defer discordService.Close() // Ensure the connection is closed when main returns

	// Wait here until CTRL-C or other term signal is received.
	fmt.Println("Bot is now running.  Press CTRL-C to exit.")
	sc := make(chan os.Signal, 1)
	signal.Notify(sc, syscall.SIGINT, syscall.SIGTERM, os.Interrupt, os.Kill)
	<-sc
}
