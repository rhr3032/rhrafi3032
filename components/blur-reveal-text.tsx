'use client';

import React from "react";
import { motion } from "motion/react";

type BlurRevealTextProps = {
    as?: "h1" | "h2" | "h3" | "p" | "span";
    className?: string;
    delay?: number;
    children: React.ReactNode;
};

export default function BlurRevealText({
    as = "span",
    className = "",
    delay = 0,
    children
}: BlurRevealTextProps) {
    const motionMap = motion as unknown as Record<string, React.ElementType>;
    const MotionTag = motionMap[as] ?? motion.span;

    return (
        <MotionTag
            initial={{ opacity: 0, y: 16, filter: "blur(12px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, ease: "easeOut", delay }}
            viewport={{ once: true, margin: "0px 0px -10% 0px" }}
            className={className}
        >
            {children}
        </MotionTag>
    );
}
