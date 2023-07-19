package service

import (
	"context"
	"errors"
	"github.com/mfreeman451/dd-chatgpt-dm/server/internal/model"
	pb "github.com/mfreeman451/dd-chatgpt-dm/server/pb/game"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
	"reflect"
	"testing"
)

type mockDB struct {
	player *model.Player
	err    error
}

func (m *mockDB) GetPlayer(ctx context.Context, id string) (*model.Player, error) {
	return &model.Player{
		ID:   "123",
		Name: "Test Player",
	}, nil
}

func (m *mockDB) CreatePlayer(ctx context.Context, player *model.Player) (string, error) {
	player.ID = "123"
	return player.ID, m.err
}

func TestCreatePlayer(t *testing.T) {

	db := &mockDB{}

	srv := NewService(db)

	req := &pb.CreatePlayerRequest{
		Name: "John",
	}

	resp, err := srv.CreatePlayer(context.Background(), req)

	if err != nil {
		t.Fatal(err)
	}

	want := &pb.Player{Name: "John"}

	if !reflect.DeepEqual(resp.Player, want) {
		t.Errorf("unexpected player %v, want %v", resp.Player, want)
	}
}

func TestCreatePlayerDBError(t *testing.T) {

	// Create a mock DB that returns an error
	db := &mockDB{err: errors.New("db error")}

	srv := NewService(db)

	// Call the method
	req := &pb.CreatePlayerRequest{Name: "John"}
	resp, err := srv.CreatePlayer(context.Background(), req)

	// Assert we got the expected error
	if err == nil {
		t.Fatal("Expected error but got nil")
	}

	grpcErr, ok := status.FromError(err)
	if !ok {
		t.Fatal("Expected gRPC error as result")
	}

	if grpcErr.Code() != codes.Internal {
		t.Errorf("Expected Internal error code but got %v", grpcErr.Code())
	}

	if grpcErr.Message() != "failed to create player: db error" {
		t.Errorf("Unexpected error message %q", grpcErr.Message())
	}

	// Assert response is nil
	if resp != nil {
		t.Error("Expected nil response on error")
	}
}
