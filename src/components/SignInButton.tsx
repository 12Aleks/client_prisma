"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const SignInButton = () => {
    const { data: session } = useSession();


    if (session && session.user)
        return (
            <div className="flex gap-4 ml-auto items-center">
                <p className="text-sky-600">{session.user.name}</p>
                <Link
                    href={"/api/auth/signout"}
                    className="flex gap-4 ml-auto text-red-600"
                >
                    Sign Out
                </Link>
            </div>
        );

    return (
        <div className="flex gap-4 ml-auto items-center">
            <Link href={"/api/auth/signin"}
                className="flex gap-4 ml-auto text-black-600"
            >
                Sign In
            </Link>
            <Link href={"/signup"}
                className="flex gap-4 ml-auto p-2 rounded-sm tracking-widest text-gray-300 bg-gray-900 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 px-5 py-2.5 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
                Sign Up
            </Link>
        </div>
    );
};

export default SignInButton;