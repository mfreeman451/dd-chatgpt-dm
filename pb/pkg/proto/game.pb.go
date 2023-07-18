// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.31.0
// 	protoc        v4.23.2
// source: pkg/proto/game.proto

package pb

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type Coordinates struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	X int32 `protobuf:"varint,1,opt,name=x,proto3" json:"x,omitempty"`
	Y int32 `protobuf:"varint,2,opt,name=y,proto3" json:"y,omitempty"`
	Z int32 `protobuf:"varint,3,opt,name=z,proto3" json:"z,omitempty"`
}

func (x *Coordinates) Reset() {
	*x = Coordinates{}
	if protoimpl.UnsafeEnabled {
		mi := &file_pkg_proto_game_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Coordinates) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Coordinates) ProtoMessage() {}

func (x *Coordinates) ProtoReflect() protoreflect.Message {
	mi := &file_pkg_proto_game_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Coordinates.ProtoReflect.Descriptor instead.
func (*Coordinates) Descriptor() ([]byte, []int) {
	return file_pkg_proto_game_proto_rawDescGZIP(), []int{0}
}

func (x *Coordinates) GetX() int32 {
	if x != nil {
		return x.X
	}
	return 0
}

func (x *Coordinates) GetY() int32 {
	if x != nil {
		return x.Y
	}
	return 0
}

func (x *Coordinates) GetZ() int32 {
	if x != nil {
		return x.Z
	}
	return 0
}

type Player struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id       string       `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	Name     string       `protobuf:"bytes,2,opt,name=name,proto3" json:"name,omitempty"`
	Location *Coordinates `protobuf:"bytes,3,opt,name=location,proto3" json:"location,omitempty"`
}

func (x *Player) Reset() {
	*x = Player{}
	if protoimpl.UnsafeEnabled {
		mi := &file_pkg_proto_game_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Player) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Player) ProtoMessage() {}

func (x *Player) ProtoReflect() protoreflect.Message {
	mi := &file_pkg_proto_game_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Player.ProtoReflect.Descriptor instead.
func (*Player) Descriptor() ([]byte, []int) {
	return file_pkg_proto_game_proto_rawDescGZIP(), []int{1}
}

func (x *Player) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

func (x *Player) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *Player) GetLocation() *Coordinates {
	if x != nil {
		return x.Location
	}
	return nil
}

type Location struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id          string   `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	Description string   `protobuf:"bytes,2,opt,name=description,proto3" json:"description,omitempty"`
	Items       []string `protobuf:"bytes,3,rep,name=items,proto3" json:"items,omitempty"`
	Npcs        []string `protobuf:"bytes,4,rep,name=npcs,proto3" json:"npcs,omitempty"`
}

func (x *Location) Reset() {
	*x = Location{}
	if protoimpl.UnsafeEnabled {
		mi := &file_pkg_proto_game_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Location) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Location) ProtoMessage() {}

func (x *Location) ProtoReflect() protoreflect.Message {
	mi := &file_pkg_proto_game_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Location.ProtoReflect.Descriptor instead.
func (*Location) Descriptor() ([]byte, []int) {
	return file_pkg_proto_game_proto_rawDescGZIP(), []int{2}
}

func (x *Location) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

func (x *Location) GetDescription() string {
	if x != nil {
		return x.Description
	}
	return ""
}

func (x *Location) GetItems() []string {
	if x != nil {
		return x.Items
	}
	return nil
}

func (x *Location) GetNpcs() []string {
	if x != nil {
		return x.Npcs
	}
	return nil
}

type CreatePlayerRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Name string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
}

func (x *CreatePlayerRequest) Reset() {
	*x = CreatePlayerRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_pkg_proto_game_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *CreatePlayerRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*CreatePlayerRequest) ProtoMessage() {}

func (x *CreatePlayerRequest) ProtoReflect() protoreflect.Message {
	mi := &file_pkg_proto_game_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use CreatePlayerRequest.ProtoReflect.Descriptor instead.
func (*CreatePlayerRequest) Descriptor() ([]byte, []int) {
	return file_pkg_proto_game_proto_rawDescGZIP(), []int{3}
}

func (x *CreatePlayerRequest) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

type CreatePlayerResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Player *Player `protobuf:"bytes,1,opt,name=player,proto3" json:"player,omitempty"`
}

func (x *CreatePlayerResponse) Reset() {
	*x = CreatePlayerResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_pkg_proto_game_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *CreatePlayerResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*CreatePlayerResponse) ProtoMessage() {}

func (x *CreatePlayerResponse) ProtoReflect() protoreflect.Message {
	mi := &file_pkg_proto_game_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use CreatePlayerResponse.ProtoReflect.Descriptor instead.
func (*CreatePlayerResponse) Descriptor() ([]byte, []int) {
	return file_pkg_proto_game_proto_rawDescGZIP(), []int{4}
}

func (x *CreatePlayerResponse) GetPlayer() *Player {
	if x != nil {
		return x.Player
	}
	return nil
}

type MovePlayerRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	PlayerId    string       `protobuf:"bytes,1,opt,name=player_id,json=playerId,proto3" json:"player_id,omitempty"`
	NewLocation *Coordinates `protobuf:"bytes,2,opt,name=new_location,json=newLocation,proto3" json:"new_location,omitempty"`
}

func (x *MovePlayerRequest) Reset() {
	*x = MovePlayerRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_pkg_proto_game_proto_msgTypes[5]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *MovePlayerRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*MovePlayerRequest) ProtoMessage() {}

func (x *MovePlayerRequest) ProtoReflect() protoreflect.Message {
	mi := &file_pkg_proto_game_proto_msgTypes[5]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use MovePlayerRequest.ProtoReflect.Descriptor instead.
func (*MovePlayerRequest) Descriptor() ([]byte, []int) {
	return file_pkg_proto_game_proto_rawDescGZIP(), []int{5}
}

func (x *MovePlayerRequest) GetPlayerId() string {
	if x != nil {
		return x.PlayerId
	}
	return ""
}

func (x *MovePlayerRequest) GetNewLocation() *Coordinates {
	if x != nil {
		return x.NewLocation
	}
	return nil
}

type MovePlayerResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields
}

func (x *MovePlayerResponse) Reset() {
	*x = MovePlayerResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_pkg_proto_game_proto_msgTypes[6]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *MovePlayerResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*MovePlayerResponse) ProtoMessage() {}

func (x *MovePlayerResponse) ProtoReflect() protoreflect.Message {
	mi := &file_pkg_proto_game_proto_msgTypes[6]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use MovePlayerResponse.ProtoReflect.Descriptor instead.
func (*MovePlayerResponse) Descriptor() ([]byte, []int) {
	return file_pkg_proto_game_proto_rawDescGZIP(), []int{6}
}

type GetLocationRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Coordinates *Coordinates `protobuf:"bytes,1,opt,name=coordinates,proto3" json:"coordinates,omitempty"`
}

func (x *GetLocationRequest) Reset() {
	*x = GetLocationRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_pkg_proto_game_proto_msgTypes[7]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetLocationRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetLocationRequest) ProtoMessage() {}

func (x *GetLocationRequest) ProtoReflect() protoreflect.Message {
	mi := &file_pkg_proto_game_proto_msgTypes[7]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetLocationRequest.ProtoReflect.Descriptor instead.
func (*GetLocationRequest) Descriptor() ([]byte, []int) {
	return file_pkg_proto_game_proto_rawDescGZIP(), []int{7}
}

func (x *GetLocationRequest) GetCoordinates() *Coordinates {
	if x != nil {
		return x.Coordinates
	}
	return nil
}

type GetLocationResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Location *Location `protobuf:"bytes,1,opt,name=location,proto3" json:"location,omitempty"`
}

func (x *GetLocationResponse) Reset() {
	*x = GetLocationResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_pkg_proto_game_proto_msgTypes[8]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetLocationResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetLocationResponse) ProtoMessage() {}

func (x *GetLocationResponse) ProtoReflect() protoreflect.Message {
	mi := &file_pkg_proto_game_proto_msgTypes[8]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetLocationResponse.ProtoReflect.Descriptor instead.
func (*GetLocationResponse) Descriptor() ([]byte, []int) {
	return file_pkg_proto_game_proto_rawDescGZIP(), []int{8}
}

func (x *GetLocationResponse) GetLocation() *Location {
	if x != nil {
		return x.Location
	}
	return nil
}

var File_pkg_proto_game_proto protoreflect.FileDescriptor

var file_pkg_proto_game_proto_rawDesc = []byte{
	0x0a, 0x14, 0x70, 0x6b, 0x67, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2f, 0x67, 0x61, 0x6d, 0x65,
	0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x03, 0x64, 0x6e, 0x64, 0x22, 0x37, 0x0a, 0x0b, 0x43,
	0x6f, 0x6f, 0x72, 0x64, 0x69, 0x6e, 0x61, 0x74, 0x65, 0x73, 0x12, 0x0c, 0x0a, 0x01, 0x78, 0x18,
	0x01, 0x20, 0x01, 0x28, 0x05, 0x52, 0x01, 0x78, 0x12, 0x0c, 0x0a, 0x01, 0x79, 0x18, 0x02, 0x20,
	0x01, 0x28, 0x05, 0x52, 0x01, 0x79, 0x12, 0x0c, 0x0a, 0x01, 0x7a, 0x18, 0x03, 0x20, 0x01, 0x28,
	0x05, 0x52, 0x01, 0x7a, 0x22, 0x5a, 0x0a, 0x06, 0x50, 0x6c, 0x61, 0x79, 0x65, 0x72, 0x12, 0x0e,
	0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x02, 0x69, 0x64, 0x12, 0x12,
	0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61,
	0x6d, 0x65, 0x12, 0x2c, 0x0a, 0x08, 0x6c, 0x6f, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x18, 0x03,
	0x20, 0x01, 0x28, 0x0b, 0x32, 0x10, 0x2e, 0x64, 0x6e, 0x64, 0x2e, 0x43, 0x6f, 0x6f, 0x72, 0x64,
	0x69, 0x6e, 0x61, 0x74, 0x65, 0x73, 0x52, 0x08, 0x6c, 0x6f, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e,
	0x22, 0x66, 0x0a, 0x08, 0x4c, 0x6f, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x0e, 0x0a, 0x02,
	0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x02, 0x69, 0x64, 0x12, 0x20, 0x0a, 0x0b,
	0x64, 0x65, 0x73, 0x63, 0x72, 0x69, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x18, 0x02, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x0b, 0x64, 0x65, 0x73, 0x63, 0x72, 0x69, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x14,
	0x0a, 0x05, 0x69, 0x74, 0x65, 0x6d, 0x73, 0x18, 0x03, 0x20, 0x03, 0x28, 0x09, 0x52, 0x05, 0x69,
	0x74, 0x65, 0x6d, 0x73, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x70, 0x63, 0x73, 0x18, 0x04, 0x20, 0x03,
	0x28, 0x09, 0x52, 0x04, 0x6e, 0x70, 0x63, 0x73, 0x22, 0x29, 0x0a, 0x13, 0x43, 0x72, 0x65, 0x61,
	0x74, 0x65, 0x50, 0x6c, 0x61, 0x79, 0x65, 0x72, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12,
	0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e,
	0x61, 0x6d, 0x65, 0x22, 0x3b, 0x0a, 0x14, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x50, 0x6c, 0x61,
	0x79, 0x65, 0x72, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x23, 0x0a, 0x06, 0x70,
	0x6c, 0x61, 0x79, 0x65, 0x72, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x0b, 0x2e, 0x64, 0x6e,
	0x64, 0x2e, 0x50, 0x6c, 0x61, 0x79, 0x65, 0x72, 0x52, 0x06, 0x70, 0x6c, 0x61, 0x79, 0x65, 0x72,
	0x22, 0x65, 0x0a, 0x11, 0x4d, 0x6f, 0x76, 0x65, 0x50, 0x6c, 0x61, 0x79, 0x65, 0x72, 0x52, 0x65,
	0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x1b, 0x0a, 0x09, 0x70, 0x6c, 0x61, 0x79, 0x65, 0x72, 0x5f,
	0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x08, 0x70, 0x6c, 0x61, 0x79, 0x65, 0x72,
	0x49, 0x64, 0x12, 0x33, 0x0a, 0x0c, 0x6e, 0x65, 0x77, 0x5f, 0x6c, 0x6f, 0x63, 0x61, 0x74, 0x69,
	0x6f, 0x6e, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x10, 0x2e, 0x64, 0x6e, 0x64, 0x2e, 0x43,
	0x6f, 0x6f, 0x72, 0x64, 0x69, 0x6e, 0x61, 0x74, 0x65, 0x73, 0x52, 0x0b, 0x6e, 0x65, 0x77, 0x4c,
	0x6f, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x22, 0x14, 0x0a, 0x12, 0x4d, 0x6f, 0x76, 0x65, 0x50,
	0x6c, 0x61, 0x79, 0x65, 0x72, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x48, 0x0a,
	0x12, 0x47, 0x65, 0x74, 0x4c, 0x6f, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x65, 0x71, 0x75,
	0x65, 0x73, 0x74, 0x12, 0x32, 0x0a, 0x0b, 0x63, 0x6f, 0x6f, 0x72, 0x64, 0x69, 0x6e, 0x61, 0x74,
	0x65, 0x73, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x10, 0x2e, 0x64, 0x6e, 0x64, 0x2e, 0x43,
	0x6f, 0x6f, 0x72, 0x64, 0x69, 0x6e, 0x61, 0x74, 0x65, 0x73, 0x52, 0x0b, 0x63, 0x6f, 0x6f, 0x72,
	0x64, 0x69, 0x6e, 0x61, 0x74, 0x65, 0x73, 0x22, 0x40, 0x0a, 0x13, 0x47, 0x65, 0x74, 0x4c, 0x6f,
	0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x29,
	0x0a, 0x08, 0x6c, 0x6f, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b,
	0x32, 0x0d, 0x2e, 0x64, 0x6e, 0x64, 0x2e, 0x4c, 0x6f, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x52,
	0x08, 0x6c, 0x6f, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x32, 0xd2, 0x01, 0x0a, 0x04, 0x47, 0x61,
	0x6d, 0x65, 0x12, 0x45, 0x0a, 0x0c, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x50, 0x6c, 0x61, 0x79,
	0x65, 0x72, 0x12, 0x18, 0x2e, 0x64, 0x6e, 0x64, 0x2e, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x50,
	0x6c, 0x61, 0x79, 0x65, 0x72, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x19, 0x2e, 0x64,
	0x6e, 0x64, 0x2e, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x50, 0x6c, 0x61, 0x79, 0x65, 0x72, 0x52,
	0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00, 0x12, 0x3f, 0x0a, 0x0a, 0x4d, 0x6f, 0x76,
	0x65, 0x50, 0x6c, 0x61, 0x79, 0x65, 0x72, 0x12, 0x16, 0x2e, 0x64, 0x6e, 0x64, 0x2e, 0x4d, 0x6f,
	0x76, 0x65, 0x50, 0x6c, 0x61, 0x79, 0x65, 0x72, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a,
	0x17, 0x2e, 0x64, 0x6e, 0x64, 0x2e, 0x4d, 0x6f, 0x76, 0x65, 0x50, 0x6c, 0x61, 0x79, 0x65, 0x72,
	0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00, 0x12, 0x42, 0x0a, 0x0b, 0x47, 0x65,
	0x74, 0x4c, 0x6f, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x17, 0x2e, 0x64, 0x6e, 0x64, 0x2e,
	0x47, 0x65, 0x74, 0x4c, 0x6f, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x65, 0x71, 0x75, 0x65,
	0x73, 0x74, 0x1a, 0x18, 0x2e, 0x64, 0x6e, 0x64, 0x2e, 0x47, 0x65, 0x74, 0x4c, 0x6f, 0x63, 0x61,
	0x74, 0x69, 0x6f, 0x6e, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00, 0x42, 0x29,
	0x5a, 0x27, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x6d, 0x66, 0x72,
	0x65, 0x65, 0x6d, 0x61, 0x6e, 0x34, 0x35, 0x31, 0x2f, 0x64, 0x64, 0x2d, 0x63, 0x68, 0x61, 0x74,
	0x67, 0x70, 0x74, 0x2d, 0x64, 0x6d, 0x2f, 0x70, 0x62, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x33,
}

var (
	file_pkg_proto_game_proto_rawDescOnce sync.Once
	file_pkg_proto_game_proto_rawDescData = file_pkg_proto_game_proto_rawDesc
)

func file_pkg_proto_game_proto_rawDescGZIP() []byte {
	file_pkg_proto_game_proto_rawDescOnce.Do(func() {
		file_pkg_proto_game_proto_rawDescData = protoimpl.X.CompressGZIP(file_pkg_proto_game_proto_rawDescData)
	})
	return file_pkg_proto_game_proto_rawDescData
}

var file_pkg_proto_game_proto_msgTypes = make([]protoimpl.MessageInfo, 9)
var file_pkg_proto_game_proto_goTypes = []interface{}{
	(*Coordinates)(nil),          // 0: dnd.Coordinates
	(*Player)(nil),               // 1: dnd.Player
	(*Location)(nil),             // 2: dnd.Location
	(*CreatePlayerRequest)(nil),  // 3: dnd.CreatePlayerRequest
	(*CreatePlayerResponse)(nil), // 4: dnd.CreatePlayerResponse
	(*MovePlayerRequest)(nil),    // 5: dnd.MovePlayerRequest
	(*MovePlayerResponse)(nil),   // 6: dnd.MovePlayerResponse
	(*GetLocationRequest)(nil),   // 7: dnd.GetLocationRequest
	(*GetLocationResponse)(nil),  // 8: dnd.GetLocationResponse
}
var file_pkg_proto_game_proto_depIdxs = []int32{
	0, // 0: dnd.Player.location:type_name -> dnd.Coordinates
	1, // 1: dnd.CreatePlayerResponse.player:type_name -> dnd.Player
	0, // 2: dnd.MovePlayerRequest.new_location:type_name -> dnd.Coordinates
	0, // 3: dnd.GetLocationRequest.coordinates:type_name -> dnd.Coordinates
	2, // 4: dnd.GetLocationResponse.location:type_name -> dnd.Location
	3, // 5: dnd.Game.CreatePlayer:input_type -> dnd.CreatePlayerRequest
	5, // 6: dnd.Game.MovePlayer:input_type -> dnd.MovePlayerRequest
	7, // 7: dnd.Game.GetLocation:input_type -> dnd.GetLocationRequest
	4, // 8: dnd.Game.CreatePlayer:output_type -> dnd.CreatePlayerResponse
	6, // 9: dnd.Game.MovePlayer:output_type -> dnd.MovePlayerResponse
	8, // 10: dnd.Game.GetLocation:output_type -> dnd.GetLocationResponse
	8, // [8:11] is the sub-list for method output_type
	5, // [5:8] is the sub-list for method input_type
	5, // [5:5] is the sub-list for extension type_name
	5, // [5:5] is the sub-list for extension extendee
	0, // [0:5] is the sub-list for field type_name
}

func init() { file_pkg_proto_game_proto_init() }
func file_pkg_proto_game_proto_init() {
	if File_pkg_proto_game_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_pkg_proto_game_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Coordinates); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_pkg_proto_game_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Player); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_pkg_proto_game_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Location); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_pkg_proto_game_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*CreatePlayerRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_pkg_proto_game_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*CreatePlayerResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_pkg_proto_game_proto_msgTypes[5].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*MovePlayerRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_pkg_proto_game_proto_msgTypes[6].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*MovePlayerResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_pkg_proto_game_proto_msgTypes[7].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GetLocationRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_pkg_proto_game_proto_msgTypes[8].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GetLocationResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_pkg_proto_game_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   9,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_pkg_proto_game_proto_goTypes,
		DependencyIndexes: file_pkg_proto_game_proto_depIdxs,
		MessageInfos:      file_pkg_proto_game_proto_msgTypes,
	}.Build()
	File_pkg_proto_game_proto = out.File
	file_pkg_proto_game_proto_rawDesc = nil
	file_pkg_proto_game_proto_goTypes = nil
	file_pkg_proto_game_proto_depIdxs = nil
}