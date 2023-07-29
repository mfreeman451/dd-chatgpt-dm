// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var game_pb = require('./game_pb.js');

function serialize_CreatePlayerRequest(arg) {
  if (!(arg instanceof game_pb.CreatePlayerRequest)) {
    throw new Error('Expected argument of type CreatePlayerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_CreatePlayerRequest(buffer_arg) {
  return game_pb.CreatePlayerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_CreatePlayerResponse(arg) {
  if (!(arg instanceof game_pb.CreatePlayerResponse)) {
    throw new Error('Expected argument of type CreatePlayerResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_CreatePlayerResponse(buffer_arg) {
  return game_pb.CreatePlayerResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_GetLocationRequest(arg) {
  if (!(arg instanceof game_pb.GetLocationRequest)) {
    throw new Error('Expected argument of type GetLocationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_GetLocationRequest(buffer_arg) {
  return game_pb.GetLocationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_GetLocationResponse(arg) {
  if (!(arg instanceof game_pb.GetLocationResponse)) {
    throw new Error('Expected argument of type GetLocationResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_GetLocationResponse(buffer_arg) {
  return game_pb.GetLocationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_GetPlayerRequest(arg) {
  if (!(arg instanceof game_pb.GetPlayerRequest)) {
    throw new Error('Expected argument of type GetPlayerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_GetPlayerRequest(buffer_arg) {
  return game_pb.GetPlayerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_GetPlayerResponse(arg) {
  if (!(arg instanceof game_pb.GetPlayerResponse)) {
    throw new Error('Expected argument of type GetPlayerResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_GetPlayerResponse(buffer_arg) {
  return game_pb.GetPlayerResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ListPlayersRequest(arg) {
  if (!(arg instanceof game_pb.ListPlayersRequest)) {
    throw new Error('Expected argument of type ListPlayersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ListPlayersRequest(buffer_arg) {
  return game_pb.ListPlayersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ListPlayersResponse(arg) {
  if (!(arg instanceof game_pb.ListPlayersResponse)) {
    throw new Error('Expected argument of type ListPlayersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ListPlayersResponse(buffer_arg) {
  return game_pb.ListPlayersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_MovePlayerRequest(arg) {
  if (!(arg instanceof game_pb.MovePlayerRequest)) {
    throw new Error('Expected argument of type MovePlayerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_MovePlayerRequest(buffer_arg) {
  return game_pb.MovePlayerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_MovePlayerResponse(arg) {
  if (!(arg instanceof game_pb.MovePlayerResponse)) {
    throw new Error('Expected argument of type MovePlayerResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_MovePlayerResponse(buffer_arg) {
  return game_pb.MovePlayerResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SetPlayerRequest(arg) {
  if (!(arg instanceof game_pb.SetPlayerRequest)) {
    throw new Error('Expected argument of type SetPlayerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_SetPlayerRequest(buffer_arg) {
  return game_pb.SetPlayerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SetPlayerResponse(arg) {
  if (!(arg instanceof game_pb.SetPlayerResponse)) {
    throw new Error('Expected argument of type SetPlayerResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_SetPlayerResponse(buffer_arg) {
  return game_pb.SetPlayerResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_UpdatePlayerRequest(arg) {
  if (!(arg instanceof game_pb.UpdatePlayerRequest)) {
    throw new Error('Expected argument of type UpdatePlayerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_UpdatePlayerRequest(buffer_arg) {
  return game_pb.UpdatePlayerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_UpdatePlayerResponse(arg) {
  if (!(arg instanceof game_pb.UpdatePlayerResponse)) {
    throw new Error('Expected argument of type UpdatePlayerResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_UpdatePlayerResponse(buffer_arg) {
  return game_pb.UpdatePlayerResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var GameService = exports.GameService = {
  createPlayer: {
    path: '/Game/CreatePlayer',
    requestStream: false,
    responseStream: false,
    requestType: game_pb.CreatePlayerRequest,
    responseType: game_pb.CreatePlayerResponse,
    requestSerialize: serialize_CreatePlayerRequest,
    requestDeserialize: deserialize_CreatePlayerRequest,
    responseSerialize: serialize_CreatePlayerResponse,
    responseDeserialize: deserialize_CreatePlayerResponse,
  },
  movePlayer: {
    path: '/Game/MovePlayer',
    requestStream: false,
    responseStream: false,
    requestType: game_pb.MovePlayerRequest,
    responseType: game_pb.MovePlayerResponse,
    requestSerialize: serialize_MovePlayerRequest,
    requestDeserialize: deserialize_MovePlayerRequest,
    responseSerialize: serialize_MovePlayerResponse,
    responseDeserialize: deserialize_MovePlayerResponse,
  },
  getLocation: {
    path: '/Game/GetLocation',
    requestStream: false,
    responseStream: false,
    requestType: game_pb.GetLocationRequest,
    responseType: game_pb.GetLocationResponse,
    requestSerialize: serialize_GetLocationRequest,
    requestDeserialize: deserialize_GetLocationRequest,
    responseSerialize: serialize_GetLocationResponse,
    responseDeserialize: deserialize_GetLocationResponse,
  },
  listPlayers: {
    path: '/Game/ListPlayers',
    requestStream: false,
    responseStream: false,
    requestType: game_pb.ListPlayersRequest,
    responseType: game_pb.ListPlayersResponse,
    requestSerialize: serialize_ListPlayersRequest,
    requestDeserialize: deserialize_ListPlayersRequest,
    responseSerialize: serialize_ListPlayersResponse,
    responseDeserialize: deserialize_ListPlayersResponse,
  },
  getPlayer: {
    path: '/Game/GetPlayer',
    requestStream: false,
    responseStream: false,
    requestType: game_pb.GetPlayerRequest,
    responseType: game_pb.GetPlayerResponse,
    requestSerialize: serialize_GetPlayerRequest,
    requestDeserialize: deserialize_GetPlayerRequest,
    responseSerialize: serialize_GetPlayerResponse,
    responseDeserialize: deserialize_GetPlayerResponse,
  },
  setPlayer: {
    path: '/Game/SetPlayer',
    requestStream: false,
    responseStream: false,
    requestType: game_pb.SetPlayerRequest,
    responseType: game_pb.SetPlayerResponse,
    requestSerialize: serialize_SetPlayerRequest,
    requestDeserialize: deserialize_SetPlayerRequest,
    responseSerialize: serialize_SetPlayerResponse,
    responseDeserialize: deserialize_SetPlayerResponse,
  },
  // Added SetPlayer method
updatePlayer: {
    path: '/Game/UpdatePlayer',
    requestStream: false,
    responseStream: false,
    requestType: game_pb.UpdatePlayerRequest,
    responseType: game_pb.UpdatePlayerResponse,
    requestSerialize: serialize_UpdatePlayerRequest,
    requestDeserialize: deserialize_UpdatePlayerRequest,
    responseSerialize: serialize_UpdatePlayerResponse,
    responseDeserialize: deserialize_UpdatePlayerResponse,
  },
};

exports.GameClient = grpc.makeGenericClientConstructor(GameService);
