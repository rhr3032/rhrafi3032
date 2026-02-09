import AnimatedContent from "@/components/animated-content";
import SectionTitle from "@/components/section-title";
import { projects } from "@/data/projects";
import { FolderKanbanIcon, ArrowUpRightIcon } from "lucide-react";
import Image from "next/image";

export default function ProjectsSection() {
    return (
        <section id="projects" className="border-b border-gray-200 px-4 md:px-16 lg:px-24 xl:px-32">
            <div className="p-4 pt-20 md:p-20 flex flex-col items-center max-w-7xl mx-auto justify-center border-x border-gray-200">
                <SectionTitle
                    icon={FolderKanbanIcon}
                    title="Selected projects"
                    subtitle="A focused set of UI/UX case studies with measurable impact and craft-led details."
                />
                <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                    {projects.map((project, index) => (
                        <AnimatedContent
                            key={project.title}
                            delay={index * 0.08}
                            className="rounded-2xl border border-gray-200 bg-white shadow-[0_8px_24px_rgba(0,0,0,0.06)] overflow-hidden"
                        >
                            <div className="relative w-full aspect-808/632">
                                <Image
                                    src={project.thumbnail}
                                    alt={`${project.title} thumbnail`}
                                    className="h-full w-full object-cover"
                                    fill
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black/35 to-transparent" />
                                <span className="absolute left-4 bottom-4 text-xs font-medium uppercase tracking-wide text-white">
                                    {project.category}
                                </span>
                            </div>
                            <div className="p-5">
                                <div className="flex items-start justify-between gap-4">
                                    <div>
                                        <h3 className="text-lg font-semibold">{project.title}</h3>
                                        <p className="text-xs text-zinc-500 mt-1">{project.role} · {project.year}</p>
                                    </div>
                                    <a
                                        href={project.href}
                                        className="flex items-center gap-1 text-sm text-zinc-500 hover:text-orange-500 whitespace-nowrap"
                                    >
                                        View case study
                                        <ArrowUpRightIcon size={16} />
                                    </a>
                                </div>
                                <p className="text-sm text-zinc-500 mt-3">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mt-5">
                                    {project.tools.map((tool) => (
                                    <span
                                        key={tool}
                                        className="px-3 py-1 text-xs rounded-full bg-orange-50 text-orange-600 border border-orange-100"
                                    >
                                        {tool}
                                    </span>
                                    ))}
                                </div>
                            </div>
                        </AnimatedContent>
                    ))}
                </div>
                <a
                    href="#projects"
                    className="mt-10 inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-orange-50 border border-orange-200 text-sm font-medium text-orange-500"
                >
                    View more projects
                </a>
            </div>
        </section>
    );
}
