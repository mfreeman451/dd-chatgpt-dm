export default defineEventHandler(async (event) => {
    if (!event.context.params) {
        return {
            statusCode: 400,
            body: JSON.stringify({ error: 'No ID provided'})
        };
    }

    const id = event.context.params.id;
    console.log(`ID: ${id}`);

    const body = await readBody(event)
    // return { body }

    return {
        "statusCode": 200,
        body
    }
});