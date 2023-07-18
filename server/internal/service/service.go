package service

import (
	"context"
	pb "github.com/mfreeman451/dd-chatgpt-dm/server/pb/game"
	mydb "github.com/mfreeman451/dd-chatgpt-dm/server/pkg/db"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

type Service struct {
	pb.UnimplementedGameServer
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

func (s *Service) MovePlayer(ctx context.Context, req *pb.MovePlayerRequest) (*pb.MovePlayerResponse, error) {
	// TODO: implement
	return nil, status.Errorf(codes.Unimplemented, "not implemented yet")
}

func (s *Service) GetLocation(ctx context.Context, req *pb.GetLocationRequest) (*pb.GetLocationResponse, error) {
	// TODO: implement
	return nil, status.Errorf(codes.Unimplemented, "not implemented yet")
}

func (s *Service) mustEmbedUnimplementedGameServer() {}
