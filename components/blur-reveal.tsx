'use client';

import React from "react";
import { motion } from "motion/react";

type BlurRevealProps = {
    className?: string;
    delay?: number;
    children: React.ReactNode;
};

export default function BlurReveal({
    className = "",
    delay = 0,
    children
}: BlurRevealProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 16, filter: "blur(12px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, ease: "easeOut", delay }}
            viewport={{ once: true, margin: "0px 0px -10% 0px" }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
