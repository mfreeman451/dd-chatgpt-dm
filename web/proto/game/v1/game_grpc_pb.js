// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var game_v1_game_pb = require('../../game/v1/game_pb.js');

function serialize_game_v1_CreateGameCommand(arg) {
  if (!(arg instanceof game_v1_game_pb.CreateGameCommand)) {
    throw new Error('Expected argument of type game.v1.CreateGameCommand');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_game_v1_CreateGameCommand(buffer_arg) {
  return game_v1_game_pb.CreateGameCommand.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_game_v1_CreatePlayerRequest(arg) {
  if (!(arg instanceof game_v1_game_pb.CreatePlayerRequest)) {
    throw new Error('Expected argument of type game.v1.CreatePlayerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_game_v1_CreatePlayerRequest(buffer_arg) {
  return game_v1_game_pb.CreatePlayerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_game_v1_CreatePlayerResponse(arg) {
  if (!(arg instanceof game_v1_game_pb.CreatePlayerResponse)) {
    throw new Error('Expected argument of type game.v1.CreatePlayerResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_game_v1_CreatePlayerResponse(buffer_arg) {
  return game_v1_game_pb.CreatePlayerResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_game_v1_EndGameCommand(arg) {
  if (!(arg instanceof game_v1_game_pb.EndGameCommand)) {
    throw new Error('Expected argument of type game.v1.EndGameCommand');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_game_v1_EndGameCommand(buffer_arg) {
  return game_v1_game_pb.EndGameCommand.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_game_v1_ExecuteCommandRequest(arg) {
  if (!(arg instanceof game_v1_game_pb.ExecuteCommandRequest)) {
    throw new Error('Expected argument of type game.v1.ExecuteCommandRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_game_v1_ExecuteCommandRequest(buffer_arg) {
  return game_v1_game_pb.ExecuteCommandRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_game_v1_ExecuteCommandResponse(arg) {
  if (!(arg instanceof game_v1_game_pb.ExecuteCommandResponse)) {
    throw new Error('Expected argument of type game.v1.ExecuteCommandResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_game_v1_ExecuteCommandResponse(buffer_arg) {
  return game_v1_game_pb.ExecuteCommandResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_game_v1_GameCreatedEvent(arg) {
  if (!(arg instanceof game_v1_game_pb.GameCreatedEvent)) {
    throw new Error('Expected argument of type game.v1.GameCreatedEvent');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_game_v1_GameCreatedEvent(buffer_arg) {
  return game_v1_game_pb.GameCreatedEvent.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_game_v1_GameEndedEvent(arg) {
  if (!(arg instanceof game_v1_game_pb.GameEndedEvent)) {
    throw new Error('Expected argument of type game.v1.GameEndedEvent');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_game_v1_GameEndedEvent(buffer_arg) {
  return game_v1_game_pb.GameEndedEvent.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_game_v1_GameStartedEvent(arg) {
  if (!(arg instanceof game_v1_game_pb.GameStartedEvent)) {
    throw new Error('Expected argument of type game.v1.GameStartedEvent');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_game_v1_GameStartedEvent(buffer_arg) {
  return game_v1_game_pb.GameStartedEvent.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_game_v1_GetLocationRequest(arg) {
  if (!(arg instanceof game_v1_game_pb.GetLocationRequest)) {
    throw new Error('Expected argument of type game.v1.GetLocationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_game_v1_GetLocationRequest(buffer_arg) {
  return game_v1_game_pb.GetLocationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_game_v1_GetLocationResponse(arg) {
  if (!(arg instanceof game_v1_game_pb.GetLocationResponse)) {
    throw new Error('Expected argument of type game.v1.GetLocationResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_game_v1_GetLocationResponse(buffer_arg) {
  return game_v1_game_pb.GetLocationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_game_v1_GetPlayerRequest(arg) {
  if (!(arg instanceof game_v1_game_pb.GetPlayerRequest)) {
    throw new Error('Expected argument of type game.v1.GetPlayerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_game_v1_GetPlayerRequest(buffer_arg) {
  return game_v1_game_pb.GetPlayerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_game_v1_GetPlayerResponse(arg) {
  if (!(arg instanceof game_v1_game_pb.GetPlayerResponse)) {
    throw new Error('Expected argument of type game.v1.GetPlayerResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_game_v1_GetPlayerResponse(buffer_arg) {
  return game_v1_game_pb.GetPlayerResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_game_v1_GetRoomStateRequest(arg) {
  if (!(arg instanceof game_v1_game_pb.GetRoomStateRequest)) {
    throw new Error('Expected argument of type game.v1.GetRoomStateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_game_v1_GetRoomStateRequest(buffer_arg) {
  return game_v1_game_pb.GetRoomStateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_game_v1_GetRoomStateResponse(arg) {
  if (!(arg instanceof game_v1_game_pb.GetRoomStateResponse)) {
    throw new Error('Expected argument of type game.v1.GetRoomStateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_game_v1_GetRoomStateResponse(buffer_arg) {
  return game_v1_game_pb.GetRoomStateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_game_v1_LinkSocialAccountRequest(arg) {
  if (!(arg instanceof game_v1_game_pb.LinkSocialAccountRequest)) {
    throw new Error('Expected argument of type game.v1.LinkSocialAccountRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_game_v1_LinkSocialAccountRequest(buffer_arg) {
  return game_v1_game_pb.LinkSocialAccountRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_game_v1_LinkSocialAccountResponse(arg) {
  if (!(arg instanceof game_v1_game_pb.LinkSocialAccountResponse)) {
    throw new Error('Expected argument of type game.v1.LinkSocialAccountResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_game_v1_LinkSocialAccountResponse(buffer_arg) {
  return game_v1_game_pb.LinkSocialAccountResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_game_v1_ListPlayersRequest(arg) {
  if (!(arg instanceof game_v1_game_pb.ListPlayersRequest)) {
    throw new Error('Expected argument of type game.v1.ListPlayersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_game_v1_ListPlayersRequest(buffer_arg) {
  return game_v1_game_pb.ListPlayersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_game_v1_ListPlayersResponse(arg) {
  if (!(arg instanceof game_v1_game_pb.ListPlayersResponse)) {
    throw new Error('Expected argument of type game.v1.ListPlayersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_game_v1_ListPlayersResponse(buffer_arg) {
  return game_v1_game_pb.ListPlayersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_game_v1_LoginRequest(arg) {
  if (!(arg instanceof game_v1_game_pb.LoginRequest)) {
    throw new Error('Expected argument of type game.v1.LoginRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_game_v1_LoginRequest(buffer_arg) {
  return game_v1_game_pb.LoginRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_game_v1_LoginResponse(arg) {
  if (!(arg instanceof game_v1_game_pb.LoginResponse)) {
    throw new Error('Expected argument of type game.v1.LoginResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_game_v1_LoginResponse(buffer_arg) {
  return game_v1_game_pb.LoginResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_game_v1_MovePlayerRequest(arg) {
  if (!(arg instanceof game_v1_game_pb.MovePlayerRequest)) {
    throw new Error('Expected argument of type game.v1.MovePlayerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_game_v1_MovePlayerRequest(buffer_arg) {
  return game_v1_game_pb.MovePlayerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_game_v1_MovePlayerResponse(arg) {
  if (!(arg instanceof game_v1_game_pb.MovePlayerResponse)) {
    throw new Error('Expected argument of type game.v1.MovePlayerResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_game_v1_MovePlayerResponse(buffer_arg) {
  return game_v1_game_pb.MovePlayerResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_game_v1_SetPlayerRequest(arg) {
  if (!(arg instanceof game_v1_game_pb.SetPlayerRequest)) {
    throw new Error('Expected argument of type game.v1.SetPlayerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_game_v1_SetPlayerRequest(buffer_arg) {
  return game_v1_game_pb.SetPlayerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_game_v1_SetPlayerResponse(arg) {
  if (!(arg instanceof game_v1_game_pb.SetPlayerResponse)) {
    throw new Error('Expected argument of type game.v1.SetPlayerResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_game_v1_SetPlayerResponse(buffer_arg) {
  return game_v1_game_pb.SetPlayerResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_game_v1_SocialLoginRequest(arg) {
  if (!(arg instanceof game_v1_game_pb.SocialLoginRequest)) {
    throw new Error('Expected argument of type game.v1.SocialLoginRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_game_v1_SocialLoginRequest(buffer_arg) {
  return game_v1_game_pb.SocialLoginRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_game_v1_SocialLoginResponse(arg) {
  if (!(arg instanceof game_v1_game_pb.SocialLoginResponse)) {
    throw new Error('Expected argument of type game.v1.SocialLoginResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_game_v1_SocialLoginResponse(buffer_arg) {
  return game_v1_game_pb.SocialLoginResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_game_v1_StartGameCommand(arg) {
  if (!(arg instanceof game_v1_game_pb.StartGameCommand)) {
    throw new Error('Expected argument of type game.v1.StartGameCommand');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_game_v1_StartGameCommand(buffer_arg) {
  return game_v1_game_pb.StartGameCommand.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_game_v1_UnlinkSocialAccountRequest(arg) {
  if (!(arg instanceof game_v1_game_pb.UnlinkSocialAccountRequest)) {
    throw new Error('Expected argument of type game.v1.UnlinkSocialAccountRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_game_v1_UnlinkSocialAccountRequest(buffer_arg) {
  return game_v1_game_pb.UnlinkSocialAccountRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_game_v1_UnlinkSocialAccountResponse(arg) {
  if (!(arg instanceof game_v1_game_pb.UnlinkSocialAccountResponse)) {
    throw new Error('Expected argument of type game.v1.UnlinkSocialAccountResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_game_v1_UnlinkSocialAccountResponse(buffer_arg) {
  return game_v1_game_pb.UnlinkSocialAccountResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_game_v1_UpdatePlayerRequest(arg) {
  if (!(arg instanceof game_v1_game_pb.UpdatePlayerRequest)) {
    throw new Error('Expected argument of type game.v1.UpdatePlayerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_game_v1_UpdatePlayerRequest(buffer_arg) {
  return game_v1_game_pb.UpdatePlayerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_game_v1_UpdatePlayerResponse(arg) {
  if (!(arg instanceof game_v1_game_pb.UpdatePlayerResponse)) {
    throw new Error('Expected argument of type game.v1.UpdatePlayerResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_game_v1_UpdatePlayerResponse(buffer_arg) {
  return game_v1_game_pb.UpdatePlayerResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// option go_package = "pb/game";
//
var GameService = exports.GameService = {
  createPlayer: {
    path: '/game.v1.Game/CreatePlayer',
    requestStream: false,
    responseStream: false,
    requestType: game_v1_game_pb.CreatePlayerRequest,
    responseType: game_v1_game_pb.CreatePlayerResponse,
    requestSerialize: serialize_game_v1_CreatePlayerRequest,
    requestDeserialize: deserialize_game_v1_CreatePlayerRequest,
    responseSerialize: serialize_game_v1_CreatePlayerResponse,
    responseDeserialize: deserialize_game_v1_CreatePlayerResponse,
  },
  movePlayer: {
    path: '/game.v1.Game/MovePlayer',
    requestStream: false,
    responseStream: false,
    requestType: game_v1_game_pb.MovePlayerRequest,
    responseType: game_v1_game_pb.MovePlayerResponse,
    requestSerialize: serialize_game_v1_MovePlayerRequest,
    requestDeserialize: deserialize_game_v1_MovePlayerRequest,
    responseSerialize: serialize_game_v1_MovePlayerResponse,
    responseDeserialize: deserialize_game_v1_MovePlayerResponse,
  },
  getLocation: {
    path: '/game.v1.Game/GetLocation',
    requestStream: false,
    responseStream: false,
    requestType: game_v1_game_pb.GetLocationRequest,
    responseType: game_v1_game_pb.GetLocationResponse,
    requestSerialize: serialize_game_v1_GetLocationRequest,
    requestDeserialize: deserialize_game_v1_GetLocationRequest,
    responseSerialize: serialize_game_v1_GetLocationResponse,
    responseDeserialize: deserialize_game_v1_GetLocationResponse,
  },
  listPlayers: {
    path: '/game.v1.Game/ListPlayers',
    requestStream: false,
    responseStream: false,
    requestType: game_v1_game_pb.ListPlayersRequest,
    responseType: game_v1_game_pb.ListPlayersResponse,
    requestSerialize: serialize_game_v1_ListPlayersRequest,
    requestDeserialize: deserialize_game_v1_ListPlayersRequest,
    responseSerialize: serialize_game_v1_ListPlayersResponse,
    responseDeserialize: deserialize_game_v1_ListPlayersResponse,
  },
  getPlayer: {
    path: '/game.v1.Game/GetPlayer',
    requestStream: false,
    responseStream: false,
    requestType: game_v1_game_pb.GetPlayerRequest,
    responseType: game_v1_game_pb.GetPlayerResponse,
    requestSerialize: serialize_game_v1_GetPlayerRequest,
    requestDeserialize: deserialize_game_v1_GetPlayerRequest,
    responseSerialize: serialize_game_v1_GetPlayerResponse,
    responseDeserialize: deserialize_game_v1_GetPlayerResponse,
  },
  setPlayer: {
    path: '/game.v1.Game/SetPlayer',
    requestStream: false,
    responseStream: false,
    requestType: game_v1_game_pb.SetPlayerRequest,
    responseType: game_v1_game_pb.SetPlayerResponse,
    requestSerialize: serialize_game_v1_SetPlayerRequest,
    requestDeserialize: deserialize_game_v1_SetPlayerRequest,
    responseSerialize: serialize_game_v1_SetPlayerResponse,
    responseDeserialize: deserialize_game_v1_SetPlayerResponse,
  },
  // Added SetPlayer method
updatePlayer: {
    path: '/game.v1.Game/UpdatePlayer',
    requestStream: false,
    responseStream: false,
    requestType: game_v1_game_pb.UpdatePlayerRequest,
    responseType: game_v1_game_pb.UpdatePlayerResponse,
    requestSerialize: serialize_game_v1_UpdatePlayerRequest,
    requestDeserialize: deserialize_game_v1_UpdatePlayerRequest,
    responseSerialize: serialize_game_v1_UpdatePlayerResponse,
    responseDeserialize: deserialize_game_v1_UpdatePlayerResponse,
  },
  getRoomState: {
    path: '/game.v1.Game/GetRoomState',
    requestStream: false,
    responseStream: false,
    requestType: game_v1_game_pb.GetRoomStateRequest,
    responseType: game_v1_game_pb.GetRoomStateResponse,
    requestSerialize: serialize_game_v1_GetRoomStateRequest,
    requestDeserialize: deserialize_game_v1_GetRoomStateRequest,
    responseSerialize: serialize_game_v1_GetRoomStateResponse,
    responseDeserialize: deserialize_game_v1_GetRoomStateResponse,
  },
  socialLogin: {
    path: '/game.v1.Game/SocialLogin',
    requestStream: false,
    responseStream: false,
    requestType: game_v1_game_pb.SocialLoginRequest,
    responseType: game_v1_game_pb.SocialLoginResponse,
    requestSerialize: serialize_game_v1_SocialLoginRequest,
    requestDeserialize: deserialize_game_v1_SocialLoginRequest,
    responseSerialize: serialize_game_v1_SocialLoginResponse,
    responseDeserialize: deserialize_game_v1_SocialLoginResponse,
  },
  login: {
    path: '/game.v1.Game/Login',
    requestStream: false,
    responseStream: false,
    requestType: game_v1_game_pb.LoginRequest,
    responseType: game_v1_game_pb.LoginResponse,
    requestSerialize: serialize_game_v1_LoginRequest,
    requestDeserialize: deserialize_game_v1_LoginRequest,
    responseSerialize: serialize_game_v1_LoginResponse,
    responseDeserialize: deserialize_game_v1_LoginResponse,
  },
  linkSocialAccount: {
    path: '/game.v1.Game/LinkSocialAccount',
    requestStream: false,
    responseStream: false,
    requestType: game_v1_game_pb.LinkSocialAccountRequest,
    responseType: game_v1_game_pb.LinkSocialAccountResponse,
    requestSerialize: serialize_game_v1_LinkSocialAccountRequest,
    requestDeserialize: deserialize_game_v1_LinkSocialAccountRequest,
    responseSerialize: serialize_game_v1_LinkSocialAccountResponse,
    responseDeserialize: deserialize_game_v1_LinkSocialAccountResponse,
  },
  unlinkSocialAccount: {
    path: '/game.v1.Game/UnlinkSocialAccount',
    requestStream: false,
    responseStream: false,
    requestType: game_v1_game_pb.UnlinkSocialAccountRequest,
    responseType: game_v1_game_pb.UnlinkSocialAccountResponse,
    requestSerialize: serialize_game_v1_UnlinkSocialAccountRequest,
    requestDeserialize: deserialize_game_v1_UnlinkSocialAccountRequest,
    responseSerialize: serialize_game_v1_UnlinkSocialAccountResponse,
    responseDeserialize: deserialize_game_v1_UnlinkSocialAccountResponse,
  },
  // New methods for handling commands and events
executeCommand: {
    path: '/game.v1.Game/ExecuteCommand',
    requestStream: false,
    responseStream: false,
    requestType: game_v1_game_pb.ExecuteCommandRequest,
    responseType: game_v1_game_pb.ExecuteCommandResponse,
    requestSerialize: serialize_game_v1_ExecuteCommandRequest,
    requestDeserialize: deserialize_game_v1_ExecuteCommandRequest,
    responseSerialize: serialize_game_v1_ExecuteCommandResponse,
    responseDeserialize: deserialize_game_v1_ExecuteCommandResponse,
  },
  createGame: {
    path: '/game.v1.Game/CreateGame',
    requestStream: false,
    responseStream: false,
    requestType: game_v1_game_pb.CreateGameCommand,
    responseType: game_v1_game_pb.GameCreatedEvent,
    requestSerialize: serialize_game_v1_CreateGameCommand,
    requestDeserialize: deserialize_game_v1_CreateGameCommand,
    responseSerialize: serialize_game_v1_GameCreatedEvent,
    responseDeserialize: deserialize_game_v1_GameCreatedEvent,
  },
  startGame: {
    path: '/game.v1.Game/StartGame',
    requestStream: false,
    responseStream: false,
    requestType: game_v1_game_pb.StartGameCommand,
    responseType: game_v1_game_pb.GameStartedEvent,
    requestSerialize: serialize_game_v1_StartGameCommand,
    requestDeserialize: deserialize_game_v1_StartGameCommand,
    responseSerialize: serialize_game_v1_GameStartedEvent,
    responseDeserialize: deserialize_game_v1_GameStartedEvent,
  },
  endGame: {
    path: '/game.v1.Game/EndGame',
    requestStream: false,
    responseStream: false,
    requestType: game_v1_game_pb.EndGameCommand,
    responseType: game_v1_game_pb.GameEndedEvent,
    requestSerialize: serialize_game_v1_EndGameCommand,
    requestDeserialize: deserialize_game_v1_EndGameCommand,
    responseSerialize: serialize_game_v1_GameEndedEvent,
    responseDeserialize: deserialize_game_v1_GameEndedEvent,
  },
};

exports.GameClient = grpc.makeGenericClientConstructor(GameService);
