package model

// RedisConfig holds the configuration for the Redis client.
type RedisConfig struct {
	Address  string
	Password string
	DB       int
}
