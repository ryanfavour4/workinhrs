import { useRef, useState } from "react";
import { useClickAway } from "react-use";
import { useParams, usePathname, useRouter } from "next/navigation";

export default function useApplyForm() {
    const { id } = useParams();
    const pathname = usePathname();
    const router = useRouter();
    const [sideMenuOpen, setFilterSideMenuOpen] = useState(false);
    const sideMenuOpenRef = useRef<HTMLDivElement>(null);
    useClickAway(sideMenuOpenRef, () => setFilterSideMenuOpen(false));
    console.log(pathname);
    const [applicationSteps, setApplicationSteps] = useState([
        {
            title: "Personal Information",
            path: "",
            description:
                "Enter your basic details. This helps employers know who you are and how to reach you.",
        },
        {
            title: "Resume & Cover Letter",
            path: "/resume-coverletter",
            description:
                "Upload your resume and add a cover letter if you want. You can also share your portfolio or website.",
        },
        {
            title: "Work Experience",
            path: "/work-experience",
            description:
                "List your previous jobs, including your role, company, work type, and key responsibilities.",
        },
        {
            title: "Education",
            path: "/education",
            description: "Add your degrees, where you studied, and the years you attended.",
        },
        {
            title: "Skills & Certifications",
            path: "/skills-certification",
            description:
                "Select your skills, list any certifications, and upload relevant documents if needed.",
        },
        {
            title: "Job Preferences",
            path: "/job-preference",
            description:
                "Choose your preferred job type, work mode, salary range, and if you're open to relocating.",
        },
        {
            title: "Final Submission",
            path: "/final-submission",
            description: "Review everything, agree to the terms, and submit your application!.",
        },
    ]);

    const skipForward = () => {
        const currentIndex = applicationSteps.findIndex((step) =>
            pathname.endsWith(`/apply-form${step.path}`),
        );

        if (currentIndex !== -1 && currentIndex < applicationSteps.length - 1) {
            const nextStep = applicationSteps[currentIndex + 1].path;
            router.push(`/jobs/${id}/apply-form${nextStep}`);
        }
    };

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

    return {
        pathname,
        id,
        applicationSteps,
        sideMenuOpen,
        sideMenuOpenRef,
        setApplicationSteps,
        skipForward,
        setFilterSideMenuOpen,
        handleShare,
    };
}
