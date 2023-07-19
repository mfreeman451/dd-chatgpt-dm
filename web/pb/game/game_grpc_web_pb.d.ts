import * as grpcWeb from 'grpc-web';

import * as game_pb from './game_pb';


export class GameClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createPlayer(
    request: game_pb.CreatePlayerRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: game_pb.CreatePlayerResponse) => void
  ): grpcWeb.ClientReadableStream<game_pb.CreatePlayerResponse>;

  movePlayer(
    request: game_pb.MovePlayerRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: game_pb.MovePlayerResponse) => void
  ): grpcWeb.ClientReadableStream<game_pb.MovePlayerResponse>;

  getLocation(
    request: game_pb.GetLocationRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: game_pb.GetLocationResponse) => void
  ): grpcWeb.ClientReadableStream<game_pb.GetLocationResponse>;

  listPlayers(
    request: game_pb.ListPlayersRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: game_pb.ListPlayersResponse) => void
  ): grpcWeb.ClientReadableStream<game_pb.ListPlayersResponse>;

  getPlayer(
    request: game_pb.GetPlayerRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: game_pb.GetPlayerResponse) => void
  ): grpcWeb.ClientReadableStream<game_pb.GetPlayerResponse>;

}

export class GamePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createPlayer(
    request: game_pb.CreatePlayerRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<game_pb.CreatePlayerResponse>;

  movePlayer(
    request: game_pb.MovePlayerRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<game_pb.MovePlayerResponse>;

  getLocation(
    request: game_pb.GetLocationRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<game_pb.GetLocationResponse>;

  listPlayers(
    request: game_pb.ListPlayersRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<game_pb.ListPlayersResponse>;

  getPlayer(
    request: game_pb.GetPlayerRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<game_pb.GetPlayerResponse>;

}

