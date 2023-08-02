// package: 
// file: watermill.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as game_pb from "./game_pb";

interface IGameService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createPlayer: IGameService_ICreatePlayer;
    movePlayer: IGameService_IMovePlayer;
    getLocation: IGameService_IGetLocation;
    listPlayers: IGameService_IListPlayers;
    getPlayer: IGameService_IGetPlayer;
    setPlayer: IGameService_ISetPlayer;
    updatePlayer: IGameService_IUpdatePlayer;
}

interface IGameService_ICreatePlayer extends grpc.MethodDefinition<game_pb.CreatePlayerRequest, game_pb.CreatePlayerResponse> {
    path: "/Game/CreatePlayer";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<game_pb.CreatePlayerRequest>;
    requestDeserialize: grpc.deserialize<game_pb.CreatePlayerRequest>;
    responseSerialize: grpc.serialize<game_pb.CreatePlayerResponse>;
    responseDeserialize: grpc.deserialize<game_pb.CreatePlayerResponse>;
}
interface IGameService_IMovePlayer extends grpc.MethodDefinition<game_pb.MovePlayerRequest, game_pb.MovePlayerResponse> {
    path: "/Game/MovePlayer";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<game_pb.MovePlayerRequest>;
    requestDeserialize: grpc.deserialize<game_pb.MovePlayerRequest>;
    responseSerialize: grpc.serialize<game_pb.MovePlayerResponse>;
    responseDeserialize: grpc.deserialize<game_pb.MovePlayerResponse>;
}
interface IGameService_IGetLocation extends grpc.MethodDefinition<game_pb.GetLocationRequest, game_pb.GetLocationResponse> {
    path: "/Game/GetLocation";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<game_pb.GetLocationRequest>;
    requestDeserialize: grpc.deserialize<game_pb.GetLocationRequest>;
    responseSerialize: grpc.serialize<game_pb.GetLocationResponse>;
    responseDeserialize: grpc.deserialize<game_pb.GetLocationResponse>;
}
interface IGameService_IListPlayers extends grpc.MethodDefinition<game_pb.ListPlayersRequest, game_pb.ListPlayersResponse> {
    path: "/Game/ListPlayers";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<game_pb.ListPlayersRequest>;
    requestDeserialize: grpc.deserialize<game_pb.ListPlayersRequest>;
    responseSerialize: grpc.serialize<game_pb.ListPlayersResponse>;
    responseDeserialize: grpc.deserialize<game_pb.ListPlayersResponse>;
}
interface IGameService_IGetPlayer extends grpc.MethodDefinition<game_pb.GetPlayerRequest, game_pb.GetPlayerResponse> {
    path: "/Game/GetPlayer";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<game_pb.GetPlayerRequest>;
    requestDeserialize: grpc.deserialize<game_pb.GetPlayerRequest>;
    responseSerialize: grpc.serialize<game_pb.GetPlayerResponse>;
    responseDeserialize: grpc.deserialize<game_pb.GetPlayerResponse>;
}
interface IGameService_ISetPlayer extends grpc.MethodDefinition<game_pb.SetPlayerRequest, game_pb.SetPlayerResponse> {
    path: "/Game/SetPlayer";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<game_pb.SetPlayerRequest>;
    requestDeserialize: grpc.deserialize<game_pb.SetPlayerRequest>;
    responseSerialize: grpc.serialize<game_pb.SetPlayerResponse>;
    responseDeserialize: grpc.deserialize<game_pb.SetPlayerResponse>;
}
interface IGameService_IUpdatePlayer extends grpc.MethodDefinition<game_pb.UpdatePlayerRequest, game_pb.UpdatePlayerResponse> {
    path: "/Game/UpdatePlayer";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<game_pb.UpdatePlayerRequest>;
    requestDeserialize: grpc.deserialize<game_pb.UpdatePlayerRequest>;
    responseSerialize: grpc.serialize<game_pb.UpdatePlayerResponse>;
    responseDeserialize: grpc.deserialize<game_pb.UpdatePlayerResponse>;
}

export const GameService: IGameService;

export interface IGameServer extends grpc.UntypedServiceImplementation {
    createPlayer: grpc.handleUnaryCall<game_pb.CreatePlayerRequest, game_pb.CreatePlayerResponse>;
    movePlayer: grpc.handleUnaryCall<game_pb.MovePlayerRequest, game_pb.MovePlayerResponse>;
    getLocation: grpc.handleUnaryCall<game_pb.GetLocationRequest, game_pb.GetLocationResponse>;
    listPlayers: grpc.handleUnaryCall<game_pb.ListPlayersRequest, game_pb.ListPlayersResponse>;
    getPlayer: grpc.handleUnaryCall<game_pb.GetPlayerRequest, game_pb.GetPlayerResponse>;
    setPlayer: grpc.handleUnaryCall<game_pb.SetPlayerRequest, game_pb.SetPlayerResponse>;
    updatePlayer: grpc.handleUnaryCall<game_pb.UpdatePlayerRequest, game_pb.UpdatePlayerResponse>;
}

export interface IGameClient {
    createPlayer(request: game_pb.CreatePlayerRequest, callback: (error: grpc.ServiceError | null, response: game_pb.CreatePlayerResponse) => void): grpc.ClientUnaryCall;
    createPlayer(request: game_pb.CreatePlayerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: game_pb.CreatePlayerResponse) => void): grpc.ClientUnaryCall;
    createPlayer(request: game_pb.CreatePlayerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: game_pb.CreatePlayerResponse) => void): grpc.ClientUnaryCall;
    movePlayer(request: game_pb.MovePlayerRequest, callback: (error: grpc.ServiceError | null, response: game_pb.MovePlayerResponse) => void): grpc.ClientUnaryCall;
    movePlayer(request: game_pb.MovePlayerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: game_pb.MovePlayerResponse) => void): grpc.ClientUnaryCall;
    movePlayer(request: game_pb.MovePlayerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: game_pb.MovePlayerResponse) => void): grpc.ClientUnaryCall;
    getLocation(request: game_pb.GetLocationRequest, callback: (error: grpc.ServiceError | null, response: game_pb.GetLocationResponse) => void): grpc.ClientUnaryCall;
    getLocation(request: game_pb.GetLocationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: game_pb.GetLocationResponse) => void): grpc.ClientUnaryCall;
    getLocation(request: game_pb.GetLocationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: game_pb.GetLocationResponse) => void): grpc.ClientUnaryCall;
    listPlayers(request: game_pb.ListPlayersRequest, callback: (error: grpc.ServiceError | null, response: game_pb.ListPlayersResponse) => void): grpc.ClientUnaryCall;
    listPlayers(request: game_pb.ListPlayersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: game_pb.ListPlayersResponse) => void): grpc.ClientUnaryCall;
    listPlayers(request: game_pb.ListPlayersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: game_pb.ListPlayersResponse) => void): grpc.ClientUnaryCall;
    getPlayer(request: game_pb.GetPlayerRequest, callback: (error: grpc.ServiceError | null, response: game_pb.GetPlayerResponse) => void): grpc.ClientUnaryCall;
    getPlayer(request: game_pb.GetPlayerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: game_pb.GetPlayerResponse) => void): grpc.ClientUnaryCall;
    getPlayer(request: game_pb.GetPlayerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: game_pb.GetPlayerResponse) => void): grpc.ClientUnaryCall;
    setPlayer(request: game_pb.SetPlayerRequest, callback: (error: grpc.ServiceError | null, response: game_pb.SetPlayerResponse) => void): grpc.ClientUnaryCall;
    setPlayer(request: game_pb.SetPlayerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: game_pb.SetPlayerResponse) => void): grpc.ClientUnaryCall;
    setPlayer(request: game_pb.SetPlayerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: game_pb.SetPlayerResponse) => void): grpc.ClientUnaryCall;
    updatePlayer(request: game_pb.UpdatePlayerRequest, callback: (error: grpc.ServiceError | null, response: game_pb.UpdatePlayerResponse) => void): grpc.ClientUnaryCall;
    updatePlayer(request: game_pb.UpdatePlayerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: game_pb.UpdatePlayerResponse) => void): grpc.ClientUnaryCall;
    updatePlayer(request: game_pb.UpdatePlayerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: game_pb.UpdatePlayerResponse) => void): grpc.ClientUnaryCall;
}

export class GameClient extends grpc.Client implements IGameClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public createPlayer(request: game_pb.CreatePlayerRequest, callback: (error: grpc.ServiceError | null, response: game_pb.CreatePlayerResponse) => void): grpc.ClientUnaryCall;
    public createPlayer(request: game_pb.CreatePlayerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: game_pb.CreatePlayerResponse) => void): grpc.ClientUnaryCall;
    public createPlayer(request: game_pb.CreatePlayerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: game_pb.CreatePlayerResponse) => void): grpc.ClientUnaryCall;
    public movePlayer(request: game_pb.MovePlayerRequest, callback: (error: grpc.ServiceError | null, response: game_pb.MovePlayerResponse) => void): grpc.ClientUnaryCall;
    public movePlayer(request: game_pb.MovePlayerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: game_pb.MovePlayerResponse) => void): grpc.ClientUnaryCall;
    public movePlayer(request: game_pb.MovePlayerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: game_pb.MovePlayerResponse) => void): grpc.ClientUnaryCall;
    public getLocation(request: game_pb.GetLocationRequest, callback: (error: grpc.ServiceError | null, response: game_pb.GetLocationResponse) => void): grpc.ClientUnaryCall;
    public getLocation(request: game_pb.GetLocationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: game_pb.GetLocationResponse) => void): grpc.ClientUnaryCall;
    public getLocation(request: game_pb.GetLocationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: game_pb.GetLocationResponse) => void): grpc.ClientUnaryCall;
    public listPlayers(request: game_pb.ListPlayersRequest, callback: (error: grpc.ServiceError | null, response: game_pb.ListPlayersResponse) => void): grpc.ClientUnaryCall;
    public listPlayers(request: game_pb.ListPlayersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: game_pb.ListPlayersResponse) => void): grpc.ClientUnaryCall;
    public listPlayers(request: game_pb.ListPlayersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: game_pb.ListPlayersResponse) => void): grpc.ClientUnaryCall;
    public getPlayer(request: game_pb.GetPlayerRequest, callback: (error: grpc.ServiceError | null, response: game_pb.GetPlayerResponse) => void): grpc.ClientUnaryCall;
    public getPlayer(request: game_pb.GetPlayerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: game_pb.GetPlayerResponse) => void): grpc.ClientUnaryCall;
    public getPlayer(request: game_pb.GetPlayerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: game_pb.GetPlayerResponse) => void): grpc.ClientUnaryCall;
    public setPlayer(request: game_pb.SetPlayerRequest, callback: (error: grpc.ServiceError | null, response: game_pb.SetPlayerResponse) => void): grpc.ClientUnaryCall;
    public setPlayer(request: game_pb.SetPlayerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: game_pb.SetPlayerResponse) => void): grpc.ClientUnaryCall;
    public setPlayer(request: game_pb.SetPlayerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: game_pb.SetPlayerResponse) => void): grpc.ClientUnaryCall;
    public updatePlayer(request: game_pb.UpdatePlayerRequest, callback: (error: grpc.ServiceError | null, response: game_pb.UpdatePlayerResponse) => void): grpc.ClientUnaryCall;
    public updatePlayer(request: game_pb.UpdatePlayerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: game_pb.UpdatePlayerResponse) => void): grpc.ClientUnaryCall;
    public updatePlayer(request: game_pb.UpdatePlayerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: game_pb.UpdatePlayerResponse) => void): grpc.ClientUnaryCall;
}
