import { GrpcWebFetchTransport } from "@protobuf-ts/grpcweb-transport";
import { GameClient } from "~/pb/game.client";
import {
    CreatePlayerRequest,
    GetPlayerRequest,
    Player
} from "~/pb/game";
import { v4 as uuidv4 } from 'uuid';

const transport = new GrpcWebFetchTransport({
        baseUrl: 'http://localhost:8080',
    }
);

const client = new GameClient(transport)
export default defineEventHandler(async (event) => {

    const player: Player = await readBody(event);

    if (!event.context.params) {
        return {
            statusCode: 400,
            body: JSON.stringify({ error: 'No ID provided'})
        };
    }

    const id = event.context.params.id;

    try {
        const getRequest = GetPlayerRequest.create({
            playerId: id
        });

        let getResponse;

        try {
            getResponse = await client.getPlayer(getRequest);
        } catch(err: any) {
            if (err.code === 'NOT_FOUND') {
                // Create new player
                let newPlayer = Player.create();
                const createRequest = CreatePlayerRequest.create()
                // stop anyone from trying to set the admin flag
                delete player.admin;
                // createRequest.player = newPlayer;
                const playerObj = Object.assign({}, player);
                createRequest.player = Player.create(playerObj);

                console.log("Create request: ", createRequest)
                const createResponse = await client.createPlayer(createRequest);

                return {
                    statusCode: 200,
                    body: createResponse.response,
                };
            }
        }
    }

    catch (err) {
        console.error('Error:', err);
        let errMsg = "Error updating/creating player: " + err;
        return {
            statusCode: 500,
            body: err,
        };
    }

});

// generateId is a helper function that generates a random ID.
// It is used in the createPlayer function.
function generateId() {
    // return a uuidv4
    return uuidv4();
}