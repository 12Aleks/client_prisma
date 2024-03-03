import React, {ReactNode} from "react";
import Link from "next/link";
import {getServerSession} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";


type Props = {
    children: ReactNode;
};

const AdminPanelLayout = async (props: Props) => {

    const session = await getServerSession(authOptions)

    return (
        <div className="grid grid-cols-12">
            <div className="col-span-1 border-r shadow h-screen p-2">
                <Link href={`/adminpanel/user/${session?.user.id}`}>User profile</Link>
            </div>
            <div className="col-span-11 p-3">
                {props.children}
            </div>
        </div>
    );
};

export default AdminPanelLayout;