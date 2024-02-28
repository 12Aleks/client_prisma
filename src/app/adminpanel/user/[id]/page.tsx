import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

type Props = {
    params: {
        id: string;
    };
};

const Backend_URL = process.env.NEXT_PUBLIC_BACKEND_NAME;
const ProfilePage = async (props: Props) => {
    const session = await getServerSession(authOptions);

    console.log(props.params.id)

    const response = await fetch(Backend_URL + `/api/user/${props.params.id}`, {
        method: "GET",
        headers: {
            authorization: `Bearer ${session?.backendTokens.accessToken}`,
            "Content-Type": "application/json",
        },
    });
    // console.log({ response });
    const user = await response.json();

    return (
        <div className="m-2 border rounded shadow overflow-hidden">
            <div className="p-2 bg-gradient-to-b from-white to-slate-200 text-slate-600 text-center">
                User Profile
            </div>

            <div className="grid grid-cols-2  p-2 gap-2">
                <p className="p-2 text-slate-400">Name:</p>
                <p className="p-2 text-slate-950">{user.name}</p>
                <p className="p-2 text-slate-400">Email:</p>
                <p className="p-2 text-slate-950">{user.email}</p>
            </div>
        </div>
    );
};

export default ProfilePage;