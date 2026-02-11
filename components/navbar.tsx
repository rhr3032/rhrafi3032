"use client";
import { links } from "@/data/links";
import { ILink } from "@/types";
import { MenuIcon, XIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { useEffect, useMemo, useState } from "react";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeHref, setActiveHref] = useState("/");

    const hashLinks = useMemo(() => links.filter((link) => link.href.startsWith("#")), []);

    useEffect(() => {
        const targets = hashLinks
            .map((link) => ({
                href: link.href,
                el: document.querySelector(link.href),
            }))
            .filter((target): target is { href: string; el: HTMLElement } => Boolean(target.el));

        if (!targets.length) {
            return;
        }

        const navOffset = 140;

        const updateActive = () => {
            const scrollPosition = window.scrollY + navOffset;
            let currentHref = "/";

            for (const target of targets) {
                const top = target.el.offsetTop;
                const bottom = top + target.el.offsetHeight;

                if (scrollPosition >= top && scrollPosition < bottom) {
                    currentHref = target.href;
                    break;
                }
            }

            if (scrollPosition < targets[0].el.offsetTop - 20) {
                currentHref = "/";
            }

            setActiveHref(currentHref);
        };

        const handleScroll = () => updateActive();
        const handleResize = () => updateActive();

        window.addEventListener("scroll", handleScroll, { passive: true });
        window.addEventListener("resize", handleResize);
        updateActive();

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleResize);
        };
    }, [hashLinks]);

    return (
        <>
            <motion.nav
                initial={{ opacity: 0, y: -12, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className='fixed w-full top-0 z-50 px-4 md:px-16 lg:px-24 xl:px-32 py-4'
            >
                <div className="max-w-7xl mx-auto flex items-center justify-center">
                    <div className="nav-bar flex items-center justify-between w-full md:w-auto gap-3 md:gap-4 text-[#1E2939]">
                        <Link href="#!" className="flex items-center">
                            <Image src="/assets/logo.svg" alt="NUYsDev Logo" width={76} height={76} />
                        </Link>

                        <div className="hidden md:flex items-center gap-2">
                            {links.map((link: ILink) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`py-1 px-3 text-sm transition ${
                                        activeHref === link.href
                                            ? "text-orange-600"
                                            : "text-[#1E2939]/80 hover:text-[#1E2939]"
                                    }`}
                                    onClick={() => setActiveHref(link.href)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>

                        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            <MenuIcon className="size-6" />
                        </button>

                        <Link href="mailto:contact.raisulrafi@gmail.com" className="hidden md:inline-flex items-center py-1.5 px-4 rounded-full bg-linear-to-tl from-orange-600 to-orange-500 text-white text-sm font-medium">
                            Hire Me
                        </Link>
                    </div>
                </div>
            </motion.nav>
            <div className={`fixed top-0 right-0 z-60 w-full bg-white shadow-xl shadow-black/5 transition-all duration-300 ease-in-out ${isMenuOpen ? "h-92 overflow-hidden" : "h-0 overflow-hidden"}`}>
                <div className="flex items-center justify-between p-4">
                    <Image src="/assets/logo.svg" alt="NUYsDev Logo" width={135} height={36} />
                    <XIcon className="size-6.5" onClick={() => setIsMenuOpen(false)} />
                </div>
                <div className="flex flex-col gap-4 p-4 text-base">
                    {links.map((link: ILink) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`py-1 px-3 ${activeHref === link.href ? "text-orange-600" : "text-[#1E2939]"}`}
                            onClick={() => {
                                setActiveHref(link.href);
                                setIsMenuOpen(false);
                            }}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link href="mailto:contact.raisulrafi@gmail.com" className="py-2.5 px-6 w-max text-sm shadow-[inset_0_2px_4px_rgba(255,255,255,0.6)] bg-linear-to-tl from-orange-600 to-orange-500 text-white rounded-full">
                        Hire Me
                    </Link>
                </div>
            </div>
        </>
    );
}