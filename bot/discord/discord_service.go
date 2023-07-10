package discord

import (
	"fmt"
	"github.com/bwmarrin/discordgo"
	"os"
)

type Service struct {
	API *DiscordAPI
}

func NewService(api *DiscordAPI) *Service {
	// add handler for messageCreate events
	api.Client.AddHandler(messageCreate)

	return &Service{API: api}
}

func (s *Service) Open() error {
	return s.API.Client.Open()
}

func (s *Service) Close() error {
	return s.API.Client.Close()
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

	botID := os.Getenv("BOT_ID")

	// if the message is directed at the bot, reply with "I'm here!"
	if m.Content == fmt.Sprintf("<@%s> hi", botID) {
		msg := fmt.Sprintf("Yes hello, %s", m.Author.Mention())
		_, _ = s.ChannelMessageSend(m.ChannelID, msg)
	}
}
