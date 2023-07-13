package gofiber

import "github.com/gofiber/fiber/v2"

type Server struct {
	app *fiber.App
}

func NewServer() *Server {
	app := fiber.New()
	server := &Server{
		app: app,
	}
	server.setupRoutes()
	return server
}

func (s *Server) setupRoutes() {
	// Setup routes here
	// For example:
	// s.app.Get("/ping", s.handlePing)
}

func (s *Server) Start() {
	// Start the server here
	// For example:
	// s.app.Listen(":3000")
}
