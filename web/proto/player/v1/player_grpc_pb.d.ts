// package: player.v1
// file: player/v1/player.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as player_v1_player_pb from "../../player/v1/player_pb";

interface IPlayerSvcService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createPlayer: IPlayerSvcService_ICreatePlayer;
    movePlayer: IPlayerSvcService_IMovePlayer;
    listPlayers: IPlayerSvcService_IListPlayers;
    getPlayer: IPlayerSvcService_IGetPlayer;
    setPlayer: IPlayerSvcService_ISetPlayer;
    updatePlayer: IPlayerSvcService_IUpdatePlayer;
}

interface IPlayerSvcService_ICreatePlayer extends grpc.MethodDefinition<player_v1_player_pb.CreatePlayerRequest, player_v1_player_pb.CreatePlayerResponse> {
    path: "/player.v1.PlayerSvc/CreatePlayer";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<player_v1_player_pb.CreatePlayerRequest>;
    requestDeserialize: grpc.deserialize<player_v1_player_pb.CreatePlayerRequest>;
    responseSerialize: grpc.serialize<player_v1_player_pb.CreatePlayerResponse>;
    responseDeserialize: grpc.deserialize<player_v1_player_pb.CreatePlayerResponse>;
}
interface IPlayerSvcService_IMovePlayer extends grpc.MethodDefinition<player_v1_player_pb.MovePlayerRequest, player_v1_player_pb.MovePlayerResponse> {
    path: "/player.v1.PlayerSvc/MovePlayer";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<player_v1_player_pb.MovePlayerRequest>;
    requestDeserialize: grpc.deserialize<player_v1_player_pb.MovePlayerRequest>;
    responseSerialize: grpc.serialize<player_v1_player_pb.MovePlayerResponse>;
    responseDeserialize: grpc.deserialize<player_v1_player_pb.MovePlayerResponse>;
}
interface IPlayerSvcService_IListPlayers extends grpc.MethodDefinition<player_v1_player_pb.ListPlayersRequest, player_v1_player_pb.ListPlayersResponse> {
    path: "/player.v1.PlayerSvc/ListPlayers";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<player_v1_player_pb.ListPlayersRequest>;
    requestDeserialize: grpc.deserialize<player_v1_player_pb.ListPlayersRequest>;
    responseSerialize: grpc.serialize<player_v1_player_pb.ListPlayersResponse>;
    responseDeserialize: grpc.deserialize<player_v1_player_pb.ListPlayersResponse>;
}
interface IPlayerSvcService_IGetPlayer extends grpc.MethodDefinition<player_v1_player_pb.GetPlayerRequest, player_v1_player_pb.GetPlayerResponse> {
    path: "/player.v1.PlayerSvc/GetPlayer";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<player_v1_player_pb.GetPlayerRequest>;
    requestDeserialize: grpc.deserialize<player_v1_player_pb.GetPlayerRequest>;
    responseSerialize: grpc.serialize<player_v1_player_pb.GetPlayerResponse>;
    responseDeserialize: grpc.deserialize<player_v1_player_pb.GetPlayerResponse>;
}
interface IPlayerSvcService_ISetPlayer extends grpc.MethodDefinition<player_v1_player_pb.SetPlayerRequest, player_v1_player_pb.SetPlayerResponse> {
    path: "/player.v1.PlayerSvc/SetPlayer";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<player_v1_player_pb.SetPlayerRequest>;
    requestDeserialize: grpc.deserialize<player_v1_player_pb.SetPlayerRequest>;
    responseSerialize: grpc.serialize<player_v1_player_pb.SetPlayerResponse>;
    responseDeserialize: grpc.deserialize<player_v1_player_pb.SetPlayerResponse>;
}
interface IPlayerSvcService_IUpdatePlayer extends grpc.MethodDefinition<player_v1_player_pb.UpdatePlayerRequest, player_v1_player_pb.UpdatePlayerResponse> {
    path: "/player.v1.PlayerSvc/UpdatePlayer";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<player_v1_player_pb.UpdatePlayerRequest>;
    requestDeserialize: grpc.deserialize<player_v1_player_pb.UpdatePlayerRequest>;
    responseSerialize: grpc.serialize<player_v1_player_pb.UpdatePlayerResponse>;
    responseDeserialize: grpc.deserialize<player_v1_player_pb.UpdatePlayerResponse>;
}

export const PlayerSvcService: IPlayerSvcService;

export interface IPlayerSvcServer extends grpc.UntypedServiceImplementation {
    createPlayer: grpc.handleUnaryCall<player_v1_player_pb.CreatePlayerRequest, player_v1_player_pb.CreatePlayerResponse>;
    movePlayer: grpc.handleUnaryCall<player_v1_player_pb.MovePlayerRequest, player_v1_player_pb.MovePlayerResponse>;
    listPlayers: grpc.handleUnaryCall<player_v1_player_pb.ListPlayersRequest, player_v1_player_pb.ListPlayersResponse>;
    getPlayer: grpc.handleUnaryCall<player_v1_player_pb.GetPlayerRequest, player_v1_player_pb.GetPlayerResponse>;
    setPlayer: grpc.handleUnaryCall<player_v1_player_pb.SetPlayerRequest, player_v1_player_pb.SetPlayerResponse>;
    updatePlayer: grpc.handleUnaryCall<player_v1_player_pb.UpdatePlayerRequest, player_v1_player_pb.UpdatePlayerResponse>;
}

export interface IPlayerSvcClient {
    createPlayer(request: player_v1_player_pb.CreatePlayerRequest, callback: (error: grpc.ServiceError | null, response: player_v1_player_pb.CreatePlayerResponse) => void): grpc.ClientUnaryCall;
    createPlayer(request: player_v1_player_pb.CreatePlayerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: player_v1_player_pb.CreatePlayerResponse) => void): grpc.ClientUnaryCall;
    createPlayer(request: player_v1_player_pb.CreatePlayerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: player_v1_player_pb.CreatePlayerResponse) => void): grpc.ClientUnaryCall;
    movePlayer(request: player_v1_player_pb.MovePlayerRequest, callback: (error: grpc.ServiceError | null, response: player_v1_player_pb.MovePlayerResponse) => void): grpc.ClientUnaryCall;
    movePlayer(request: player_v1_player_pb.MovePlayerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: player_v1_player_pb.MovePlayerResponse) => void): grpc.ClientUnaryCall;
    movePlayer(request: player_v1_player_pb.MovePlayerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: player_v1_player_pb.MovePlayerResponse) => void): grpc.ClientUnaryCall;
    listPlayers(request: player_v1_player_pb.ListPlayersRequest, callback: (error: grpc.ServiceError | null, response: player_v1_player_pb.ListPlayersResponse) => void): grpc.ClientUnaryCall;
    listPlayers(request: player_v1_player_pb.ListPlayersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: player_v1_player_pb.ListPlayersResponse) => void): grpc.ClientUnaryCall;
    listPlayers(request: player_v1_player_pb.ListPlayersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: player_v1_player_pb.ListPlayersResponse) => void): grpc.ClientUnaryCall;
    getPlayer(request: player_v1_player_pb.GetPlayerRequest, callback: (error: grpc.ServiceError | null, response: player_v1_player_pb.GetPlayerResponse) => void): grpc.ClientUnaryCall;
    getPlayer(request: player_v1_player_pb.GetPlayerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: player_v1_player_pb.GetPlayerResponse) => void): grpc.ClientUnaryCall;
    getPlayer(request: player_v1_player_pb.GetPlayerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: player_v1_player_pb.GetPlayerResponse) => void): grpc.ClientUnaryCall;
    setPlayer(request: player_v1_player_pb.SetPlayerRequest, callback: (error: grpc.ServiceError | null, response: player_v1_player_pb.SetPlayerResponse) => void): grpc.ClientUnaryCall;
    setPlayer(request: player_v1_player_pb.SetPlayerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: player_v1_player_pb.SetPlayerResponse) => void): grpc.ClientUnaryCall;
    setPlayer(request: player_v1_player_pb.SetPlayerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: player_v1_player_pb.SetPlayerResponse) => void): grpc.ClientUnaryCall;
    updatePlayer(request: player_v1_player_pb.UpdatePlayerRequest, callback: (error: grpc.ServiceError | null, response: player_v1_player_pb.UpdatePlayerResponse) => void): grpc.ClientUnaryCall;
    updatePlayer(request: player_v1_player_pb.UpdatePlayerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: player_v1_player_pb.UpdatePlayerResponse) => void): grpc.ClientUnaryCall;
    updatePlayer(request: player_v1_player_pb.UpdatePlayerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: player_v1_player_pb.UpdatePlayerResponse) => void): grpc.ClientUnaryCall;
}

export class PlayerSvcClient extends grpc.Client implements IPlayerSvcClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public createPlayer(request: player_v1_player_pb.CreatePlayerRequest, callback: (error: grpc.ServiceError | null, response: player_v1_player_pb.CreatePlayerResponse) => void): grpc.ClientUnaryCall;
    public createPlayer(request: player_v1_player_pb.CreatePlayerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: player_v1_player_pb.CreatePlayerResponse) => void): grpc.ClientUnaryCall;
    public createPlayer(request: player_v1_player_pb.CreatePlayerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: player_v1_player_pb.CreatePlayerResponse) => void): grpc.ClientUnaryCall;
    public movePlayer(request: player_v1_player_pb.MovePlayerRequest, callback: (error: grpc.ServiceError | null, response: player_v1_player_pb.MovePlayerResponse) => void): grpc.ClientUnaryCall;
    public movePlayer(request: player_v1_player_pb.MovePlayerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: player_v1_player_pb.MovePlayerResponse) => void): grpc.ClientUnaryCall;
    public movePlayer(request: player_v1_player_pb.MovePlayerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: player_v1_player_pb.MovePlayerResponse) => void): grpc.ClientUnaryCall;
    public listPlayers(request: player_v1_player_pb.ListPlayersRequest, callback: (error: grpc.ServiceError | null, response: player_v1_player_pb.ListPlayersResponse) => void): grpc.ClientUnaryCall;
    public listPlayers(request: player_v1_player_pb.ListPlayersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: player_v1_player_pb.ListPlayersResponse) => void): grpc.ClientUnaryCall;
    public listPlayers(request: player_v1_player_pb.ListPlayersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: player_v1_player_pb.ListPlayersResponse) => void): grpc.ClientUnaryCall;
    public getPlayer(request: player_v1_player_pb.GetPlayerRequest, callback: (error: grpc.ServiceError | null, response: player_v1_player_pb.GetPlayerResponse) => void): grpc.ClientUnaryCall;
    public getPlayer(request: player_v1_player_pb.GetPlayerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: player_v1_player_pb.GetPlayerResponse) => void): grpc.ClientUnaryCall;
    public getPlayer(request: player_v1_player_pb.GetPlayerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: player_v1_player_pb.GetPlayerResponse) => void): grpc.ClientUnaryCall;
    public setPlayer(request: player_v1_player_pb.SetPlayerRequest, callback: (error: grpc.ServiceError | null, response: player_v1_player_pb.SetPlayerResponse) => void): grpc.ClientUnaryCall;
    public setPlayer(request: player_v1_player_pb.SetPlayerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: player_v1_player_pb.SetPlayerResponse) => void): grpc.ClientUnaryCall;
    public setPlayer(request: player_v1_player_pb.SetPlayerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: player_v1_player_pb.SetPlayerResponse) => void): grpc.ClientUnaryCall;
    public updatePlayer(request: player_v1_player_pb.UpdatePlayerRequest, callback: (error: grpc.ServiceError | null, response: player_v1_player_pb.UpdatePlayerResponse) => void): grpc.ClientUnaryCall;
    public updatePlayer(request: player_v1_player_pb.UpdatePlayerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: player_v1_player_pb.UpdatePlayerResponse) => void): grpc.ClientUnaryCall;
    public updatePlayer(request: player_v1_player_pb.UpdatePlayerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: player_v1_player_pb.UpdatePlayerResponse) => void): grpc.ClientUnaryCall;
}
