"use client";

import SkillsCertification from "./skills-certification/page";
import PersonalInformation from "./personal-information/page";
import useApplyForm from "./useApplyForm";
import TopNavBar from "@/layout/top-navbar";
import { FiSkipForward } from "react-icons/fi";
import { PiStepsLight } from "react-icons/pi";
import Link from "next/link";
import { BsBriefcase, BsWallet2 } from "react-icons/bs";
import { CiBookmarkPlus, CiLocationOn } from "react-icons/ci";
import { IoShareSocialOutline, IoTimeOutline } from "react-icons/io5";
import Image from "next/image";
import logo from "@/public/image/logo.png";

export default function ApplyJobForm() {
    const {
        pathname,
        id,
        applicationSteps,
        sideMenuOpen,
        sideMenuOpenRef,
        skipForward,
        setFilterSideMenuOpen,
        handleShare,
    } = useApplyForm();

    return (
        <>
            <div className="">
                <TopNavBar />
                {/* COMPANY HIGHLIGHT */}
                <div className="container border-b-2 py-6">
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
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="relative grid gap-12 px-3 py-16 pt-8 lg:grid-cols-12">
                        <div
                            ref={sideMenuOpenRef}
                            className={`${sideMenuOpen ? "translate-x-0" : "-translate-x-full"} fixed left-0 top-0 z-10 h-full w-2/3 overflow-y-auto rounded-md border border-textcolor/25 bg-secondary p-3 py-8 md:bg-secondary/75 lg:relative lg:col-span-4 lg:inline-block lg:w-full lg:translate-x-0`}
                        >
                            <div className="flex flex-col gap-3">
                                <div className="flex min-h-32 flex-col gap-2 overflow-y-auto">
                                    {applicationSteps.map((step) => (
                                        <Link
                                            href={`/jobs/${id}/apply-form${step.path}`}
                                            key={step.path}
                                            className={`flex items-center gap-2 rounded-lg border-t-2 border-primary px-2 py-5 font-semibold ${pathname.endsWith(`/apply-form${step.path}`) ? "bg-light/25" : "opacity-50"}`}
                                        >
                                            <div className="">
                                                <h3>{step.title}</h3>
                                                <p className="mt-2 text-sm text-dark/75">
                                                    {step.description}
                                                </p>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="h-full w-full rounded-md bg-white md:border md:p-3 lg:col-span-8">
                            <div className="flex flex-wrap items-center justify-between">
                                <button
                                    onClick={() => setFilterSideMenuOpen(true)}
                                    className="btn-white flex w-fit items-center gap-2 text-xs md:hidden"
                                >
                                    <span>Steps</span> <PiStepsLight />
                                </button>

                                <button
                                    onClick={skipForward}
                                    className="btn-white flex w-fit items-center gap-2 text-xs"
                                >
                                    <span>Skip</span> <FiSkipForward />
                                </button>
                            </div>

                            <div className="mt-10 flex flex-col gap-6">
                                {pathname.endsWith("/apply-form") && <PersonalInformation />}
                                {pathname.endsWith("/apply-form/personal-information") && (
                                    <PersonalInformation />
                                )}
                                {pathname.endsWith("/apply-form/skills-certification") && (
                                    <SkillsCertification />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
