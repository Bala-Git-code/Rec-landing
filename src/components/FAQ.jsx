import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { cn } from '../lib/utils';

const FAQ = () => {
    return (
        <section className="py-20 lg:py-32 bg-white perspective-1000">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold text-text-primary text-center mb-16"
                >
                    Frequently Asked Questions
                </motion.h2>

                <motion.div
                    className="space-y-4"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.15
                            }
                        }
                    }}
                >
                    {faqs.map((faq, index) => (
                        <FAQItem key={index} question={faq.question} answer={faq.answer} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    const variants = {
        hidden: { opacity: 0, y: 20, rotateX: -10 },
        visible: {
            opacity: 1,
            y: 0,
            rotateX: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15
            }
        }
    };

    return (
        <motion.div
            variants={variants}
            className={cn(
                "group rounded-xl overflow-hidden transition-all duration-500 transform preserve-3d",
                isOpen
                    ? "bg-white shadow-xl ring-1 ring-black/5 scale-[1.02] z-10"
                    : "bg-secondary-bg shadow-sm hover:shadow-md hover:scale-[1.01] hover:bg-gray-50 bg-opacity-80 backdrop-blur-sm"
            )}
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full px-8 py-6 flex items-center justify-between text-left relative z-10"
            >
                <span className={cn(
                    "text-lg md:text-xl font-bold transition-colors duration-300",
                    isOpen ? "text-primary" : "text-text-primary group-hover:text-primary"
                )}>
                    {question}
                </span>
                <motion.div
                    animate={{
                        rotate: isOpen ? 180 : 0,
                        backgroundColor: isOpen ? "var(--color-primary-bg)" : "transparent"
                    }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    className={cn(
                        "rounded-full p-2 transition-colors duration-300",
                        isOpen ? "text-primary" : "text-text-muted group-hover:text-primary"
                    )}
                >
                    <ChevronDown size={20} />
                </motion.div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0, rotateX: -15 }}
                        animate={{ height: "auto", opacity: 1, rotateX: 0 }}
                        exit={{ height: 0, opacity: 0, rotateX: -15 }}
                        transition={{
                            type: "spring",
                            stiffness: 150,
                            damping: 20,
                            mass: 0.8
                        }}
                        style={{ transformOrigin: "top" }}
                        className="overflow-hidden bg-white"
                    >
                        <div className="px-8 pb-8 pt-0 text-text-muted text-base leading-relaxed border-t border-dashed border-gray-100 mt-2">
                            <div className="pt-4">
                                {answer}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

const faqs = [
    {
        question: "How does AI screening work?",
        answer: "Our AI analyzes resumes, cover letters, and responses using natural language processing to rank candidates based on your custom criteria and job requirements. It learns from your hiring decisions to continuously improve accuracy."
    },
    {
        question: "Does RecruiterAI integrate with our existing ATS?",
        answer: "Yes, we integrate seamlessly with major ATS platforms including Greenhouse, Lever, Workday, and BambooHR via secure API connections. Setup typically takes less than 30 minutes with our integration wizard."
    },
    {
        question: "What's the pricing structure?",
        answer: "We offer flexible plans starting at $299/month for small teams (up to 10 monthly hires). Mid-market plans start at $799/month. Enterprise pricing is customized based on hiring volume and feature requirements. All plans include a 14-day free trial."
    },
    {
        question: "How long does setup take?",
        answer: "Most teams are fully operational within 24 hours. Our onboarding team helps you configure workflows, set up integrations, and train your team. You can start posting jobs immediately and customize as you go."
    },
    {
        question: "Is candidate data secure?",
        answer: "Absolutely. We're SOC 2 Type II certified and GDPR compliant. All candidate data is encrypted at rest (AES-256) and in transit (TLS 1.3). We never sell or share candidate information. You maintain full ownership and control of your data."
    }
];

export default FAQ;
