// file: ~/server/api/auth/[...].ts
import GithubProvider from 'next-auth/providers/github'
import { NuxtAuthHandler } from '#auth'

export default NuxtAuthHandler({
    secret: process.env.AUTH_SECRET,
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_CLIENT_ID ? process.env.GITHUB_CLIENT_ID : '',
            clientSecret: process.env.GITHUB_CLIENT_SECRET ? process.env.GITHUB_CLIENT_SECRET : '',
        })
    ]
})