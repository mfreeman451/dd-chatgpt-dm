import { GameClient } from '~/pb/game/game_grpc_web_pb';
import {ListPlayersRequest, ListPlayersResponse} from "~/pb/game/game_pb";

const client = new GameClient('http://localhost:8080');

export default defineEventHandler(async () => {

    try {

        const request = new ListPlayersRequest();

        const response = await new Promise<ListPlayersResponse>(
            (resolve, reject) => {
                client.listPlayers(request, {},
                    (err: any, response: ListPlayersResponse) => {
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