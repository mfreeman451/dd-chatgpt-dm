// package: room.v1
// file: room/v1/room.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Room extends jspb.Message { 
    getId(): string;
    setId(value: string): Room;
    getDescription(): string;
    setDescription(value: string): Room;
    clearItemsList(): void;
    getItemsList(): Array<Item>;
    setItemsList(value: Array<Item>): Room;
    addItems(value?: Item, index?: number): Item;
    clearNpcsList(): void;
    getNpcsList(): Array<NPC>;
    setNpcsList(value: Array<NPC>): Room;
    addNpcs(value?: NPC, index?: number): NPC;
    clearPlayersList(): void;
    getPlayersList(): Array<string>;
    setPlayersList(value: Array<string>): Room;
    addPlayers(value: string, index?: number): string;

    hasCoordinates(): boolean;
    clearCoordinates(): void;
    getCoordinates(): Coordinates | undefined;
    setCoordinates(value?: Coordinates): Room;

    hasNorthExit(): boolean;
    clearNorthExit(): void;
    getNorthExit(): Room.Exit | undefined;
    setNorthExit(value?: Room.Exit): Room;

    hasEastExit(): boolean;
    clearEastExit(): void;
    getEastExit(): Room.Exit | undefined;
    setEastExit(value?: Room.Exit): Room;

    hasSouthExit(): boolean;
    clearSouthExit(): void;
    getSouthExit(): Room.Exit | undefined;
    setSouthExit(value?: Room.Exit): Room;

    hasWestExit(): boolean;
    clearWestExit(): void;
    getWestExit(): Room.Exit | undefined;
    setWestExit(value?: Room.Exit): Room;

    hasUpExit(): boolean;
    clearUpExit(): void;
    getUpExit(): Room.Exit | undefined;
    setUpExit(value?: Room.Exit): Room;

    hasDownExit(): boolean;
    clearDownExit(): void;
    getDownExit(): Room.Exit | undefined;
    setDownExit(value?: Room.Exit): Room;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Room.AsObject;
    static toObject(includeInstance: boolean, msg: Room): Room.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Room, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Room;
    static deserializeBinaryFromReader(message: Room, reader: jspb.BinaryReader): Room;
}

export namespace Room {
    export type AsObject = {
        id: string,
        description: string,
        itemsList: Array<Item.AsObject>,
        npcsList: Array<NPC.AsObject>,
        playersList: Array<string>,
        coordinates?: Coordinates.AsObject,
        northExit?: Room.Exit.AsObject,
        eastExit?: Room.Exit.AsObject,
        southExit?: Room.Exit.AsObject,
        westExit?: Room.Exit.AsObject,
        upExit?: Room.Exit.AsObject,
        downExit?: Room.Exit.AsObject,
    }


    export class Exit extends jspb.Message { 
        getName(): string;
        setName(value: string): Exit;
        getOpen(): boolean;
        setOpen(value: boolean): Exit;
        getLocked(): boolean;
        setLocked(value: boolean): Exit;
        getAlwaysOpen(): boolean;
        setAlwaysOpen(value: boolean): Exit;

        hasTargetRoom(): boolean;
        clearTargetRoom(): void;
        getTargetRoom(): string | undefined;
        setTargetRoom(value: string): Exit;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Exit.AsObject;
        static toObject(includeInstance: boolean, msg: Exit): Exit.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Exit, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Exit;
        static deserializeBinaryFromReader(message: Exit, reader: jspb.BinaryReader): Exit;
    }

    export namespace Exit {
        export type AsObject = {
            name: string,
            open: boolean,
            locked: boolean,
            alwaysOpen: boolean,
            targetRoom?: string,
        }
    }

}

export class Coordinates extends jspb.Message { 
    getX(): number;
    setX(value: number): Coordinates;
    getY(): number;
    setY(value: number): Coordinates;
    getZ(): number;
    setZ(value: number): Coordinates;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Coordinates.AsObject;
    static toObject(includeInstance: boolean, msg: Coordinates): Coordinates.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Coordinates, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Coordinates;
    static deserializeBinaryFromReader(message: Coordinates, reader: jspb.BinaryReader): Coordinates;
}

export namespace Coordinates {
    export type AsObject = {
        x: number,
        y: number,
        z: number,
    }
}

export class UserCredentials extends jspb.Message { 
    getPlayerId(): string;
    setPlayerId(value: string): UserCredentials;
    getPassword(): string;
    setPassword(value: string): UserCredentials;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UserCredentials.AsObject;
    static toObject(includeInstance: boolean, msg: UserCredentials): UserCredentials.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UserCredentials, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UserCredentials;
    static deserializeBinaryFromReader(message: UserCredentials, reader: jspb.BinaryReader): UserCredentials;
}

export namespace UserCredentials {
    export type AsObject = {
        playerId: string,
        password: string,
    }
}

export class Location extends jspb.Message { 
    getId(): string;
    setId(value: string): Location;
    getDescription(): string;
    setDescription(value: string): Location;
    clearItemsList(): void;
    getItemsList(): Array<Item>;
    setItemsList(value: Array<Item>): Location;
    addItems(value?: Item, index?: number): Item;
    clearNpcsList(): void;
    getNpcsList(): Array<NPC>;
    setNpcsList(value: Array<NPC>): Location;
    addNpcs(value?: NPC, index?: number): NPC;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Location.AsObject;
    static toObject(includeInstance: boolean, msg: Location): Location.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Location, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Location;
    static deserializeBinaryFromReader(message: Location, reader: jspb.BinaryReader): Location;
}

export namespace Location {
    export type AsObject = {
        id: string,
        description: string,
        itemsList: Array<Item.AsObject>,
        npcsList: Array<NPC.AsObject>,
    }
}

export class GetRoomStateRequest extends jspb.Message { 
    getRoomId(): string;
    setRoomId(value: string): GetRoomStateRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetRoomStateRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetRoomStateRequest): GetRoomStateRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetRoomStateRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetRoomStateRequest;
    static deserializeBinaryFromReader(message: GetRoomStateRequest, reader: jspb.BinaryReader): GetRoomStateRequest;
}

export namespace GetRoomStateRequest {
    export type AsObject = {
        roomId: string,
    }
}

export class GetRoomStateResponse extends jspb.Message { 

    hasRoomState(): boolean;
    clearRoomState(): void;
    getRoomState(): RoomState | undefined;
    setRoomState(value?: RoomState): GetRoomStateResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetRoomStateResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetRoomStateResponse): GetRoomStateResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetRoomStateResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetRoomStateResponse;
    static deserializeBinaryFromReader(message: GetRoomStateResponse, reader: jspb.BinaryReader): GetRoomStateResponse;
}

export namespace GetRoomStateResponse {
    export type AsObject = {
        roomState?: RoomState.AsObject,
    }
}

export class GetLocationRequest extends jspb.Message { 

    hasCoordinates(): boolean;
    clearCoordinates(): void;
    getCoordinates(): Coordinates | undefined;
    setCoordinates(value?: Coordinates): GetLocationRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetLocationRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetLocationRequest): GetLocationRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetLocationRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetLocationRequest;
    static deserializeBinaryFromReader(message: GetLocationRequest, reader: jspb.BinaryReader): GetLocationRequest;
}

export namespace GetLocationRequest {
    export type AsObject = {
        coordinates?: Coordinates.AsObject,
    }
}

export class GetLocationResponse extends jspb.Message { 

    hasLocation(): boolean;
    clearLocation(): void;
    getLocation(): Location | undefined;
    setLocation(value?: Location): GetLocationResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetLocationResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetLocationResponse): GetLocationResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetLocationResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetLocationResponse;
    static deserializeBinaryFromReader(message: GetLocationResponse, reader: jspb.BinaryReader): GetLocationResponse;
}

export namespace GetLocationResponse {
    export type AsObject = {
        location?: Location.AsObject,
    }
}

export class RoomState extends jspb.Message { 
    getId(): string;
    setId(value: string): RoomState;
    clearPlayersList(): void;
    getPlayersList(): Array<string>;
    setPlayersList(value: Array<string>): RoomState;
    addPlayers(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RoomState.AsObject;
    static toObject(includeInstance: boolean, msg: RoomState): RoomState.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RoomState, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RoomState;
    static deserializeBinaryFromReader(message: RoomState, reader: jspb.BinaryReader): RoomState;
}

export namespace RoomState {
    export type AsObject = {
        id: string,
        playersList: Array<string>,
    }
}

export class Item extends jspb.Message { 
    getName(): string;
    setName(value: string): Item;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Item.AsObject;
    static toObject(includeInstance: boolean, msg: Item): Item.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Item, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Item;
    static deserializeBinaryFromReader(message: Item, reader: jspb.BinaryReader): Item;
}

export namespace Item {
    export type AsObject = {
        name: string,
    }
}

export class NPC extends jspb.Message { 
    getName(): string;
    setName(value: string): NPC;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NPC.AsObject;
    static toObject(includeInstance: boolean, msg: NPC): NPC.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NPC, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NPC;
    static deserializeBinaryFromReader(message: NPC, reader: jspb.BinaryReader): NPC;
}

export namespace NPC {
    export type AsObject = {
        name: string,
    }
}

export enum InterpType {
    INTERP_TYPE_UNSPECIFIED = 0,
    INTERP_TYPE_LOGIN = 1,
    INTERP_TYPE_PLAYING = 2,
    INTERP_TYPE_BUILDING = 3,
}
