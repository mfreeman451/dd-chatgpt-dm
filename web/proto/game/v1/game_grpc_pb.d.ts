// package: game.v1
// file: game/v1/game.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as game_v1_game_pb from "../../game/v1/game_pb";

interface IGameService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createPlayer: IGameService_ICreatePlayer;
    movePlayer: IGameService_IMovePlayer;
    getLocation: IGameService_IGetLocation;
    listPlayers: IGameService_IListPlayers;
    getPlayer: IGameService_IGetPlayer;
    setPlayer: IGameService_ISetPlayer;
    updatePlayer: IGameService_IUpdatePlayer;
    getRoomState: IGameService_IGetRoomState;
    socialLogin: IGameService_ISocialLogin;
    login: IGameService_ILogin;
    linkSocialAccount: IGameService_ILinkSocialAccount;
    unlinkSocialAccount: IGameService_IUnlinkSocialAccount;
    executeCommand: IGameService_IExecuteCommand;
    createGame: IGameService_ICreateGame;
    startGame: IGameService_IStartGame;
    endGame: IGameService_IEndGame;
}

interface IGameService_ICreatePlayer extends grpc.MethodDefinition<game_v1_game_pb.CreatePlayerRequest, game_v1_game_pb.CreatePlayerResponse> {
    path: "/game.v1.Game/CreatePlayer";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<game_v1_game_pb.CreatePlayerRequest>;
    requestDeserialize: grpc.deserialize<game_v1_game_pb.CreatePlayerRequest>;
    responseSerialize: grpc.serialize<game_v1_game_pb.CreatePlayerResponse>;
    responseDeserialize: grpc.deserialize<game_v1_game_pb.CreatePlayerResponse>;
}
interface IGameService_IMovePlayer extends grpc.MethodDefinition<game_v1_game_pb.MovePlayerRequest, game_v1_game_pb.MovePlayerResponse> {
    path: "/game.v1.Game/MovePlayer";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<game_v1_game_pb.MovePlayerRequest>;
    requestDeserialize: grpc.deserialize<game_v1_game_pb.MovePlayerRequest>;
    responseSerialize: grpc.serialize<game_v1_game_pb.MovePlayerResponse>;
    responseDeserialize: grpc.deserialize<game_v1_game_pb.MovePlayerResponse>;
}
interface IGameService_IGetLocation extends grpc.MethodDefinition<game_v1_game_pb.GetLocationRequest, game_v1_game_pb.GetLocationResponse> {
    path: "/game.v1.Game/GetLocation";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<game_v1_game_pb.GetLocationRequest>;
    requestDeserialize: grpc.deserialize<game_v1_game_pb.GetLocationRequest>;
    responseSerialize: grpc.serialize<game_v1_game_pb.GetLocationResponse>;
    responseDeserialize: grpc.deserialize<game_v1_game_pb.GetLocationResponse>;
}
interface IGameService_IListPlayers extends grpc.MethodDefinition<game_v1_game_pb.ListPlayersRequest, game_v1_game_pb.ListPlayersResponse> {
    path: "/game.v1.Game/ListPlayers";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<game_v1_game_pb.ListPlayersRequest>;
    requestDeserialize: grpc.deserialize<game_v1_game_pb.ListPlayersRequest>;
    responseSerialize: grpc.serialize<game_v1_game_pb.ListPlayersResponse>;
    responseDeserialize: grpc.deserialize<game_v1_game_pb.ListPlayersResponse>;
}
interface IGameService_IGetPlayer extends grpc.MethodDefinition<game_v1_game_pb.GetPlayerRequest, game_v1_game_pb.GetPlayerResponse> {
    path: "/game.v1.Game/GetPlayer";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<game_v1_game_pb.GetPlayerRequest>;
    requestDeserialize: grpc.deserialize<game_v1_game_pb.GetPlayerRequest>;
    responseSerialize: grpc.serialize<game_v1_game_pb.GetPlayerResponse>;
    responseDeserialize: grpc.deserialize<game_v1_game_pb.GetPlayerResponse>;
}
interface IGameService_ISetPlayer extends grpc.MethodDefinition<game_v1_game_pb.SetPlayerRequest, game_v1_game_pb.SetPlayerResponse> {
    path: "/game.v1.Game/SetPlayer";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<game_v1_game_pb.SetPlayerRequest>;
    requestDeserialize: grpc.deserialize<game_v1_game_pb.SetPlayerRequest>;
    responseSerialize: grpc.serialize<game_v1_game_pb.SetPlayerResponse>;
    responseDeserialize: grpc.deserialize<game_v1_game_pb.SetPlayerResponse>;
}
interface IGameService_IUpdatePlayer extends grpc.MethodDefinition<game_v1_game_pb.UpdatePlayerRequest, game_v1_game_pb.UpdatePlayerResponse> {
    path: "/game.v1.Game/UpdatePlayer";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<game_v1_game_pb.UpdatePlayerRequest>;
    requestDeserialize: grpc.deserialize<game_v1_game_pb.UpdatePlayerRequest>;
    responseSerialize: grpc.serialize<game_v1_game_pb.UpdatePlayerResponse>;
    responseDeserialize: grpc.deserialize<game_v1_game_pb.UpdatePlayerResponse>;
}
interface IGameService_IGetRoomState extends grpc.MethodDefinition<game_v1_game_pb.GetRoomStateRequest, game_v1_game_pb.GetRoomStateResponse> {
    path: "/game.v1.Game/GetRoomState";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<game_v1_game_pb.GetRoomStateRequest>;
    requestDeserialize: grpc.deserialize<game_v1_game_pb.GetRoomStateRequest>;
    responseSerialize: grpc.serialize<game_v1_game_pb.GetRoomStateResponse>;
    responseDeserialize: grpc.deserialize<game_v1_game_pb.GetRoomStateResponse>;
}
interface IGameService_ISocialLogin extends grpc.MethodDefinition<game_v1_game_pb.SocialLoginRequest, game_v1_game_pb.SocialLoginResponse> {
    path: "/game.v1.Game/SocialLogin";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<game_v1_game_pb.SocialLoginRequest>;
    requestDeserialize: grpc.deserialize<game_v1_game_pb.SocialLoginRequest>;
    responseSerialize: grpc.serialize<game_v1_game_pb.SocialLoginResponse>;
    responseDeserialize: grpc.deserialize<game_v1_game_pb.SocialLoginResponse>;
}
interface IGameService_ILogin extends grpc.MethodDefinition<game_v1_game_pb.LoginRequest, game_v1_game_pb.LoginResponse> {
    path: "/game.v1.Game/Login";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<game_v1_game_pb.LoginRequest>;
    requestDeserialize: grpc.deserialize<game_v1_game_pb.LoginRequest>;
    responseSerialize: grpc.serialize<game_v1_game_pb.LoginResponse>;
    responseDeserialize: grpc.deserialize<game_v1_game_pb.LoginResponse>;
}
interface IGameService_ILinkSocialAccount extends grpc.MethodDefinition<game_v1_game_pb.LinkSocialAccountRequest, game_v1_game_pb.LinkSocialAccountResponse> {
    path: "/game.v1.Game/LinkSocialAccount";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<game_v1_game_pb.LinkSocialAccountRequest>;
    requestDeserialize: grpc.deserialize<game_v1_game_pb.LinkSocialAccountRequest>;
    responseSerialize: grpc.serialize<game_v1_game_pb.LinkSocialAccountResponse>;
    responseDeserialize: grpc.deserialize<game_v1_game_pb.LinkSocialAccountResponse>;
}
interface IGameService_IUnlinkSocialAccount extends grpc.MethodDefinition<game_v1_game_pb.UnlinkSocialAccountRequest, game_v1_game_pb.UnlinkSocialAccountResponse> {
    path: "/game.v1.Game/UnlinkSocialAccount";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<game_v1_game_pb.UnlinkSocialAccountRequest>;
    requestDeserialize: grpc.deserialize<game_v1_game_pb.UnlinkSocialAccountRequest>;
    responseSerialize: grpc.serialize<game_v1_game_pb.UnlinkSocialAccountResponse>;
    responseDeserialize: grpc.deserialize<game_v1_game_pb.UnlinkSocialAccountResponse>;
}
interface IGameService_IExecuteCommand extends grpc.MethodDefinition<game_v1_game_pb.ExecuteCommandRequest, game_v1_game_pb.ExecuteCommandResponse> {
    path: "/game.v1.Game/ExecuteCommand";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<game_v1_game_pb.ExecuteCommandRequest>;
    requestDeserialize: grpc.deserialize<game_v1_game_pb.ExecuteCommandRequest>;
    responseSerialize: grpc.serialize<game_v1_game_pb.ExecuteCommandResponse>;
    responseDeserialize: grpc.deserialize<game_v1_game_pb.ExecuteCommandResponse>;
}
interface IGameService_ICreateGame extends grpc.MethodDefinition<game_v1_game_pb.CreateGameCommand, game_v1_game_pb.GameCreatedEvent> {
    path: "/game.v1.Game/CreateGame";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<game_v1_game_pb.CreateGameCommand>;
    requestDeserialize: grpc.deserialize<game_v1_game_pb.CreateGameCommand>;
    responseSerialize: grpc.serialize<game_v1_game_pb.GameCreatedEvent>;
    responseDeserialize: grpc.deserialize<game_v1_game_pb.GameCreatedEvent>;
}
interface IGameService_IStartGame extends grpc.MethodDefinition<game_v1_game_pb.StartGameCommand, game_v1_game_pb.GameStartedEvent> {
    path: "/game.v1.Game/StartGame";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<game_v1_game_pb.StartGameCommand>;
    requestDeserialize: grpc.deserialize<game_v1_game_pb.StartGameCommand>;
    responseSerialize: grpc.serialize<game_v1_game_pb.GameStartedEvent>;
    responseDeserialize: grpc.deserialize<game_v1_game_pb.GameStartedEvent>;
}
interface IGameService_IEndGame extends grpc.MethodDefinition<game_v1_game_pb.EndGameCommand, game_v1_game_pb.GameEndedEvent> {
    path: "/game.v1.Game/EndGame";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<game_v1_game_pb.EndGameCommand>;
    requestDeserialize: grpc.deserialize<game_v1_game_pb.EndGameCommand>;
    responseSerialize: grpc.serialize<game_v1_game_pb.GameEndedEvent>;
    responseDeserialize: grpc.deserialize<game_v1_game_pb.GameEndedEvent>;
}

export const GameService: IGameService;

export interface IGameServer extends grpc.UntypedServiceImplementation {
    createPlayer: grpc.handleUnaryCall<game_v1_game_pb.CreatePlayerRequest, game_v1_game_pb.CreatePlayerResponse>;
    movePlayer: grpc.handleUnaryCall<game_v1_game_pb.MovePlayerRequest, game_v1_game_pb.MovePlayerResponse>;
    getLocation: grpc.handleUnaryCall<game_v1_game_pb.GetLocationRequest, game_v1_game_pb.GetLocationResponse>;
    listPlayers: grpc.handleUnaryCall<game_v1_game_pb.ListPlayersRequest, game_v1_game_pb.ListPlayersResponse>;
    getPlayer: grpc.handleUnaryCall<game_v1_game_pb.GetPlayerRequest, game_v1_game_pb.GetPlayerResponse>;
    setPlayer: grpc.handleUnaryCall<game_v1_game_pb.SetPlayerRequest, game_v1_game_pb.SetPlayerResponse>;
    updatePlayer: grpc.handleUnaryCall<game_v1_game_pb.UpdatePlayerRequest, game_v1_game_pb.UpdatePlayerResponse>;
    getRoomState: grpc.handleUnaryCall<game_v1_game_pb.GetRoomStateRequest, game_v1_game_pb.GetRoomStateResponse>;
    socialLogin: grpc.handleUnaryCall<game_v1_game_pb.SocialLoginRequest, game_v1_game_pb.SocialLoginResponse>;
    login: grpc.handleUnaryCall<game_v1_game_pb.LoginRequest, game_v1_game_pb.LoginResponse>;
    linkSocialAccount: grpc.handleUnaryCall<game_v1_game_pb.LinkSocialAccountRequest, game_v1_game_pb.LinkSocialAccountResponse>;
    unlinkSocialAccount: grpc.handleUnaryCall<game_v1_game_pb.UnlinkSocialAccountRequest, game_v1_game_pb.UnlinkSocialAccountResponse>;
    executeCommand: grpc.handleUnaryCall<game_v1_game_pb.ExecuteCommandRequest, game_v1_game_pb.ExecuteCommandResponse>;
    createGame: grpc.handleUnaryCall<game_v1_game_pb.CreateGameCommand, game_v1_game_pb.GameCreatedEvent>;
    startGame: grpc.handleUnaryCall<game_v1_game_pb.StartGameCommand, game_v1_game_pb.GameStartedEvent>;
    endGame: grpc.handleUnaryCall<game_v1_game_pb.EndGameCommand, game_v1_game_pb.GameEndedEvent>;
}

export interface IGameClient {
    createPlayer(request: game_v1_game_pb.CreatePlayerRequest, callback: (error: grpc.ServiceError | null, response: game_v1_game_pb.CreatePlayerResponse) => void): grpc.ClientUnaryCall;
    createPlayer(request: game_v1_game_pb.CreatePlayerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: game_v1_game_pb.CreatePlayerResponse) => void): grpc.ClientUnaryCall;
    createPlayer(request: game_v1_game_pb.CreatePlayerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: game_v1_game_pb.CreatePlayerResponse) => void): grpc.ClientUnaryCall;
    movePlayer(request: game_v1_game_pb.MovePlayerRequest, callback: (error: grpc.ServiceError | null, response: game_v1_game_pb.MovePlayerResponse) => void): grpc.ClientUnaryCall;
    movePlayer(request: game_v1_game_pb.MovePlayerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: game_v1_game_pb.MovePlayerResponse) => void): grpc.ClientUnaryCall;
    movePlayer(request: game_v1_game_pb.MovePlayerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: game_v1_game_pb.MovePlayerResponse) => void): grpc.ClientUnaryCall;
    getLocation(request: game_v1_game_pb.GetLocationRequest, callback: (error: grpc.ServiceError | null, response: game_v1_game_pb.GetLocationResponse) => void): grpc.ClientUnaryCall;
    getLocation(request: game_v1_game_pb.GetLocationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: game_v1_game_pb.GetLocationResponse) => void): grpc.ClientUnaryCall;
    getLocation(request: game_v1_game_pb.GetLocationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: game_v1_game_pb.GetLocationResponse) => void): grpc.ClientUnaryCall;
    listPlayers(request: game_v1_game_pb.ListPlayersRequest, callback: (error: grpc.ServiceError | null, response: game_v1_game_pb.ListPlayersResponse) => void): grpc.ClientUnaryCall;
    listPlayers(request: game_v1_game_pb.ListPlayersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: game_v1_game_pb.ListPlayersResponse) => void): grpc.ClientUnaryCall;
    listPlayers(request: game_v1_game_pb.ListPlayersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: game_v1_game_pb.ListPlayersResponse) => void): grpc.ClientUnaryCall;
    getPlayer(request: game_v1_game_pb.GetPlayerRequest, callback: (error: grpc.ServiceError | null, response: game_v1_game_pb.GetPlayerResponse) => void): grpc.ClientUnaryCall;
    getPlayer(request: game_v1_game_pb.GetPlayerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: game_v1_game_pb.GetPlayerResponse) => void): grpc.ClientUnaryCall;
    getPlayer(request: game_v1_game_pb.GetPlayerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: game_v1_game_pb.GetPlayerResponse) => void): grpc.ClientUnaryCall;
    setPlayer(request: game_v1_game_pb.SetPlayerRequest, callback: (error: grpc.ServiceError | null, response: game_v1_game_pb.SetPlayerResponse) => void): grpc.ClientUnaryCall;
    setPlayer(request: game_v1_game_pb.SetPlayerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: game_v1_game_pb.SetPlayerResponse) => void): grpc.ClientUnaryCall;
    setPlayer(request: game_v1_game_pb.SetPlayerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: game_v1_game_pb.SetPlayerResponse) => void): grpc.ClientUnaryCall;
    updatePlayer(request: game_v1_game_pb.UpdatePlayerRequest, callback: (error: grpc.ServiceError | null, response: game_v1_game_pb.UpdatePlayerResponse) => void): grpc.ClientUnaryCall;
    updatePlayer(request: game_v1_game_pb.UpdatePlayerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: game_v1_game_pb.UpdatePlayerResponse) => void): grpc.ClientUnaryCall;
    updatePlayer(request: game_v1_game_pb.UpdatePlayerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: game_v1_game_pb.UpdatePlayerResponse) => void): grpc.ClientUnaryCall;
    getRoomState(request: game_v1_game_pb.GetRoomStateRequest, callback: (error: grpc.ServiceError | null, response: game_v1_game_pb.GetRoomStateResponse) => void): grpc.ClientUnaryCall;
    getRoomState(request: game_v1_game_pb.GetRoomStateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: game_v1_game_pb.GetRoomStateResponse) => void): grpc.ClientUnaryCall;
    getRoomState(request: game_v1_game_pb.GetRoomStateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: game_v1_game_pb.GetRoomStateResponse) => void): grpc.ClientUnaryCall;
    socialLogin(request: game_v1_game_pb.SocialLoginRequest, callback: (error: grpc.ServiceError | null, response: game_v1_game_pb.SocialLoginResponse) => void): grpc.ClientUnaryCall;
    socialLogin(request: game_v1_game_pb.SocialLoginRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: game_v1_game_pb.SocialLoginResponse) => void): grpc.ClientUnaryCall;
    socialLogin(request: game_v1_game_pb.SocialLoginRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: game_v1_game_pb.SocialLoginResponse) => void): grpc.ClientUnaryCall;
    login(request: game_v1_game_pb.LoginRequest, callback: (error: grpc.ServiceError | null, response: game_v1_game_pb.LoginResponse) => void): grpc.ClientUnaryCall;
    login(request: game_v1_game_pb.LoginRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: game_v1_game_pb.LoginResponse) => void): grpc.ClientUnaryCall;
    login(request: game_v1_game_pb.LoginRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: game_v1_game_pb.LoginResponse) => void): grpc.ClientUnaryCall;
    linkSocialAccount(request: game_v1_game_pb.LinkSocialAccountRequest, callback: (error: grpc.ServiceError | null, response: game_v1_game_pb.LinkSocialAccountResponse) => void): grpc.ClientUnaryCall;
    linkSocialAccount(request: game_v1_game_pb.LinkSocialAccountRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: game_v1_game_pb.LinkSocialAccountResponse) => void): grpc.ClientUnaryCall;
    linkSocialAccount(request: game_v1_game_pb.LinkSocialAccountRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: game_v1_game_pb.LinkSocialAccountResponse) => void): grpc.ClientUnaryCall;
    unlinkSocialAccount(request: game_v1_game_pb.UnlinkSocialAccountRequest, callback: (error: grpc.ServiceError | null, response: game_v1_game_pb.UnlinkSocialAccountResponse) => void): grpc.ClientUnaryCall;
    unlinkSocialAccount(request: game_v1_game_pb.UnlinkSocialAccountRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: game_v1_game_pb.UnlinkSocialAccountResponse) => void): grpc.ClientUnaryCall;
    unlinkSocialAccount(request: game_v1_game_pb.UnlinkSocialAccountRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: game_v1_game_pb.UnlinkSocialAccountResponse) => void): grpc.ClientUnaryCall;
    executeCommand(request: game_v1_game_pb.ExecuteCommandRequest, callback: (error: grpc.ServiceError | null, response: game_v1_game_pb.ExecuteCommandResponse) => void): grpc.ClientUnaryCall;
    executeCommand(request: game_v1_game_pb.ExecuteCommandRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: game_v1_game_pb.ExecuteCommandResponse) => void): grpc.ClientUnaryCall;
    executeCommand(request: game_v1_game_pb.ExecuteCommandRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: game_v1_game_pb.ExecuteCommandResponse) => void): grpc.ClientUnaryCall;
    createGame(request: game_v1_game_pb.CreateGameCommand, callback: (error: grpc.ServiceError | null, response: game_v1_game_pb.GameCreatedEvent) => void): grpc.ClientUnaryCall;
    createGame(request: game_v1_game_pb.CreateGameCommand, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: game_v1_game_pb.GameCreatedEvent) => void): grpc.ClientUnaryCall;
    createGame(request: game_v1_game_pb.CreateGameCommand, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: game_v1_game_pb.GameCreatedEvent) => void): grpc.ClientUnaryCall;
    startGame(request: game_v1_game_pb.StartGameCommand, callback: (error: grpc.ServiceError | null, response: game_v1_game_pb.GameStartedEvent) => void): grpc.ClientUnaryCall;
    startGame(request: game_v1_game_pb.StartGameCommand, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: game_v1_game_pb.GameStartedEvent) => void): grpc.ClientUnaryCall;
    startGame(request: game_v1_game_pb.StartGameCommand, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: game_v1_game_pb.GameStartedEvent) => void): grpc.ClientUnaryCall;
    endGame(request: game_v1_game_pb.EndGameCommand, callback: (error: grpc.ServiceError | null, response: game_v1_game_pb.GameEndedEvent) => void): grpc.ClientUnaryCall;
    endGame(request: game_v1_game_pb.EndGameCommand, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: game_v1_game_pb.GameEndedEvent) => void): grpc.ClientUnaryCall;
    endGame(request: game_v1_game_pb.EndGameCommand, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: game_v1_game_pb.GameEndedEvent) => void): grpc.ClientUnaryCall;
}

export class GameClient extends grpc.Client implements IGameClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public createPlayer(request: game_v1_game_pb.CreatePlayerRequest, callback: (error: grpc.ServiceError | null, response: game_v1_game_pb.CreatePlayerResponse) => void): grpc.ClientUnaryCall;
    public createPlayer(request: game_v1_game_pb.CreatePlayerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: game_v1_game_pb.CreatePlayerResponse) => void): grpc.ClientUnaryCall;
    public createPlayer(request: game_v1_game_pb.CreatePlayerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: game_v1_game_pb.CreatePlayerResponse) => void): grpc.ClientUnaryCall;
    public movePlayer(request: game_v1_game_pb.MovePlayerRequest, callback: (error: grpc.ServiceError | null, response: game_v1_game_pb.MovePlayerResponse) => void): grpc.ClientUnaryCall;
    public movePlayer(request: game_v1_game_pb.MovePlayerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: game_v1_game_pb.MovePlayerResponse) => void): grpc.ClientUnaryCall;
    public movePlayer(request: game_v1_game_pb.MovePlayerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: game_v1_game_pb.MovePlayerResponse) => void): grpc.ClientUnaryCall;
    public getLocation(request: game_v1_game_pb.GetLocationRequest, callback: (error: grpc.ServiceError | null, response: game_v1_game_pb.GetLocationResponse) => void): grpc.ClientUnaryCall;
    public getLocation(request: game_v1_game_pb.GetLocationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: game_v1_game_pb.GetLocationResponse) => void): grpc.ClientUnaryCall;
    public getLocation(request: game_v1_game_pb.GetLocationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: game_v1_game_pb.GetLocationResponse) => void): grpc.ClientUnaryCall;
    public listPlayers(request: game_v1_game_pb.ListPlayersRequest, callback: (error: grpc.ServiceError | null, response: game_v1_game_pb.ListPlayersResponse) => void): grpc.ClientUnaryCall;
    public listPlayers(request: game_v1_game_pb.ListPlayersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: game_v1_game_pb.ListPlayersResponse) => void): grpc.ClientUnaryCall;
    public listPlayers(request: game_v1_game_pb.ListPlayersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: game_v1_game_pb.ListPlayersResponse) => void): grpc.ClientUnaryCall;
    public getPlayer(request: game_v1_game_pb.GetPlayerRequest, callback: (error: grpc.ServiceError | null, response: game_v1_game_pb.GetPlayerResponse) => void): grpc.ClientUnaryCall;
    public getPlayer(request: game_v1_game_pb.GetPlayerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: game_v1_game_pb.GetPlayerResponse) => void): grpc.ClientUnaryCall;
    public getPlayer(request: game_v1_game_pb.GetPlayerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: game_v1_game_pb.GetPlayerResponse) => void): grpc.ClientUnaryCall;
    public setPlayer(request: game_v1_game_pb.SetPlayerRequest, callback: (error: grpc.ServiceError | null, response: game_v1_game_pb.SetPlayerResponse) => void): grpc.ClientUnaryCall;
    public setPlayer(request: game_v1_game_pb.SetPlayerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: game_v1_game_pb.SetPlayerResponse) => void): grpc.ClientUnaryCall;
    public setPlayer(request: game_v1_game_pb.SetPlayerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: game_v1_game_pb.SetPlayerResponse) => void): grpc.ClientUnaryCall;
    public updatePlayer(request: game_v1_game_pb.UpdatePlayerRequest, callback: (error: grpc.ServiceError | null, response: game_v1_game_pb.UpdatePlayerResponse) => void): grpc.ClientUnaryCall;
    public updatePlayer(request: game_v1_game_pb.UpdatePlayerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: game_v1_game_pb.UpdatePlayerResponse) => void): grpc.ClientUnaryCall;
    public updatePlayer(request: game_v1_game_pb.UpdatePlayerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: game_v1_game_pb.UpdatePlayerResponse) => void): grpc.ClientUnaryCall;
    public getRoomState(request: game_v1_game_pb.GetRoomStateRequest, callback: (error: grpc.ServiceError | null, response: game_v1_game_pb.GetRoomStateResponse) => void): grpc.ClientUnaryCall;
    public getRoomState(request: game_v1_game_pb.GetRoomStateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: game_v1_game_pb.GetRoomStateResponse) => void): grpc.ClientUnaryCall;
    public getRoomState(request: game_v1_game_pb.GetRoomStateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: game_v1_game_pb.GetRoomStateResponse) => void): grpc.ClientUnaryCall;
    public socialLogin(request: game_v1_game_pb.SocialLoginRequest, callback: (error: grpc.ServiceError | null, response: game_v1_game_pb.SocialLoginResponse) => void): grpc.ClientUnaryCall;
    public socialLogin(request: game_v1_game_pb.SocialLoginRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: game_v1_game_pb.SocialLoginResponse) => void): grpc.ClientUnaryCall;
    public socialLogin(request: game_v1_game_pb.SocialLoginRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: game_v1_game_pb.SocialLoginResponse) => void): grpc.ClientUnaryCall;
    public login(request: game_v1_game_pb.LoginRequest, callback: (error: grpc.ServiceError | null, response: game_v1_game_pb.LoginResponse) => void): grpc.ClientUnaryCall;
    public login(request: game_v1_game_pb.LoginRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: game_v1_game_pb.LoginResponse) => void): grpc.ClientUnaryCall;
    public login(request: game_v1_game_pb.LoginRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: game_v1_game_pb.LoginResponse) => void): grpc.ClientUnaryCall;
    public linkSocialAccount(request: game_v1_game_pb.LinkSocialAccountRequest, callback: (error: grpc.ServiceError | null, response: game_v1_game_pb.LinkSocialAccountResponse) => void): grpc.ClientUnaryCall;
    public linkSocialAccount(request: game_v1_game_pb.LinkSocialAccountRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: game_v1_game_pb.LinkSocialAccountResponse) => void): grpc.ClientUnaryCall;
    public linkSocialAccount(request: game_v1_game_pb.LinkSocialAccountRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: game_v1_game_pb.LinkSocialAccountResponse) => void): grpc.ClientUnaryCall;
    public unlinkSocialAccount(request: game_v1_game_pb.UnlinkSocialAccountRequest, callback: (error: grpc.ServiceError | null, response: game_v1_game_pb.UnlinkSocialAccountResponse) => void): grpc.ClientUnaryCall;
    public unlinkSocialAccount(request: game_v1_game_pb.UnlinkSocialAccountRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: game_v1_game_pb.UnlinkSocialAccountResponse) => void): grpc.ClientUnaryCall;
    public unlinkSocialAccount(request: game_v1_game_pb.UnlinkSocialAccountRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: game_v1_game_pb.UnlinkSocialAccountResponse) => void): grpc.ClientUnaryCall;
    public executeCommand(request: game_v1_game_pb.ExecuteCommandRequest, callback: (error: grpc.ServiceError | null, response: game_v1_game_pb.ExecuteCommandResponse) => void): grpc.ClientUnaryCall;
    public executeCommand(request: game_v1_game_pb.ExecuteCommandRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: game_v1_game_pb.ExecuteCommandResponse) => void): grpc.ClientUnaryCall;
    public executeCommand(request: game_v1_game_pb.ExecuteCommandRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: game_v1_game_pb.ExecuteCommandResponse) => void): grpc.ClientUnaryCall;
    public createGame(request: game_v1_game_pb.CreateGameCommand, callback: (error: grpc.ServiceError | null, response: game_v1_game_pb.GameCreatedEvent) => void): grpc.ClientUnaryCall;
    public createGame(request: game_v1_game_pb.CreateGameCommand, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: game_v1_game_pb.GameCreatedEvent) => void): grpc.ClientUnaryCall;
    public createGame(request: game_v1_game_pb.CreateGameCommand, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: game_v1_game_pb.GameCreatedEvent) => void): grpc.ClientUnaryCall;
    public startGame(request: game_v1_game_pb.StartGameCommand, callback: (error: grpc.ServiceError | null, response: game_v1_game_pb.GameStartedEvent) => void): grpc.ClientUnaryCall;
    public startGame(request: game_v1_game_pb.StartGameCommand, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: game_v1_game_pb.GameStartedEvent) => void): grpc.ClientUnaryCall;
    public startGame(request: game_v1_game_pb.StartGameCommand, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: game_v1_game_pb.GameStartedEvent) => void): grpc.ClientUnaryCall;
    public endGame(request: game_v1_game_pb.EndGameCommand, callback: (error: grpc.ServiceError | null, response: game_v1_game_pb.GameEndedEvent) => void): grpc.ClientUnaryCall;
    public endGame(request: game_v1_game_pb.EndGameCommand, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: game_v1_game_pb.GameEndedEvent) => void): grpc.ClientUnaryCall;
    public endGame(request: game_v1_game_pb.EndGameCommand, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: game_v1_game_pb.GameEndedEvent) => void): grpc.ClientUnaryCall;
}
