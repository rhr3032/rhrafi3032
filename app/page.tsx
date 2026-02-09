import AboutSection from "@/sections/about-section";
import ContactSection from "@/sections/contact-section";
import EducationSection from "@/sections/education-section";
import ExperienceSection from "@/sections/experience-section";
import FeaturesSection from "@/sections/features-section";
import HeroSection from "@/sections/hero-section";
import ProjectsSection from "@/sections/projects-section";
import SkillsSection from "@/sections/skills-section";
import StatsSection from "@/sections/stats-section";
import TestimonialSection from "@/sections/testimonial-section";

export default function Page() {
    return (
        <main>
            <HeroSection />
            <StatsSection />
            <AboutSection />
            <ProjectsSection />
            <FeaturesSection />
            <SkillsSection />
            <ExperienceSection />
            <EducationSection />
            <TestimonialSection />
            <ContactSection />
        </main>
    );
}