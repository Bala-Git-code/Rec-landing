import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { cn } from '../lib/utils';

const Testimonials = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    // Auto-advance
    useEffect(() => {
        if (isPaused) return;
        const interval = setInterval(() => {
            nextTestimonial();
        }, 6000);
        return () => clearInterval(interval);
    }, [activeIndex, isPaused]);

    const nextTestimonial = () => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const testimonials = [
        {
            quote: "We went from 6 weeks to hire a developer to just 10 days. RecruiterAI handled everything from screening to scheduling. Game changer for our 5-person startup.",
            author: "Rahul Mehta",
            title: "Founder",
            company: "TechStart Solutions"
        },
        {
            quote: "Our HR team is finally focused on culture instead of admin. RecruiterAI handles the repetitive work flawlessly. It's like having an extra team member who never sleeps.",
            author: "Maya Patel",
            title: "HR Director",
            company: "ScaleUp Inc."
        },
        {
            quote: "The AI screening is incredibly accurate. We're only interviewing candidates who truly fit our needs. Our offer acceptance rate jumped from 60% to 92%.",
            author: "David Chen",
            title: "CTO",
            company: "TechFlow"
        }
    ];

    return (
        <section className="py-24 lg:py-32 bg-secondary-bg overflow-hidden relative">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-b from-white/80 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Column: Heading & Controls */}
                    <div className="text-left">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-bold text-text-primary mb-6 leading-tight"
                        >
                            Trusted by innovative teams <br />
                            <span className="text-primary">hiring for the future</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            viewport={{ once: true }}
                            className="text-xl text-text-muted mb-10 max-w-md"
                        >
                            Join hundreds of companies finding better talent faster with our AI-powered platform.
                        </motion.p>

                        {/* Desktop Controls */}
                        <div className="hidden lg:flex items-center gap-4">
                            <button
                                onClick={prevTestimonial}
                                className="bg-white hover:bg-white text-text-primary hover:text-primary border border-gray-200 hover:border-primary p-4 rounded-full shadow-sm hover:shadow-md transition-all duration-300"
                            >
                                <ChevronLeft size={24} />
                            </button>
                            <button
                                onClick={nextTestimonial}
                                className="bg-white hover:bg-white text-text-primary hover:text-primary border border-gray-200 hover:border-primary p-4 rounded-full shadow-sm hover:shadow-md transition-all duration-300"
                            >
                                <ChevronRight size={24} />
                            </button>
                        </div>
                    </div>

                    {/* Right Column: Cards Carousel */}
                    <div
                        className="relative min-h-[400px] flex items-center"
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                    >
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeIndex}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50, transition: { duration: 0.3 } }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                className="w-full"
                            >
                                <motion.div
                                    whileHover={{ y: -4, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" }}
                                    transition={{ duration: 0.2 }}
                                    className="bg-white p-8 md:p-12 rounded-[2rem] shadow-2xl shadow-blue-900/5 border border-white relative z-10 transition-shadow duration-300"
                                >
                                    <div className="flex gap-1 mb-8">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} size={20} className="fill-warning text-warning" />
                                        ))}
                                    </div>

                                    <p className="text-xl md:text-2xl text-text-primary leading-relaxed font-medium mb-10">
                                        "{testimonials[activeIndex].quote}"
                                    </p>

                                    <div className="flex items-center gap-4 border-t border-gray-100 pt-8">
                                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">
                                            {testimonials[activeIndex].author.charAt(0)}
                                        </div>
                                        <div>
                                            <div className="font-bold text-text-primary">{testimonials[activeIndex].author}</div>
                                            <div className="text-sm text-text-muted">
                                                {testimonials[activeIndex].title}, {testimonials[activeIndex].company}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Large Quote Icon Background */}
                                    <Quote size={180} className="absolute -top-10 -right-10 text-primary/5 -z-10 rotate-12" />
                                </motion.div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Mobile Controls (below card) */}
                        <div className="flex lg:hidden justify-center items-center gap-8 mt-8 w-full">
                            <button onClick={prevTestimonial} className="p-2 text-text-muted hover:text-primary"><ChevronLeft /></button>
                            <div className="flex gap-2">
                                {testimonials.map((_, i) => (
                                    <div key={i} className={`h-2 rounded-full transition-all ${i === activeIndex ? "w-6 bg-primary" : "w-2 bg-gray-300"}`}></div>
                                ))}
                            </div>
                            <button onClick={nextTestimonial} className="p-2 text-text-muted hover:text-primary"><ChevronRight /></button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
