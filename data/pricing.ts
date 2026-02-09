import { IPricingPlan } from "@/types";
import { RocketIcon, UserIcon, UsersIcon } from "lucide-react";

export const pricing: IPricingPlan[] = [
    {
        icon: RocketIcon,
        name: "UX Sprint",
        description: "Fast discovery and UX/UI for a clear product direction.",
        price: 1200,
        linkText: "Book a sprint",
        linkUrl: "#",
        features: [
            "Product discovery workshop",
            "User flows + wireframes",
            "Clickable prototype",
            "Design system starter",
            "Delivery in 1–2 weeks",
        ],
    },
    {
        icon: UserIcon,
        name: "MVP Build",
        description: "Design and develop a market-ready MVP.",
        price: 4200,
        linkText: "Start MVP",
        linkUrl: "#",
        features: [
            "UI/UX + front-end",
            "Back-end + API",
            "SaaS auth + billing",
            "QA + launch support",
            "4–8 week delivery",
        ],
    },
    {
        icon: UsersIcon,
        name: "Growth Retainer",
        type: "popular",
        description: "Ongoing product design and development team.",
        price: 6500,
        linkText: "Start retainer",
        linkUrl: "#",
        features: [
            "Dedicated squad",
            "Weekly shipping cadence",
            "Roadmap planning",
            "Performance & growth",
            "Priority support",
        ],
    },
    {
        icon: UserIcon,
        name: "Enterprise",
        type: "enterprise",
        description: "Custom teams for complex platforms and scale.",
        price: 12000,
        linkText: "Talk to us",
        linkUrl: "#",
        features: [
            "Multi-team delivery",
            "Security & compliance",
            "Custom integrations",
            "SLA & uptime",
            "Executive reporting",
        ],
    },
];