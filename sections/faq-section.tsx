"use client";

import AnimatedContent from "@/components/animated-content";
import SectionTitle from "@/components/section-title";
import { faqs } from "@/data/faqs";
import { ChevronDownIcon, CircleQuestionMarkIcon } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

export default function FaqSection() {
    const [openIndex, setOpenIndex] = useState(0);

    const handleToggle = (index: number) => {
        setOpenIndex((current) => (current === index ? -1 : index));
    };

    return (
        <section id="faq" className="border-y border-gray-200">
            <div className="px-4 md:px-16 lg:px-24 xl:px-32">
                <div className="p-4 pt-20 md:p-20 flex flex-col items-center max-w-7xl mx-auto justify-center border-x border-gray-200">
                    <SectionTitle
                        icon={CircleQuestionMarkIcon}
                        title="Questions, answered"
                        subtitle="Everything you need to know about working with NUYsDev — process, timelines and deliverables."
                    />
                </div>
            </div>
            <div className="px-4 md:px-16 lg:px-24 xl:px-32 border-t border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-2 divide-x divide-gray-200 border-x border-gray-200 max-w-7xl mx-auto">
                    <div className="p-4 pt-20 md:p-20 space-y-6">
                        {faqs.map((faq, index) => (
                            <AnimatedContent key={index}>
                                <div className="group bg-gray-50 border border-gray-200 rounded-xl overflow-hidden">
                                    <button
                                        type="button"
                                        aria-expanded={openIndex === index}
                                        className="flex items-center justify-between p-6 w-full text-left select-none"
                                        onClick={() => handleToggle(index)}
                                    >
                                        <h3 className="font-medium text-base">{faq.question}</h3>
                                        <motion.span
                                            animate={{ rotate: openIndex === index ? 180 : 0 }}
                                            transition={{ duration: 0.25, ease: "easeOut" }}
                                        >
                                            <ChevronDownIcon size={20} />
                                        </motion.span>
                                    </button>
                                    <AnimatePresence initial={false}>
                                        {openIndex === index && (
                                            <motion.div
                                                key="content"
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3, ease: "easeOut" }}
                                                className="overflow-hidden"
                                            >
                                                <motion.p
                                                    initial={{ y: -6, opacity: 0 }}
                                                    animate={{ y: 0, opacity: 1 }}
                                                    exit={{ y: -6, opacity: 0 }}
                                                    transition={{ duration: 0.2, ease: "easeOut" }}
                                                    className="text-sm/6 text-zinc-500 max-w-md p-6 pt-0"
                                                >
                                                    {faq.answer}
                                                </motion.p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </AnimatedContent>
                        ))}
                    </div>
                    <div className="p-4 pt-20 md:p-20">
                        <div className="sticky top-24 flex items-center justify-between gap-5 p-6 bg-linear-to-tl from-orange-600 to-orange-500 w-full rounded-xl">
                            <h3 className="text-lg text-white text-balance">
                                Still have questions? Our team can help you get started.
                            </h3>

                            <a
                                href="https://wa.me/8801795408194"
                                target="_blank"
                                rel="noreferrer"
                                className="bg-white w-max shrink-0 hover:bg-gray-100 px-5 py-2 rounded-full"
                            >
                                Book now
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}