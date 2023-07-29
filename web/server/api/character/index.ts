
import * as pb from '~/proto/game_pb';
import * as grpcWeb from '~/proto/game_grpc_pb';
import * as grpc from '@grpc/grpc-js';

const client = new grpcWeb.GameClient('http://localhost:8080', grpc.credentials.createInsecure() );

export default defineEventHandler(async () => {

    try {

        const request = new pb.ListPlayersRequest();

        const md = new grpc.Metadata();

        const response = await new Promise<pb.ListPlayersResponse>(
            (resolve, reject) => {
                 client.listPlayers(request, md,
                    (err: any, response: any) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(response);
                        }
                    }
                );
            }
        );

        const players = response.getPlayersList();

        return {
            statusCode: 200,
            body: JSON.stringify(players)
        };

    } catch (err) {
        console.error(err);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Error fetching players' })
        };
    }

});