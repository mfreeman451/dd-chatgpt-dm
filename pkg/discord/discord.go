package discord

import "github.com/bwmarrin/discordgo"

type DiscordAPI struct {
	Client *discordgo.Session
}

// New initializes and returns a new DiscordAPI instance
func New(apiKey string) *DiscordAPI {
	client, err := discordgo.New("Bot " + apiKey)
	if err != nil {
		panic(err)
	}

	// connect to discord server
	err = client.Open()
	if err != nil {
		panic(err)
	}

	return &DiscordAPI{Client: client}
}
