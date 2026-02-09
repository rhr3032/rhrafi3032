import { LucideIcon } from "lucide-react";

export interface ILink {
    name: string;
    href: string;
};

export interface ICustomIcon {
    icon: LucideIcon;
    dir?: 'left' | 'right';
};

export interface ISectionTitle {
    icon: LucideIcon;
    title: string;
    subtitle: string;
    dir?: 'left' | 'center';
};

export interface IFeature {
    icon: LucideIcon;
    title: string;
    description: string;
    cardBg?: string;
    iconBg?: string;
};

export interface IFaq {
    question: string;
    answer: string;
};

export interface ITeamMember {
    name: string;
    image: string;
    role: string;
};

export interface IPricingPlan {
    icon: LucideIcon;
    name: string;
    type?: 'enterprise' | 'popular';
    description: string;
    price: number;
    linkText: string;
    linkUrl: string;
    features: string[];
};

export interface ITestimonial {
    quote: string;
    name: string;
    handle: string;
    image: string;
    rating: 5 | 4 | 3 | 2 | 1;
};

export interface IProject {
    title: string;
    description: string;
    category: string;
    tools: string[];
    role: string;
    year: string;
    thumbnail: string;
    href: string;
};

export interface ISkillCategory {
    title: string;
    items: string[];
};

export interface IExperienceItem {
    role: string;
    company: string;
    period: string;
    summary: string;
    highlights: string[];
};

export interface IEducationItem {
    program: string;
    school: string;
    period: string;
    details: string[];
};