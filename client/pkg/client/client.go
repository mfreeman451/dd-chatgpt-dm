package client

import (
	"context"
	"github.com/mfreeman451/dd-chatgpt-dm/client/pb/game"
)

type response struct {
	Token string
}

func Login(ctx context.Context, req *game.LoginRequest) (response, error) {
	return response{"foobar"}, nil
}
