import Image from "next/image";
import React from "react";
import logo from "@/public/image/logo.png";
import Link from "next/link";
import { getInitials } from "@/utils/get-initials";

export default function TopNavBar() {
    return (
        <div className="shadow">
            <div className="item-center container flex w-full justify-between px-2 py-2">
                <Link href={"/"} className="w-fit">
                    <Image
                        className="w-14 md:w-20"
                        width={400}
                        height={200}
                        src={logo}
                        alt="logo"
                    />
                </Link>

                <div className="hidden flex-col items-center justify-center md:flex">
                    <ul className="flex items-center justify-center gap-5 font-medium text-primary">
                        <li>
                            <Link className="hover:font-semibold hover:underline" href={"#"}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link className="hover:font-semibold hover:underline" href={"/"}>
                                Jobs
                            </Link>
                        </li>
                        <li>
                            <Link className="hover:font-semibold hover:underline" href={"#"}>
                                Companies
                            </Link>
                        </li>
                        <li>
                            <Link className="hover:font-semibold hover:underline" href={"#"}>
                                About
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="flex items-center justify-center gap-4">
                    <div className="hidden">
                        <Link
                            href={"/auth/login"}
                            className="btn hidden rounded-full px-6 md:inline-block"
                        >
                            Recruiter Login
                        </Link>
                        <Link href={"/auth/login"} className="btn-primary w-fit rounded-full px-10">
                            Login
                        </Link>
                    </div>
                    <Link href={"/user/profile"} className="flex items-center gap-3">
                        <div className="mb-0 flex h-8 w-8 items-center justify-center rounded-full bg-primary pb-0 text-center leading-none text-white">
                            <small className="mb-0 justify-center self-center pb-0 text-center text-xs leading-none text-light">
                                {getInitials(`${"John Smilga"}`)}
                            </small>
                        </div>
                        <h4 className="font-normal">{"John Smilga"}</h4>
                    </Link>
                </div>
            </div>
        </div>
    );
}
