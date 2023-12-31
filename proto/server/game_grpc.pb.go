// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.3.0
// - protoc             (unknown)
// source: watermill.proto

package game

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

const (
	Game_CreatePlayer_FullMethodName = "/Game/CreatePlayer"
	Game_MovePlayer_FullMethodName   = "/Game/MovePlayer"
	Game_GetLocation_FullMethodName  = "/Game/GetLocation"
	Game_ListPlayers_FullMethodName  = "/Game/ListPlayers"
	Game_GetPlayer_FullMethodName    = "/Game/GetPlayer"
	Game_SetPlayer_FullMethodName    = "/Game/SetPlayer"
	Game_UpdatePlayer_FullMethodName = "/Game/UpdatePlayer"
)

// GameClient is the client API for Game service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type GameClient interface {
	CreatePlayer(ctx context.Context, in *CreatePlayerRequest, opts ...grpc.CallOption) (*CreatePlayerResponse, error)
	MovePlayer(ctx context.Context, in *MovePlayerRequest, opts ...grpc.CallOption) (*MovePlayerResponse, error)
	GetLocation(ctx context.Context, in *GetLocationRequest, opts ...grpc.CallOption) (*GetLocationResponse, error)
	ListPlayers(ctx context.Context, in *ListPlayersRequest, opts ...grpc.CallOption) (*ListPlayersResponse, error)
	GetPlayer(ctx context.Context, in *GetPlayerRequest, opts ...grpc.CallOption) (*GetPlayerResponse, error)
	SetPlayer(ctx context.Context, in *SetPlayerRequest, opts ...grpc.CallOption) (*SetPlayerResponse, error)
	UpdatePlayer(ctx context.Context, in *UpdatePlayerRequest, opts ...grpc.CallOption) (*UpdatePlayerResponse, error)
}

type gameClient struct {
	cc grpc.ClientConnInterface
}

func NewGameClient(cc grpc.ClientConnInterface) GameClient {
	return &gameClient{cc}
}

func (c *gameClient) CreatePlayer(ctx context.Context, in *CreatePlayerRequest, opts ...grpc.CallOption) (*CreatePlayerResponse, error) {
	out := new(CreatePlayerResponse)
	err := c.cc.Invoke(ctx, Game_CreatePlayer_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *gameClient) MovePlayer(ctx context.Context, in *MovePlayerRequest, opts ...grpc.CallOption) (*MovePlayerResponse, error) {
	out := new(MovePlayerResponse)
	err := c.cc.Invoke(ctx, Game_MovePlayer_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *gameClient) GetLocation(ctx context.Context, in *GetLocationRequest, opts ...grpc.CallOption) (*GetLocationResponse, error) {
	out := new(GetLocationResponse)
	err := c.cc.Invoke(ctx, Game_GetLocation_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *gameClient) ListPlayers(ctx context.Context, in *ListPlayersRequest, opts ...grpc.CallOption) (*ListPlayersResponse, error) {
	out := new(ListPlayersResponse)
	err := c.cc.Invoke(ctx, Game_ListPlayers_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *gameClient) GetPlayer(ctx context.Context, in *GetPlayerRequest, opts ...grpc.CallOption) (*GetPlayerResponse, error) {
	out := new(GetPlayerResponse)
	err := c.cc.Invoke(ctx, Game_GetPlayer_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *gameClient) SetPlayer(ctx context.Context, in *SetPlayerRequest, opts ...grpc.CallOption) (*SetPlayerResponse, error) {
	out := new(SetPlayerResponse)
	err := c.cc.Invoke(ctx, Game_SetPlayer_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *gameClient) UpdatePlayer(ctx context.Context, in *UpdatePlayerRequest, opts ...grpc.CallOption) (*UpdatePlayerResponse, error) {
	out := new(UpdatePlayerResponse)
	err := c.cc.Invoke(ctx, Game_UpdatePlayer_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// GameServer is the server API for Game service.
// All implementations must embed UnimplementedGameServer
// for forward compatibility
type GameServer interface {
	CreatePlayer(context.Context, *CreatePlayerRequest) (*CreatePlayerResponse, error)
	MovePlayer(context.Context, *MovePlayerRequest) (*MovePlayerResponse, error)
	GetLocation(context.Context, *GetLocationRequest) (*GetLocationResponse, error)
	ListPlayers(context.Context, *ListPlayersRequest) (*ListPlayersResponse, error)
	GetPlayer(context.Context, *GetPlayerRequest) (*GetPlayerResponse, error)
	SetPlayer(context.Context, *SetPlayerRequest) (*SetPlayerResponse, error)
	UpdatePlayer(context.Context, *UpdatePlayerRequest) (*UpdatePlayerResponse, error)
	mustEmbedUnimplementedGameServer()
}

// UnimplementedGameServer must be embedded to have forward compatible implementations.
type UnimplementedGameServer struct {
}

func (UnimplementedGameServer) CreatePlayer(context.Context, *CreatePlayerRequest) (*CreatePlayerResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreatePlayer not implemented")
}
func (UnimplementedGameServer) MovePlayer(context.Context, *MovePlayerRequest) (*MovePlayerResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method MovePlayer not implemented")
}
func (UnimplementedGameServer) GetLocation(context.Context, *GetLocationRequest) (*GetLocationResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetLocation not implemented")
}
func (UnimplementedGameServer) ListPlayers(context.Context, *ListPlayersRequest) (*ListPlayersResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ListPlayers not implemented")
}
func (UnimplementedGameServer) GetPlayer(context.Context, *GetPlayerRequest) (*GetPlayerResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetPlayer not implemented")
}
func (UnimplementedGameServer) SetPlayer(context.Context, *SetPlayerRequest) (*SetPlayerResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method SetPlayer not implemented")
}
func (UnimplementedGameServer) UpdatePlayer(context.Context, *UpdatePlayerRequest) (*UpdatePlayerResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UpdatePlayer not implemented")
}
func (UnimplementedGameServer) mustEmbedUnimplementedGameServer() {}

// UnsafeGameServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to GameServer will
// result in compilation errors.
type UnsafeGameServer interface {
	mustEmbedUnimplementedGameServer()
}

func RegisterGameServer(s grpc.ServiceRegistrar, srv GameServer) {
	s.RegisterService(&Game_ServiceDesc, srv)
}

func _Game_CreatePlayer_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CreatePlayerRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(GameServer).CreatePlayer(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: Game_CreatePlayer_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(GameServer).CreatePlayer(ctx, req.(*CreatePlayerRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Game_MovePlayer_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(MovePlayerRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(GameServer).MovePlayer(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: Game_MovePlayer_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(GameServer).MovePlayer(ctx, req.(*MovePlayerRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Game_GetLocation_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetLocationRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(GameServer).GetLocation(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: Game_GetLocation_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(GameServer).GetLocation(ctx, req.(*GetLocationRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Game_ListPlayers_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListPlayersRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(GameServer).ListPlayers(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: Game_ListPlayers_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(GameServer).ListPlayers(ctx, req.(*ListPlayersRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Game_GetPlayer_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetPlayerRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(GameServer).GetPlayer(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: Game_GetPlayer_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(GameServer).GetPlayer(ctx, req.(*GetPlayerRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Game_SetPlayer_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(SetPlayerRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(GameServer).SetPlayer(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: Game_SetPlayer_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(GameServer).SetPlayer(ctx, req.(*SetPlayerRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Game_UpdatePlayer_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UpdatePlayerRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(GameServer).UpdatePlayer(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: Game_UpdatePlayer_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(GameServer).UpdatePlayer(ctx, req.(*UpdatePlayerRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// Game_ServiceDesc is the grpc.ServiceDesc for Game service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var Game_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "Game",
	HandlerType: (*GameServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "CreatePlayer",
			Handler:    _Game_CreatePlayer_Handler,
		},
		{
			MethodName: "MovePlayer",
			Handler:    _Game_MovePlayer_Handler,
		},
		{
			MethodName: "GetLocation",
			Handler:    _Game_GetLocation_Handler,
		},
		{
			MethodName: "ListPlayers",
			Handler:    _Game_ListPlayers_Handler,
		},
		{
			MethodName: "GetPlayer",
			Handler:    _Game_GetPlayer_Handler,
		},
		{
			MethodName: "SetPlayer",
			Handler:    _Game_SetPlayer_Handler,
		},
		{
			MethodName: "UpdatePlayer",
			Handler:    _Game_UpdatePlayer_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "watermill.proto",
}
