package client

import (
	"context"
	gamev1 "github.com/mfreeman451/dd-chatgpt-dm/gen/game/v1"
)

type response struct {
	Token string
}

func Login(ctx context.Context, req gamev1.LoginRequest) (response, error) {
	return response{"foobar"}, nil
}
