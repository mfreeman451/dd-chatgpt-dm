package main

import (
	"github.com/mfreeman451/dd-chatgpt-dm/pkg/server"
)

func main() {
	grpcServer := server.NewServer()
	err := grpcServer.Start()
	if err != nil {
		return
	}
}
