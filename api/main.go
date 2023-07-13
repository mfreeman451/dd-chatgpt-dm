package main

import "github.com/mfreeman/dd-chatgpt-dm/api/http/gofiber"

func main() {
	// Initialize HTTP server
	server := gofiber.NewServer()
	server.Start()
}
