export default defineEventHandler(async (event) => {
    if (!event.context.params) {
        return {
            statusCode: 400,
            body: JSON.stringify({
                error: 'Missing id'
            })
        }
    }
    const id = event.context.params.id as string;
    let url = `https://discord.com/api/users/${id}`
    const response = await fetch(url, {
        headers: {
            'Authorization': `Bot ${process.env.DISCORD_AUTH_TOKEN}`
        }
    })

    const data = await response.json()

    if (data.message === 'Unknown User') {
        return {
            statusCode: 404,
            body: JSON.stringify({
                error: 'Unknown Discord user'
            })
        }
    }

    // return status code 200 and data
    return {
        statusCode: 200,
        body: JSON.stringify(data)
    }
})
