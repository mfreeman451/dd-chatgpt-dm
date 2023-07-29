import * as jspb from 'google-protobuf'



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

  getSkillsList(): Array<Skill>;
  setSkillsList(value: Array<Skill>): Player;
  clearSkillsList(): Player;
  addSkills(value?: Skill, index?: number): Skill;

  getSavingthrowsList(): Array<SavingThrow>;
  setSavingthrowsList(value: Array<SavingThrow>): Player;
  clearSavingthrowsList(): Player;
  addSavingthrows(value?: SavingThrow, index?: number): SavingThrow;

  getLanguagesList(): Array<Language>;
  setLanguagesList(value: Array<Language>): Player;
  clearLanguagesList(): Player;
  addLanguages(value?: Language, index?: number): Language;

  getEquipmentList(): Array<Equipment>;
  setEquipmentList(value: Array<Equipment>): Player;
  clearEquipmentList(): Player;
  addEquipment(value?: Equipment, index?: number): Equipment;

  getFeaturesList(): Array<Feature>;
  setFeaturesList(value: Array<Feature>): Player;
  clearFeaturesList(): Player;
  addFeatures(value?: Feature, index?: number): Feature;

  getSpellsList(): Array<Spell>;
  setSpellsList(value: Array<Spell>): Player;
  clearSpellsList(): Player;
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

  getDeathsaves(): DeathSaves | undefined;
  setDeathsaves(value?: DeathSaves): Player;
  hasDeathsaves(): boolean;
  clearDeathsaves(): Player;

  getAbilityscorebonusesList(): Array<AbilityScoreBonus>;
  setAbilityscorebonusesList(value: Array<AbilityScoreBonus>): Player;
  clearAbilityscorebonusesList(): Player;
  addAbilityscorebonuses(value?: AbilityScoreBonus, index?: number): AbilityScoreBonus;

  getSpecialabilitiesList(): Array<SpecialAbility>;
  setSpecialabilitiesList(value: Array<SpecialAbility>): Player;
  clearSpecialabilitiesList(): Player;
  addSpecialabilities(value?: SpecialAbility, index?: number): SpecialAbility;

  getRacialtraits(): RacialTraits | undefined;
  setRacialtraits(value?: RacialTraits): Player;
  hasRacialtraits(): boolean;
  clearRacialtraits(): Player;

  getLocation(): Coordinates | undefined;
  setLocation(value?: Coordinates): Player;
  hasLocation(): boolean;
  clearLocation(): Player;

  getLastlogin(): number;
  setLastlogin(value: number): Player;

  getLastlogout(): number;
  setLastlogout(value: number): Player;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Player.AsObject;
  static toObject(includeInstance: boolean, msg: Player): Player.AsObject;
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
    lastlogin: number,
    lastlogout: number,
  }
}

export class Skill extends jspb.Message {
  getName(): string;
  setName(value: string): Skill;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Skill.AsObject;
  static toObject(includeInstance: boolean, msg: Skill): Skill.AsObject;
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

  getLanguagesList(): Array<Language>;
  setLanguagesList(value: Array<Language>): RacialTraits;
  clearLanguagesList(): RacialTraits;
  addLanguages(value?: Language, index?: number): Language;

  getAbilityscorebonuses(): number;
  setAbilityscorebonuses(value: number): RacialTraits;

  getSpecialabilitiesList(): Array<SpecialAbility>;
  setSpecialabilitiesList(value: Array<SpecialAbility>): RacialTraits;
  clearSpecialabilitiesList(): RacialTraits;
  addSpecialabilities(value?: SpecialAbility, index?: number): SpecialAbility;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RacialTraits.AsObject;
  static toObject(includeInstance: boolean, msg: RacialTraits): RacialTraits.AsObject;
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

  getItemsList(): Array<Item>;
  setItemsList(value: Array<Item>): Location;
  clearItemsList(): Location;
  addItems(value?: Item, index?: number): Item;

  getNpcsList(): Array<NPC>;
  setNpcsList(value: Array<NPC>): Location;
  clearNpcsList(): Location;
  addNpcs(value?: NPC, index?: number): NPC;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Location.AsObject;
  static toObject(includeInstance: boolean, msg: Location): Location.AsObject;
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
  static serializeBinaryToWriter(message: NPC, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NPC;
  static deserializeBinaryFromReader(message: NPC, reader: jspb.BinaryReader): NPC;
}

export namespace NPC {
  export type AsObject = {
    name: string,
  }
}

export class CreatePlayerRequest extends jspb.Message {
  getName(): string;
  setName(value: string): CreatePlayerRequest;

  getPlayer(): Player | undefined;
  setPlayer(value?: Player): CreatePlayerRequest;
  hasPlayer(): boolean;
  clearPlayer(): CreatePlayerRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreatePlayerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreatePlayerRequest): CreatePlayerRequest.AsObject;
  static serializeBinaryToWriter(message: CreatePlayerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreatePlayerRequest;
  static deserializeBinaryFromReader(message: CreatePlayerRequest, reader: jspb.BinaryReader): CreatePlayerRequest;
}

export namespace CreatePlayerRequest {
  export type AsObject = {
    name: string,
    player?: Player.AsObject,
  }
}

export class CreatePlayerResponse extends jspb.Message {
  getPlayer(): Player | undefined;
  setPlayer(value?: Player): CreatePlayerResponse;
  hasPlayer(): boolean;
  clearPlayer(): CreatePlayerResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreatePlayerResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreatePlayerResponse): CreatePlayerResponse.AsObject;
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

  getNewLocation(): Coordinates | undefined;
  setNewLocation(value?: Coordinates): MovePlayerRequest;
  hasNewLocation(): boolean;
  clearNewLocation(): MovePlayerRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MovePlayerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MovePlayerRequest): MovePlayerRequest.AsObject;
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
  getPlayer(): Player | undefined;
  setPlayer(value?: Player): MovePlayerResponse;
  hasPlayer(): boolean;
  clearPlayer(): MovePlayerResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MovePlayerResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MovePlayerResponse): MovePlayerResponse.AsObject;
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
  getCoordinates(): Coordinates | undefined;
  setCoordinates(value?: Coordinates): GetLocationRequest;
  hasCoordinates(): boolean;
  clearCoordinates(): GetLocationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLocationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetLocationRequest): GetLocationRequest.AsObject;
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
  getLocation(): Location | undefined;
  setLocation(value?: Location): GetLocationResponse;
  hasLocation(): boolean;
  clearLocation(): GetLocationResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLocationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetLocationResponse): GetLocationResponse.AsObject;
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
  static serializeBinaryToWriter(message: ListPlayersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPlayersRequest;
  static deserializeBinaryFromReader(message: ListPlayersRequest, reader: jspb.BinaryReader): ListPlayersRequest;
}

export namespace ListPlayersRequest {
  export type AsObject = {
  }
}

export class ListPlayersResponse extends jspb.Message {
  getPlayersList(): Array<Player>;
  setPlayersList(value: Array<Player>): ListPlayersResponse;
  clearPlayersList(): ListPlayersResponse;
  addPlayers(value?: Player, index?: number): Player;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPlayersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListPlayersResponse): ListPlayersResponse.AsObject;
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
  getPlayer(): Player | undefined;
  setPlayer(value?: Player): GetPlayerResponse;
  hasPlayer(): boolean;
  clearPlayer(): GetPlayerResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPlayerResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetPlayerResponse): GetPlayerResponse.AsObject;
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
  getPlayer(): Player | undefined;
  setPlayer(value?: Player): SetPlayerRequest;
  hasPlayer(): boolean;
  clearPlayer(): SetPlayerRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetPlayerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetPlayerRequest): SetPlayerRequest.AsObject;
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
  getPlayer(): Player | undefined;
  setPlayer(value?: Player): SetPlayerResponse;
  hasPlayer(): boolean;
  clearPlayer(): SetPlayerResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetPlayerResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SetPlayerResponse): SetPlayerResponse.AsObject;
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

  getPlayer(): Player | undefined;
  setPlayer(value?: Player): UpdatePlayerRequest;
  hasPlayer(): boolean;
  clearPlayer(): UpdatePlayerRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdatePlayerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdatePlayerRequest): UpdatePlayerRequest.AsObject;
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
  getPlayer(): Player | undefined;
  setPlayer(value?: Player): UpdatePlayerResponse;
  hasPlayer(): boolean;
  clearPlayer(): UpdatePlayerResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdatePlayerResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdatePlayerResponse): UpdatePlayerResponse.AsObject;
  static serializeBinaryToWriter(message: UpdatePlayerResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdatePlayerResponse;
  static deserializeBinaryFromReader(message: UpdatePlayerResponse, reader: jspb.BinaryReader): UpdatePlayerResponse;
}

export namespace UpdatePlayerResponse {
  export type AsObject = {
    player?: Player.AsObject,
  }
}

