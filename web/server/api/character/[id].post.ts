import {
    GetPlayerRequest,
    GetPlayerResponse,
    CreatePlayerRequest,
    CreatePlayerResponse,
    UpdatePlayerRequest,
    UpdatePlayerResponse,
    Player
} from '~/pb/game/game_pb';

import { GameClient } from '~/pb/game/game_grpc_web_pb';

const client = new GameClient('http://localhost:8080');

export default defineEventHandler(async (event) => {

    const player: Player = await readBody(event);

    if (!event.context.params) {
        return {
            statusCode: 400,
            body: JSON.stringify({ error: 'No ID provided'})
        };
    }

    const id = event.context.params.id;

    const request = new GetPlayerRequest();
    request.setPlayerid(id);

    try {

        const getResponse = await new Promise<GetPlayerResponse>(
            (resolve, reject) => {
                client.getPlayer(
                    request,
                    {},
                    (err: any, response: GetPlayerResponse) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(response);
                        }
                    }
                );
            }
        );

        const existingPlayer = getResponse.getPlayer();

        if (existingPlayer) {

            // Check for duplicate Discord ID
            if (existingPlayer.getDiscord() === player.getDiscord()) {
                return {
                    statusCode: 400,
                    body: JSON.stringify({ error: 'Duplicate Discord ID'})
                };
            }

            // Update existing player
            existingPlayer.setId(id);
            existingPlayer.setDiscord(player.getDiscord());
            existingPlayer.setName(player.getName());

            const updateRequest = new UpdatePlayerRequest();
            updateRequest.setPlayerId(id);
            updateRequest.setPlayer(existingPlayer);

            const updateResponse = await new Promise<UpdatePlayerResponse>(
                (resolve, reject) => {
                    client.updatePlayer(
                        updateRequest,
                        {},
                        (err: any, response: UpdatePlayerResponse) => {
                            if (err) {
                                reject(err);
                            } else {
                                resolve(response);
                            }
                        }
                    );
                }
            );

            return {
                statusCode: 200,
                body: JSON.stringify(updateResponse.toObject())
            };

        } else {

            // Create new player
            const newPlayer = new Player();
            newPlayer.setId(id);
            newPlayer.setDiscord(player.getDiscord());
            newPlayer.setName(player.getName());

            const createRequest = new CreatePlayerRequest();
            createRequest.setName(newPlayer.getName());

            const createResponse = await new Promise<CreatePlayerResponse>(
                (resolve, reject) => {
                    client.createPlayer(
                        createRequest,
                        {},
                        (err: any, response: CreatePlayerResponse) => {
                            if (err) {
                                reject(err);
                            } else {
                                resolve(response);
                            }
                        }
                    );
                }
            );

            return {
                statusCode: 200,
                body: JSON.stringify(createResponse.toObject())
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