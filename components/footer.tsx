"use client";

import {
    ArrowUpIcon,
    DribbbleIcon,
    GithubIcon,
    InstagramIcon,
    LinkedinIcon,
    LinkIcon,
    YoutubeIcon,
    PenToolIcon,
    PinIcon,
    ShoppingBagIcon,
} from "lucide-react";
import Image from "next/image";
import AnimatedContent from "./animated-content";

export default function Footer() {
    return (
        <footer className="px-4 md:px-16 lg:px-24 xl:px-32">
            <div className="border-x border-gray-200 px-4 md:px-12 max-w-7xl mx-auto pt-40">
                <div className="flex flex-col md:flex-row items-start justify-between relative p-8 md:p-12 overflow-hidden pb-32 md:pb-42 bg-linear-to-t from-orange-50 to-orange-100 rounded-t-2xl">
                    <Image
                        src="/assets/logo-colored.svg"
                        alt="Logo"
                        width={135}
                        height={35}
                        className="h-62 w-auto absolute -bottom-18 opacity-7 select-none pointer-events-none"
                    />
                    <AnimatedContent distance={40} className="max-w-72">
                        <Image
                            src="/assets/logo-colored.svg"
                            alt="Logo"
                            width={135}
                            height={35}
                            className="h-9"
                        />
                        <p className="text-zinc-500 mt-4 pb-6">
                            Raisul Rafi is a UI/UX designer focused on research-led interfaces, scalable design systems and accessible experiences.
                        </p>
                        <p className="text-gray-500 py-0">©2026 Raisul Rafi | All Rights Reserved.</p>
                    </AnimatedContent>
                    <div>
                        <p className="uppercase font-semibold text-orange-600 text-base">Social</p>
                        <AnimatedContent className="flex flex-col mt-6 gap-3">
                            <a href="https://www.linkedin.com/in/rhr3032/" className="flex items-center gap-2 text-orange-500" target="_blank" rel="noreferrer">
                                <LinkedinIcon size={20} />
                                <p>LinkedIn</p>
                            </a>
                            <a href="https://www.behance.net/rhr3032" className="flex items-center gap-2 text-orange-500" target="_blank" rel="noreferrer">
                                <PenToolIcon size={20} />
                                <p>Behance</p>
                            </a>
                            <a href="https://dribbble.com/rhr3032" className="flex items-center gap-2 text-orange-500" target="_blank" rel="noreferrer">
                                <DribbbleIcon size={20} />
                                <p>Dribbble</p>
                            </a>
                            <a href="https://github.com/rhr3032" className="flex items-center gap-2 text-orange-500" target="_blank" rel="noreferrer">
                                <GithubIcon size={20} />
                                <p>GitHub</p>
                            </a>
                            <a href="https://www.pinterest.com/rhr3032" className="flex items-center gap-2 text-orange-500" target="_blank" rel="noreferrer">
                                <PinIcon size={20} />
                                <p>Pinterest</p>
                            </a>
                            <a href="https://www.instagram.com/nuysdev" className="flex items-center gap-2 text-orange-500" target="_blank" rel="noreferrer">
                                <InstagramIcon size={20} />
                                <p>Instagram</p>
                            </a>
                            <a href="https://rhr3032.gumroad.com/" className="flex items-center gap-2 text-orange-500" target="_blank" rel="noreferrer">
                                <ShoppingBagIcon size={20} />
                                <p>Gumroad</p>
                            </a>
                        </AnimatedContent>
                    </div>
                    <button
                        type="button"
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                        className="absolute right-6 bottom-6 inline-flex items-center gap-2 rounded-full bg-white/80 text-orange-600 border border-white/70 px-4 py-2 text-sm font-medium shadow-[0_8px_20px_rgba(15,23,42,0.12)] backdrop-blur"
                        aria-label="Scroll to top"
                    >
                        <ArrowUpIcon size={16} />
                    </button>
                </div>
            </div>
        </footer>
    );
}