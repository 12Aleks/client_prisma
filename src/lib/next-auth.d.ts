import NextAuth from "next-auth";

//we change the type format to the format that we receive from the server
declare module "next-auth" {
    interface Session {
        user: {
            id: number;
            email: string;
            name: string;
        };

        backendTokens: {
            accessToken: string;
            refreshToken: string;
            expiresIn: number;
        };
    }
}

import {JWT} from "next-auth/jwt";

declare module "next-auth/jwt" {
    interface JWT {
        user: {
            id: number;
            email: string;
            name: string;
        };

        backendTokens: {
            accessToken: string;
            refreshToken: string;
            expiresIn: number;
        };
    }
}