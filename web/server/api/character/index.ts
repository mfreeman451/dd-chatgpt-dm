import * as pb from '~/pb/game/game_pb';
import * as grpcWeb from '~/pb/game/game_grpc_web_pb';

const client = new grpcWeb.GameClient('http://localhost:8080');

export default defineEventHandler(async () => {

    try {

        const request = new pb.ListPlayersRequest();

        const response = await new Promise<pb.ListPlayersResponse>(
            (resolve, reject) => {
                client.listPlayers(request, {},
                    (err: any, response: pb.ListPlayersResponse) => {
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