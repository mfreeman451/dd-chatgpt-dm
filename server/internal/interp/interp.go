package interp

import (
	"fmt"
	"github.com/ThreeDotsLabs/watermill/message"
	"strings"
)

type Command struct {
	Action string
	Args   []string
}

func NewCommand(msg *message.Message) *Command {
	input := string(msg.Payload)
	parts := strings.Fields(input)
	return &Command{
		Action: parts[0],
		Args:   parts[1:],
	}
}

type Game struct {
	// game state goes here
}

func (g *Game) ExecuteCommand(cmd *Command) {
	switch cmd.Action {
	case "n", "e", "s", "w":
		g.move(cmd.Action)
	case "say":
		if len(cmd.Args) > 0 {
			g.say(strings.Join(cmd.Args, " "))
		} else {
			// handle error: say command requires an argument
		}
	// add more commands here
	default:
		// handle unknown command
	}
}

func (g *Game) move(direction string) {
	// implementation of move command goes here
	// direction will be one of "n", "e", "s", "w"
	fmt.Println("You move", direction)
}

func (g *Game) say(message string) {
	// implementation of say command goes here
	// message will be the argument to the say command
}

func (g *Game) look(args []string) {
	// implementation of look command goes here
}
