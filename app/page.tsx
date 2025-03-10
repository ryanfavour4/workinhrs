"use client";
import Select from "@/components/select";
import { createSelectOptions } from "@/components/select/useSelect";
import TopNavBar from "@/layout/top-navbar";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import logo from "@/public/image/logo.png";
import Image from "next/image";
import { useClickAway } from "react-use";
import Checkbox from "@/components/checkbox";
import { JOBCATEGORIES, JOBTYPES } from "@/constants/job";
import { CiBookmarkPlus, CiLocationOn } from "react-icons/ci";
import { BsBriefcase, BsWallet2 } from "react-icons/bs";
import { IoIosSearch } from "react-icons/io";
import { IoTimeOutline } from "react-icons/io5";
import { FaFilter } from "react-icons/fa";
import { useRouter } from "next/navigation";

const sortTypes = [
    {
        id: "1",
        type: "latest",
        name: "Sort By Latest",
    },
    {
        id: "2",
        type: "oldest",
        name: "Sort by Oldest",
    },
];

export default function Home() {
    const [sortType, setSortType] = useState({ value: "" });
    const [jobCategory, setJobCategory] = useState<string[]>([]);
    const [jobType, setJobType] = useState<string[]>([]);
    const [filterSideMenuOpen, setFilterSideMenuOpen] = useState(false);
    const filterSideMenuOpenRef = useRef<HTMLDivElement>(null);
    useClickAway(filterSideMenuOpenRef, () => setFilterSideMenuOpen(false));

    const toggleCheckJobCategory = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const currentItemClickExist = jobCategory.some(
            (val) => val.toLowerCase() == value.toLowerCase(),
        );
        if (currentItemClickExist) {
            const newCategoryList = jobCategory.filter(
                (val) => val.toLowerCase() !== value.toLowerCase(),
            );
            setJobCategory(newCategoryList);
        } else {
            setJobCategory((p) => [...p, value]);
        }
    };

    const toggleCheckJobType = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const currentItemClickExist = jobType.some(
            (val) => val.toLowerCase() == value.toLowerCase(),
        );
        if (currentItemClickExist) {
            const newTypeList = jobCategory.filter(
                (val) => val.toLowerCase() !== value.toLowerCase(),
            );
            setJobType(newTypeList);
        } else {
            setJobType((p) => [...p, value]);
        }
    };

    useEffect(() => {
        console.log(jobCategory);
    }, [jobCategory]);

    return (
        <div className="">
            <TopNavBar />
            <div className="flex flex-col items-center justify-center gap-4 bg-[linear-gradient(-10deg,_rgb(var(--primary),0.8)_65%,_rgb(var(--complementary),0.5)_100%),url('/image/job-hero-office-group-team.jpg')] bg-cover bg-center px-4 py-10 text-light shadow md:py-16">
                <h3 className="text-xl font-bold md:text-3xl">Job Search</h3>
                <p className="max-w-sm text-center text-sm md:max-w-2xl">
                    Search for jobs in your area and get the best jobs for you. We have a wide range
                    of jobs for you to choose from.
                </p>

                <div className="mt-10 flex flex-wrap items-center gap-4 rounded-xl bg-light px-3 py-2">
                    <div className="flex items-center gap-0 text-gray-500">
                        <IoIosSearch className="text-xl" />
                        <input
                            type="text"
                            placeholder="Search for jobs"
                            className="border-0 px-2 py-1.5 outline-0 focus:border-0 focus:outline-0"
                        />
                    </div>
                    <div className="flex items-center gap-0 text-gray-500">
                        <CiLocationOn className="text-xl" />
                        <input
                            type="text"
                            placeholder="Location"
                            className="border-0 px-2 py-1.5 outline-0 focus:border-0 focus:outline-0"
                        />
                    </div>
                    <button className="btn-primary">Search</button>
                </div>
            </div>

            <div className="container">
                <div className="relative grid gap-12 px-3 py-16 lg:grid-cols-12">
                    <div
                        ref={filterSideMenuOpenRef}
                        className={`${filterSideMenuOpen ? "translate-x-0" : "-translate-x-full"} fixed left-0 top-0 z-10 h-full overflow-y-auto rounded-md border border-textcolor/25 bg-secondary p-3 py-8 md:bg-secondary/75 lg:relative lg:col-span-3 lg:inline-block lg:translate-x-0`}
                    >
                        <div className="flex flex-col gap-3">
                            <h4 className="text-lg font-semibold">Category</h4>

                            <div className="flex max-h-[12rem] min-h-32 flex-col gap-3 overflow-y-auto">
                                {JOBCATEGORIES.map((category) => (
                                    <div
                                        key={category.id}
                                        className="flex items-center gap-2 font-semibold"
                                    >
                                        <Checkbox
                                            id={category.id}
                                            value={category.id}
                                            checked={jobCategory.includes(category.id)}
                                            onChange={toggleCheckJobCategory}
                                        />
                                        <label htmlFor={category.id} className="text-xs">
                                            {category.name}
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <br />
                        <div className="flex flex-col gap-3">
                            <h4 className="text-lg font-semibold">Job Type</h4>

                            <div className="flex max-h-[12rem] min-h-32 flex-col gap-3 overflow-y-auto">
                                {JOBTYPES.map((type) => (
                                    <div
                                        key={type.id}
                                        className="flex items-center gap-2 font-semibold"
                                    >
                                        <Checkbox
                                            id={type.id}
                                            value={type.id}
                                            checked={jobType.includes(type.id)}
                                            onChange={toggleCheckJobType}
                                        />
                                        <label htmlFor={type.id} className="text-xs">
                                            {type.name}
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="h-full w-full rounded-md md:border md:p-3 lg:col-span-9">
                        <div className="flex flex-wrap items-center justify-between">
                            <p className="hidden text-xs lg:inline-block">
                                Showing 1 - 10 of 100 Results
                            </p>

                            <div className="flex w-full items-center justify-between gap-4 lg:w-fit">
                                <button
                                    onClick={() => setFilterSideMenuOpen(!filterSideMenuOpen)}
                                    className="btn-white flex w-fit items-center gap-2 text-xs lg:hidden"
                                >
                                    <span>Filter</span> <FaFilter />
                                </button>
                                <div className="text-xs">
                                    <Select
                                        setState={setSortType}
                                        className="py-1"
                                        state={sortType}
                                        placeholder="Sort By"
                                        name="Sort By"
                                        options={createSelectOptions(sortTypes, "name", "type")}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="mt-10 flex flex-col gap-6">
                            <JobCard />
                            <JobCard />
                            <JobCard />
                            <JobCard />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function JobCard() {
    const route = useRouter();
    return (
        <>
            <div className="flex w-full flex-col gap-8 rounded-lg border px-5 py-5 shadow md:px-6 md:py-6">
                <div className="flex items-center justify-between">
                    <div className="w-fit rounded-md bg-secondary/45 px-2 py-1 text-xs text-textcolor">
                        10 min ago
                    </div>

                    <CiBookmarkPlus className="cursor-pointer text-2xl" />
                </div>

                <div className="flex gap-3">
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
                        <h3 className="text-xl font-semibold tracking-wide">
                            Forward Security Director
                        </h3>
                        <p className="text-sm">Bauch, Schuppe and Schulist Co</p>
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

                    <div
                        onClick={() => route.push("/jobs/123456789")}
                        className="mt-6 w-full md:mt-0 md:w-fit"
                    >
                        <button className="btn-primary w-fit px-4 py-2 text-xs">Apply Now</button>
                    </div>
                </div>
            </div>
        </>
    );
}
