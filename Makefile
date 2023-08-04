gen:
	#cd proto && buf generate
	#protoc --proto_path=proto proto/*.proto --go_out=server --go-grpc_out=server
	#protoc --proto_path=proto proto/*.proto --go_out=client --go-grpc_out=client
	buf generate

clean:
	rm -rf server/pb/
	rm -rf client/pb/

server:
	go run server/main.go

install:
	go install google.golang.org/protobuf/cmd/protoc-gen-go@latest
	go install google.golang.org/grpc/cmd/protoc-gen-go-grpc@latest
	brew install protobuf
	brew install clang-format
	brew install grpcurl
	export PATH=$PATH:$(go env GOPATH)/bin

test:
	rm -rf tmp && mkdir tmp
	go test -cover -race serializer/*.go
