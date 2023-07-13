package grpc

import (
	"context"
)

type RoomServiceServer struct {
	dnd.UnimplementedRoomServiceServer
}

func (s *RoomServiceServer) GetRoom(ctx context.Context, req *dnd.RoomRequest) (*dnd.RoomResponse, error) {
	// Here you would typically fetch the room details based on the coordinates in req
	// For now, let's just return a dummy response
	return &dnd.RoomResponse{
		Description: "You are in a dark, cold room. There is a door to the north.",
		Items:       []string{"a rusty sword", "a torch"},
		Npcs:        []string{"a goblin"},
	}, nil
}
