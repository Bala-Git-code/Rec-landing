import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { cn } from '../lib/utils';

const FAQ = () => {
    return (
        <section className="py-24 lg:py-32 bg-white">
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
                                staggerChildren: 0.1
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

    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 }
            }}
            className={cn(
                "border-b border-gray-100 transition-all duration-300",
                isOpen ? "pb-6" : "pb-0"
            )}
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full py-6 flex items-start justify-between text-left group"
            >
                <span className={cn(
                    "text-lg md:text-xl font-medium transition-colors duration-300 pr-8",
                    isOpen ? "text-primary" : "text-text-primary group-hover:text-primary/80"
                )}>
                    {question}
                </span>
                <span className={cn(
                    "flex-shrink-0 ml-4 rounded-full p-1 transition-all duration-300",
                    isOpen ? "bg-primary text-white rotate-180" : "bg-secondary-bg text-text-primary group-hover:bg-primary/10"
                )}>
                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                </span>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                        className="overflow-hidden"
                    >
                        <div className="text-text-muted text-lg leading-relaxed max-w-2xl pl-4 border-l-2 border-primary/20">
                            {answer}
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
