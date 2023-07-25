gen:
	protoc --proto_path=proto proto/*.proto --go_out=server --go-grpc_out=server
	protoc --proto_path=proto proto/*.proto --go_out=client --go-grpc_out=client
	#protoc --proto_path=proto proto/*.proto --js_out=import_style=commonjs:web/pb/game
	#protoc --proto_path=proto proto/*.proto --grpc-web_out=import_style=commonjs+dts,mode=grpcwebtext:web/pb/game
	#protoc --proto_path=proto proto/*.proto --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts --ts_out=web/pb/game --ts_opt=grpc-web,import_style=commonjs,binary:.

	# Convert to ESM
	#npx cjs-to-es6 web/pb/game/*.js -d web/pb/game

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
