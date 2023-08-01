import { GrpcWebFetchTransport } from "@protobuf-ts/grpcweb-transport";
import { GameClient } from "~/pb/game.client";
import {
    UpdatePlayerRequest,
    GetPlayerRequest,
    Player
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

    try {
        const getRequest = GetPlayerRequest.create({
            playerId: id
        });

        let getResponse;

        try {
            getResponse = await client.getPlayer(getRequest);
        } catch(err: any) {
        }

        // this should be moved to [id].put.ts
        const existingPlayer = getResponse?.response.player;

        if (existingPlayer) {

            const playerObj = Object.assign({}, player);
            const updateRequest = UpdatePlayerRequest.create()
            updateRequest.player = Player.create(playerObj);

            // Update existing player
            existingPlayer.id = id;
            existingPlayer.discord = player.discord;
            existingPlayer.name = player.name;

            const updateResponse = await client.updatePlayer(updateRequest);

            return {
                statusCode: 200,
                body: updateResponse.response,
            };
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