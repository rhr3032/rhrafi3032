'use client';

import React from "react";
import { motion } from "motion/react";

type WordRevealTextProps = {
    text: string;
    as?: "h1" | "h2" | "h3" | "p" | "span";
    className?: string;
    delay?: number;
};

export default function WordRevealText({
    text,
    as = "span",
    className = "",
    delay = 0
}: WordRevealTextProps) {
    const tokens = React.useMemo(() => {
        const lines = text.split("\n");
        const parts: Array<{ type: "word" | "break"; value?: string }> = [];

        lines.forEach((line, lineIndex) => {
            const lineWords = line.split(/\s+/).filter(Boolean);
            lineWords.forEach((word) => parts.push({ type: "word", value: word }));

            if (lineIndex < lines.length - 1) {
                parts.push({ type: "break" });
            }
        });

        return parts;
    }, [text]);
    const motionMap = motion as Record<string, React.ElementType>;
    const MotionTag = motionMap[as] ?? motion.span;

    return (
        <MotionTag
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "0px 0px -10% 0px" }}
            variants={{
                hidden: {},
                visible: {
                    transition: {
                        staggerChildren: 0.04,
                        delayChildren: delay
                    }
                }
            }}
            className={className}
        >
            {tokens.map((token, index) => {
                if (token.type === "break") {
                    return <br key={`br-${index}`} />;
                }

                const nextToken = tokens[index + 1];
                const isLineEnd = !nextToken || nextToken.type === "break";

                return (
                    <motion.span
                        key={`${token.value}-${index}`}
                        variants={{
                            hidden: { opacity: 0, y: 16, filter: "blur(12px)" },
                            visible: {
                                opacity: 1,
                                y: 0,
                                filter: "blur(0px)",
                                transition: { duration: 0.6, ease: "easeOut" }
                            }
                        }}
                        className={`inline-block ${isLineEnd ? "mr-0" : "mr-2"}`}
                    >
                        {token.value}
                    </motion.span>
                );
            })}
        </MotionTag>
    );
}
