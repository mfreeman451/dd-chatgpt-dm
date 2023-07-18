package main

import (
	"github.com/mfreeman451/dd-chatgpt-dm/internal/grpc"
)

func main() {
	grpcServer := grpc.NewServer()
	grpcServer.Start()
}
