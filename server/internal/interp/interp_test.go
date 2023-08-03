package interp

import (
	"github.com/ThreeDotsLabs/watermill/message"
	"testing"
)

func TestExecuteCommand(t *testing.T) {
	g := &Game{}

	// Test moving north
	cmd := NewCommand(message.NewMessage("1", []byte("n")))
	g.ExecuteCommand(cmd)

	// Test moving east
	cmd = NewCommand(message.NewMessage("1", []byte("e")))
	g.ExecuteCommand(cmd)

	// Test moving south
	cmd = NewCommand(message.NewMessage("1", []byte("s")))
	g.ExecuteCommand(cmd)

	// Test moving west
	cmd = NewCommand(message.NewMessage("1", []byte("w")))
	g.ExecuteCommand(cmd)

	// Test saying something
	cmd = NewCommand(message.NewMessage("1", []byte("say hello")))
	g.ExecuteCommand(cmd)

	// Test an unknown command
	cmd = NewCommand(message.NewMessage("1", []byte("unknown")))
	g.ExecuteCommand(cmd)
}
