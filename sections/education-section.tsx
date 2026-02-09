import AnimatedContent from "@/components/animated-content";
import SectionTitle from "@/components/section-title";
import { education } from "@/data/education";
import { GraduationCapIcon } from "lucide-react";

export default function EducationSection() {
    return (
        <section id="education" className="border-b border-gray-200 px-4 md:px-16 lg:px-24 xl:px-32">
            <div className="p-4 pt-20 md:p-20 max-w-7xl mx-auto border-x border-gray-200">
                <SectionTitle
                    icon={GraduationCapIcon}
                    title="Education"
                    subtitle="Formal training and certifications that shape my design approach."
                />
                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {education.map((item, index) => (
                        <AnimatedContent
                            key={item.program}
                            delay={index * 0.08}
                            className="p-6 rounded-2xl border border-gray-200 bg-white shadow-[0_6px_24px_rgba(0,0,0,0.06)]"
                        >
                            <div className="flex items-start justify-between gap-3">
                                <div>
                                    <h3 className="text-lg font-semibold">{item.program}</h3>
                                    <p className="text-sm text-zinc-500">{item.school}</p>
                                </div>
                                <span className="text-xs text-zinc-500 uppercase tracking-wide">{item.period}</span>
                            </div>
                            <div className="mt-4 space-y-2">
                                {item.details.map((detail) => (
                                    <p key={detail} className="text-sm text-zinc-500">
                                        {detail}
                                    </p>
                                ))}
                            </div>
                        </AnimatedContent>
                    ))}
                </div>
            </div>
        </section>
    );
}
