import * as pb from '~/proto/game_pb';
import * as grpcWeb from '~/proto/game_grpc_pb';
import * as grpc from '@grpc/grpc-js';

const client = new grpcWeb.GameClient('http://localhost:8080', grpc.credentials.createInsecure() );

export default defineEventHandler(async (event) => {

    const player: pb.Player = await readBody(event);

    if (!event.context.params) {
        return {
            statusCode: 400,
            body: JSON.stringify({ error: 'No ID provided'})
        };
    }

    const id = event.context.params.id;

    const request = new pb.GetPlayerRequest();
    request.setPlayerid(id);

    try {

        const getResponse = await new Promise<pb.GetPlayerResponse>(
            (resolve, reject) => {
                client.getPlayer(
                    request,
                    (err: any, response: pb.GetPlayerResponse) => {
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

            const updateRequest = new pb.UpdatePlayerRequest();
            updateRequest.setPlayerId(id);
            updateRequest.setPlayer(existingPlayer);

            const updateResponse = await new Promise<pb.UpdatePlayerResponse>(
                (resolve, reject) => {
                    client.updatePlayer(
                        updateRequest,
                        (err: any, response: pb.UpdatePlayerResponse) => {
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
            const newPlayer = new pb.Player();
            newPlayer.setId(id);
            newPlayer.setDiscord(player.getDiscord());
            newPlayer.setName(player.getName());

            const createRequest = new pb.CreatePlayerRequest();
            createRequest.setName(newPlayer.getName());

            const createResponse = await new Promise<pb.CreatePlayerResponse>(
                (resolve, reject) => {
                    client.createPlayer(
                        createRequest,
                        (err: any, response: pb.CreatePlayerResponse) => {
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