import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { cn } from '../lib/utils';

const Testimonials = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [direction, setDirection] = useState(0); // -1 for left, 1 for right

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

    useEffect(() => {
        if (isPaused) return;
        const interval = setInterval(() => {
            nextTestimonial();
        }, 5000);
        return () => clearInterval(interval);
    }, [activeIndex, isPaused]);

    const nextTestimonial = () => {
        setDirection(1);
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setDirection(-1);
        setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const handleDotClick = (index) => {
        setDirection(index > activeIndex ? 1 : -1);
        setActiveIndex(index);
    };

    const variants = {
        enter: (direction) => ({
            rotateY: direction > 0 ? -180 : 180,
            opacity: 0,
            scale: 0.8,
        }),
        center: {
            rotateY: 0,
            opacity: 1,
            scale: 1,
            transition: { duration: 0.6, ease: "easeOut" }
        },
        exit: (direction) => ({
            rotateY: direction > 0 ? 180 : -180,
            opacity: 0,
            scale: 0.8,
            transition: { duration: 0.6, ease: "easeIn" }
        })
    };

    return (
        <section className="py-20 lg:py-32 bg-secondary-bg overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-16">
                    What Our Customers Say
                </h2>

                <div
                    className="relative max-w-4xl mx-auto perspective-1000 min-h-[400px] flex items-center justify-center"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    <AnimatePresence initial={false} custom={direction} mode="wait">
                        <motion.div
                            key={activeIndex}
                            custom={direction}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            className="bg-white rounded-3xl p-8 md:p-14 shadow-2xl shadow-blue-900/5 border border-white/50 backface-hidden w-full absolute top-0 overflow-hidden"
                            style={{ transformStyle: 'preserve-3d' }}
                        >
                            {/* Decorative Quote Mark */}
                            <div className="absolute top-6 left-8 opacity-5 text-primary">
                                <Quote size={120} />
                            </div>

                            <div className="flex flex-col items-center relative z-10">
                                <p className="text-2xl md:text-3xl text-text-primary italic leading-relaxed mb-8 font-medium">
                                    "{testimonials[activeIndex].quote}"
                                </p>
                                <div className="text-lg md:text-xl font-medium text-text-muted">
                                    — {testimonials[activeIndex].author}, {testimonials[activeIndex].title}, <span className="text-primary font-bold">{testimonials[activeIndex].company}</span>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Controls */}
                <div className="flex items-center justify-center gap-8 mt-12 z-10 relative">
                    <button
                        onClick={prevTestimonial}
                        className="bg-white hover:bg-primary text-text-primary hover:text-white p-3 rounded-full shadow-md transition-all duration-300"
                    >
                        <ChevronLeft size={24} />
                    </button>

                    <div className="flex gap-3">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => handleDotClick(index)}
                                className={cn(
                                    "transition-all duration-300 rounded-full h-2",
                                    activeIndex === index ? "w-8 bg-primary" : "w-2 bg-gray-300 hover:bg-primary/50"
                                )}
                            />
                        ))}
                    </div>

                    <button
                        onClick={nextTestimonial}
                        className="bg-white hover:bg-primary text-text-primary hover:text-white p-3 rounded-full shadow-md transition-all duration-300"
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
