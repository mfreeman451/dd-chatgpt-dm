package server

import (
	"fmt"
	pb "github.com/mfreeman451/dd-chatgpt-dm/server/pb/game"
	"github.com/redis/go-redis/v9"
	"google.golang.org/grpc"
	"net"
)

// GRPCServer is a gRPC server
type GRPCServer struct {
	// Embedded gRPC server
	grpc *grpc.Server
}

// NewGRPCServer creates a new gRPC server
func NewGRPCServer(service pb.GameServer) *GRPCServer {
	// var log = logger.New()

	// Initialize gRPC server
	grpcServer := grpc.NewServer()

	// Register service implementation
	pb.RegisterGameServer(grpcServer, service)

	// Return the gRPC server
	return &GRPCServer{
		grpc: grpcServer,
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
