'use client';

import AnimatedContent from "@/components/animated-content";
import SectionTitle from "@/components/section-title";
import { pricing } from "@/data/pricing";
import NumberFlow from "@number-flow/react";
import { CheckIcon, CircleDollarSignIcon } from "lucide-react";
import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "motion/react";

export default function PricingSection() {
    const web3formsKey = "0ca28e8c-6867-4ce5-8861-4ba7ca75ba8b";
    const [planType, setPlanType] = useState<'monthly' | 'yearly'>('monthly');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);

    const handleOpenModal = (planName: string) => {
        setSelectedPlan(planName);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedPlan(null);
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsSubmitting(true);
        setSubmitError(null);

        const form = event.currentTarget;
        const formData = new FormData(form);
        formData.append("access_key", web3formsKey);
        if (selectedPlan) {
            formData.set("plan", selectedPlan);
            formData.set("subject", `Pricing inquiry - ${selectedPlan}`);
        }

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            });
            const result = await response.json();

            if (result.success) {
                handleCloseModal();
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
        <section id="pricing" className="border-b border-gray-200 px-4 md:px-16 lg:px-24 xl:px-32">
            <div className="p-4 pt-20 pb-20 md:p-20 flex flex-col items-center max-w-7xl mx-auto justify-center border-x border-gray-200">
                <div className="scale-95 sm:scale-100">
                    <SectionTitle
                        icon={CircleDollarSignIcon}
                        title="Choose a plan"
                        subtitle="Get started with flexible pricing plans. Whether you need ongoing support or a one-time project, I've got you covered."
                    />
                </div>
                <AnimatedContent className="p-1 mt-10 border border-orange-200 bg-orange-50 rounded-full">
                    <button
                        className={`px-6 py-2 rounded-full cursor-pointer ${planType === 'monthly' ? 'bg-orange-500 text-white' : 'text-orange-500'}`}
                        onClick={() => setPlanType('monthly')}
                    >
                        Retainer
                    </button>
                    <button
                        className={`relative px-6 py-2 rounded-full cursor-pointer ${planType === 'yearly' ? 'bg-orange-500 text-white' : 'text-orange-500'}`}
                        onClick={() => setPlanType('yearly')}
                    >
                        Fixed Scope
                        <span className="absolute -top-8 -right-8 rotate-15 bg-green-100 rounded-full px-2 py-1 text-xs text-green-500">
                            20% OFF
                        </span>
                    </button>
                </AnimatedContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-stretch gap-6 mt-12">
                    {pricing.map((plan, index) => (
                        <AnimatedContent delay={index * 0.10} key={index} className={`p-5 pb-8 h-full flex flex-col rounded-xl border border-gray-200 ${plan.type === 'enterprise' ? 'bg-orange-500 text-white' : plan.type === 'popular' ? 'bg-linear-to-br from-orange-50 to-orange-100' : 'bg-white'}`}>
                            <div className={`w-max border border-gray-200 p-2 aspect-square rounded-lg ${plan.type === 'enterprise' ? 'text-white' : 'text-orange-500 bg-white'}`}>
                                <plan.icon size={24} />
                            </div>
                            <h3 className="text-base font-medium mt-6">{plan.name}</h3>
                            <p className={`text-sm ${plan.type === 'enterprise' ? 'text-white' : 'text-zinc-500'}`}>
                                {plan.description}
                            </p>
                            <NumberFlow
                                value={planType === 'monthly' ? plan.price : Math.floor(plan.price - plan.price * 0.2)}
                                className="text-2xl font-semibold mt-4"
                                suffix="/mo"
                                prefix="$"
                            />
                            {plan.type === 'enterprise' ? (
                                <a
                                    href="mailto:contact.raisulrafi@gmail.com"
                                    className="relative z-10 block text-center py-2.5 rounded-full mt-6 text-sm border bg-white text-orange-600 border-white cursor-pointer transition hover:-translate-y-0.5"
                                >
                                    {plan.linkText}
                                </a>
                            ) : (
                                <button
                                    type="button"
                                    onClick={() => handleOpenModal(plan.name)}
                                    className="relative z-10 block text-center py-2.5 rounded-full mt-6 text-sm border text-zinc-600 bg-gray-50 border-gray-200 cursor-pointer transition hover:-translate-y-0.5"
                                >
                                    {plan.linkText}
                                </button>
                            )}
                            <div className="space-y-2 mt-6 flex-1">
                                {plan.features.map((feature, index) => (
                                    <div key={index} className="flex items-center gap-2">
                                        <CheckIcon className={`size-4 ${plan.type === 'enterprise' ? 'text-white' : 'text-orange-500'}`} />
                                        <p className={`text-sm ${plan.type === 'enterprise' ? 'text-white' : 'text-zinc-500'}`}>
                                            {feature}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </AnimatedContent>
                    ))}
                </div>
            </div>
            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <motion.div
                            className="w-full max-w-xl rounded-2xl bg-white p-6 shadow-2xl"
                            initial={{ opacity: 0, y: 20, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 20, scale: 0.98 }}
                            transition={{ duration: 0.25, ease: "easeOut" }}
                        >
                        <div className="flex items-start justify-between gap-4">
                            <div>
                                <h3 className="text-lg font-semibold text-zinc-900">Project requirement</h3>
                                <p className="text-sm text-zinc-500">
                                    Share the details so I can understand your scope and timeline.
                                </p>
                            </div>
                            <button
                                type="button"
                                onClick={handleCloseModal}
                                className="text-sm text-zinc-500 hover:text-zinc-800"
                                aria-label="Close"
                            >
                                Close
                            </button>
                        </div>
                        <form className="mt-6 grid grid-cols-1 gap-4" onSubmit={handleSubmit}>
                            <input type="hidden" name="plan" value={selectedPlan ?? ""} />
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Full name"
                                    required
                                    className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm"
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email address"
                                    required
                                    className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm"
                                />
                            </div>
                            <input
                                type="text"
                                name="company"
                                placeholder="Company or product"
                                className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm"
                            />
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    name="budget"
                                    placeholder="Estimated budget (USD)"
                                    className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm"
                                />
                                <input
                                    type="text"
                                    name="timeline"
                                    placeholder="Timeline"
                                    className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm"
                                />
                            </div>
                            <textarea
                                name="requirements"
                                rows={4}
                                placeholder={`Project requirements${selectedPlan ? ` for ${selectedPlan}` : ''}`}
                                className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm"
                            />
                            {submitError && (
                                <p className="text-sm text-red-500">{submitError}</p>
                            )}
                            <div className="flex flex-col sm:flex-row gap-3 sm:justify-end">
                                <button
                                    type="button"
                                    onClick={handleCloseModal}
                                    className="rounded-full border border-gray-200 px-5 py-2.5 text-sm text-zinc-600"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="rounded-full bg-orange-500 px-5 py-2.5 text-sm text-white"
                                >
                                    {isSubmitting ? "Sending..." : "Send request"}
                                </button>
                            </div>
                        </form>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    )
}