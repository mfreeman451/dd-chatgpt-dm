import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { PutCommand, DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";
import { v4 as uuidv4 } from 'uuid';
import {Character} from "~/types/character";

const client = new DynamoDBClient({
    region: "us-east-1",
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!
    }
});
const docClient = DynamoDBDocumentClient.from(client);

export default defineEventHandler(async (event) => {
    const character: Character = await readBody(event)
    character.id = uuidv4()

    const params = {
        TableName: process.env.TABLE_NAME,
        Item: character
    }
    const command = new PutCommand(params)

    const response = await docClient.send(command)
    console.log(response)

    return {
        statusCode: 200,
        body: JSON.stringify(response)
    }
})