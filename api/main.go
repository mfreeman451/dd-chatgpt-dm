package main

import (
	fiber "github.com/mfreeman451/dd-chatgpt-dm/internal/http/gofiber"
)

func main() {
	// Initialize HTTP server
	server := fiber.NewServer()
	server.Start()
}
