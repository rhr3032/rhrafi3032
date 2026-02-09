import AnimatedContent from "@/components/animated-content";
import SectionTitle from "@/components/section-title";
import { experience } from "@/data/experience";
import { BriefcaseIcon } from "lucide-react";

export default function ExperienceSection() {
    return (
        <section id="experience" className="border-b border-gray-200 px-4 md:px-16 lg:px-24 xl:px-32">
            <div className="p-4 pt-20 md:p-20 max-w-7xl mx-auto border-x border-gray-200">
                <SectionTitle
                    icon={BriefcaseIcon}
                    title="Professional experience"
                    subtitle="Design roles focused on product UX, systems and cross-functional delivery."
                />
                <div className="mt-16 space-y-6">
                    {experience.map((item, index) => (
                        <AnimatedContent
                            key={item.role}
                            delay={index * 0.08}
                            className="p-6 rounded-2xl border border-gray-200 bg-white shadow-[0_6px_24px_rgba(0,0,0,0.06)]"
                        >
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                                <div>
                                    <h3 className="text-lg font-semibold">{item.role}</h3>
                                    <p className="text-sm text-zinc-500">{item.company}</p>
                                </div>
                                <span className="text-xs text-zinc-500 uppercase tracking-wide">{item.period}</span>
                            </div>
                            <p className="text-sm text-zinc-500 mt-4">{item.summary}</p>
                            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3">
                                {item.highlights.map((highlight) => (
                                    <div
                                        key={highlight}
                                        className="rounded-xl border border-orange-100 bg-orange-50 px-4 py-3 text-xs text-orange-700"
                                    >
                                        {highlight}
                                    </div>
                                ))}
                            </div>
                        </AnimatedContent>
                    ))}
                </div>
            </div>
        </section>
    );
}
