import { PenToolIcon, LayoutGridIcon, Code2Icon, SmartphoneIcon, CloudIcon, WrenchIcon } from "lucide-react";
import { IFeature } from "../types";

export const features: IFeature[] = [
    {
        title: "Discover",
        description:
            "Stakeholder alignment, user interviews and research synthesis to define the problem.",
        icon: PenToolIcon,
        cardBg: "bg-orange-100",
        iconBg: "bg-orange-500"
    },
    {
        title: "Define",
        description:
            "Personas, journey maps and information architecture to shape the product scope.",
        icon: LayoutGridIcon,
        cardBg: "bg-green-100",
        iconBg: "bg-green-500"
    },
    {
        title: "Design",
        description:
            "Wireframes, UI exploration and design system foundations for consistency.",
        icon: Code2Icon,
        cardBg: "bg-indigo-100",
        iconBg: "bg-indigo-500"
    },
    {
        title: "Prototype",
        description:
            "Interactive prototypes and usability testing to validate key flows.",
        icon: CloudIcon,
        cardBg: "bg-pink-100",
        iconBg: "bg-pink-500"
    },
    {
        title: "Deliver",
        description:
            "Design handoff, documentation and QA support for smooth build execution.",
        icon: SmartphoneIcon,
        cardBg: "bg-lime-100",
        iconBg: "bg-lime-500"
    },
    {
        title: "Optimize",
        description:
            "Post-launch insights, A/B tests and iteration cycles for measurable impact.",
        icon: WrenchIcon,
        cardBg: "bg-gray-50",
        iconBg: "bg-orange-500",
    },
]