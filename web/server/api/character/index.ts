import { DynamoDBClient, ScanCommand } from "@aws-sdk/client-dynamodb";
import { unmarshall } from "@aws-sdk/util-dynamodb";

const client = new DynamoDBClient({
    region: process.env.AWS_REGION,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!
    }
});

export default defineEventHandler(async () => {
    const params = {
        TableName: process.env.TABLE_NAME
    }
    const command = new ScanCommand(params)

    try {
        const data = await client.send(command)
        const items = data.Items ? data.Items.map(item => unmarshall(item)) : [];

        return {
            statusCode: 200,
            body: JSON.stringify(items)
        }
    } catch (err) {
        console.error(err)
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'An error occurred while fetching characters' })
        }
    }
})
