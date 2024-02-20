"use client";
import {SessionProvider} from "next-auth/react";
import {ReactNode} from "react";

interface IProps{
    children: ReactNode
}

const Providers = ({children}: IProps) => {
    return <SessionProvider>{children}</SessionProvider>
}

export default Providers