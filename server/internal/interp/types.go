package interp

// type commandCallback func(context.Context, atlas.Player, ...string) error

type Command struct {
	Name   string
	Alias  []string
	Action string
	Args   []string
	// Fn    commandCallback
}

type Input struct {
	Text string
}

type Interp interface {
	Register(*Command)
}
