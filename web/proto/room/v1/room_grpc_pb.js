// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var room_v1_room_pb = require('../../room/v1/room_pb.js');

function serialize_room_v1_GetRoomStateRequest(arg) {
  if (!(arg instanceof room_v1_room_pb.GetRoomStateRequest)) {
    throw new Error('Expected argument of type room.v1.GetRoomStateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_room_v1_GetRoomStateRequest(buffer_arg) {
  return room_v1_room_pb.GetRoomStateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_room_v1_GetRoomStateResponse(arg) {
  if (!(arg instanceof room_v1_room_pb.GetRoomStateResponse)) {
    throw new Error('Expected argument of type room.v1.GetRoomStateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_room_v1_GetRoomStateResponse(buffer_arg) {
  return room_v1_room_pb.GetRoomStateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// option go_package = "pb/game";
//
var RoomSvcService = exports.RoomSvcService = {
  getRoomState: {
    path: '/room.v1.RoomSvc/GetRoomState',
    requestStream: false,
    responseStream: false,
    requestType: room_v1_room_pb.GetRoomStateRequest,
    responseType: room_v1_room_pb.GetRoomStateResponse,
    requestSerialize: serialize_room_v1_GetRoomStateRequest,
    requestDeserialize: deserialize_room_v1_GetRoomStateRequest,
    responseSerialize: serialize_room_v1_GetRoomStateResponse,
    responseDeserialize: deserialize_room_v1_GetRoomStateResponse,
  },
};

exports.RoomSvcClient = grpc.makeGenericClientConstructor(RoomSvcService);
