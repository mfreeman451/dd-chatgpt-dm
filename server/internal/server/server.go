package server

import (
	"context"
	"fmt"
	"github.com/improbable-eng/grpc-web/go/grpcweb"
	"github.com/mfreeman451/dd-chatgpt-dm/gen/game/v1/gamev1connect"
	"github.com/mfreeman451/dd-chatgpt-dm/server/internal/logger"
	"google.golang.org/grpc"
	"net"
	"net/http"
)

// GRPCServer is a gRPC server
type GRPCServer struct {
	// Embedded gRPC server
	grpc *grpc.Server
	port int
	Log  logger.Logger
}

type GRPCWebService struct {
	GrpcWebServer *grpcweb.WrappedGrpcServer
	Port          int
	Log           logger.Logger
}

func (s *GRPCWebService) Serve(ctx context.Context) error {
	// Start the server in a separate goroutine
	go func() {
		s.Log.Info().Msg("starting grpc-web server on port 8080")
		if err := http.ListenAndServe(fmt.Sprintf(":%d", s.Port), s.GrpcWebServer); err != nil {
			s.Log.Fatal().Err(err).Msg("failed to start grpc-web server")
		}
	}()

	// Block until the context is cancelled
	<-ctx.Done()

	// The context was cancelled, so stop the server
	// Note: grpcweb.WrappedGrpcServer doesn't provide a Stop or GracefulStop method,
	// so we can't stop it here. It will be stopped when the program exits.

	return ctx.Err()
}

func (s *GRPCServer) Serve(ctx context.Context) error {
	// Start the server in a separate goroutine
	go func() {
		if err := s.Start(s.port); err != nil {
			// If the server returns an error, log it and exit
			s.Log.Fatal().Err(err).Msg("failed to start server")
		}
	}()

	// Block until the context is cancelled
	<-ctx.Done()

	// The context was cancelled, so stop the server
	s.Stop()

	return ctx.Err()
}

// NewGRPCServer creates a new gRPC server
func NewGRPCServer(service gamev1connect.GameClient, port int, log logger.Logger) *GRPCServer {
	// Initialize gRPC server
	grpcServer := grpc.NewServer()

	// Return the gRPC server
	return &GRPCServer{
		grpc: grpcServer,
		port: port,
		Log:  log,
	}
}

// Start starts the gRPC server
func (s *GRPCServer) Start(port int) error {
	lis, err := net.Listen("tcp", fmt.Sprintf(":%d", port))
	if err != nil {
		return err
	}

	return s.grpc.Serve(lis)
}

// Stop stops the gRPC server
func (s *GRPCServer) Stop() {
	s.grpc.GracefulStop()
}

// SetOptions sets the options for the gRPC server
func (s *GRPCServer) SetOptions(options ...grpc.ServerOption) {
	s.grpc = grpc.NewServer(options...)
}

// GetGRPCServer returns the underlying grpc.Server instance
func (s *GRPCServer) GetGRPCServer() *grpc.Server {
	return s.grpc
}

// RedisConfig holds the configuration for the Redis client
type RedisConfig struct {
	Address  string
	Password string
	DB       int
}

// NewRedisClient creates a new Redis client
func NewRedisClient(cfg RedisConfig) (*redis.Client, error) {
	return redis.NewClient(&redis.Options{
		Addr:     cfg.Address,
		Password: cfg.Password,
		DB:       cfg.DB,
	}), nil
}
