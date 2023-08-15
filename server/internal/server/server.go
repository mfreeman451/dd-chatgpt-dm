package server

import (
	"context"
	"fmt"
	"github.com/mfreeman451/dd-chatgpt-dm/server/internal/logger"
	"github.com/redis/go-redis/v9"
	"net"
	"net/http"
)

type ConnectServer struct {
	Addr    string
	Handler http.Handler
	Port    int
	Log     logger.Logger
}

func (s *ConnectServer) Serve(ctx context.Context) error {
	// Start the server in a separate goroutine
	go func() {
		s.Log.Info().Msg("starting connect server on port 8081")
		if err := http.ListenAndServe(fmt.Sprintf(":%d", s.Port), s.Handler); err != nil {
			s.Log.Fatal().Err(err).Msg("failed to start connect server")
		}
	}()

	// Block until the context is cancelled
	<-ctx.Done()

	// The context was cancelled, so stop the server
	s.Stop()
	return ctx.Err()
}

// Start starts the go-connect GRPC server
func (s *ConnectServer) Start(port int) error {
	lis, err := net.Listen("tcp", fmt.Sprintf(":%d", port))
	if err != nil {
		return err
	}

	return s.Handler.ServeHTTP(lis)
}

// Stop stops the go-connect GRPC server
func (s *ConnectServer) Stop() {
	// TODO: implement, ConnectServer has no Stop method

}

func (s *ConnectServer) Error() {
	// TODO: implement, ConnectServer has no Error method
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
