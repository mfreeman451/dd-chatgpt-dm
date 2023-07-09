export default defineEventHandler(async (event) => {
    const { discordId } = await readBody(event)
    console.log("discordId: ", discordId)

    let url = `https://discord.com/api/users/${discordId}`
    console.log("url: ", url)

    const response = await fetch(url, {
        headers: {
            'Authorization': `Bot ${process.env.DISCORD_BOT_TOKEN}`
        }
    })

    return await response.json()
})
