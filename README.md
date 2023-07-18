![](./assets/images/basic-dmg-cover-1280x720.png?raw=true)

# dd-chatgpt-dm

ChatGPT based Dungeons and Dragons Dungeon Master (DM) chatbot.

Currently supports the following chat services:

* Discord
* IRC


## Protobuf

```shell
 protoc --go_out=internal/pb --go_opt=paths=source_relative \
  --go-grpc_out=internal/adapters/grpc --go-grpc_opt=paths=source_relative \
  ./pkg/proto/game.proto
```
