import Image from "next/image";
import React from "react";
import logo from "@/public/image/logo.png";
import Link from "next/link";

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

                <div className="flex items-center justify-center gap-4">
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
            </div>
        </div>
    );
}
