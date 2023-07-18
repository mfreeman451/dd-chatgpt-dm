package service

import (
	"context"
	pb "github.com/mfreeman451/dd-chatgpt-dm/server/pb/game"
	mydb "github.com/mfreeman451/dd-chatgpt-dm/server/pkg/db"
)

type Service struct {
	db mydb.DB
}

func NewService(db mydb.DB) *Service {
	return &Service{db: db}
}

func (s *Service) CreatePlayer(ctx context.Context, req *pb.CreatePlayerRequest) (*pb.CreatePlayerResponse, error) {

	// create player in DB
	id, err := s.db.CreatePlayer(ctx, req.Name)
	if err != nil {
		return nil, err
	}

	return &pb.CreatePlayerResponse{
		Player: &pb.Player{Id: id},
	}, nil
}

// Other service methods
