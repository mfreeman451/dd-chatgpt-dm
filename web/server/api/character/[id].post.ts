import { DynamoDBClient, QueryCommand } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, GetCommand, PutCommand } from "@aws-sdk/lib-dynamodb";
import { v4 as uuidv4 } from 'uuid';
import {Character} from "~/types/character";

const client = new DynamoDBClient({
    region: process.env.AWS_REGION,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!
    }
});
const docClient = DynamoDBDocumentClient.from(client);

export default defineEventHandler(async (event) => {
    const character: Character = await readBody(event)
    if (event.context.params) {
        if (!event.context.params.id) {
            character.id = uuidv4()
        }
    }

    // Check if a user with the same Discord ID already exists
    const queryParams = {
        TableName: process.env.TABLE_NAME,
        IndexName: 'discord-index', // replace with your secondary index name
        KeyConditionExpression: 'discord = :discord',
        ExpressionAttributeValues: {
            ':discord': { S: character.discord } // use { S: character.discord } instead of character.discord
        }
    }
    const queryCommand = new QueryCommand(queryParams)
    const queryResult = await docClient.send(queryCommand)

    if (queryResult.Items && queryResult.Items.length > 0) {
        return {
            statusCode: 400,
            body: JSON.stringify({ error: 'A user with this Discord ID already exists' })
        }
    }

    const putParams = {
        TableName: process.env.TABLE_NAME,
        Item: character
    }
    const putCommand = new PutCommand(putParams)

    const response = await docClient.send(putCommand)

    return {
        statusCode: 200,
        body: JSON.stringify(response)
    }
})
