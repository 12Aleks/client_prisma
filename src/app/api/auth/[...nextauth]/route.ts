import {NextAuthOptions} from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import {JWT} from "next-auth/jwt";

const Backend_URL = process.env.NEXT_PUBLIC_BACKEND_NAME;
const secret = process.env.NEXT_AUTH_SECRET;

//refresh token function
async function refreshToken(token: JWT):Promise<JWT>{
    const res = await fetch(Backend_URL + "/api/auth/refresh", {
        method: "POST",
        headers: {
            authorization: `Refresh ${token.backendTokens.refreshToken}`
        }
    });

    const response = await res.json();
    console.log('Refresh')
    return {
        ...token,
        backendTokens: response
    }
}

export const authOptions: NextAuthOptions = {
    // Without secret don't work!!! (any long code)
    secret: secret,
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: { label: "Username", type: "text", placeholder: "jsmith"},
                password: { label: "Password", type: "password" },
            },

            async authorize(credentials, req) {
                if (!credentials?.username || !credentials?.password) return null;
                const { username, password } = credentials;
                const res = await fetch(Backend_URL + "/api/auth/login", {
                    method: "POST",
                    body: JSON.stringify({
                        username,
                        password,
                    }),
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
                if (res.status == 401) {
                    console.log(res.statusText);
                    return null;
                }
                const user = await res.json();
                return user;
            },
        }),
    ],




    callbacks: {
        async session({ token, session }) {
            session.user = token.user;
            session.backendTokens = token.backendTokens;

            return session;
        },

        async jwt({ token, user }) {
            if (user) return { ...token, ...user };
            if(new Date().getTime() < token.backendTokens.expiresIn) return token;

            //the access token is checked and its time is updated
            return await refreshToken(token)
        },

    }
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };



