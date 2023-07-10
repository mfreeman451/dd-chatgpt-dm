package discord

type Service struct {
	Store      MessageStore
	DiscordAPI *DiscordAPI
}

func NewService(discordAPI *DiscordAPI, store MessageStore) *Service {
	return &Service{
		DiscordAPI: discordAPI,
		Store:      store,
	}
}
