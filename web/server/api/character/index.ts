import { ListPlayersRequest } from '~/pb/game';
import { GrpcWebFetchTransport } from "@protobuf-ts/grpcweb-transport";
import {GameClient} from "~/pb/game.client";
import {response} from "express";

const transport = new GrpcWebFetchTransport({
    baseUrl: 'http://localhost:8080',
    }
);

const client = new GameClient(transport)
export default defineEventHandler(async () => {

    try {

        const request = ListPlayersRequest.create({});
        const response = await client.listPlayers(request);
        const players = response.response.players;

        console.log("Res", response)

        return {
            statusCode: 200,
            body: JSON.stringify(players)
        };

    } catch (err) {
        console.error(err);
        let errMsg = "Error fetching players: " + err;
        return {
            statusCode: 500,
            // body: JSON.stringify({ error: `Error fetching players:` })
            body: JSON.stringify({ error: errMsg })
        };
    }

});
