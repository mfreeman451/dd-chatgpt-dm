import { GrpcWebFetchTransport } from "@protobuf-ts/grpcweb-transport";
import {GameClient} from "~/pb/game.client";
import {GetPlayerRequest } from "~/pb/game";

const transport = new GrpcWebFetchTransport({
        baseUrl: 'http://localhost:8080',
    }
);

const client = new GameClient(transport);

export default defineEventHandler(async (event) => {
    if (!event.context.params) {
        return {
            statusCode: 400,
            body: JSON.stringify({ error: 'No ID provided' }),
        };
    }

    const id = event.context.params.id;
    const request = GetPlayerRequest.create({playerId: id})

    try {

        const response = await client.getPlayer(request);
        if (response.response.player) {
            // const player= response.getPlayer();
            const player = response.response.player;
            return {
                statusCode: 200,
                // @ts-ignore
                body: JSON.stringify(player.toObject()),
            };
        } else {
            return {
                statusCode: 404,
                body: JSON.stringify({ error: `Character with id ${id} not found` }),
            };
        }
    } catch (err) {
        console.error('Caught error:', err);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: `An error occurred while fetching character with id ${id}` }),
        };
    }
});
