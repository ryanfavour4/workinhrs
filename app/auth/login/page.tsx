"use client";
import React, { useState } from "react";
import logo from "@/public/image/logo.png";
import bgImage from "@/public/image/people-business-meeting-high-angle.jpg";
import googleIcon from "@/public/svg/icons8-google.svg";
import Image from "next/image";
import { IInputState } from "@/components/input/useInput";
import Input from "@/components/input";
import Link from "next/link";

const Login = () => {
    const [email, setEmail] = useState<IInputState>({ value: "" });
    const [password, setPassword] = useState<IInputState>({ value: "" });

    return (
        <div className="flex w-full flex-col justify-center md:flex-row">
            <div className="order-2 w-1/2">
                <Image
                    src={bgImage}
                    alt="loginbg"
                    className="hidden h-screen object-cover md:block"
                />
            </div>
            <form action="" className="h-screen w-full bg-white p-10 md:w-1/2 md:max-w-md">
                <div className="flex flex-col gap-3">
                    <Image
                        width={70}
                        height={70}
                        src={logo}
                        alt="Logo"
                        className="flex flex-col items-center justify-center"
                    />
                    <div className="flex flex-col gap-1 pb-2">
                        <h1 className="text-3xl font-bold text-primary">Welcome back!</h1>
                        <p>Get latest updates on job openings</p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="username" className="font-semibold">
                            Email Address
                        </label>
                        <Input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            required
                            state={email}
                            setState={setEmail}
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="username" className="font-semibold">
                            Password
                        </label>
                        <Input
                            type="password"
                            name="password"
                            placeholder="Must be 8 characters long"
                            required
                            state={password}
                            setState={setPassword}
                        />
                    </div>
                    <div className="flex items-center justify-between pt-3 text-xs">
                        <div className="flex items-center justify-center gap-1">
                            <input type="checkbox" />
                            <p>Remember me</p>
                        </div>

                        <a href="#">Forgot Password?</a>
                    </div>

                    <button type="submit" className="btn-primary mt-3">
                        Login
                    </button>
                    <div className="flex items-center justify-center gap-1">
                        <hr className="w-full" />
                        <p className="flex-nowrap text-nowrap text-xs"> Or</p>
                        <hr className="w-full" />
                    </div>
                    <div className="mt-2 flex cursor-pointer items-center justify-center gap-1 rounded-md border border-gray-300 p-2">
                        <Image src={googleIcon} alt="Google Icon" width={20} height={20} />
                        <p>Continue with Google</p>
                    </div>
                    <div className="flex items-center justify-center text-sm">
                        <p className="font-bold text-black">Don&apos;t have an account?</p>
                        <Link
                            className="pl-1 font-bold text-primary underline"
                            href="/auth/register"
                        >
                            Register here
                        </Link>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;
