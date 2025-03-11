"use client";
import TopNavBar from "@/layout/top-navbar";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { useClickAway } from "react-use";
import noUserProfile from "@/public/svg/blank-profile-picture.svg";
import { IoShareSocialOutline } from "react-icons/io5";
import { FiEdit2 } from "react-icons/fi";
import { LuSquareUser, LuUserRound } from "react-icons/lu";
import { MdTimeline } from "react-icons/md";
import { CgClose } from "react-icons/cg";

export default function UserProfile() {
    const [sideMenuOpen, setSideMenuOpen] = useState(false);
    const sideMenuOpenRef = useRef<HTMLDivElement>(null);
    useClickAway(sideMenuOpenRef, () => setSideMenuOpen(false));
    const [activeTab, setActiveTab] = useState<"about-me" | "timeline">("about-me");

    return (
        <div>
            <TopNavBar />
            <div className="flex flex-col items-center justify-center gap-4 bg-[linear-gradient(-10deg,_rgb(var(--primary),0.8)_65%,_rgb(var(--complementary),0.5)_100%),url('/image/job-hero-office-group-team.jpg')] bg-cover bg-center px-4 py-10 text-light shadow md:min-h-72 md:py-16">
                <h3 className="text-xl font-bold md:text-3xl">My Profile</h3>
            </div>

            <div className="container">
                <div className="">
                    <div className="flex items-center justify-between px-3 py-10">
                        <button
                            onClick={() => setSideMenuOpen(!sideMenuOpen)}
                            className="btn-white flex w-fit items-center justify-center gap-2 py-1 text-sm lg:hidden"
                        >
                            Profile
                            <LuSquareUser />
                        </button>

                        <div className="ml-auto flex gap-3">
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
                </div>

                <div className="relative grid gap-12 px-3 pb-6 lg:grid-cols-12">
                    {/* SIDE AREA */}
                    <div
                        ref={sideMenuOpenRef}
                        className={`${sideMenuOpen ? "translate-x-0" : "-translate-x-full"} fixed left-0 top-0 z-10 h-full overflow-y-auto rounded-md border border-textcolor/25 bg-secondary p-3 py-8 backdrop-blur md:bg-secondary/75 lg:relative lg:col-span-4 lg:inline-block lg:translate-x-0`}
                    >
                        <div className="flex flex-col items-center justify-center gap-4">
                            <div className="flex w-full items-center justify-end lg:hidden">
                                <button
                                    onClick={() => setSideMenuOpen(!sideMenuOpen)}
                                    className="btn w-fit border border-light bg-light/25 p-2 text-lg font-semibold text-light"
                                >
                                    <CgClose />
                                </button>
                            </div>
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

                            <hr className="w-full border border-light/25" />

                            <div className="flex flex-col gap-4">
                                <div className="">
                                    <h4 className="font-semibold">Biography</h4>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                                        dolor eum modi explicabo hic libero deleniti odio? Quaerat
                                        quo non in similique eligendi impedit deleniti cum! Quis
                                        maxime delectus beatae.
                                    </p>
                                </div>

                                <div className="grid grid-cols-2 gap-x-4 gap-y-8 md:gap-x-2">
                                    <div className="">
                                        <h4 className="font-semibold">Gender</h4>
                                        <p>Male</p>
                                    </div>

                                    <div className="">
                                        <h4 className="font-semibold">Username</h4>
                                        <p>Jasperlulu</p>
                                    </div>

                                    <div className="">
                                        <h4 className="font-semibold">Date of Birth</h4>
                                        <p>Apr 12 1990</p>
                                    </div>

                                    <div className="">
                                        <h4 className="font-semibold">Nationality</h4>
                                        <p>South Korea</p>
                                    </div>

                                    <div className="">
                                        <h4 className="font-semibold">Joined On</h4>
                                        <p>Apr 12 1990</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* MAIN AREA */}
                    <div className="h-full w-full rounded-md md:border md:p-3 lg:col-span-8">
                        <div className="flex flex-wrap items-center gap-4 text-sm">
                            <button
                                onClick={() => setActiveTab("about-me")}
                                className={`flex items-center gap-3 rounded-t-md border-b-2 border-primary px-2.5 py-1.5 active:scale-95 ${activeTab === "about-me" && "bg-secondary/25"}`}
                            >
                                <LuUserRound />
                                <p>About Me</p>
                            </button>
                            <button
                                onClick={() => setActiveTab("timeline")}
                                className={`flex items-center gap-3 rounded-t-md border-b-2 border-primary px-2.5 py-1.5 active:scale-95 ${activeTab === "timeline" && "bg-secondary/25"}`}
                            >
                                <MdTimeline />
                                <p>Timeline</p>
                            </button>
                        </div>

                        <div className="">
                            <AboutMeTab />
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
                            consequuntur sed saepe molestias dolor nihil dignissimos necessitatibus!
                            Eos repellat quisquam, iusto perspiciatis nihil autem consequatur quos
                            esse quod fuga quidem?
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function AboutMeTab() {
    return (
        <div>
            <div className="mt-8 flex flex-col gap-6">
                {/*  */}
                <div className="flex flex-col gap-4 rounded-md border-y px-2 py-6">
                    <h4 className="text-base font-semibold">Basic Information</h4>
                    <div className="grid grid-cols-1 gap-y-6 md:grid-cols-3">
                        <div className="font-semibold">
                            <h4 className="text-textcolor/75">Years of Experience</h4>
                            <p>5 Years</p>
                        </div>
                        <div className="font-semibold">
                            <h4 className="text-textcolor/75">Phone</h4>
                            <p>+51 902 258 5395</p>
                        </div>
                        <div className="font-semibold">
                            <h4 className="text-textcolor/75">2nd Phone</h4>
                            <p>--</p>
                        </div>
                        <div className="font-semibold">
                            <h4 className="text-textcolor/75">Email</h4>
                            <p className="text-wrap">johnsmilga@gmail.com</p>
                        </div>
                        <div className="font-semibold">
                            <h4 className="text-textcolor/75">Website</h4>
                            <p>johnsmilga.netlify.app</p>
                        </div>
                        <div className="font-semibold">
                            <h4 className="text-textcolor/75">Address</h4>
                            <p>1904 Old kingly road fast street</p>
                        </div>
                    </div>
                </div>
                {/*  */}
                {/*  */}
                <div className="flex flex-col gap-4 rounded-md border-y px-2 py-6">
                    <h4 className="text-base font-semibold">Professional Skills</h4>
                    <div className="flex flex-wrap gap-x-3 gap-y-6">
                        <div className="flex items-center gap-2 rounded-2xl border border-primary/75 bg-secondary/25 px-2 py-1 text-sm">
                            <p>Communication</p>
                            <div className={`h-3 w-3 rounded-full border-primary bg-success`} />
                        </div>
                        <div className="flex items-center gap-2 rounded-2xl border border-primary/75 bg-secondary/25 px-2 py-1 text-sm">
                            <p>Communication</p>
                            <div className={`h-3 w-3 rounded-full border-primary bg-success`} />
                        </div>
                        <div className="flex items-center gap-2 rounded-2xl border border-primary/75 bg-secondary/25 px-2 py-1 text-sm">
                            <p>Communication</p>
                            <div className={`h-3 w-3 rounded-full border-primary bg-success`} />
                        </div>
                        <div className="flex items-center gap-2 rounded-2xl border border-primary/75 bg-secondary/25 px-2 py-1 text-sm">
                            <p>Communication</p>
                            <div className={`h-3 w-3 rounded-full border-primary bg-success`} />
                        </div>
                        <div className="flex items-center gap-2 rounded-2xl border border-primary/75 bg-secondary/25 px-2 py-1 text-sm">
                            <p>Communication</p>
                            <div className={`h-3 w-3 rounded-full border-primary bg-success`} />
                        </div>
                    </div>
                </div>
                {/*  */}
            </div>
        </div>
    );
}
