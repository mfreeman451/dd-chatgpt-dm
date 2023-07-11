package main

import (
	"github.com/joho/godotenv"
	"github.com/mfreeman451/dd-chatgpt-dm/pkg/discord"
	"log"
	"os"
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

	discordAPI := discord.New("Bot " + authToken)
	discordService := discord.NewService(discordAPI)

	// connect to discord server
	err = discordService.Open()
	if err != nil {
		panic(err)
	}
	defer discordService.Close() // Ensure the connection is closed
