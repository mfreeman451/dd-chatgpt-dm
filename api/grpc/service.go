package grpc

import (
	"context"
)

type RoomServiceServer struct {
	room.UnimplementedRoomServiceServer
}

func (s *RoomServiceServer) GetRoom(ctx context.Context, req *room.RoomRequest) (*room.RoomResponse, error) {
	// Here you would typically fetch the room details based on the coordinates in req
	// For now, let's just return a dummy response
	return &room.RoomResponse{
		Description: "You are in a dark, cold room. There is a door to the north.",
		Items:       []string{"a rusty sword", "a torch"},
		Npcs:        []string{"a goblin"},
	}, nil
}
