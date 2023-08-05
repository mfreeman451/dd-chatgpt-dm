// Code generated by protoc-gen-connect-go. DO NOT EDIT.
//
// Source: game/v1/game.proto

package gamev1connect

import (
	context "context"
	errors "errors"
	connect_go "github.com/bufbuild/connect-go"
	v1 "github.com/mfreeman451/dd-chatgpt-dm/gen/game/v1"
	http "net/http"
	strings "strings"
)

// This is a compile-time assertion to ensure that this generated file and the connect package are
// compatible. If you get a compiler error that this constant is not defined, this code was
// generated with a version of connect newer than the one compiled into your binary. You can fix the
// problem by either regenerating this code with an older version of connect or updating the connect
// version compiled into your binary.
const _ = connect_go.IsAtLeastVersion0_1_0

const (
	// GameName is the fully-qualified name of the Game service.
	GameName = "game.v1.Game"
)

// These constants are the fully-qualified names of the RPCs defined in this package. They're
// exposed at runtime as Spec.Procedure and as the final two segments of the HTTP route.
//
// Note that these are different from the fully-qualified method names used by
// google.golang.org/protobuf/reflect/protoreflect. To convert from these constants to
// reflection-formatted method names, remove the leading slash and convert the remaining slash to a
// period.
const (
	// GameCreatePlayerProcedure is the fully-qualified name of the Game's CreatePlayer RPC.
	GameCreatePlayerProcedure = "/game.v1.Game/CreatePlayer"
	// GameMovePlayerProcedure is the fully-qualified name of the Game's MovePlayer RPC.
	GameMovePlayerProcedure = "/game.v1.Game/MovePlayer"
	// GameGetLocationProcedure is the fully-qualified name of the Game's GetLocation RPC.
	GameGetLocationProcedure = "/game.v1.Game/GetLocation"
	// GameListPlayersProcedure is the fully-qualified name of the Game's ListPlayers RPC.
	GameListPlayersProcedure = "/game.v1.Game/ListPlayers"
	// GameGetPlayerProcedure is the fully-qualified name of the Game's GetPlayer RPC.
	GameGetPlayerProcedure = "/game.v1.Game/GetPlayer"
	// GameSetPlayerProcedure is the fully-qualified name of the Game's SetPlayer RPC.
	GameSetPlayerProcedure = "/game.v1.Game/SetPlayer"
	// GameUpdatePlayerProcedure is the fully-qualified name of the Game's UpdatePlayer RPC.
	GameUpdatePlayerProcedure = "/game.v1.Game/UpdatePlayer"
	// GameGetRoomStateProcedure is the fully-qualified name of the Game's GetRoomState RPC.
	GameGetRoomStateProcedure = "/game.v1.Game/GetRoomState"
	// GameSocialLoginProcedure is the fully-qualified name of the Game's SocialLogin RPC.
	GameSocialLoginProcedure = "/game.v1.Game/SocialLogin"
	// GameLoginProcedure is the fully-qualified name of the Game's Login RPC.
	GameLoginProcedure = "/game.v1.Game/Login"
	// GameLinkSocialAccountProcedure is the fully-qualified name of the Game's LinkSocialAccount RPC.
	GameLinkSocialAccountProcedure = "/game.v1.Game/LinkSocialAccount"
	// GameUnlinkSocialAccountProcedure is the fully-qualified name of the Game's UnlinkSocialAccount
	// RPC.
	GameUnlinkSocialAccountProcedure = "/game.v1.Game/UnlinkSocialAccount"
	// GameExecuteCommandProcedure is the fully-qualified name of the Game's ExecuteCommand RPC.
	GameExecuteCommandProcedure = "/game.v1.Game/ExecuteCommand"
	// GameCreateGameProcedure is the fully-qualified name of the Game's CreateGame RPC.
	GameCreateGameProcedure = "/game.v1.Game/CreateGame"
	// GameStartGameProcedure is the fully-qualified name of the Game's StartGame RPC.
	GameStartGameProcedure = "/game.v1.Game/StartGame"
	// GameEndGameProcedure is the fully-qualified name of the Game's EndGame RPC.
	GameEndGameProcedure = "/game.v1.Game/EndGame"
)

// GameClient is a client for the game.v1.Game service.
type GameClient interface {
	CreatePlayer(context.Context, *connect_go.Request[v1.CreatePlayerRequest]) (*connect_go.Response[v1.CreatePlayerResponse], error)
	MovePlayer(context.Context, *connect_go.Request[v1.MovePlayerRequest]) (*connect_go.Response[v1.MovePlayerResponse], error)
	GetLocation(context.Context, *connect_go.Request[v1.GetLocationRequest]) (*connect_go.Response[v1.GetLocationResponse], error)
	ListPlayers(context.Context, *connect_go.Request[v1.ListPlayersRequest]) (*connect_go.Response[v1.ListPlayersResponse], error)
	GetPlayer(context.Context, *connect_go.Request[v1.GetPlayerRequest]) (*connect_go.Response[v1.GetPlayerResponse], error)
	SetPlayer(context.Context, *connect_go.Request[v1.SetPlayerRequest]) (*connect_go.Response[v1.SetPlayerResponse], error)
	UpdatePlayer(context.Context, *connect_go.Request[v1.UpdatePlayerRequest]) (*connect_go.Response[v1.UpdatePlayerResponse], error)
	GetRoomState(context.Context, *connect_go.Request[v1.GetRoomStateRequest]) (*connect_go.Response[v1.GetRoomStateResponse], error)
	SocialLogin(context.Context, *connect_go.Request[v1.SocialLoginRequest]) (*connect_go.Response[v1.SocialLoginResponse], error)
	Login(context.Context, *connect_go.Request[v1.LoginRequest]) (*connect_go.Response[v1.LoginResponse], error)
	LinkSocialAccount(context.Context, *connect_go.Request[v1.LinkSocialAccountRequest]) (*connect_go.Response[v1.LinkSocialAccountResponse], error)
	UnlinkSocialAccount(context.Context, *connect_go.Request[v1.UnlinkSocialAccountRequest]) (*connect_go.Response[v1.UnlinkSocialAccountResponse], error)
	// New methods for handling commands and events
	ExecuteCommand(context.Context, *connect_go.Request[v1.ExecuteCommandRequest]) (*connect_go.Response[v1.ExecuteCommandResponse], error)
	CreateGame(context.Context, *connect_go.Request[v1.CreateGameCommand]) (*connect_go.Response[v1.GameCreatedEvent], error)
	StartGame(context.Context, *connect_go.Request[v1.StartGameCommand]) (*connect_go.Response[v1.GameStartedEvent], error)
	EndGame(context.Context, *connect_go.Request[v1.EndGameCommand]) (*connect_go.Response[v1.GameEndedEvent], error)
}

// NewGameClient constructs a client for the game.v1.Game service. By default, it uses the Connect
// protocol with the binary Protobuf Codec, asks for gzipped responses, and sends uncompressed
// requests. To use the gRPC or gRPC-Web protocols, supply the connect.WithGRPC() or
// connect.WithGRPCWeb() options.
//
// The URL supplied here should be the base URL for the Connect or gRPC server (for example,
// http://api.acme.com or https://acme.com/grpc).
func NewGameClient(httpClient connect_go.HTTPClient, baseURL string, opts ...connect_go.ClientOption) GameClient {
	baseURL = strings.TrimRight(baseURL, "/")
	return &gameClient{
		createPlayer: connect_go.NewClient[v1.CreatePlayerRequest, v1.CreatePlayerResponse](
			httpClient,
			baseURL+GameCreatePlayerProcedure,
			opts...,
		),
		movePlayer: connect_go.NewClient[v1.MovePlayerRequest, v1.MovePlayerResponse](
			httpClient,
			baseURL+GameMovePlayerProcedure,
			opts...,
		),
		getLocation: connect_go.NewClient[v1.GetLocationRequest, v1.GetLocationResponse](
			httpClient,
			baseURL+GameGetLocationProcedure,
			opts...,
		),
		listPlayers: connect_go.NewClient[v1.ListPlayersRequest, v1.ListPlayersResponse](
			httpClient,
			baseURL+GameListPlayersProcedure,
			opts...,
		),
		getPlayer: connect_go.NewClient[v1.GetPlayerRequest, v1.GetPlayerResponse](
			httpClient,
			baseURL+GameGetPlayerProcedure,
			opts...,
		),
		setPlayer: connect_go.NewClient[v1.SetPlayerRequest, v1.SetPlayerResponse](
			httpClient,
			baseURL+GameSetPlayerProcedure,
			opts...,
		),
		updatePlayer: connect_go.NewClient[v1.UpdatePlayerRequest, v1.UpdatePlayerResponse](
			httpClient,
			baseURL+GameUpdatePlayerProcedure,
			opts...,
		),
		getRoomState: connect_go.NewClient[v1.GetRoomStateRequest, v1.GetRoomStateResponse](
			httpClient,
			baseURL+GameGetRoomStateProcedure,
			opts...,
		),
		socialLogin: connect_go.NewClient[v1.SocialLoginRequest, v1.SocialLoginResponse](
			httpClient,
			baseURL+GameSocialLoginProcedure,
			opts...,
		),
		login: connect_go.NewClient[v1.LoginRequest, v1.LoginResponse](
			httpClient,
			baseURL+GameLoginProcedure,
			opts...,
		),
		linkSocialAccount: connect_go.NewClient[v1.LinkSocialAccountRequest, v1.LinkSocialAccountResponse](
			httpClient,
			baseURL+GameLinkSocialAccountProcedure,
			opts...,
		),
		unlinkSocialAccount: connect_go.NewClient[v1.UnlinkSocialAccountRequest, v1.UnlinkSocialAccountResponse](
			httpClient,
			baseURL+GameUnlinkSocialAccountProcedure,
			opts...,
		),
		executeCommand: connect_go.NewClient[v1.ExecuteCommandRequest, v1.ExecuteCommandResponse](
			httpClient,
			baseURL+GameExecuteCommandProcedure,
			opts...,
		),
		createGame: connect_go.NewClient[v1.CreateGameCommand, v1.GameCreatedEvent](
			httpClient,
			baseURL+GameCreateGameProcedure,
			opts...,
		),
		startGame: connect_go.NewClient[v1.StartGameCommand, v1.GameStartedEvent](
			httpClient,
			baseURL+GameStartGameProcedure,
			opts...,
		),
		endGame: connect_go.NewClient[v1.EndGameCommand, v1.GameEndedEvent](
			httpClient,
			baseURL+GameEndGameProcedure,
			opts...,
		),
	}
}

// gameClient implements GameClient.
type gameClient struct {
	createPlayer        *connect_go.Client[v1.CreatePlayerRequest, v1.CreatePlayerResponse]
	movePlayer          *connect_go.Client[v1.MovePlayerRequest, v1.MovePlayerResponse]
	getLocation         *connect_go.Client[v1.GetLocationRequest, v1.GetLocationResponse]
	listPlayers         *connect_go.Client[v1.ListPlayersRequest, v1.ListPlayersResponse]
	getPlayer           *connect_go.Client[v1.GetPlayerRequest, v1.GetPlayerResponse]
	setPlayer           *connect_go.Client[v1.SetPlayerRequest, v1.SetPlayerResponse]
	updatePlayer        *connect_go.Client[v1.UpdatePlayerRequest, v1.UpdatePlayerResponse]
	getRoomState        *connect_go.Client[v1.GetRoomStateRequest, v1.GetRoomStateResponse]
	socialLogin         *connect_go.Client[v1.SocialLoginRequest, v1.SocialLoginResponse]
	login               *connect_go.Client[v1.LoginRequest, v1.LoginResponse]
	linkSocialAccount   *connect_go.Client[v1.LinkSocialAccountRequest, v1.LinkSocialAccountResponse]
	unlinkSocialAccount *connect_go.Client[v1.UnlinkSocialAccountRequest, v1.UnlinkSocialAccountResponse]
	executeCommand      *connect_go.Client[v1.ExecuteCommandRequest, v1.ExecuteCommandResponse]
	createGame          *connect_go.Client[v1.CreateGameCommand, v1.GameCreatedEvent]
	startGame           *connect_go.Client[v1.StartGameCommand, v1.GameStartedEvent]
	endGame             *connect_go.Client[v1.EndGameCommand, v1.GameEndedEvent]
}

// CreatePlayer calls game.v1.Game.CreatePlayer.
func (c *gameClient) CreatePlayer(ctx context.Context, req *connect_go.Request[v1.CreatePlayerRequest]) (*connect_go.Response[v1.CreatePlayerResponse], error) {
	return c.createPlayer.CallUnary(ctx, req)
}

// MovePlayer calls game.v1.Game.MovePlayer.
func (c *gameClient) MovePlayer(ctx context.Context, req *connect_go.Request[v1.MovePlayerRequest]) (*connect_go.Response[v1.MovePlayerResponse], error) {
	return c.movePlayer.CallUnary(ctx, req)
}

// GetLocation calls game.v1.Game.GetLocation.
func (c *gameClient) GetLocation(ctx context.Context, req *connect_go.Request[v1.GetLocationRequest]) (*connect_go.Response[v1.GetLocationResponse], error) {
	return c.getLocation.CallUnary(ctx, req)
}

// ListPlayers calls game.v1.Game.ListPlayers.
func (c *gameClient) ListPlayers(ctx context.Context, req *connect_go.Request[v1.ListPlayersRequest]) (*connect_go.Response[v1.ListPlayersResponse], error) {
	return c.listPlayers.CallUnary(ctx, req)
}

// GetPlayer calls game.v1.Game.GetPlayer.
func (c *gameClient) GetPlayer(ctx context.Context, req *connect_go.Request[v1.GetPlayerRequest]) (*connect_go.Response[v1.GetPlayerResponse], error) {
	return c.getPlayer.CallUnary(ctx, req)
}

// SetPlayer calls game.v1.Game.SetPlayer.
func (c *gameClient) SetPlayer(ctx context.Context, req *connect_go.Request[v1.SetPlayerRequest]) (*connect_go.Response[v1.SetPlayerResponse], error) {
	return c.setPlayer.CallUnary(ctx, req)
}

// UpdatePlayer calls game.v1.Game.UpdatePlayer.
func (c *gameClient) UpdatePlayer(ctx context.Context, req *connect_go.Request[v1.UpdatePlayerRequest]) (*connect_go.Response[v1.UpdatePlayerResponse], error) {
	return c.updatePlayer.CallUnary(ctx, req)
}

// GetRoomState calls game.v1.Game.GetRoomState.
func (c *gameClient) GetRoomState(ctx context.Context, req *connect_go.Request[v1.GetRoomStateRequest]) (*connect_go.Response[v1.GetRoomStateResponse], error) {
	return c.getRoomState.CallUnary(ctx, req)
}

// SocialLogin calls game.v1.Game.SocialLogin.
func (c *gameClient) SocialLogin(ctx context.Context, req *connect_go.Request[v1.SocialLoginRequest]) (*connect_go.Response[v1.SocialLoginResponse], error) {
	return c.socialLogin.CallUnary(ctx, req)
}

// Login calls game.v1.Game.Login.
func (c *gameClient) Login(ctx context.Context, req *connect_go.Request[v1.LoginRequest]) (*connect_go.Response[v1.LoginResponse], error) {
	return c.login.CallUnary(ctx, req)
}

// LinkSocialAccount calls game.v1.Game.LinkSocialAccount.
func (c *gameClient) LinkSocialAccount(ctx context.Context, req *connect_go.Request[v1.LinkSocialAccountRequest]) (*connect_go.Response[v1.LinkSocialAccountResponse], error) {
	return c.linkSocialAccount.CallUnary(ctx, req)
}

// UnlinkSocialAccount calls game.v1.Game.UnlinkSocialAccount.
func (c *gameClient) UnlinkSocialAccount(ctx context.Context, req *connect_go.Request[v1.UnlinkSocialAccountRequest]) (*connect_go.Response[v1.UnlinkSocialAccountResponse], error) {
	return c.unlinkSocialAccount.CallUnary(ctx, req)
}

// ExecuteCommand calls game.v1.Game.ExecuteCommand.
func (c *gameClient) ExecuteCommand(ctx context.Context, req *connect_go.Request[v1.ExecuteCommandRequest]) (*connect_go.Response[v1.ExecuteCommandResponse], error) {
	return c.executeCommand.CallUnary(ctx, req)
}

// CreateGame calls game.v1.Game.CreateGame.
func (c *gameClient) CreateGame(ctx context.Context, req *connect_go.Request[v1.CreateGameCommand]) (*connect_go.Response[v1.GameCreatedEvent], error) {
	return c.createGame.CallUnary(ctx, req)
}

// StartGame calls game.v1.Game.StartGame.
func (c *gameClient) StartGame(ctx context.Context, req *connect_go.Request[v1.StartGameCommand]) (*connect_go.Response[v1.GameStartedEvent], error) {
	return c.startGame.CallUnary(ctx, req)
}

// EndGame calls game.v1.Game.EndGame.
func (c *gameClient) EndGame(ctx context.Context, req *connect_go.Request[v1.EndGameCommand]) (*connect_go.Response[v1.GameEndedEvent], error) {
	return c.endGame.CallUnary(ctx, req)
}

// GameHandler is an implementation of the game.v1.Game service.
type GameHandler interface {
	CreatePlayer(context.Context, *connect_go.Request[v1.CreatePlayerRequest]) (*connect_go.Response[v1.CreatePlayerResponse], error)
	MovePlayer(context.Context, *connect_go.Request[v1.MovePlayerRequest]) (*connect_go.Response[v1.MovePlayerResponse], error)
	GetLocation(context.Context, *connect_go.Request[v1.GetLocationRequest]) (*connect_go.Response[v1.GetLocationResponse], error)
	ListPlayers(context.Context, *connect_go.Request[v1.ListPlayersRequest]) (*connect_go.Response[v1.ListPlayersResponse], error)
	GetPlayer(context.Context, *connect_go.Request[v1.GetPlayerRequest]) (*connect_go.Response[v1.GetPlayerResponse], error)
	SetPlayer(context.Context, *connect_go.Request[v1.SetPlayerRequest]) (*connect_go.Response[v1.SetPlayerResponse], error)
	UpdatePlayer(context.Context, *connect_go.Request[v1.UpdatePlayerRequest]) (*connect_go.Response[v1.UpdatePlayerResponse], error)
	GetRoomState(context.Context, *connect_go.Request[v1.GetRoomStateRequest]) (*connect_go.Response[v1.GetRoomStateResponse], error)
	SocialLogin(context.Context, *connect_go.Request[v1.SocialLoginRequest]) (*connect_go.Response[v1.SocialLoginResponse], error)
	Login(context.Context, *connect_go.Request[v1.LoginRequest]) (*connect_go.Response[v1.LoginResponse], error)
	LinkSocialAccount(context.Context, *connect_go.Request[v1.LinkSocialAccountRequest]) (*connect_go.Response[v1.LinkSocialAccountResponse], error)
	UnlinkSocialAccount(context.Context, *connect_go.Request[v1.UnlinkSocialAccountRequest]) (*connect_go.Response[v1.UnlinkSocialAccountResponse], error)
	// New methods for handling commands and events
	ExecuteCommand(context.Context, *connect_go.Request[v1.ExecuteCommandRequest]) (*connect_go.Response[v1.ExecuteCommandResponse], error)
	CreateGame(context.Context, *connect_go.Request[v1.CreateGameCommand]) (*connect_go.Response[v1.GameCreatedEvent], error)
	StartGame(context.Context, *connect_go.Request[v1.StartGameCommand]) (*connect_go.Response[v1.GameStartedEvent], error)
	EndGame(context.Context, *connect_go.Request[v1.EndGameCommand]) (*connect_go.Response[v1.GameEndedEvent], error)
}

// NewGameHandler builds an HTTP handler from the service implementation. It returns the path on
// which to mount the handler and the handler itself.
//
// By default, handlers support the Connect, gRPC, and gRPC-Web protocols with the binary Protobuf
// and JSON codecs. They also support gzip compression.
func NewGameHandler(svc GameHandler, opts ...connect_go.HandlerOption) (string, http.Handler) {
	gameCreatePlayerHandler := connect_go.NewUnaryHandler(
		GameCreatePlayerProcedure,
		svc.CreatePlayer,
		opts...,
	)
	gameMovePlayerHandler := connect_go.NewUnaryHandler(
		GameMovePlayerProcedure,
		svc.MovePlayer,
		opts...,
	)
	gameGetLocationHandler := connect_go.NewUnaryHandler(
		GameGetLocationProcedure,
		svc.GetLocation,
		opts...,
	)
	gameListPlayersHandler := connect_go.NewUnaryHandler(
		GameListPlayersProcedure,
		svc.ListPlayers,
		opts...,
	)
	gameGetPlayerHandler := connect_go.NewUnaryHandler(
		GameGetPlayerProcedure,
		svc.GetPlayer,
		opts...,
	)
	gameSetPlayerHandler := connect_go.NewUnaryHandler(
		GameSetPlayerProcedure,
		svc.SetPlayer,
		opts...,
	)
	gameUpdatePlayerHandler := connect_go.NewUnaryHandler(
		GameUpdatePlayerProcedure,
		svc.UpdatePlayer,
		opts...,
	)
	gameGetRoomStateHandler := connect_go.NewUnaryHandler(
		GameGetRoomStateProcedure,
		svc.GetRoomState,
		opts...,
	)
	gameSocialLoginHandler := connect_go.NewUnaryHandler(
		GameSocialLoginProcedure,
		svc.SocialLogin,
		opts...,
	)
	gameLoginHandler := connect_go.NewUnaryHandler(
		GameLoginProcedure,
		svc.Login,
		opts...,
	)
	gameLinkSocialAccountHandler := connect_go.NewUnaryHandler(
		GameLinkSocialAccountProcedure,
		svc.LinkSocialAccount,
		opts...,
	)
	gameUnlinkSocialAccountHandler := connect_go.NewUnaryHandler(
		GameUnlinkSocialAccountProcedure,
		svc.UnlinkSocialAccount,
		opts...,
	)
	gameExecuteCommandHandler := connect_go.NewUnaryHandler(
		GameExecuteCommandProcedure,
		svc.ExecuteCommand,
		opts...,
	)
	gameCreateGameHandler := connect_go.NewUnaryHandler(
		GameCreateGameProcedure,
		svc.CreateGame,
		opts...,
	)
	gameStartGameHandler := connect_go.NewUnaryHandler(
		GameStartGameProcedure,
		svc.StartGame,
		opts...,
	)
	gameEndGameHandler := connect_go.NewUnaryHandler(
		GameEndGameProcedure,
		svc.EndGame,
		opts...,
	)
	return "/game.v1.Game/", http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		switch r.URL.Path {
		case GameCreatePlayerProcedure:
			gameCreatePlayerHandler.ServeHTTP(w, r)
		case GameMovePlayerProcedure:
			gameMovePlayerHandler.ServeHTTP(w, r)
		case GameGetLocationProcedure:
			gameGetLocationHandler.ServeHTTP(w, r)
		case GameListPlayersProcedure:
			gameListPlayersHandler.ServeHTTP(w, r)
		case GameGetPlayerProcedure:
			gameGetPlayerHandler.ServeHTTP(w, r)
		case GameSetPlayerProcedure:
			gameSetPlayerHandler.ServeHTTP(w, r)
		case GameUpdatePlayerProcedure:
			gameUpdatePlayerHandler.ServeHTTP(w, r)
		case GameGetRoomStateProcedure:
			gameGetRoomStateHandler.ServeHTTP(w, r)
		case GameSocialLoginProcedure:
			gameSocialLoginHandler.ServeHTTP(w, r)
		case GameLoginProcedure:
			gameLoginHandler.ServeHTTP(w, r)
		case GameLinkSocialAccountProcedure:
			gameLinkSocialAccountHandler.ServeHTTP(w, r)
		case GameUnlinkSocialAccountProcedure:
			gameUnlinkSocialAccountHandler.ServeHTTP(w, r)
		case GameExecuteCommandProcedure:
			gameExecuteCommandHandler.ServeHTTP(w, r)
		case GameCreateGameProcedure:
			gameCreateGameHandler.ServeHTTP(w, r)
		case GameStartGameProcedure:
			gameStartGameHandler.ServeHTTP(w, r)
		case GameEndGameProcedure:
			gameEndGameHandler.ServeHTTP(w, r)
		default:
			http.NotFound(w, r)
		}
	})
}

// UnimplementedGameHandler returns CodeUnimplemented from all methods.
type UnimplementedGameHandler struct{}

func (UnimplementedGameHandler) CreatePlayer(context.Context, *connect_go.Request[v1.CreatePlayerRequest]) (*connect_go.Response[v1.CreatePlayerResponse], error) {
	return nil, connect_go.NewError(connect_go.CodeUnimplemented, errors.New("game.v1.Game.CreatePlayer is not implemented"))
}

func (UnimplementedGameHandler) MovePlayer(context.Context, *connect_go.Request[v1.MovePlayerRequest]) (*connect_go.Response[v1.MovePlayerResponse], error) {
	return nil, connect_go.NewError(connect_go.CodeUnimplemented, errors.New("game.v1.Game.MovePlayer is not implemented"))
}

func (UnimplementedGameHandler) GetLocation(context.Context, *connect_go.Request[v1.GetLocationRequest]) (*connect_go.Response[v1.GetLocationResponse], error) {
	return nil, connect_go.NewError(connect_go.CodeUnimplemented, errors.New("game.v1.Game.GetLocation is not implemented"))
}

func (UnimplementedGameHandler) ListPlayers(context.Context, *connect_go.Request[v1.ListPlayersRequest]) (*connect_go.Response[v1.ListPlayersResponse], error) {
	return nil, connect_go.NewError(connect_go.CodeUnimplemented, errors.New("game.v1.Game.ListPlayers is not implemented"))
}

func (UnimplementedGameHandler) GetPlayer(context.Context, *connect_go.Request[v1.GetPlayerRequest]) (*connect_go.Response[v1.GetPlayerResponse], error) {
	return nil, connect_go.NewError(connect_go.CodeUnimplemented, errors.New("game.v1.Game.GetPlayer is not implemented"))
}

func (UnimplementedGameHandler) SetPlayer(context.Context, *connect_go.Request[v1.SetPlayerRequest]) (*connect_go.Response[v1.SetPlayerResponse], error) {
	return nil, connect_go.NewError(connect_go.CodeUnimplemented, errors.New("game.v1.Game.SetPlayer is not implemented"))
}

func (UnimplementedGameHandler) UpdatePlayer(context.Context, *connect_go.Request[v1.UpdatePlayerRequest]) (*connect_go.Response[v1.UpdatePlayerResponse], error) {
	return nil, connect_go.NewError(connect_go.CodeUnimplemented, errors.New("game.v1.Game.UpdatePlayer is not implemented"))
}

func (UnimplementedGameHandler) GetRoomState(context.Context, *connect_go.Request[v1.GetRoomStateRequest]) (*connect_go.Response[v1.GetRoomStateResponse], error) {
	return nil, connect_go.NewError(connect_go.CodeUnimplemented, errors.New("game.v1.Game.GetRoomState is not implemented"))
}

func (UnimplementedGameHandler) SocialLogin(context.Context, *connect_go.Request[v1.SocialLoginRequest]) (*connect_go.Response[v1.SocialLoginResponse], error) {
	return nil, connect_go.NewError(connect_go.CodeUnimplemented, errors.New("game.v1.Game.SocialLogin is not implemented"))
}

func (UnimplementedGameHandler) Login(context.Context, *connect_go.Request[v1.LoginRequest]) (*connect_go.Response[v1.LoginResponse], error) {
	return nil, connect_go.NewError(connect_go.CodeUnimplemented, errors.New("game.v1.Game.Login is not implemented"))
}

func (UnimplementedGameHandler) LinkSocialAccount(context.Context, *connect_go.Request[v1.LinkSocialAccountRequest]) (*connect_go.Response[v1.LinkSocialAccountResponse], error) {
	return nil, connect_go.NewError(connect_go.CodeUnimplemented, errors.New("game.v1.Game.LinkSocialAccount is not implemented"))
}

func (UnimplementedGameHandler) UnlinkSocialAccount(context.Context, *connect_go.Request[v1.UnlinkSocialAccountRequest]) (*connect_go.Response[v1.UnlinkSocialAccountResponse], error) {
	return nil, connect_go.NewError(connect_go.CodeUnimplemented, errors.New("game.v1.Game.UnlinkSocialAccount is not implemented"))
}

func (UnimplementedGameHandler) ExecuteCommand(context.Context, *connect_go.Request[v1.ExecuteCommandRequest]) (*connect_go.Response[v1.ExecuteCommandResponse], error) {
	return nil, connect_go.NewError(connect_go.CodeUnimplemented, errors.New("game.v1.Game.ExecuteCommand is not implemented"))
}

func (UnimplementedGameHandler) CreateGame(context.Context, *connect_go.Request[v1.CreateGameCommand]) (*connect_go.Response[v1.GameCreatedEvent], error) {
	return nil, connect_go.NewError(connect_go.CodeUnimplemented, errors.New("game.v1.Game.CreateGame is not implemented"))
}

func (UnimplementedGameHandler) StartGame(context.Context, *connect_go.Request[v1.StartGameCommand]) (*connect_go.Response[v1.GameStartedEvent], error) {
	return nil, connect_go.NewError(connect_go.CodeUnimplemented, errors.New("game.v1.Game.StartGame is not implemented"))
}

func (UnimplementedGameHandler) EndGame(context.Context, *connect_go.Request[v1.EndGameCommand]) (*connect_go.Response[v1.GameEndedEvent], error) {
	return nil, connect_go.NewError(connect_go.CodeUnimplemented, errors.New("game.v1.Game.EndGame is not implemented"))
}
