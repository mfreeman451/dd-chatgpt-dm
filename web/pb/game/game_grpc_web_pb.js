/**
 * @fileoverview gRPC-Web generated client stub for 
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.2
// 	protoc              v4.23.4
// source: game.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

import proto from './game_pb.js';

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.GameClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.GamePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.CreatePlayerRequest,
 *   !proto.CreatePlayerResponse>}
 */
const methodDescriptor_Game_CreatePlayer = new grpc.web.MethodDescriptor(
  '/Game/CreatePlayer',
  grpc.web.MethodType.UNARY,
  proto.CreatePlayerRequest,
  proto.CreatePlayerResponse,
  /**
   * @param {!proto.CreatePlayerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.CreatePlayerResponse.deserializeBinary
);


/**
 * @param {!proto.CreatePlayerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.CreatePlayerResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.CreatePlayerResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.GameClient.prototype.createPlayer =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Game/CreatePlayer',
      request,
      metadata || {},
      methodDescriptor_Game_CreatePlayer,
      callback);
};


/**
 * @param {!proto.CreatePlayerRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.CreatePlayerResponse>}
 *     Promise that resolves to the response
 */
proto.GamePromiseClient.prototype.createPlayer =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Game/CreatePlayer',
      request,
      metadata || {},
      methodDescriptor_Game_CreatePlayer);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.MovePlayerRequest,
 *   !proto.MovePlayerResponse>}
 */
const methodDescriptor_Game_MovePlayer = new grpc.web.MethodDescriptor(
  '/Game/MovePlayer',
  grpc.web.MethodType.UNARY,
  proto.MovePlayerRequest,
  proto.MovePlayerResponse,
  /**
   * @param {!proto.MovePlayerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.MovePlayerResponse.deserializeBinary
);


/**
 * @param {!proto.MovePlayerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.MovePlayerResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.MovePlayerResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.GameClient.prototype.movePlayer =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Game/MovePlayer',
      request,
      metadata || {},
      methodDescriptor_Game_MovePlayer,
      callback);
};


/**
 * @param {!proto.MovePlayerRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.MovePlayerResponse>}
 *     Promise that resolves to the response
 */
proto.GamePromiseClient.prototype.movePlayer =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Game/MovePlayer',
      request,
      metadata || {},
      methodDescriptor_Game_MovePlayer);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.GetLocationRequest,
 *   !proto.GetLocationResponse>}
 */
const methodDescriptor_Game_GetLocation = new grpc.web.MethodDescriptor(
  '/Game/GetLocation',
  grpc.web.MethodType.UNARY,
  proto.GetLocationRequest,
  proto.GetLocationResponse,
  /**
   * @param {!proto.GetLocationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.GetLocationResponse.deserializeBinary
);


/**
 * @param {!proto.GetLocationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.GetLocationResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.GetLocationResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.GameClient.prototype.getLocation =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Game/GetLocation',
      request,
      metadata || {},
      methodDescriptor_Game_GetLocation,
      callback);
};


/**
 * @param {!proto.GetLocationRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.GetLocationResponse>}
 *     Promise that resolves to the response
 */
proto.GamePromiseClient.prototype.getLocation =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Game/GetLocation',
      request,
      metadata || {},
      methodDescriptor_Game_GetLocation);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ListPlayersRequest,
 *   !proto.ListPlayersResponse>}
 */
const methodDescriptor_Game_ListPlayers = new grpc.web.MethodDescriptor(
  '/Game/ListPlayers',
  grpc.web.MethodType.UNARY,
  proto.ListPlayersRequest,
  proto.ListPlayersResponse,
  /**
   * @param {!proto.ListPlayersRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ListPlayersResponse.deserializeBinary
);


/**
 * @param {!proto.ListPlayersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ListPlayersResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ListPlayersResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.GameClient.prototype.listPlayers =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Game/ListPlayers',
      request,
      metadata || {},
      methodDescriptor_Game_ListPlayers,
      callback);
};


/**
 * @param {!proto.ListPlayersRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ListPlayersResponse>}
 *     Promise that resolves to the response
 */
proto.GamePromiseClient.prototype.listPlayers =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Game/ListPlayers',
      request,
      metadata || {},
      methodDescriptor_Game_ListPlayers);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.GetPlayerRequest,
 *   !proto.GetPlayerResponse>}
 */
const methodDescriptor_Game_GetPlayer = new grpc.web.MethodDescriptor(
  '/Game/GetPlayer',
  grpc.web.MethodType.UNARY,
  proto.GetPlayerRequest,
  proto.GetPlayerResponse,
  /**
   * @param {!proto.GetPlayerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.GetPlayerResponse.deserializeBinary
);


/**
 * @param {!proto.GetPlayerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.GetPlayerResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.GetPlayerResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.GameClient.prototype.getPlayer =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Game/GetPlayer',
      request,
      metadata || {},
      methodDescriptor_Game_GetPlayer,
      callback);
};


/**
 * @param {!proto.GetPlayerRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.GetPlayerResponse>}
 *     Promise that resolves to the response
 */
proto.GamePromiseClient.prototype.getPlayer =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Game/GetPlayer',
      request,
      metadata || {},
      methodDescriptor_Game_GetPlayer);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.SetPlayerRequest,
 *   !proto.SetPlayerResponse>}
 */
const methodDescriptor_Game_SetPlayer = new grpc.web.MethodDescriptor(
  '/Game/SetPlayer',
  grpc.web.MethodType.UNARY,
  proto.SetPlayerRequest,
  proto.SetPlayerResponse,
  /**
   * @param {!proto.SetPlayerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.SetPlayerResponse.deserializeBinary
);


/**
 * @param {!proto.SetPlayerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.SetPlayerResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.SetPlayerResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.GameClient.prototype.setPlayer =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Game/SetPlayer',
      request,
      metadata || {},
      methodDescriptor_Game_SetPlayer,
      callback);
};


/**
 * @param {!proto.SetPlayerRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.SetPlayerResponse>}
 *     Promise that resolves to the response
 */
proto.GamePromiseClient.prototype.setPlayer =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Game/SetPlayer',
      request,
      metadata || {},
      methodDescriptor_Game_SetPlayer);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.UpdatePlayerRequest,
 *   !proto.UpdatePlayerResponse>}
 */
const methodDescriptor_Game_UpdatePlayer = new grpc.web.MethodDescriptor(
  '/Game/UpdatePlayer',
  grpc.web.MethodType.UNARY,
  proto.UpdatePlayerRequest,
  proto.UpdatePlayerResponse,
  /**
   * @param {!proto.UpdatePlayerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.UpdatePlayerResponse.deserializeBinary
);


/**
 * @param {!proto.UpdatePlayerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.UpdatePlayerResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.UpdatePlayerResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.GameClient.prototype.updatePlayer =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Game/UpdatePlayer',
      request,
      metadata || {},
      methodDescriptor_Game_UpdatePlayer,
      callback);
};


/**
 * @param {!proto.UpdatePlayerRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.UpdatePlayerResponse>}
 *     Promise that resolves to the response
 */
proto.GamePromiseClient.prototype.updatePlayer =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Game/UpdatePlayer',
      request,
      metadata || {},
      methodDescriptor_Game_UpdatePlayer);
};


export default proto;

