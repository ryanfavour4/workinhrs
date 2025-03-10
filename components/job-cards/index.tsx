import { CiBookmarkPlus, CiLocationOn } from "react-icons/ci";
import { BsBriefcase, BsWallet2 } from "react-icons/bs";
import { IoTimeOutline } from "react-icons/io5";
import logo from "@/public/image/logo.png";
import Image from "next/image";
import { useRouter } from "next/navigation";

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
