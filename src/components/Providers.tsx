"use client";
import {SessionProvider} from "next-auth/react";
import {ReactNode} from "react";
import { Session } from "next-auth";

type Props = {
    children: ReactNode;
};

const Providers = ({children}: Props) => {
    return <SessionProvider>{children}</SessionProvider>
}

export default Providers