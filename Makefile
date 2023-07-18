PROTO_FILES := $(wildcard pkg/proto/*.proto)

.PHONY: proto
proto:
	protoc --go_out=pb --go_opt=paths=source_relative \
    --go-grpc_out=adapters/grpc --go-grpc_opt=paths=source_relative \
    $(PROTO_FILES)

.PHONY: build
build: proto
	go build -o bin/app cmd/main.go

.PHONY: clean
clean:
	rm -f bin/app
	rm -rf pb/* adapters/grpc/*