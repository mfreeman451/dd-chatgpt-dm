package watermill

import (
	"fmt"
	"github.com/ThreeDotsLabs/watermill"
	"github.com/ThreeDotsLabs/watermill/message"
	"google.golang.org/protobuf/proto"
)

type ProtobufMarshaler struct{}

func (m *ProtobufMarshaler) Name(v interface{}) string {
	//TODO implement me
	panic("implement me")
}

func (m *ProtobufMarshaler) NameFromMessage(msg *message.Message) string {
	//TODO implement me
	panic("implement me")
}

func (m *ProtobufMarshaler) Marshal(v interface{}) (*message.Message, error) {
	// Assert that v is a protobuf message
	pb, ok := v.(proto.Message)
	if !ok {
		return nil, fmt.Errorf("expected a protobuf message, but got %T", v)
	}

	// Marshal the protobuf message to a byte slice
	payload, err := proto.Marshal(pb)
	if err != nil {
		return nil, err
	}

	// Create a new Watermill message with the payload
	msg := message.NewMessage(watermill.NewUUID(), payload)

	return msg, nil
}

func (m *ProtobufMarshaler) Unmarshal(msg *message.Message, v interface{}) error {
	// Assert that v is a pointer to a protobuf message
	pb, ok := v.(proto.Message)
	if !ok {
		return fmt.Errorf("expected a pointer to a protobuf message, but got %T", v)
	}

	// Unmarshal the payload of the message to the protobuf message
	err := proto.Unmarshal(msg.Payload, pb)
	if err != nil {
		return err
	}

	return nil
}
