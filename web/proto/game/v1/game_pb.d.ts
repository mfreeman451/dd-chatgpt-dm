// package: game.v1
// file: game/v1/game.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class ExecuteCommandRequest extends jspb.Message { 
    getCommand(): string;
    setCommand(value: string): ExecuteCommandRequest;
    getGameId(): string;
    setGameId(value: string): ExecuteCommandRequest;
    getPlayerId(): string;
    setPlayerId(value: string): ExecuteCommandRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ExecuteCommandRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ExecuteCommandRequest): ExecuteCommandRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ExecuteCommandRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ExecuteCommandRequest;
    static deserializeBinaryFromReader(message: ExecuteCommandRequest, reader: jspb.BinaryReader): ExecuteCommandRequest;
}

export namespace ExecuteCommandRequest {
    export type AsObject = {
        command: string,
        gameId: string,
        playerId: string,
    }
}

export class ExecuteCommandResponse extends jspb.Message { 
    getResult(): string;
    setResult(value: string): ExecuteCommandResponse;
    getGameId(): string;
    setGameId(value: string): ExecuteCommandResponse;
    getCommand(): string;
    setCommand(value: string): ExecuteCommandResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ExecuteCommandResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ExecuteCommandResponse): ExecuteCommandResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ExecuteCommandResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ExecuteCommandResponse;
    static deserializeBinaryFromReader(message: ExecuteCommandResponse, reader: jspb.BinaryReader): ExecuteCommandResponse;
}

export namespace ExecuteCommandResponse {
    export type AsObject = {
        result: string,
        gameId: string,
        command: string,
    }
}

export class CommandExecutedEvent extends jspb.Message { 
    getGameId(): string;
    setGameId(value: string): CommandExecutedEvent;
    getPlayerId(): string;
    setPlayerId(value: string): CommandExecutedEvent;
    getCommand(): string;
    setCommand(value: string): CommandExecutedEvent;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CommandExecutedEvent.AsObject;
    static toObject(includeInstance: boolean, msg: CommandExecutedEvent): CommandExecutedEvent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CommandExecutedEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CommandExecutedEvent;
    static deserializeBinaryFromReader(message: CommandExecutedEvent, reader: jspb.BinaryReader): CommandExecutedEvent;
}

export namespace CommandExecutedEvent {
    export type AsObject = {
        gameId: string,
        playerId: string,
        command: string,
    }
}

export class LoginRequest extends jspb.Message { 
    getPlayerId(): string;
    setPlayerId(value: string): LoginRequest;
    getPassword(): string;
    setPassword(value: string): LoginRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LoginRequest.AsObject;
    static toObject(includeInstance: boolean, msg: LoginRequest): LoginRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LoginRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LoginRequest;
    static deserializeBinaryFromReader(message: LoginRequest, reader: jspb.BinaryReader): LoginRequest;
}

export namespace LoginRequest {
    export type AsObject = {
        playerId: string,
        password: string,
    }
}

export class LoginResponse extends jspb.Message { 
    getToken(): string;
    setToken(value: string): LoginResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LoginResponse.AsObject;
    static toObject(includeInstance: boolean, msg: LoginResponse): LoginResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LoginResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LoginResponse;
    static deserializeBinaryFromReader(message: LoginResponse, reader: jspb.BinaryReader): LoginResponse;
}

export namespace LoginResponse {
    export type AsObject = {
        token: string,
    }
}

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
    getPlayersList(): Array<Player>;
    setPlayersList(value: Array<Player>): Room;
    addPlayers(value?: Player, index?: number): Player;

    hasCoordinates(): boolean;
    clearCoordinates(): void;
    getCoordinates(): Coordinates | undefined;
    setCoordinates(value?: Coordinates): Room;

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
        playersList: Array<Player.AsObject>,
        coordinates?: Coordinates.AsObject,
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

export class Player extends jspb.Message { 
    getId(): string;
    setId(value: string): Player;
    getDiscord(): string;
    setDiscord(value: string): Player;
    getName(): string;
    setName(value: string): Player;
    getRace(): string;
    setRace(value: string): Player;
    getClass(): string;
    setClass(value: string): Player;
    getLevel(): number;
    setLevel(value: number): Player;
    getAlignment(): string;
    setAlignment(value: string): Player;
    getBackground(): string;
    setBackground(value: string): Player;
    getStrength(): number;
    setStrength(value: number): Player;
    getDexterity(): number;
    setDexterity(value: number): Player;
    getConstitution(): number;
    setConstitution(value: number): Player;
    getIntelligence(): number;
    setIntelligence(value: number): Player;
    getWisdom(): number;
    setWisdom(value: number): Player;
    getCharisma(): number;
    setCharisma(value: number): Player;
    getHitpoints(): number;
    setHitpoints(value: number): Player;
    getTemporaryhitpoints(): number;
    setTemporaryhitpoints(value: number): Player;
    getMaxhitpoints(): number;
    setMaxhitpoints(value: number): Player;
    getArmorclass(): number;
    setArmorclass(value: number): Player;
    getProficiencybonus(): number;
    setProficiencybonus(value: number): Player;
    clearSkillsList(): void;
    getSkillsList(): Array<Skill>;
    setSkillsList(value: Array<Skill>): Player;
    addSkills(value?: Skill, index?: number): Skill;
    clearSavingthrowsList(): void;
    getSavingthrowsList(): Array<SavingThrow>;
    setSavingthrowsList(value: Array<SavingThrow>): Player;
    addSavingthrows(value?: SavingThrow, index?: number): SavingThrow;
    clearLanguagesList(): void;
    getLanguagesList(): Array<Language>;
    setLanguagesList(value: Array<Language>): Player;
    addLanguages(value?: Language, index?: number): Language;
    clearEquipmentList(): void;
    getEquipmentList(): Array<Equipment>;
    setEquipmentList(value: Array<Equipment>): Player;
    addEquipment(value?: Equipment, index?: number): Equipment;
    clearFeaturesList(): void;
    getFeaturesList(): Array<Feature>;
    setFeaturesList(value: Array<Feature>): Player;
    addFeatures(value?: Feature, index?: number): Feature;
    clearSpellsList(): void;
    getSpellsList(): Array<Spell>;
    setSpellsList(value: Array<Spell>): Player;
    addSpells(value?: Spell, index?: number): Spell;
    getSpellslots(): number;
    setSpellslots(value: number): Player;
    getCurrentspellslots(): number;
    setCurrentspellslots(value: number): Player;
    getExperiencepoints(): number;
    setExperiencepoints(value: number): Player;
    getInitiative(): number;
    setInitiative(value: number): Player;
    getSpeed(): number;
    setSpeed(value: number): Player;
    getHitdice(): string;
    setHitdice(value: string): Player;

    hasDeathsaves(): boolean;
    clearDeathsaves(): void;
    getDeathsaves(): DeathSaves | undefined;
    setDeathsaves(value?: DeathSaves): Player;
    clearAbilityscorebonusesList(): void;
    getAbilityscorebonusesList(): Array<AbilityScoreBonus>;
    setAbilityscorebonusesList(value: Array<AbilityScoreBonus>): Player;
    addAbilityscorebonuses(value?: AbilityScoreBonus, index?: number): AbilityScoreBonus;
    clearSpecialabilitiesList(): void;
    getSpecialabilitiesList(): Array<SpecialAbility>;
    setSpecialabilitiesList(value: Array<SpecialAbility>): Player;
    addSpecialabilities(value?: SpecialAbility, index?: number): SpecialAbility;

    hasRacialtraits(): boolean;
    clearRacialtraits(): void;
    getRacialtraits(): RacialTraits | undefined;
    setRacialtraits(value?: RacialTraits): Player;

    hasLocation(): boolean;
    clearLocation(): void;
    getLocation(): Coordinates | undefined;
    setLocation(value?: Coordinates): Player;

    hasDefaultroom(): boolean;
    clearDefaultroom(): void;
    getDefaultroom(): Coordinates | undefined;
    setDefaultroom(value?: Coordinates): Player;
    getLastlogin(): string;
    setLastlogin(value: string): Player;
    getLastlogout(): string;
    setLastlogout(value: string): Player;

    hasAdmin(): boolean;
    clearAdmin(): void;
    getAdmin(): Admin | undefined;
    setAdmin(value?: Admin): Player;
    getSocialProvider(): SocialProvider;
    setSocialProvider(value: SocialProvider): Player;
    getSocialId(): string;
    setSocialId(value: string): Player;
    getSocialToken(): string;
    setSocialToken(value: string): Player;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Player.AsObject;
    static toObject(includeInstance: boolean, msg: Player): Player.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Player, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Player;
    static deserializeBinaryFromReader(message: Player, reader: jspb.BinaryReader): Player;
}

export namespace Player {
    export type AsObject = {
        id: string,
        discord: string,
        name: string,
        race: string,
        pb_class: string,
        level: number,
        alignment: string,
        background: string,
        strength: number,
        dexterity: number,
        constitution: number,
        intelligence: number,
        wisdom: number,
        charisma: number,
        hitpoints: number,
        temporaryhitpoints: number,
        maxhitpoints: number,
        armorclass: number,
        proficiencybonus: number,
        skillsList: Array<Skill.AsObject>,
        savingthrowsList: Array<SavingThrow.AsObject>,
        languagesList: Array<Language.AsObject>,
        equipmentList: Array<Equipment.AsObject>,
        featuresList: Array<Feature.AsObject>,
        spellsList: Array<Spell.AsObject>,
        spellslots: number,
        currentspellslots: number,
        experiencepoints: number,
        initiative: number,
        speed: number,
        hitdice: string,
        deathsaves?: DeathSaves.AsObject,
        abilityscorebonusesList: Array<AbilityScoreBonus.AsObject>,
        specialabilitiesList: Array<SpecialAbility.AsObject>,
        racialtraits?: RacialTraits.AsObject,
        location?: Coordinates.AsObject,
        defaultroom?: Coordinates.AsObject,
        lastlogin: string,
        lastlogout: string,
        admin?: Admin.AsObject,
        socialProvider: SocialProvider,
        socialId: string,
        socialToken: string,
    }
}

export class Admin extends jspb.Message { 
    getIsadmin(): boolean;
    setIsadmin(value: boolean): Admin;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Admin.AsObject;
    static toObject(includeInstance: boolean, msg: Admin): Admin.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Admin, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Admin;
    static deserializeBinaryFromReader(message: Admin, reader: jspb.BinaryReader): Admin;
}

export namespace Admin {
    export type AsObject = {
        isadmin: boolean,
    }
}

export class Skill extends jspb.Message { 
    getName(): string;
    setName(value: string): Skill;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Skill.AsObject;
    static toObject(includeInstance: boolean, msg: Skill): Skill.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Skill, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Skill;
    static deserializeBinaryFromReader(message: Skill, reader: jspb.BinaryReader): Skill;
}

export namespace Skill {
    export type AsObject = {
        name: string,
    }
}

export class SavingThrow extends jspb.Message { 
    getName(): string;
    setName(value: string): SavingThrow;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SavingThrow.AsObject;
    static toObject(includeInstance: boolean, msg: SavingThrow): SavingThrow.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SavingThrow, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SavingThrow;
    static deserializeBinaryFromReader(message: SavingThrow, reader: jspb.BinaryReader): SavingThrow;
}

export namespace SavingThrow {
    export type AsObject = {
        name: string,
    }
}

export class Language extends jspb.Message { 
    getName(): string;
    setName(value: string): Language;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Language.AsObject;
    static toObject(includeInstance: boolean, msg: Language): Language.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Language, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Language;
    static deserializeBinaryFromReader(message: Language, reader: jspb.BinaryReader): Language;
}

export namespace Language {
    export type AsObject = {
        name: string,
    }
}

export class Equipment extends jspb.Message { 
    getName(): string;
    setName(value: string): Equipment;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Equipment.AsObject;
    static toObject(includeInstance: boolean, msg: Equipment): Equipment.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Equipment, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Equipment;
    static deserializeBinaryFromReader(message: Equipment, reader: jspb.BinaryReader): Equipment;
}

export namespace Equipment {
    export type AsObject = {
        name: string,
    }
}

export class Feature extends jspb.Message { 
    getName(): string;
    setName(value: string): Feature;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Feature.AsObject;
    static toObject(includeInstance: boolean, msg: Feature): Feature.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Feature, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Feature;
    static deserializeBinaryFromReader(message: Feature, reader: jspb.BinaryReader): Feature;
}

export namespace Feature {
    export type AsObject = {
        name: string,
    }
}

export class Spell extends jspb.Message { 
    getName(): string;
    setName(value: string): Spell;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Spell.AsObject;
    static toObject(includeInstance: boolean, msg: Spell): Spell.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Spell, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Spell;
    static deserializeBinaryFromReader(message: Spell, reader: jspb.BinaryReader): Spell;
}

export namespace Spell {
    export type AsObject = {
        name: string,
    }
}

export class SpecialAbility extends jspb.Message { 
    getName(): string;
    setName(value: string): SpecialAbility;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SpecialAbility.AsObject;
    static toObject(includeInstance: boolean, msg: SpecialAbility): SpecialAbility.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SpecialAbility, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SpecialAbility;
    static deserializeBinaryFromReader(message: SpecialAbility, reader: jspb.BinaryReader): SpecialAbility;
}

export namespace SpecialAbility {
    export type AsObject = {
        name: string,
    }
}

export class AbilityScoreBonus extends jspb.Message { 
    getName(): string;
    setName(value: string): AbilityScoreBonus;
    getValue(): number;
    setValue(value: number): AbilityScoreBonus;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AbilityScoreBonus.AsObject;
    static toObject(includeInstance: boolean, msg: AbilityScoreBonus): AbilityScoreBonus.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AbilityScoreBonus, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AbilityScoreBonus;
    static deserializeBinaryFromReader(message: AbilityScoreBonus, reader: jspb.BinaryReader): AbilityScoreBonus;
}

export namespace AbilityScoreBonus {
    export type AsObject = {
        name: string,
        value: number,
    }
}

export class DeathSaves extends jspb.Message { 
    getSuccesses(): number;
    setSuccesses(value: number): DeathSaves;
    getFailures(): number;
    setFailures(value: number): DeathSaves;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeathSaves.AsObject;
    static toObject(includeInstance: boolean, msg: DeathSaves): DeathSaves.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeathSaves, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeathSaves;
    static deserializeBinaryFromReader(message: DeathSaves, reader: jspb.BinaryReader): DeathSaves;
}

export namespace DeathSaves {
    export type AsObject = {
        successes: number,
        failures: number,
    }
}

export class RacialTraits extends jspb.Message { 
    getName(): string;
    setName(value: string): RacialTraits;
    getDescription(): string;
    setDescription(value: string): RacialTraits;
    getDarkvision(): number;
    setDarkvision(value: number): RacialTraits;
    getSize(): string;
    setSize(value: string): RacialTraits;
    getSpeed(): number;
    setSpeed(value: number): RacialTraits;
    clearLanguagesList(): void;
    getLanguagesList(): Array<Language>;
    setLanguagesList(value: Array<Language>): RacialTraits;
    addLanguages(value?: Language, index?: number): Language;
    getAbilityscorebonuses(): number;
    setAbilityscorebonuses(value: number): RacialTraits;
    clearSpecialabilitiesList(): void;
    getSpecialabilitiesList(): Array<SpecialAbility>;
    setSpecialabilitiesList(value: Array<SpecialAbility>): RacialTraits;
    addSpecialabilities(value?: SpecialAbility, index?: number): SpecialAbility;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RacialTraits.AsObject;
    static toObject(includeInstance: boolean, msg: RacialTraits): RacialTraits.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RacialTraits, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RacialTraits;
    static deserializeBinaryFromReader(message: RacialTraits, reader: jspb.BinaryReader): RacialTraits;
}

export namespace RacialTraits {
    export type AsObject = {
        name: string,
        description: string,
        darkvision: number,
        size: string,
        speed: number,
        languagesList: Array<Language.AsObject>,
        abilityscorebonuses: number,
        specialabilitiesList: Array<SpecialAbility.AsObject>,
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

export class CreatePlayerRequest extends jspb.Message { 
    getPlayerId(): string;
    setPlayerId(value: string): CreatePlayerRequest;

    hasPlayer(): boolean;
    clearPlayer(): void;
    getPlayer(): Player | undefined;
    setPlayer(value?: Player): CreatePlayerRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreatePlayerRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreatePlayerRequest): CreatePlayerRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreatePlayerRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreatePlayerRequest;
    static deserializeBinaryFromReader(message: CreatePlayerRequest, reader: jspb.BinaryReader): CreatePlayerRequest;
}

export namespace CreatePlayerRequest {
    export type AsObject = {
        playerId: string,
        player?: Player.AsObject,
    }
}

export class CreatePlayerResponse extends jspb.Message { 

    hasPlayer(): boolean;
    clearPlayer(): void;
    getPlayer(): Player | undefined;
    setPlayer(value?: Player): CreatePlayerResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreatePlayerResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CreatePlayerResponse): CreatePlayerResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreatePlayerResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreatePlayerResponse;
    static deserializeBinaryFromReader(message: CreatePlayerResponse, reader: jspb.BinaryReader): CreatePlayerResponse;
}

export namespace CreatePlayerResponse {
    export type AsObject = {
        player?: Player.AsObject,
    }
}

export class MovePlayerRequest extends jspb.Message { 
    getPlayerId(): string;
    setPlayerId(value: string): MovePlayerRequest;

    hasNewLocation(): boolean;
    clearNewLocation(): void;
    getNewLocation(): Coordinates | undefined;
    setNewLocation(value?: Coordinates): MovePlayerRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MovePlayerRequest.AsObject;
    static toObject(includeInstance: boolean, msg: MovePlayerRequest): MovePlayerRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MovePlayerRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MovePlayerRequest;
    static deserializeBinaryFromReader(message: MovePlayerRequest, reader: jspb.BinaryReader): MovePlayerRequest;
}

export namespace MovePlayerRequest {
    export type AsObject = {
        playerId: string,
        newLocation?: Coordinates.AsObject,
    }
}

export class MovePlayerResponse extends jspb.Message { 

    hasPlayer(): boolean;
    clearPlayer(): void;
    getPlayer(): Player | undefined;
    setPlayer(value?: Player): MovePlayerResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MovePlayerResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MovePlayerResponse): MovePlayerResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MovePlayerResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MovePlayerResponse;
    static deserializeBinaryFromReader(message: MovePlayerResponse, reader: jspb.BinaryReader): MovePlayerResponse;
}

export namespace MovePlayerResponse {
    export type AsObject = {
        player?: Player.AsObject,
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

export class ListPlayersRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListPlayersRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListPlayersRequest): ListPlayersRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListPlayersRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListPlayersRequest;
    static deserializeBinaryFromReader(message: ListPlayersRequest, reader: jspb.BinaryReader): ListPlayersRequest;
}

export namespace ListPlayersRequest {
    export type AsObject = {
    }
}

export class ListPlayersResponse extends jspb.Message { 
    clearPlayersList(): void;
    getPlayersList(): Array<Player>;
    setPlayersList(value: Array<Player>): ListPlayersResponse;
    addPlayers(value?: Player, index?: number): Player;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListPlayersResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListPlayersResponse): ListPlayersResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListPlayersResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListPlayersResponse;
    static deserializeBinaryFromReader(message: ListPlayersResponse, reader: jspb.BinaryReader): ListPlayersResponse;
}

export namespace ListPlayersResponse {
    export type AsObject = {
        playersList: Array<Player.AsObject>,
    }
}

export class GetPlayerRequest extends jspb.Message { 
    getPlayerid(): string;
    setPlayerid(value: string): GetPlayerRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetPlayerRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetPlayerRequest): GetPlayerRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetPlayerRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetPlayerRequest;
    static deserializeBinaryFromReader(message: GetPlayerRequest, reader: jspb.BinaryReader): GetPlayerRequest;
}

export namespace GetPlayerRequest {
    export type AsObject = {
        playerid: string,
    }
}

export class GetPlayerResponse extends jspb.Message { 

    hasPlayer(): boolean;
    clearPlayer(): void;
    getPlayer(): Player | undefined;
    setPlayer(value?: Player): GetPlayerResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetPlayerResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetPlayerResponse): GetPlayerResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetPlayerResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetPlayerResponse;
    static deserializeBinaryFromReader(message: GetPlayerResponse, reader: jspb.BinaryReader): GetPlayerResponse;
}

export namespace GetPlayerResponse {
    export type AsObject = {
        player?: Player.AsObject,
    }
}

export class SetPlayerRequest extends jspb.Message { 

    hasPlayer(): boolean;
    clearPlayer(): void;
    getPlayer(): Player | undefined;
    setPlayer(value?: Player): SetPlayerRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetPlayerRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SetPlayerRequest): SetPlayerRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetPlayerRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetPlayerRequest;
    static deserializeBinaryFromReader(message: SetPlayerRequest, reader: jspb.BinaryReader): SetPlayerRequest;
}

export namespace SetPlayerRequest {
    export type AsObject = {
        player?: Player.AsObject,
    }
}

export class SetPlayerResponse extends jspb.Message { 

    hasPlayer(): boolean;
    clearPlayer(): void;
    getPlayer(): Player | undefined;
    setPlayer(value?: Player): SetPlayerResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetPlayerResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SetPlayerResponse): SetPlayerResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetPlayerResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetPlayerResponse;
    static deserializeBinaryFromReader(message: SetPlayerResponse, reader: jspb.BinaryReader): SetPlayerResponse;
}

export namespace SetPlayerResponse {
    export type AsObject = {
        player?: Player.AsObject,
    }
}

export class UpdatePlayerRequest extends jspb.Message { 
    getPlayerId(): string;
    setPlayerId(value: string): UpdatePlayerRequest;

    hasPlayer(): boolean;
    clearPlayer(): void;
    getPlayer(): Player | undefined;
    setPlayer(value?: Player): UpdatePlayerRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdatePlayerRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdatePlayerRequest): UpdatePlayerRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdatePlayerRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdatePlayerRequest;
    static deserializeBinaryFromReader(message: UpdatePlayerRequest, reader: jspb.BinaryReader): UpdatePlayerRequest;
}

export namespace UpdatePlayerRequest {
    export type AsObject = {
        playerId: string,
        player?: Player.AsObject,
    }
}

export class UpdatePlayerResponse extends jspb.Message { 

    hasPlayer(): boolean;
    clearPlayer(): void;
    getPlayer(): Player | undefined;
    setPlayer(value?: Player): UpdatePlayerResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdatePlayerResponse.AsObject;
    static toObject(includeInstance: boolean, msg: UpdatePlayerResponse): UpdatePlayerResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdatePlayerResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdatePlayerResponse;
    static deserializeBinaryFromReader(message: UpdatePlayerResponse, reader: jspb.BinaryReader): UpdatePlayerResponse;
}

export namespace UpdatePlayerResponse {
    export type AsObject = {
        player?: Player.AsObject,
    }
}

export class RoomState extends jspb.Message { 
    getId(): string;
    setId(value: string): RoomState;
    clearPlayersList(): void;
    getPlayersList(): Array<Player>;
    setPlayersList(value: Array<Player>): RoomState;
    addPlayers(value?: Player, index?: number): Player;

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
        playersList: Array<Player.AsObject>,
    }
}

export class SocialLoginResponse extends jspb.Message { 
    getPlayerId(): string;
    setPlayerId(value: string): SocialLoginResponse;
    getToken(): string;
    setToken(value: string): SocialLoginResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SocialLoginResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SocialLoginResponse): SocialLoginResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SocialLoginResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SocialLoginResponse;
    static deserializeBinaryFromReader(message: SocialLoginResponse, reader: jspb.BinaryReader): SocialLoginResponse;
}

export namespace SocialLoginResponse {
    export type AsObject = {
        playerId: string,
        token: string,
    }
}

export class SocialLoginRequest extends jspb.Message { 
    getProvider(): SocialProvider;
    setProvider(value: SocialProvider): SocialLoginRequest;
    getSocialId(): string;
    setSocialId(value: string): SocialLoginRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SocialLoginRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SocialLoginRequest): SocialLoginRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SocialLoginRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SocialLoginRequest;
    static deserializeBinaryFromReader(message: SocialLoginRequest, reader: jspb.BinaryReader): SocialLoginRequest;
}

export namespace SocialLoginRequest {
    export type AsObject = {
        provider: SocialProvider,
        socialId: string,
    }
}

export class UnlinkSocialAccountRequest extends jspb.Message { 
    getPlayerId(): string;
    setPlayerId(value: string): UnlinkSocialAccountRequest;
    getProvider(): SocialProvider;
    setProvider(value: SocialProvider): UnlinkSocialAccountRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UnlinkSocialAccountRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UnlinkSocialAccountRequest): UnlinkSocialAccountRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UnlinkSocialAccountRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UnlinkSocialAccountRequest;
    static deserializeBinaryFromReader(message: UnlinkSocialAccountRequest, reader: jspb.BinaryReader): UnlinkSocialAccountRequest;
}

export namespace UnlinkSocialAccountRequest {
    export type AsObject = {
        playerId: string,
        provider: SocialProvider,
    }
}

export class UnlinkSocialAccountResponse extends jspb.Message { 
    getPlayerId(): string;
    setPlayerId(value: string): UnlinkSocialAccountResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UnlinkSocialAccountResponse.AsObject;
    static toObject(includeInstance: boolean, msg: UnlinkSocialAccountResponse): UnlinkSocialAccountResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UnlinkSocialAccountResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UnlinkSocialAccountResponse;
    static deserializeBinaryFromReader(message: UnlinkSocialAccountResponse, reader: jspb.BinaryReader): UnlinkSocialAccountResponse;
}

export namespace UnlinkSocialAccountResponse {
    export type AsObject = {
        playerId: string,
    }
}

export class LinkSocialAccountRequest extends jspb.Message { 
    getPlayerId(): string;
    setPlayerId(value: string): LinkSocialAccountRequest;
    getProvider(): SocialProvider;
    setProvider(value: SocialProvider): LinkSocialAccountRequest;
    getSocialId(): string;
    setSocialId(value: string): LinkSocialAccountRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LinkSocialAccountRequest.AsObject;
    static toObject(includeInstance: boolean, msg: LinkSocialAccountRequest): LinkSocialAccountRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LinkSocialAccountRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LinkSocialAccountRequest;
    static deserializeBinaryFromReader(message: LinkSocialAccountRequest, reader: jspb.BinaryReader): LinkSocialAccountRequest;
}

export namespace LinkSocialAccountRequest {
    export type AsObject = {
        playerId: string,
        provider: SocialProvider,
        socialId: string,
    }
}

export class LinkSocialAccountResponse extends jspb.Message { 
    getPlayerId(): string;
    setPlayerId(value: string): LinkSocialAccountResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LinkSocialAccountResponse.AsObject;
    static toObject(includeInstance: boolean, msg: LinkSocialAccountResponse): LinkSocialAccountResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LinkSocialAccountResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LinkSocialAccountResponse;
    static deserializeBinaryFromReader(message: LinkSocialAccountResponse, reader: jspb.BinaryReader): LinkSocialAccountResponse;
}

export namespace LinkSocialAccountResponse {
    export type AsObject = {
        playerId: string,
    }
}

export class CreateGameCommand extends jspb.Message { 
    getGameId(): string;
    setGameId(value: string): CreateGameCommand;
    getPlayerId(): string;
    setPlayerId(value: string): CreateGameCommand;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateGameCommand.AsObject;
    static toObject(includeInstance: boolean, msg: CreateGameCommand): CreateGameCommand.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateGameCommand, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateGameCommand;
    static deserializeBinaryFromReader(message: CreateGameCommand, reader: jspb.BinaryReader): CreateGameCommand;
}

export namespace CreateGameCommand {
    export type AsObject = {
        gameId: string,
        playerId: string,
    }
}

export class GameCreatedEvent extends jspb.Message { 
    getGameId(): string;
    setGameId(value: string): GameCreatedEvent;
    getPlayerId(): string;
    setPlayerId(value: string): GameCreatedEvent;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GameCreatedEvent.AsObject;
    static toObject(includeInstance: boolean, msg: GameCreatedEvent): GameCreatedEvent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GameCreatedEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GameCreatedEvent;
    static deserializeBinaryFromReader(message: GameCreatedEvent, reader: jspb.BinaryReader): GameCreatedEvent;
}

export namespace GameCreatedEvent {
    export type AsObject = {
        gameId: string,
        playerId: string,
    }
}

export class StartGameCommand extends jspb.Message { 
    getGameId(): string;
    setGameId(value: string): StartGameCommand;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StartGameCommand.AsObject;
    static toObject(includeInstance: boolean, msg: StartGameCommand): StartGameCommand.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StartGameCommand, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StartGameCommand;
    static deserializeBinaryFromReader(message: StartGameCommand, reader: jspb.BinaryReader): StartGameCommand;
}

export namespace StartGameCommand {
    export type AsObject = {
        gameId: string,
    }
}

export class GameStartedEvent extends jspb.Message { 
    getGameId(): string;
    setGameId(value: string): GameStartedEvent;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GameStartedEvent.AsObject;
    static toObject(includeInstance: boolean, msg: GameStartedEvent): GameStartedEvent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GameStartedEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GameStartedEvent;
    static deserializeBinaryFromReader(message: GameStartedEvent, reader: jspb.BinaryReader): GameStartedEvent;
}

export namespace GameStartedEvent {
    export type AsObject = {
        gameId: string,
    }
}

export class EndGameCommand extends jspb.Message { 
    getGameId(): string;
    setGameId(value: string): EndGameCommand;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EndGameCommand.AsObject;
    static toObject(includeInstance: boolean, msg: EndGameCommand): EndGameCommand.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EndGameCommand, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EndGameCommand;
    static deserializeBinaryFromReader(message: EndGameCommand, reader: jspb.BinaryReader): EndGameCommand;
}

export namespace EndGameCommand {
    export type AsObject = {
        gameId: string,
    }
}

export class GameEndedEvent extends jspb.Message { 
    getGameId(): string;
    setGameId(value: string): GameEndedEvent;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GameEndedEvent.AsObject;
    static toObject(includeInstance: boolean, msg: GameEndedEvent): GameEndedEvent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GameEndedEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GameEndedEvent;
    static deserializeBinaryFromReader(message: GameEndedEvent, reader: jspb.BinaryReader): GameEndedEvent;
}

export namespace GameEndedEvent {
    export type AsObject = {
        gameId: string,
    }
}

export class MovePlayerCommand extends jspb.Message { 
    getGameId(): string;
    setGameId(value: string): MovePlayerCommand;
    getPlayerId(): string;
    setPlayerId(value: string): MovePlayerCommand;
    getDirection(): string;
    setDirection(value: string): MovePlayerCommand;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MovePlayerCommand.AsObject;
    static toObject(includeInstance: boolean, msg: MovePlayerCommand): MovePlayerCommand.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MovePlayerCommand, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MovePlayerCommand;
    static deserializeBinaryFromReader(message: MovePlayerCommand, reader: jspb.BinaryReader): MovePlayerCommand;
}

export namespace MovePlayerCommand {
    export type AsObject = {
        gameId: string,
        playerId: string,
        direction: string,
    }
}

export class PlayerMovedEvent extends jspb.Message { 
    getGameId(): string;
    setGameId(value: string): PlayerMovedEvent;
    getPlayerId(): string;
    setPlayerId(value: string): PlayerMovedEvent;
    getDirection(): string;
    setDirection(value: string): PlayerMovedEvent;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PlayerMovedEvent.AsObject;
    static toObject(includeInstance: boolean, msg: PlayerMovedEvent): PlayerMovedEvent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PlayerMovedEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PlayerMovedEvent;
    static deserializeBinaryFromReader(message: PlayerMovedEvent, reader: jspb.BinaryReader): PlayerMovedEvent;
}

export namespace PlayerMovedEvent {
    export type AsObject = {
        gameId: string,
        playerId: string,
        direction: string,
    }
}

export enum InterpType {
    INTERP_TYPE_UNSPECIFIED = 0,
    INTERP_TYPE_LOGIN = 1,
    INTERP_TYPE_PLAYING = 2,
    INTERP_TYPE_BUILDING = 3,
}

export enum SocialProvider {
    GOOGLE = 0,
    GITHUB = 1,
}
