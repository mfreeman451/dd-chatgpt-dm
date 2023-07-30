import { GrpcWebFetchTransport } from "@protobuf-ts/grpcweb-transport";
import {GameClient} from "~/pb/game.client";
import {
    CreatePlayerRequest,
    GetPlayerRequest,
    Player,
    UpdatePlayerRequest
} from "~/pb/game";

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
    const request = GetPlayerRequest.create();
    request.playerId = id;

    try {

        const getResponse = await client.getPlayer(request);
        const existingPlayer = getResponse.response.player;

        if (existingPlayer) {

            // Check for duplicate Discord ID
            // if (existingPlayer.getDiscord() === player.getDiscord()) {
            if (existingPlayer.discord === player.discord) {
                return {
                    statusCode: 400,
                    body: JSON.stringify({ error: 'Duplicate Discord ID'})
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

        } else {

            // Create new player
            const newPlayer = Player.create();
            newPlayer.id = id;
            newPlayer.discord = player.discord;
            newPlayer.name = player.name;

            const createRequest = CreatePlayerRequest.create()
            createRequest.name = newPlayer.name;
            createRequest.player = newPlayer;
            createRequest.player.id = id;

            const createResponse = await client.createPlayer(createRequest);

            return {
                statusCode: 200,
                body: JSON.stringify(createResponse)
            };

        }

    } catch (err) {
        console.error('Error:', err);
        return {
            statusCode: 500,
            body: JSON.stringify({error: 'Error updating/creating player'})
        };
    }

});