package dnd

import (
	"context"
	"errors"
	"fmt"
)

type Room struct {
	Description string
	Items       []string
	Npcs        []string
}

type RoomServiceServer struct {
	rooms map[string]*Room
}

func NewRoomServiceServer() *RoomServiceServer {
	// Initialize the map of rooms
	rooms := make(map[string]*Room)

	// Add a dummy room
	rooms["0,0,0"] = &Room{
		Description: "You are in a dark, cold room. There is a door to the north.",
		Items:       []string{"a rusty sword", "a torch"},
		Npcs:        []string{"a goblin"},
	}

	return &RoomServiceServer{rooms: rooms}
}

func (s *RoomServiceServer) GetRoom(ctx context.Context, req *RoomRequest) (*RoomResponse, error) {
	// Convert the coordinates to a string
	coords := fmt.Sprintf("%d,%d,%d", req.GetX(), req.GetY(), req.GetZ())

	// Fetch the room from the map
	room, ok := s.rooms[coords]
	if !ok {
		return nil, errors.New("room not found")
	}

	// Convert the room to a RoomResponse
	res := &RoomResponse{
		Description: room.Description,
		Items:       room.Items,
		Npcs:        room.Npcs,
	}

	return res, nil
}
