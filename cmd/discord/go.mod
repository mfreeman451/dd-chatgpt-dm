module github.com/mfreeman451/dd-chatgpt-dm

go 1.20

replace github.com/mfreeman451/dd-chatgpt-dm/pkg/discord => ../../pkg/discord

require (
	github.com/joho/godotenv v1.5.1
	github.com/mfreeman451/dd-chatgpt-dm/pkg/discord v0.0.0-20230711031624-b24d6406a3d9
)

require (
	github.com/bwmarrin/discordgo v0.27.1 // indirect
	github.com/gorilla/websocket v1.5.0 // indirect
	golang.org/x/crypto v0.11.0 // indirect
	golang.org/x/sys v0.10.0 // indirect
)
