// @generated by protobuf-ts 2.9.0
// @generated from protobuf file "game.proto" (syntax proto3)
// tslint:disable
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import { Game } from "./game";
import type { UpdatePlayerResponse } from "./game";
import type { UpdatePlayerRequest } from "./game";
import type { SetPlayerResponse } from "./game";
import type { SetPlayerRequest } from "./game";
import type { GetPlayerResponse } from "./game";
import type { GetPlayerRequest } from "./game";
import type { ListPlayersResponse } from "./game";
import type { ListPlayersRequest } from "./game";
import type { GetLocationResponse } from "./game";
import type { GetLocationRequest } from "./game";
import type { MovePlayerResponse } from "./game";
import type { MovePlayerRequest } from "./game";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import type { CreatePlayerResponse } from "./game";
import type { CreatePlayerRequest } from "./game";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * @generated from protobuf service Game
 */
export interface IGameClient {
    /**
     * @generated from protobuf rpc: CreatePlayer(CreatePlayerRequest) returns (CreatePlayerResponse);
     */
    createPlayer(input: CreatePlayerRequest, options?: RpcOptions): UnaryCall<CreatePlayerRequest, CreatePlayerResponse>;
    /**
     * @generated from protobuf rpc: MovePlayer(MovePlayerRequest) returns (MovePlayerResponse);
     */
    movePlayer(input: MovePlayerRequest, options?: RpcOptions): UnaryCall<MovePlayerRequest, MovePlayerResponse>;
    /**
     * @generated from protobuf rpc: GetLocation(GetLocationRequest) returns (GetLocationResponse);
     */
    getLocation(input: GetLocationRequest, options?: RpcOptions): UnaryCall<GetLocationRequest, GetLocationResponse>;
    /**
     * @generated from protobuf rpc: ListPlayers(ListPlayersRequest) returns (ListPlayersResponse);
     */
    listPlayers(input: ListPlayersRequest, options?: RpcOptions): UnaryCall<ListPlayersRequest, ListPlayersResponse>;
    /**
     * @generated from protobuf rpc: GetPlayer(GetPlayerRequest) returns (GetPlayerResponse);
     */
    getPlayer(input: GetPlayerRequest, options?: RpcOptions): UnaryCall<GetPlayerRequest, GetPlayerResponse>;
    /**
     * Added SetPlayer method
     *
     * @generated from protobuf rpc: SetPlayer(SetPlayerRequest) returns (SetPlayerResponse);
     */
    setPlayer(input: SetPlayerRequest, options?: RpcOptions): UnaryCall<SetPlayerRequest, SetPlayerResponse>;
    /**
     * @generated from protobuf rpc: UpdatePlayer(UpdatePlayerRequest) returns (UpdatePlayerResponse);
     */
    updatePlayer(input: UpdatePlayerRequest, options?: RpcOptions): UnaryCall<UpdatePlayerRequest, UpdatePlayerResponse>;
}
/**
 * @generated from protobuf service Game
 */
export class GameClient implements IGameClient, ServiceInfo {
    typeName = Game.typeName;
    methods = Game.methods;
    options = Game.options;
    constructor(private readonly _transport: RpcTransport) {
    }
    /**
     * @generated from protobuf rpc: CreatePlayer(CreatePlayerRequest) returns (CreatePlayerResponse);
     */
    createPlayer(input: CreatePlayerRequest, options?: RpcOptions): UnaryCall<CreatePlayerRequest, CreatePlayerResponse> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept<CreatePlayerRequest, CreatePlayerResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: MovePlayer(MovePlayerRequest) returns (MovePlayerResponse);
     */
    movePlayer(input: MovePlayerRequest, options?: RpcOptions): UnaryCall<MovePlayerRequest, MovePlayerResponse> {
        const method = this.methods[1], opt = this._transport.mergeOptions(options);
        return stackIntercept<MovePlayerRequest, MovePlayerResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: GetLocation(GetLocationRequest) returns (GetLocationResponse);
     */
    getLocation(input: GetLocationRequest, options?: RpcOptions): UnaryCall<GetLocationRequest, GetLocationResponse> {
        const method = this.methods[2], opt = this._transport.mergeOptions(options);
        return stackIntercept<GetLocationRequest, GetLocationResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: ListPlayers(ListPlayersRequest) returns (ListPlayersResponse);
     */
    listPlayers(input: ListPlayersRequest, options?: RpcOptions): UnaryCall<ListPlayersRequest, ListPlayersResponse> {
        const method = this.methods[3], opt = this._transport.mergeOptions(options);
        return stackIntercept<ListPlayersRequest, ListPlayersResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: GetPlayer(GetPlayerRequest) returns (GetPlayerResponse);
     */
    getPlayer(input: GetPlayerRequest, options?: RpcOptions): UnaryCall<GetPlayerRequest, GetPlayerResponse> {
        const method = this.methods[4], opt = this._transport.mergeOptions(options);
        return stackIntercept<GetPlayerRequest, GetPlayerResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * Added SetPlayer method
     *
     * @generated from protobuf rpc: SetPlayer(SetPlayerRequest) returns (SetPlayerResponse);
     */
    setPlayer(input: SetPlayerRequest, options?: RpcOptions): UnaryCall<SetPlayerRequest, SetPlayerResponse> {
        const method = this.methods[5], opt = this._transport.mergeOptions(options);
        return stackIntercept<SetPlayerRequest, SetPlayerResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: UpdatePlayer(UpdatePlayerRequest) returns (UpdatePlayerResponse);
     */
    updatePlayer(input: UpdatePlayerRequest, options?: RpcOptions): UnaryCall<UpdatePlayerRequest, UpdatePlayerResponse> {
        const method = this.methods[6], opt = this._transport.mergeOptions(options);
        return stackIntercept<UpdatePlayerRequest, UpdatePlayerResponse>("unary", this._transport, method, opt, input);
    }
}
