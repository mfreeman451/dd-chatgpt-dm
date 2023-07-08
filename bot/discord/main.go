package main

import (
	"fmt"
	"github.com/bwmarrin/discordgo"
	"github.com/joho/godotenv"
	"log"
	"os"
	"os/signal"
	"syscall"
)

const (
	channelID = "1019335547145175092"
	botID     = "1127282771786743922"
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

	discord, err := discordgo.New("Bot " + authToken)
	if err != nil {
		panic(err)
	}

	// connect to discord server
	err = discord.Open()
	if err != nil {
		panic(err)
	}
	defer discord.Close() // Ensure the connection is closed when main returns

	// add handler for messageCreate events
	discord.AddHandler(messageCreate)

	// join the #Gaming channel
	/*
		_, err = discord.ChannelMessageSend(channelID, "The Dungeon Master has arrived!")
		if err != nil {
			panic(err)
		}

	*/

	// Wait here until CTRL-C or other term signal is received.
	fmt.Println("Bot is now running.  Press CTRL-C to exit.")
	sc := make(chan os.Signal, 1)
	signal.Notify(sc, syscall.SIGINT, syscall.SIGTERM, os.Interrupt, os.Kill)
	<-sc
}

// messageCreate is called whenever a message is created
func messageCreate(s *discordgo.Session, m *discordgo.MessageCreate) {
	// ignore messages created by the bot itself
	if m.Author.ID == s.State.User.ID {
		return
	}

	fmt.Println(m.Content)

	// if the message is "ping" reply with "Pong!"
	if m.Content == "ping" {
		_, _ = s.ChannelMessageSend(m.ChannelID, "Pong!")
	}

	// if the message is directed at the bot, reply with "I'm here!"
	if m.Content == fmt.Sprintf("<@%s> hi", botID) {
		msg := fmt.Sprintf("Yes hello, %s", m.Author.Mention())
		_, _ = s.ChannelMessageSend(m.ChannelID, msg)
	}
}
