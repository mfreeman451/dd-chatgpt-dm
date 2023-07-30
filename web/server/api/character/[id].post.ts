import { GrpcWebFetchTransport } from "@protobuf-ts/grpcweb-transport";
import {GameClient} from "~/pb/game.client";
import {
    CreatePlayerRequest,
    GetPlayerRequest,
    Player,
    UpdatePlayerRequest
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

        //const getResponse = await client.getPlayer(request);
        try {
            getResponse = await client.getPlayer(getRequest);
        } catch(err: any) {
            if (err.code === 'NOT_FOUND') {
                // Create new player
                const newPlayer = Player.create();
                const newId = generateId()
                newPlayer.id = newId;
                newPlayer.discord = player.discord;
                newPlayer.name = player.name;

                const createRequest = CreatePlayerRequest.create()
                createRequest.name = newPlayer.name;
                createRequest.player = newPlayer;
                createRequest.player.id = newId;

                const createResponse = await client.createPlayer(createRequest);

                return {
                    statusCode: 200,
                    body: JSON.stringify(createResponse)
                };
            }
        }

        const existingPlayer = getResponse?.response.player;

        console.log("Existing player: ", existingPlayer)

        if (existingPlayer) {

            // Check for duplicate Discord ID
            // if (existingPlayer.getDiscord() === player.getDiscord()) {
            if (existingPlayer.discord === player.discord) {
                return {
                    statusCode: 400,
                    body: JSON.stringify({error: 'Duplicate Discord ID'})
                };
            }

            // Update existing player
            existingPlayer.id = id;
            existingPlayer.discord = player.discord;
            existingPlayer.name = player.name;

            const updateRequest = UpdatePlayerRequest.create()
            updateRequest.playerId = id;
            updateRequest.player = existingPlayer;

            const updateResponse = await client.updatePlayer(updateRequest);

            return {
                statusCode: 200,
                body: JSON.stringify(updateResponse)
            };
        }
    }

    catch (err) {
        console.error('Error:', err);
        let errMsg = "Error updating/creating player: " + err;
        return {
            statusCode: 500,
            body: JSON.stringify({error: errMsg })
        };
    }

});

// generateId is a helper function that generates a random ID.
// It is used in the createPlayer function.
function generateId() {
    // return a uuidv4
    return uuidv4();
}