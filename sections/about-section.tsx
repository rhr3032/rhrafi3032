import Image from "next/image";
import AnimatedContent from "@/components/animated-content";
import SectionTitle from "@/components/section-title";
import { UserRoundIcon } from "lucide-react";

const highlights = [
    "Research-led UX",
    "Design systems",
    "Accessibility-first",
    "Mobile + web",
];

export default function AboutSection() {
    return (
        <section id="about" className="border-b border-gray-200 px-4 md:px-16 lg:px-24 xl:px-32">
            <div className="p-4 pt-20 md:p-20 max-w-7xl mx-auto border-x border-gray-200">
                <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
                    <div>
                        <SectionTitle
                            dir="left"
                            icon={UserRoundIcon}
                            title="About me"
                            subtitle="I design human-centered products that balance clarity, brand personality and measurable results."
                        />
                        <AnimatedContent className="mt-8 space-y-4 text-zinc-500 text-base/7">
                            <p>
                                With 4+ years in UI/UX, I partner with product teams to bring structure to ambiguity, turning
                                complex requirements into simple, accessible experiences.
                            </p>
                            <p>
                                I focus on systems thinking, rapid prototyping and collaborative handoff so engineering teams can
                                ship with confidence.
                            </p>
                        </AnimatedContent>
                        <AnimatedContent className="mt-8 flex flex-wrap gap-3">
                            {highlights.map((item) => (
                                <span
                                    key={item}
                                    className="px-4 py-2 text-xs rounded-full bg-orange-50 text-orange-600 border border-orange-100"
                                >
                                    {item}
                                </span>
                            ))}
                        </AnimatedContent>
                    </div>
                    <AnimatedContent className="relative">
                        <div className="absolute -top-6 -left-6 h-28 w-28 rounded-full bg-orange-100 blur-2xl" />
                        <Image
                            src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=900&auto=format&fit=crop"
                            alt="Rafi Rahman portrait"
                            width={900}
                            height={420}
                            className="relative z-10 w-full h-105 object-cover rounded-2xl border border-gray-200"
                        />
                    </AnimatedContent>
                </div>
            </div>
        </section>
    );
}
