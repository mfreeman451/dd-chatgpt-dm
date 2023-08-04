// package: room.v1
// file: room/v1/room.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as room_v1_room_pb from "../../room/v1/room_pb";

interface IRoomSvcService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getRoomState: IRoomSvcService_IGetRoomState;
}

interface IRoomSvcService_IGetRoomState extends grpc.MethodDefinition<room_v1_room_pb.GetRoomStateRequest, room_v1_room_pb.GetRoomStateResponse> {
    path: "/room.v1.RoomSvc/GetRoomState";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<room_v1_room_pb.GetRoomStateRequest>;
    requestDeserialize: grpc.deserialize<room_v1_room_pb.GetRoomStateRequest>;
    responseSerialize: grpc.serialize<room_v1_room_pb.GetRoomStateResponse>;
    responseDeserialize: grpc.deserialize<room_v1_room_pb.GetRoomStateResponse>;
}

export const RoomSvcService: IRoomSvcService;

export interface IRoomSvcServer extends grpc.UntypedServiceImplementation {
    getRoomState: grpc.handleUnaryCall<room_v1_room_pb.GetRoomStateRequest, room_v1_room_pb.GetRoomStateResponse>;
}

export interface IRoomSvcClient {
    getRoomState(request: room_v1_room_pb.GetRoomStateRequest, callback: (error: grpc.ServiceError | null, response: room_v1_room_pb.GetRoomStateResponse) => void): grpc.ClientUnaryCall;
    getRoomState(request: room_v1_room_pb.GetRoomStateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: room_v1_room_pb.GetRoomStateResponse) => void): grpc.ClientUnaryCall;
    getRoomState(request: room_v1_room_pb.GetRoomStateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: room_v1_room_pb.GetRoomStateResponse) => void): grpc.ClientUnaryCall;
}

export class RoomSvcClient extends grpc.Client implements IRoomSvcClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getRoomState(request: room_v1_room_pb.GetRoomStateRequest, callback: (error: grpc.ServiceError | null, response: room_v1_room_pb.GetRoomStateResponse) => void): grpc.ClientUnaryCall;
    public getRoomState(request: room_v1_room_pb.GetRoomStateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: room_v1_room_pb.GetRoomStateResponse) => void): grpc.ClientUnaryCall;
    public getRoomState(request: room_v1_room_pb.GetRoomStateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: room_v1_room_pb.GetRoomStateResponse) => void): grpc.ClientUnaryCall;
}
