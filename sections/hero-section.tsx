import AnimatedContent from "@/components/animated-content";
import BlurReveal from "@/components/blur-reveal";
import WordRevealText from "@/components/word-reveal-text";
import CustomIcon from "@/components/custom-icon";
import { DownloadIcon, FigmaIcon, StarIcon, UserRoundIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
    return (
        <section className="bg-[url('/assets/hero-gradient-bg.png')] bg-cover bg-center bg-no-repeat px-4 md:px-16 lg:px-24 xl:px-32">
            <div className="max-w-7xl mx-auto flex flex-col items-center justify-center h-screen">
                <AnimatedContent reverse distance={30} className="flex items-center gap-1.5 bg-white/50 backdrop-blur p-1 rounded-full text-[11px] md:text-sm">
                    <div className="flex items-center justify-center size-7 rounded-full border-2 border-white bg-white/80 text-orange-600">
                        <UserRoundIcon className="size-4" />
                    </div>
                    <span>4+ years</span>
                    <div className="h-5 w-px mx-1 bg-white rounded-full" />
                    <span>UI/UX experience</span>
                    <div className="h-5 w-px mx-1 bg-white rounded-full" />
                    <div className="flex items-center gap-1 pr-3">
                        <StarIcon className="size-4.5 fill-orange-500 stroke-orange-500" />
                        <span>5.0</span>
                        <span className="text-zinc-600">client feedback</span>
                    </div>
                </AnimatedContent>
                <div className="relative">
                    <WordRevealText
                        as="h1"
                        text={`I don't just build screens,
I craft user experiences.`}
                        className="text-center font-urbanist text-3xl/11 sm:text-4xl/12 md:text-6xl/18 mt-4 font-bold max-w-3xl"
                    />
                    <div className="absolute -top-5 right-13 hidden md:block hero-sparkle">
                        <CustomIcon icon={FigmaIcon} dir="right" />
                    </div>
                </div>
                <WordRevealText
                    as="p"
                    delay={0.05}
                    text="UI/UX designer focused on product strategy, accessible interfaces and measurable outcomes across web and mobile."
                    className="text-center text-sm/6 sm:text-base/7 text-zinc-500 max-w-2xl mt-3 md:mt-4"
                />
                <BlurReveal delay={0.1} className="flex flex-col md:flex-row items-center gap-3 md:gap-4 mt-5 md:mt-6 w-full md:w-auto">
                    <a
                        href="/resume.pdf"
                        download
                        className="py-2 md:py-2.5 w-full md:w-auto px-5 md:px-8 border border-orange-200 bg-linear-to-tl from-orange-600 to-orange-500 text-white text-center rounded-full inline-flex items-center justify-center gap-2 text-sm"
                    >
                        <DownloadIcon className="size-4" />
                        Download resume
                    </a>
                    <Link href="https://www.behance.net/rhr3032" target="_blank" className="relative py-2 md:py-2.5 w-full md:w-auto px-5 md:px-8 bg-white/50 text-gray-600 font-medium text-center border border-white rounded-full text-sm">
                        View case studies
                        <AnimatedContent direction="horizontal" className="absolute size-8 pointer-events-none right-0 top-full -translate-y-1/2">
                            <Image
                                src="/assets/mouse-arrow.svg"
                                alt="mouse-arrow"
                                width={24}
                                height={24}
                            />
                        </AnimatedContent>
                    </Link>
                </BlurReveal>
                <a
                    href="#about"
                    className="mt-16 md:mt-20 inline-flex flex-col items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-zinc-500"
                    aria-label="Scroll down"
                >
                    <span>Scroll down</span>
                    <span className="scroll-indicator">
                        <span className="scroll-indicator__wheel" />
                    </span>
                </a>
            </div>
        </section>
    );
}