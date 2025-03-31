"use client";
import React, { useState } from "react";
import Input from "@/components/input";
import { IInputState } from "@/components/input/useInput";

const PersonalInformation = () => {
    const [fullName, setFullName] = useState<IInputState>({ value: "" });
    const [email, setEmail] = useState<IInputState>({ value: "" });
    const [phone, setPhone] = useState<IInputState>({ value: "" });
    const [linkedin, setLinkedin] = useState<IInputState>({ value: "" });
    const [portfolio, setPortfolio] = useState<IInputState>({ value: "" });

    return (
        <form className="m-auto w-full max-w-md bg-white p-6">
            <h2 className="pb-2 text-xl font-bold text-primary">Step 1: Personal Information</h2>
            <p className="text-sm text-gray-600">
                Enter your basic details. This helps employers know who you are.
            </p>

            <div className="mt-8 flex flex-col gap-4">
                <div>
                    <label className="font-semibold">Full Name</label>
                    <Input
                        type="text"
                        name="fullName"
                        placeholder="Enter your full name"
                        required
                        state={fullName}
                        setState={setFullName}
                    />
                </div>

                <div>
                    <label className="font-semibold">Email Address</label>
                    <Input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        required
                        state={email}
                        setState={setEmail}
                    />
                </div>

                <div>
                    <label className="font-semibold">Phone Number</label>
                    <Input
                        type="tel"
                        name="phone"
                        placeholder="Enter your phone number"
                        required
                        state={phone}
                        setState={setPhone}
                    />
                </div>

                <div>
                    <label className="font-semibold">LinkedIn Profile (Optional)</label>
                    <Input
                        type="url"
                        name="linkedin"
                        placeholder="Enter LinkedIn profile URL"
                        state={linkedin}
                        setState={setLinkedin}
                    />
                </div>

                <div>
                    <label className="font-semibold">Portfolio/Website (Optional)</label>
                    <Input
                        type="url"
                        name="portfolio"
                        placeholder="Enter portfolio or website URL"
                        state={portfolio}
                        setState={setPortfolio}
                    />
                </div>

                <button type="submit" className="btn-primary mt-3">
                    Next Step
                </button>
            </div>
        </form>
    );
};

export default PersonalInformation;
