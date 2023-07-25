package model

import "github.com/mfreeman451/dd-chatgpt-dm/server/pb/game"

type Exit struct {
	Direction string
	Location  *Location
}

type Location struct {
	ID          string
	Name        string
	Description string
	Exits       []Exit
	Coordinates *game.Coordinates
	Items       []*Item // Add this field for items
	NPCs        []*NPC  // Add this field for NPCs
}

type Item struct {
	Name string
}

type NPC struct {
	Name string
}
