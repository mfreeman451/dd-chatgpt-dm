// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var player_v1_player_pb = require('../../player/v1/player_pb.js');

function serialize_player_v1_CreatePlayerRequest(arg) {
  if (!(arg instanceof player_v1_player_pb.CreatePlayerRequest)) {
    throw new Error('Expected argument of type player.v1.CreatePlayerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_player_v1_CreatePlayerRequest(buffer_arg) {
  return player_v1_player_pb.CreatePlayerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_player_v1_CreatePlayerResponse(arg) {
  if (!(arg instanceof player_v1_player_pb.CreatePlayerResponse)) {
    throw new Error('Expected argument of type player.v1.CreatePlayerResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_player_v1_CreatePlayerResponse(buffer_arg) {
  return player_v1_player_pb.CreatePlayerResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_player_v1_GetPlayerRequest(arg) {
  if (!(arg instanceof player_v1_player_pb.GetPlayerRequest)) {
    throw new Error('Expected argument of type player.v1.GetPlayerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_player_v1_GetPlayerRequest(buffer_arg) {
  return player_v1_player_pb.GetPlayerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_player_v1_GetPlayerResponse(arg) {
  if (!(arg instanceof player_v1_player_pb.GetPlayerResponse)) {
    throw new Error('Expected argument of type player.v1.GetPlayerResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_player_v1_GetPlayerResponse(buffer_arg) {
  return player_v1_player_pb.GetPlayerResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_player_v1_ListPlayersRequest(arg) {
  if (!(arg instanceof player_v1_player_pb.ListPlayersRequest)) {
    throw new Error('Expected argument of type player.v1.ListPlayersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_player_v1_ListPlayersRequest(buffer_arg) {
  return player_v1_player_pb.ListPlayersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_player_v1_ListPlayersResponse(arg) {
  if (!(arg instanceof player_v1_player_pb.ListPlayersResponse)) {
    throw new Error('Expected argument of type player.v1.ListPlayersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_player_v1_ListPlayersResponse(buffer_arg) {
  return player_v1_player_pb.ListPlayersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_player_v1_MovePlayerRequest(arg) {
  if (!(arg instanceof player_v1_player_pb.MovePlayerRequest)) {
    throw new Error('Expected argument of type player.v1.MovePlayerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_player_v1_MovePlayerRequest(buffer_arg) {
  return player_v1_player_pb.MovePlayerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_player_v1_MovePlayerResponse(arg) {
  if (!(arg instanceof player_v1_player_pb.MovePlayerResponse)) {
    throw new Error('Expected argument of type player.v1.MovePlayerResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_player_v1_MovePlayerResponse(buffer_arg) {
  return player_v1_player_pb.MovePlayerResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_player_v1_SetPlayerRequest(arg) {
  if (!(arg instanceof player_v1_player_pb.SetPlayerRequest)) {
    throw new Error('Expected argument of type player.v1.SetPlayerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_player_v1_SetPlayerRequest(buffer_arg) {
  return player_v1_player_pb.SetPlayerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_player_v1_SetPlayerResponse(arg) {
  if (!(arg instanceof player_v1_player_pb.SetPlayerResponse)) {
    throw new Error('Expected argument of type player.v1.SetPlayerResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_player_v1_SetPlayerResponse(buffer_arg) {
  return player_v1_player_pb.SetPlayerResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_player_v1_UpdatePlayerRequest(arg) {
  if (!(arg instanceof player_v1_player_pb.UpdatePlayerRequest)) {
    throw new Error('Expected argument of type player.v1.UpdatePlayerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_player_v1_UpdatePlayerRequest(buffer_arg) {
  return player_v1_player_pb.UpdatePlayerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_player_v1_UpdatePlayerResponse(arg) {
  if (!(arg instanceof player_v1_player_pb.UpdatePlayerResponse)) {
    throw new Error('Expected argument of type player.v1.UpdatePlayerResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_player_v1_UpdatePlayerResponse(buffer_arg) {
  return player_v1_player_pb.UpdatePlayerResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// option go_package = "pb/game";
//
var PlayerSvcService = exports.PlayerSvcService = {
  createPlayer: {
    path: '/player.v1.PlayerSvc/CreatePlayer',
    requestStream: false,
    responseStream: false,
    requestType: player_v1_player_pb.CreatePlayerRequest,
    responseType: player_v1_player_pb.CreatePlayerResponse,
    requestSerialize: serialize_player_v1_CreatePlayerRequest,
    requestDeserialize: deserialize_player_v1_CreatePlayerRequest,
    responseSerialize: serialize_player_v1_CreatePlayerResponse,
    responseDeserialize: deserialize_player_v1_CreatePlayerResponse,
  },
  movePlayer: {
    path: '/player.v1.PlayerSvc/MovePlayer',
    requestStream: false,
    responseStream: false,
    requestType: player_v1_player_pb.MovePlayerRequest,
    responseType: player_v1_player_pb.MovePlayerResponse,
    requestSerialize: serialize_player_v1_MovePlayerRequest,
    requestDeserialize: deserialize_player_v1_MovePlayerRequest,
    responseSerialize: serialize_player_v1_MovePlayerResponse,
    responseDeserialize: deserialize_player_v1_MovePlayerResponse,
  },
  listPlayers: {
    path: '/player.v1.PlayerSvc/ListPlayers',
    requestStream: false,
    responseStream: false,
    requestType: player_v1_player_pb.ListPlayersRequest,
    responseType: player_v1_player_pb.ListPlayersResponse,
    requestSerialize: serialize_player_v1_ListPlayersRequest,
    requestDeserialize: deserialize_player_v1_ListPlayersRequest,
    responseSerialize: serialize_player_v1_ListPlayersResponse,
    responseDeserialize: deserialize_player_v1_ListPlayersResponse,
  },
  getPlayer: {
    path: '/player.v1.PlayerSvc/GetPlayer',
    requestStream: false,
    responseStream: false,
    requestType: player_v1_player_pb.GetPlayerRequest,
    responseType: player_v1_player_pb.GetPlayerResponse,
    requestSerialize: serialize_player_v1_GetPlayerRequest,
    requestDeserialize: deserialize_player_v1_GetPlayerRequest,
    responseSerialize: serialize_player_v1_GetPlayerResponse,
    responseDeserialize: deserialize_player_v1_GetPlayerResponse,
  },
  setPlayer: {
    path: '/player.v1.PlayerSvc/SetPlayer',
    requestStream: false,
    responseStream: false,
    requestType: player_v1_player_pb.SetPlayerRequest,
    responseType: player_v1_player_pb.SetPlayerResponse,
    requestSerialize: serialize_player_v1_SetPlayerRequest,
    requestDeserialize: deserialize_player_v1_SetPlayerRequest,
    responseSerialize: serialize_player_v1_SetPlayerResponse,
    responseDeserialize: deserialize_player_v1_SetPlayerResponse,
  },
  // Added SetPlayer method
updatePlayer: {
    path: '/player.v1.PlayerSvc/UpdatePlayer',
    requestStream: false,
    responseStream: false,
    requestType: player_v1_player_pb.UpdatePlayerRequest,
    responseType: player_v1_player_pb.UpdatePlayerResponse,
    requestSerialize: serialize_player_v1_UpdatePlayerRequest,
    requestDeserialize: deserialize_player_v1_UpdatePlayerRequest,
    responseSerialize: serialize_player_v1_UpdatePlayerResponse,
    responseDeserialize: deserialize_player_v1_UpdatePlayerResponse,
  },
};

exports.PlayerSvcClient = grpc.makeGenericClientConstructor(PlayerSvcService);
