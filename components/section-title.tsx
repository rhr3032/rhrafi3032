import { ISectionTitle } from "@/types";
import BlurRevealText from "./blur-reveal-text";
import CustomIcon from "./custom-icon";

export default function SectionTitle({ icon, title, subtitle, dir = 'center' }: ISectionTitle) {
    return (
        <div className={`flex flex-col gap-6 ${dir === 'center' ? 'items-center text-center' : 'md:items-start items-center'}`}>
            <div className="flex flex-col md:flex-row items-center gap-4">
                <CustomIcon icon={icon} />
                <BlurRevealText as="h2" className="text-4xl font-semibold font-urbanist">
                    {title}
                </BlurRevealText>
            </div>
            <BlurRevealText
                as="p"
                delay={0.05}
                className={`text-zinc-500 text-base/7 ${dir === 'center' ? 'text-center max-w-lg' : 'md:text-left text-center max-w-sm'}`}
            >
                {subtitle}
            </BlurRevealText>
        </div>
    )
}