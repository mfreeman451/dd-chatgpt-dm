package main

import (
	"github.com/mfreeman451/dd-chatgpt-dm/internal/http/fiber"
)

func main() {
	// Initialize HTTP server
	server := fiber.NewServer()
	server.Start()
}
