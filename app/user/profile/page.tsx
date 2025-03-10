"use client";
import TopNavBar from "@/layout/top-navbar";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { useClickAway } from "react-use";
import noUserProfile from "@/public/svg/blank-profile-picture.svg";
import { IoShareSocialOutline } from "react-icons/io5";
import { FiEdit2 } from "react-icons/fi";

export default function UserProfile() {
    const [sideMenuOpen, setSideMenuOpen] = useState(false);
    const sideMenuOpenRef = useRef<HTMLDivElement>(null);
    useClickAway(sideMenuOpenRef, () => setSideMenuOpen(false));

    return (
        <div>
            <TopNavBar />
            <div className="flex flex-col items-center justify-center gap-4 bg-[linear-gradient(-10deg,_rgb(var(--primary),0.8)_65%,_rgb(var(--complementary),0.5)_100%),url('/image/job-hero-office-group-team.jpg')] bg-cover bg-center px-4 py-10 text-light shadow md:min-h-72 md:py-16">
                <h3 className="text-xl font-bold md:text-3xl">My Profile</h3>
            </div>

            <div className="container">
                <div className="">
                    <div className="flex justify-end gap-3 py-10">
                        <button className="btn-white flex w-fit items-center justify-center gap-2 py-1 text-sm">
                            Edit
                            <FiEdit2 />
                        </button>
                        <button className="btn-white flex w-fit items-center justify-center gap-2 py-1 text-sm">
                            Share
                            <IoShareSocialOutline />
                        </button>
                    </div>
                </div>

                <div className="relative grid gap-12 px-3 pb-6 lg:grid-cols-12">
                    <div
                        ref={sideMenuOpenRef}
                        className={`${sideMenuOpen ? "translate-x-0" : "-translate-x-full"} fixed left-0 top-0 z-10 h-full overflow-y-auto rounded-md border border-textcolor/25 bg-secondary p-3 py-8 md:bg-secondary/75 lg:relative lg:col-span-4 lg:inline-block lg:translate-x-0`}
                    >
                        <div className="flex flex-col items-center justify-center gap-4">
                            <Image
                                className="mx-auto aspect-square rounded-full border border-primary"
                                width={80}
                                height={80}
                                alt="user profile"
                                src={noUserProfile}
                            />
                            <div className="flex flex-col items-center justify-center text-center">
                                <h4 className="text-lg font-bold text-primary">Johnson Smilga</h4>
                                <h4 className="text-base">Data Analyst</h4>
                            </div>
                        </div>
                    </div>

                    <div className="h-full w-full rounded-md md:border md:p-3 lg:col-span-8">
                        <div className="flex flex-wrap items-center justify-between">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis officiis
                            enim laudantium, pariatur totam facere doloribus asperiores voluptates
                            delectus facilis.
                        </div>

                        <div className="mt-10 flex flex-col gap-6">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus, modi
                            commodi tempora perferendis dolorum iste architecto quisquam, soluta
                            numquam voluptate obcaecati mollitia eveniet repellendus tenetur quis
                            eligendi quibusdam unde labore?
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
