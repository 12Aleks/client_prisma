"use client";
import React, {useRef} from 'react';
import { Button } from "@/components/Button";
import InputBox from "@/components/InputBox";
import Link from "next/link";

type FormInputs = {
    name: string;
    email: string;
    password: string;
};

const Backend_URL = process.env.NEXT_PUBLIC_BACKEND_NAME;
const SignUpPage = () => {

    const register = async () => {

        const res = await fetch(Backend_URL + "/api/auth/registration", {
            method: "POST",
            body: JSON.stringify({
                name: data.current.name,
                email: data.current.email,
                password: data.current.password,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        });


        if (!res.ok) {
            alert(res.statusText);
            return;
        }
        const response = await res.json();
        alert("User Registered!");

    };


    const data = useRef<FormInputs>({
        name: "",
        email: "",
        password: "",
    });


    return (
        <div className="signUpFormWrapper">
        <div className="m-2 border rounded overflow-hidden shadow signUpForm">
            <div className="tracking-widest p-2 bg-gray-900 to-slate-200 text-gray-300">
                Sign up
            </div>
            <div className="p-5 flex flex-col gap-6">
                <InputBox
                    autoComplete="off"
                    name="name"
                    labelText="Name"
                    required
                    onChange={(e) => (data.current.name = e.target.value)}
                />
                <InputBox
                    name="email"
                    labelText="Email"
                    required
                    onChange={(e) => (data.current.email = e.target.value)}
                />
                <InputBox
                    name="password"
                    labelText="Password"
                    type="password"
                    required
                    onChange={(e) => (data.current.password = e.target.value)}
                />
                <div className="flex justify-center items-center gap-2">
                    <Button onClick={register} className="rounded-sm tracking-widest text-gray-300 bg-gray-900 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 px-5 py-2.5 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Submit</Button>
                    <Link className="text-gray-300 tracking-widest pl-3" href={"/"}>
                        Cancel
                    </Link>
                </div>
            </div>
        </div>
        </div>
    );
};

export default SignUpPage;