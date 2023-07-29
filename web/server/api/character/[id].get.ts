// import gamePB from '~/pb/game/game_pb';
// import gameWebPB from '~/pb/game/game_grpc_web_pb';
// import { GetPlayerRequest, GetPlayerResponse } from '~/pb/game/game_pb';
// import { GameClient } from '~/pb/game/game_grpc_web_pb';

// const { GetPlayerRequest, GetPlayerResponse } = gamePB;
// const { GameClient } = gameWebPB;


import * as pb from '~/proto/game_pb';
import * as grpcWeb from '~/proto/game_grpc_pb';
import * as grpc from '@grpc/grpc-js';

const client = new grpcWeb.GameClient('http://localhost:8080', grpc.credentials.createInsecure() );

export default defineEventHandler(async (event) => {
    if (!event.context.params) {
        return {
            statusCode: 400,
            body: JSON.stringify({ error: 'No ID provided' }),
        };
    }

    const id = event.context.params.id;

    const request = new pb.GetPlayerRequest();
    request.setPlayerid(id)

    try {
        const response = await new Promise<pb.GetPlayerResponse>((resolve, reject) => {
            client.getPlayer(request, (err: any, response: any) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(response);
                }
            });
        });

        if (response.hasPlayer()) {
            const player= response.getPlayer();
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
