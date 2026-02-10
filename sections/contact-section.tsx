"use client";

import AnimatedContent from "@/components/animated-content";
import SectionTitle from "@/components/section-title";
import { MailCheckIcon } from "lucide-react";
import { useState, type FormEvent } from "react";

export default function ContactSection() {
    const web3formsKey = "0ca28e8c-6867-4ce5-8861-4ba7ca75ba8b";
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsSubmitting(true);
        setSubmitError(null);

        const form = event.currentTarget;
        const formData = new FormData(form);
        formData.append("access_key", web3formsKey);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            });
            const result = await response.json();

            if (result.success) {
                form.reset();
                window.location.assign("/thank-you");
                return;
            }
            setSubmitError("Submission failed. Please try again.");
        } catch (error) {
            setSubmitError("Submission failed. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="border-b border-gray-200 px-4 md:px-16 lg:px-24 xl:px-32">
            <div className="p-4 pt-20 md:p-20 flex flex-col items-center max-w-7xl mx-auto justify-center border-x border-gray-200">
                <SectionTitle
                    icon={MailCheckIcon}
                    title="Let’s collaborate"
                    subtitle="Share your project idea, timeline or role needs. I’ll reply within 1–2 business days."
                />

                <AnimatedContent className="w-full max-w-3xl mt-14">
                    <form
                        className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-8 rounded-2xl border border-gray-200 shadow-[0_6px_24px_rgba(0,0,0,0.06)]"
                        onSubmit={handleSubmit}
                    >
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-medium text-zinc-700" htmlFor="name">Full name</label>
                            <input
                                id="name"
                                name="name"
                                placeholder="Your name"
                                className="h-11 rounded-xl border border-gray-200 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-orange-200"
                                required
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-medium text-zinc-700" htmlFor="email">Email</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="you@company.com"
                                className="h-11 rounded-xl border border-gray-200 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-orange-200"
                                required
                            />
                        </div>
                        <div className="flex flex-col gap-2 md:col-span-2">
                            <label className="text-sm font-medium text-zinc-700" htmlFor="subject">Subject</label>
                            <input
                                id="subject"
                                name="subject"
                                placeholder="Project inquiry"
                                className="h-11 rounded-xl border border-gray-200 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-orange-200"
                                required
                            />
                        </div>
                        <div className="flex flex-col gap-2 md:col-span-2">
                            <label className="text-sm font-medium text-zinc-700" htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows={5}
                                placeholder="Share details about your request..."
                                className="rounded-xl border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-200"
                                required
                            />
                        </div>
                        <div className="md:col-span-2">
                            {submitError && (
                                <p className="text-sm text-red-500 mb-3">{submitError}</p>
                            )}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full md:w-auto px-8 py-3 rounded-full bg-linear-to-tl from-orange-600 to-orange-500 text-white"
                            >
                                {isSubmitting ? "Sending..." : "Send message"}
                            </button>
                        </div>
                    </form>
                </AnimatedContent>
            </div>
        </section>
    );
}
