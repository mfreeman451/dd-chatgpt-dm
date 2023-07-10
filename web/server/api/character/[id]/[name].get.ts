import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { GetCommand } from "@aws-sdk/lib-dynamodb";
import { unmarshall } from "@aws-sdk/util-dynamodb";
import { Character } from "~/types/character";

const client = new DynamoDBClient({
    region: process.env.AWS_REGION,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!
    }
});

export default defineEventHandler(async (event) => {
    if (!event.context.params) {
        return {
            statusCode: 400,
            body: JSON.stringify({ error: 'No ID provided' })
        }
    }
    const id = event.context.params.id as string;
    const name = event.context.params.name as string;
    const params = {
        TableName: process.env.TABLE_NAME,
        Key: {
            id: { S: id },
            name: { S: name }
        }
    }
    const command = new GetCommand(params)

    try {
        const data = await client.send(command)
        if (data.Item) {
            const item = unmarshall(data.Item) as Character
            return {
                statusCode: 200,
                body: JSON.stringify(item)
            }
        } else {
            return {
                statusCode: 404,
                body: JSON.stringify({ error: `Character with id ${id} not found` })
            }
        }
    } catch (err) {
        console.error(err)
        return {
            statusCode: 500,
            body: JSON.stringify({ error: `An error occurred while fetching character with id ${id}` })
        }
    }
})
