'use client';
import Link from "next/link";
import React from "react";
import SignInButton from "./SignInButton";

const AppBar = () => {
    return (
        <header className="flex gap-4 p-4 bg-gradient-to-b from-white to-gray-200 shadow">
            <Link className="transition-colors hover:text-blue-500 pt-2 pb-2"
                  href={"/"}>
                Home Page
            </Link>
            <Link
                className="transition-colors hover:text-blue-500 pt-2 pb-2"
                href={"/adminpanel"}
            >
                Admin panel
            </Link>
            <SignInButton />
        </header>
    );
};

export default AppBar;