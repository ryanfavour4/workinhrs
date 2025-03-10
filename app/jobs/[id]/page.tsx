"use client";
import React, { useRef, useState } from "react";
import TopNavBar from "@/layout/top-navbar";
import logo from "@/public/image/logo.png";
import { useClickAway } from "react-use";
import { CiBookmarkPlus, CiLocationOn } from "react-icons/ci";
import { BsBriefcase, BsWallet2 } from "react-icons/bs";
import { IoCheckmarkDone, IoShareSocialOutline, IoTimeOutline } from "react-icons/io5";
import Image from "next/image";
import { FiMoreVertical } from "react-icons/fi";
import { JobCard } from "@/components/job-cards";

export default function JobDetails() {
    const [sideMenuOpen, setSideMenuOpen] = useState(false);
    const sideMenuOpenRef = useRef<HTMLDivElement>(null);
    useClickAway(sideMenuOpenRef, () => setSideMenuOpen(false));

    const handleShare = () => {
        if (navigator.share) {
            navigator.share({
                title: "Job Details",
                text: "Check out this job!",
                url: window.location.href,
            });
        } else {
            // Fallback for browsers that don't support Web Share API
            alert("Web Share API is not supported in this browser.");
        }
    };

    return (
        <div className="">
            <TopNavBar />
            <div className="flex flex-col items-center justify-center gap-4 bg-[linear-gradient(-10deg,_rgb(var(--primary),0.8)_65%,_rgb(var(--complementary),0.5)_100%),url('/image/job-hero-office-group-team.jpg')] bg-cover bg-center px-4 py-10 text-light shadow md:min-h-72 md:py-16">
                <h3 className="text-xl font-bold md:text-3xl">Job Details</h3>
            </div>

            {/* COMPANY HIGHLIGHT */}
            <div className="container pt-6">
                <div className="flex flex-col gap-8 px-5 md:px-6">
                    <div className="flex items-center justify-between">
                        <div className="w-fit rounded-md bg-secondary/45 px-2 py-1 text-xs text-textcolor">
                            10 min ago
                        </div>

                        <div className="flex items-start gap-6 text-textcolor md:gap-10">
                            <IoShareSocialOutline
                                onClick={handleShare}
                                className="cursor-pointer text-2xl"
                            />

                            <CiBookmarkPlus className="cursor-pointer text-2xl" />
                        </div>
                    </div>

                    <div className="mb-6 flex gap-3">
                        <div className="">
                            <Image
                                className="aspect-square h-12 w-12 rounded-full border border-primary/50 object-contain p-1"
                                width={400}
                                height={200}
                                src={logo}
                                alt="logo"
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <h3 className="text-2xl font-semibold tracking-wide">
                                Forward Security Director
                            </h3>
                            <p className="text-sm">Bauch, Schuppe and Schulist Co</p>
                            <a href="#" className="inline w-fit text-sm underline">
                                investinginpeople.com.uk
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-wrap items-center justify-between">
                        <div className="flex flex-wrap items-center gap-5 font-semibold">
                            <div className="flex items-center gap-1.5">
                                <BsBriefcase className="text-base text-primary" />
                                <p className="text-sm text-textcolor/70">Hotels & Tourism</p>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <IoTimeOutline className="text-lg text-primary" />
                                <p className="text-sm text-textcolor/70">Full Time</p>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <BsWallet2 className="text-base text-primary" />
                                <p className="text-sm text-textcolor/70">$100,000.00</p>
                            </div>
                            <div className="flex items-center gap-1">
                                <CiLocationOn className="text-base text-primary" />
                                <p className="text-sm text-textcolor/70">Remote</p>
                            </div>
                        </div>

                        <div className="mt-6 flex w-full items-center justify-between gap-4 md:mt-0 md:w-fit">
                            <button className="btn-primary w-fit px-4 py-2 text-sm">
                                Apply For This Job
                            </button>
                            <button
                                onClick={() => setSideMenuOpen(!sideMenuOpen)}
                                className="btn flex w-fit items-center justify-center px-3 lg:hidden"
                            >
                                <FiMoreVertical className="" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="relative grid gap-12 px-3 py-16 lg:grid-cols-12">
                    <div className="h-full w-full rounded-md md:border md:p-3 lg:col-span-9">
                        <div className="flex flex-col gap-12">
                            {/* JOB DESCRIPTION */}
                            <div className="flex flex-col gap-4">
                                <h4 className="text-xl font-semibold tracking-wide">
                                    Job Description
                                </h4>
                                <p>
                                    Nunc sed a nisl purus. Nibh dis faucibus proin lacus tristique.
                                    Sit congue non vitae odio sit erat in. Felis eu ultrices a sed
                                    massa. Commodo fringilla sed tempor risus laoreet ultricies
                                    ipsum. Habitasse morbi faucibus in iaculis lectus. Nisi enim
                                    feugiat enim volutpat. Sem quis viverra viverra odio mauris
                                    nunc. Et nunc ut tempus duis nisl sed massa. Ornare varius
                                    faucibus nisi vitae vitae cras ornare.
                                    <br />
                                    Cras facilisis dignissim augue lorem amet adipiscing cursus
                                    fames mauris. Tortor amet porta proin in. Orci imperdiet nisi
                                    dignissim pellentesque morbi vitae. Quisque tincidunt metus
                                    lectus porta eget blandit euismod sem nunc. Tortor gravida amet
                                    amet sapien mauris massa.Tortor varius nam maecenas duis blandit
                                    elit sit sit. Ante mauris morbi diam habitant donec.
                                </p>
                            </div>
                            {/* KEY RESPONSIBILITY */}
                            <div className="flex flex-col gap-4">
                                <h4 className="text-xl font-semibold tracking-wide">
                                    Key Responsibilities
                                </h4>
                                <ul className="flex flex-col gap-4">
                                    <li className="flex items-start gap-2 md:gap-4">
                                        <span className="flex h-4 w-4 items-center justify-center rounded-full border border-primary/25 bg-secondary p-px text-center text-light">
                                            <IoCheckmarkDone className="text-md md:text-xl" />
                                        </span>
                                        <p>
                                            Cras facilisis dignissim augue lorem amet adipiscing
                                            cursus fames mauris. Tortor amet porta proin in
                                        </p>
                                    </li>
                                    <li className="flex items-start gap-2 md:gap-4">
                                        <span className="flex h-4 w-4 items-center justify-center rounded-full border border-primary/25 bg-secondary p-px text-center text-light">
                                            <IoCheckmarkDone className="text-md md:text-xl" />
                                        </span>
                                        <p>
                                            Cras facilisis dignissim augue lorem amet adipiscing
                                            cursus fames mauris. Tortor amet porta proin in
                                        </p>
                                    </li>
                                    <li className="flex items-start gap-2 md:gap-4">
                                        <span className="flex h-4 w-4 items-center justify-center rounded-full border border-primary/25 bg-secondary p-px text-center text-light">
                                            <IoCheckmarkDone className="text-md md:text-xl" />
                                        </span>
                                        <p>
                                            Cras facilisis dignissim augue lorem amet adipiscing
                                            cursus fames mauris. Tortor amet porta proin in
                                        </p>
                                    </li>
                                </ul>
                            </div>
                            {/* REQUIREMENT */}
                            <div className="flex flex-col gap-4">
                                <h4 className="text-xl font-semibold tracking-wide">Requirement</h4>
                                <ul className="flex flex-col gap-4">
                                    <li className="flex items-start gap-2 md:gap-4">
                                        <span className="flex h-4 w-4 items-center justify-center rounded-full border border-primary/25 bg-secondary p-px text-center text-light">
                                            <IoCheckmarkDone className="text-md md:text-xl" />
                                        </span>
                                        <p>
                                            Cras facilisis dignissim augue lorem amet adipiscing
                                            cursus fames mauris. Tortor amet porta proin in
                                        </p>
                                    </li>
                                    <li className="flex items-start gap-2 md:gap-4">
                                        <span className="flex h-4 w-4 items-center justify-center rounded-full border border-primary/25 bg-secondary p-px text-center text-light">
                                            <IoCheckmarkDone className="text-md md:text-xl" />
                                        </span>
                                        <p>
                                            Cras facilisis dignissim augue lorem amet adipiscing
                                            cursus fames mauris. Tortor amet porta proin in
                                        </p>
                                    </li>
                                    <li className="flex items-start gap-2 md:gap-4">
                                        <span className="flex h-4 w-4 items-center justify-center rounded-full border border-primary/25 bg-secondary p-px text-center text-light">
                                            <IoCheckmarkDone className="text-md md:text-xl" />
                                        </span>
                                        <p>
                                            Cras facilisis dignissim augue lorem amet adipiscing
                                            cursus fames mauris. Tortor amet porta proin in
                                        </p>
                                    </li>
                                </ul>
                            </div>
                            {/* SKILLS */}
                            <div className="flex flex-col gap-4">
                                <h4 className="text-xl font-semibold tracking-wide">
                                    Professional Skills
                                </h4>
                                <ul className="flex flex-wrap gap-6">
                                    <li className="flex items-start gap-2 md:gap-4">
                                        <span className="flex h-4 w-4 items-center justify-center rounded-full border border-primary/25 bg-secondary p-px text-center text-light">
                                            <IoCheckmarkDone className="text-md md:text-xl" />
                                        </span>
                                        <p>Cras facilisis dignissim</p>
                                    </li>
                                    <li className="flex items-start gap-2 md:gap-4">
                                        <span className="flex h-4 w-4 items-center justify-center rounded-full border border-primary/25 bg-secondary p-px text-center text-light">
                                            <IoCheckmarkDone className="text-md md:text-xl" />
                                        </span>
                                        <p>Cras facilisis</p>
                                    </li>
                                    <li className="flex items-start gap-2 md:gap-4">
                                        <span className="flex h-4 w-4 items-center justify-center rounded-full border border-primary/25 bg-secondary p-px text-center text-light">
                                            <IoCheckmarkDone className="text-md md:text-xl" />
                                        </span>
                                        <p>Cras dignissim</p>
                                    </li>
                                    <li className="flex items-start gap-2 md:gap-4">
                                        <span className="flex h-4 w-4 items-center justify-center rounded-full border border-primary/25 bg-secondary p-px text-center text-light">
                                            <IoCheckmarkDone className="text-md md:text-xl" />
                                        </span>
                                        <p>facilisis dignissim</p>
                                    </li>
                                    <li className="flex items-start gap-2 md:gap-4">
                                        <span className="flex h-4 w-4 items-center justify-center rounded-full border border-primary/25 bg-secondary p-px text-center text-light">
                                            <IoCheckmarkDone className="text-md md:text-xl" />
                                        </span>
                                        <p>Cras facilisis dignissim</p>
                                    </li>
                                    <li className="flex items-start gap-2 md:gap-4">
                                        <span className="flex h-4 w-4 items-center justify-center rounded-full border border-primary/25 bg-secondary p-px text-center text-light">
                                            <IoCheckmarkDone className="text-md md:text-xl" />
                                        </span>
                                        <p>Cras</p>
                                    </li>
                                    <li className="flex items-start gap-2 md:gap-4">
                                        <span className="flex h-4 w-4 items-center justify-center rounded-full border border-primary/25 bg-secondary p-px text-center text-light">
                                            <IoCheckmarkDone className="text-md md:text-xl" />
                                        </span>
                                        <p>dignissim</p>
                                    </li>
                                    <li className="flex items-start gap-2 md:gap-4">
                                        <span className="flex h-4 w-4 items-center justify-center rounded-full border border-primary/25 bg-secondary p-px text-center text-light">
                                            <IoCheckmarkDone className="text-md md:text-xl" />
                                        </span>
                                        <p>Cras facilisis dignissim</p>
                                    </li>
                                    <li className="flex items-start gap-2 md:gap-4">
                                        <span className="flex h-4 w-4 items-center justify-center rounded-full border border-primary/25 bg-secondary p-px text-center text-light">
                                            <IoCheckmarkDone className="text-md md:text-xl" />
                                        </span>
                                        <p>facilisis</p>
                                    </li>
                                </ul>
                            </div>

                            <div className="flex items-center gap-6 md:mt-8">
                                <button className="btn-primary w-fit px-6">Apply Now</button>
                                <button onClick={handleShare} className="btn-white w-fit px-6">
                                    Share Job
                                </button>
                            </div>

                            <hr className="border border-primary/25" />
                            {/* MORE JOBS */}
                            <div className="flex flex-col gap-4">
                                <div className="flex flex-col gap-2">
                                    <h4 className="text-2xl font-semibold tracking-wide">
                                        Related Jobs
                                    </h4>
                                    <p>Other Jobs you may be interested in</p>
                                </div>
                                <div className="flex w-full flex-wrap gap-6">
                                    <JobCard />
                                    <JobCard />
                                    <JobCard />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* SIDE PANE */}
                    <div
                        ref={sideMenuOpenRef}
                        className={`${sideMenuOpen ? "translate-x-0" : "-translate-x-full"} fixed left-0 top-0 z-10 h-full w-2/3 overflow-y-auto rounded-md border border-textcolor/25 bg-secondary p-3 py-8 md:bg-secondary/75 lg:relative lg:col-span-3 lg:inline-block lg:w-full lg:translate-x-0`}
                    >
                        <div className="flex flex-col gap-8">
                            <h4 className="text-lg font-semibold">Job Overview</h4>

                            <div className="flex flex-col gap-5">
                                <div className="flex flex-col gap-1">
                                    <h5 className="font-semibold">Job Title</h5>
                                    <p className="text-textcolor/75">
                                        Corporate Solutions Executive
                                    </p>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <h5 className="font-semibold">Job Title</h5>
                                    <p className="text-textcolor/75">
                                        Corporate Solutions Executive
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
