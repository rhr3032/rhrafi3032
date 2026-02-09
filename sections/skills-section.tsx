import AnimatedContent from "@/components/animated-content";
import SectionTitle from "@/components/section-title";
import { skills } from "@/data/skills";
import { WrenchIcon } from "lucide-react";

export default function SkillsSection() {
    return (
        <section id="skills" className="border-b border-gray-200 px-4 md:px-16 lg:px-24 xl:px-32">
            <div className="p-4 pt-20 md:p-20 max-w-7xl mx-auto border-x border-gray-200">
                <SectionTitle
                    icon={WrenchIcon}
                    title="Skills and tools"
                    subtitle="A balanced mix of research, product thinking and hands-on UI execution."
                />
                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {skills.map((group, index) => (
                        <AnimatedContent
                            key={group.title}
                            delay={index * 0.08}
                            className="p-6 rounded-2xl border border-gray-200 bg-white shadow-[0_6px_24px_rgba(0,0,0,0.06)]"
                        >
                            <h3 className="text-lg font-semibold">{group.title}</h3>
                            <div className="mt-4 flex flex-wrap gap-2">
                                {group.items.map((item) => (
                                    <span
                                        key={item}
                                        className="px-3 py-1 text-xs rounded-full bg-orange-50 text-orange-600 border border-orange-100"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </AnimatedContent>
                    ))}
                </div>
            </div>
        </section>
    );
}
