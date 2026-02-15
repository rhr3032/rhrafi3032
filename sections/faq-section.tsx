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
                        subtitle="Everything you need to know about working with me — process, timelines and deliverables."
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
                                href="https://wa.me/8801795408194?text=Hi%2C%20I%20would%20like%20to%20book%20a%20call%20to%20get%20started."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white w-max shrink-0 hover:bg-gray-100 px-5 py-2 rounded-full flex items-center gap-2"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="20" height="20"><path fill="#25D366" d="M16 3C9.373 3 4 8.373 4 15c0 2.637.86 5.08 2.34 7.09L4 29l7.18-2.29A12.94 12.94 0 0 0 16 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22c-1.98 0-3.89-.52-5.54-1.5l-.39-.23-4.27 1.36 1.4-4.15-.25-.4A9.94 9.94 0 0 1 6 15c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10zm5.07-7.75c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.4-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.12-.12.28-.32.42-.48.14-.16.18-.28.28-.46.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.54-.45-.47-.61-.48-.16-.01-.34-.01-.52-.01-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.3s.98 2.67 1.12 2.85c.14.18 1.93 2.95 4.68 4.02.65.28 1.16.45 1.56.58.65.21 1.24.18 1.7.11.52-.08 1.65-.67 1.88-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.18-.52-.32z"/></svg>
                                Book Now
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}