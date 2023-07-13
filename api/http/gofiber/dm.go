package gofiber

import (
	fume "github.com/fumeapp/fiber"
	"github.com/fumeapp/tonic"
	"github.com/gofiber/fiber/v2"
)

type Server struct {
	app *fiber.App
}

func NewServer() *Server {
	app := tonic.Init(&fiber.Config{})

	server := &Server{
		app: app,
	}
	server.setupRoutes()
	return server
}

func (s *Server) setupRoutes() {
	// Setup routes here
	// For example:
	s.app.Get("/ping", s.handlePing)
}

func (s *Server) Start() {
	// Start the server here
	fume.Start(s.app, fume.Options{})
}
