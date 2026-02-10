import { IPricingPlan } from "@/types";
import { RocketIcon, UserIcon, UsersIcon } from "lucide-react";

export const pricing: IPricingPlan[] = [
    {
        icon: RocketIcon,
        name: "UX Audit Sprint",
        description: "Senior-level UX review and design direction for worldwide products.",
        price: 120,
        linkText: "Book a sprint",
        linkUrl: "#",
        features: [
            "Product discovery workshop",
            "UX audit + priority fixes",
            "User flows + wireframes",
            "Clickable prototype",
            "Delivery in 1-2 weeks",
        ],
    },
    {
        icon: UserIcon,
        name: "MVP UI/UX",
        description: "End-to-end UX strategy and UI for MVPs launching worldwide.",
        price: 400,
        linkText: "Start MVP",
        linkUrl: "#",
        features: [
            "UX research + IA",
            "High-fidelity UI",
            "Prototype for testing",
            "Design system starter",
            "4-6 week delivery",
        ],
    },
    {
        icon: UsersIcon,
        name: "Design Retainer",
        type: "popular",
        description: "Ongoing UI/UX leadership for worldwide product teams.",
        price: 300,
        linkText: "Start retainer",
        linkUrl: "#",
        features: [
            "Weekly design delivery",
            "UX audits + improvements",
            "Design system upkeep",
            "Product strategy sessions",
            "Priority support",
        ],
    },
    {
        icon: UserIcon,
        name: "Agency / Team",
        type: "enterprise",
        description: "UI/UX with development by expert engineers for larger teams.",
        price: 750,
        linkText: "Talk to us",
        linkUrl: "#",
        features: [
            "Senior UI/UX designer",
            "Expert development team",
            "Multi-project delivery",
            "Product roadmap planning",
            "Weekly reporting",
        ],
    },
];