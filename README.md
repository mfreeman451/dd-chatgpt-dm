# dd-chatgpt-dm

![](./assets/images/basic-dmg-cover-1280x720.png?raw=true)

# Background

I created this to automate the process of setting up ChatGPT or some other similar LLM to act as a DM
in a game of "Dungeons and Dragons". If you want to do this manually, you could start with a player
character sheet for each player, and explain each detail to the LLM in a prompt, such as character
attributes, skills, race, background, etc. After this the LLM can help you begin the game and you
would just interact with the LLM through chat dialogs. This works great, but is difficult to
manage and eventually the LLM starts to forget about things due to the context limitations.

To workaround these limitations, this project attempts to implement a stateful database and a MUD style navigation
system. Information about "rooms" is stored in the database backend and retrieved via gRPC calls from the
client to the server. Ultimately, it is our goal to be able to network other servers, and figure out things like
economies, currencies, exchanges, even possibly doing this all in a decentralized manner.

## Game Mechanics

The web front-end is used to generate new characters. The gRPC backend is used to keep state and store information
in the database, and perform navigation. Communication through the DM after character creation is typically
going to be done through a chat system like IRC or Discord.

After a user navigates to a room, if it is a new room that has never been explored, the ChatGPT DM will describe
the room, and then save it using gRPC, to the database. In future versions, a networked version would possibly
broadcast a message about it to a system like Kafka (TBD). Perhaps each room is a 'topic' in kafka, users that are
in that room subscribe to that topic, and if a new user joins or something dynamic happens in that room, they
are made aware/updated.

Finally, the description of the room is used to create generative AI art of what that room might look like, 
and then the link to that picture is displayed or rendered to the user, depending on the client (Dall-E). 

If we can, I would also like to generate background music for that scene and start playing it for the users.

## Install 🏗

Protobufs

```bash
brew install protobuf
```

Go plugins for the protobuf compiler or refer [here](https://grpc.io/docs/languages/go/quickstart/#prerequisites)

```bash
make install
```

## Invoking RPCs 🚀

```bash
# Note: since we are not using TLS all the calls are with -plaintext flag
grpcurl -plaintext localhost:8080 list # introspect the service
grpcurl -plaintext localhost:8080 Players.GetPlayerList # to get a list of players
```


## Useful commands 📡

Generate Go stubs

```bash
make gen
```

Clean stubs

```bash
make clean
```

## Common issues and FAQ ❓

1. VS Code complains about imports?

Known issue with the Proto3 VS Code plugin. Add the following to your `settings.json` file

```
"protoc": {
        "path": "/path/to/protoc",
        "compile_on_save": false,
        "options": [
            "--proto_path=protos/v3",
            "--proto_path=protos/v2",
            "--proto_path=${workspaceRoot}/proto",
            "--proto_path=${env.GOPATH}/src",
            "--java_out=gen/java"
        ]
    }
```

Run `which protoc` to find your proto compiler path.

2. Auto formatter doesn't work?

```bash
brew install clang-format
```

Add the following to your settings.json

```json
{
    // ...
    "editor.formatOnSave": true
    // ...
}
```
