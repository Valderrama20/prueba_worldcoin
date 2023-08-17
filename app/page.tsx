import NextAuth  from "next-auth"

export default NextAuth  ({
    providers: [
        {
            id: "worldcoin",
            name: "worldcoin",
            type: "oauth",
            wellKnown: "https://id.worldcoin.org/.well-known/openid-configuration",
            idToken: true,
            clientId: process.env.WLD_CLIENT_ID,
            clientSecret: process.env.WLD_CLIENT_SECRET,
            profile(profile){
                return {
                    id: profile.sub,
                    credential_type: profile["https://id.worldcoin.org/beta"].credential_type,
                }
            },
        }
    ],
})