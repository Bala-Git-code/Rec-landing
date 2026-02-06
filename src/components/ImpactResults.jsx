import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { cn } from '../lib/utils';

const ImpactResults = () => {
    return (
        <section className="py-20 lg:py-32 bg-secondary-bg overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-text-primary mb-4"
                    >
                        The RecruiterAI Advantage
                    </motion.h2>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {statsData.map((stat, index) => (
                        <StatCard key={index} stat={stat} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const statsData = [
    { value: 10, suffix: 'x', label: 'Faster Screening', desc: 'AI parses and ranks 250+ applications per day vs 25 manually' },
    { value: 70, suffix: '%', label: 'Faster Time-to-Hire', desc: 'Average hiring timeline drops from 42 days to just 12 days' },
    { value: 25, suffix: 'x', label: 'More Interview Capacity', desc: 'AI conducts 200+ automated screening interviews daily' },
    { value: 95, suffix: '%', label: 'Application Completion', desc: 'Smart application forms reduce candidate drop-off dramatically' },
    { value: 89, suffix: '%', label: 'More Qualified Applications', desc: 'AI job description optimizer attracts higher-quality pipelines' },
    { value: 80, suffix: '%', label: 'Lower Recruitment Costs', desc: 'vs traditional recruiting agencies and multiple subscriptions' },
    { value: 50, suffix: '%', label: 'Reduction in Bad Hires', desc: 'AI skills assessment and matching improves hiring accuracy' },
];

const StatCard = ({ stat, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateX: 45, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, rotateX: 0, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
            whileHover={{ y: -4 }}
            className={cn(
                "bg-white rounded-3xl p-8 border border-gray-100 shadow-sm group hover:shadow-2xl hover:shadow-blue-500/10 hover:border-blue-500/20 transition-all duration-300 transform preserve-3d",
                index >= 4 ? "lg:col-span-1" : "" // Just standard grid layout
            )}
        >
            <div className="flex flex-col h-full transition-transform duration-300">
                <Counter value={stat.value} suffix={stat.suffix} />
                <h3 className="text-xl font-bold text-text-primary mt-4 mb-2">{stat.label}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{stat.desc}</p>
            </div>
        </motion.div>
    );
};

const Counter = ({ value, suffix }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { damping: 50, stiffness: 100 });
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue]);

    useEffect(() => {
        return springValue.on("change", (latest) => {
            setDisplayValue(Math.floor(latest));
        });
    }, [springValue]);

    return (
        <span ref={ref} className="text-5xl md:text-6xl font-bold text-primary block">
            {displayValue}{suffix}
        </span>
    );
};

export default ImpactResults;
