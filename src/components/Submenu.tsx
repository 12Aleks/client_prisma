"use client";
import React from 'react';
import Link from "next/link";
import {useSession} from "next-auth/react";

const Submenu = () => {
    const { data: session } = useSession();

    return (
        <div className="grid-cols-4 border-r shadow h-screen p-2">
            <Link href={`/adminpanel/user/${session?.user.id}`}>User profile</Link>
        </div>
    );
};

export default Submenu;