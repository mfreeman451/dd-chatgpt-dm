import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { PutCommand, DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";
import { v4 as uuidv4 } from 'uuid';

const client = new DynamoDBClient({
    region: "us-east-1",
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!
    }
});
const docClient = DynamoDBDocumentClient.from(client);

interface Character {
    id: string
    name: string
    race: string
    class: string
    level: number
    alignment: string
    background: string
    strength: number
    dexterity: number
    constitution: number
    intelligence: number
    wisdom: number
    charisma: number
    hitPoints: number
    temporaryHitPoints: number
    maxHitPoints: number
    armorClass: number
    proficiencyBonus: number
    skills: string[]
    savingThrows: string[]
    languages: string[]
    equipment: string[]
    features: string[]
    spells: string[]
    spellSlots: number
    currentSpellSlots: number
    experiencePoints: number
    initiative: number
    speed: number
    hitDice: string
    deathSaves: {
        successes: number
        failures: number
    }
}

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