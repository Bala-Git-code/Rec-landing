import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Button from './ui/Button';

const Hero = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end start"]
    });

    const yBackground = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacityContent = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    // Particle Configuration
    const particles = Array.from({ length: 30 }).map((_, i) => ({
        id: i,
        size: Math.random() < 0.4 ? 4 : Math.random() < 0.8 ? 6 : 8,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: 0.1 + Math.random() * 0.2, // 10-30%
        blur: Math.random() > 0.5 ? 2 : 0,
        duration: 8 + Math.random() * 7, // 8-15s
        delay: Math.random() * 5
    }));

    return (
        <section
            ref={targetRef}
            className="relative pt-32 pb-24 lg:pt-48 lg:pb-40 overflow-hidden min-h-screen flex items-center justify-center"
        >
            {/* Animated Gradient Background + Parallax */}
            <motion.div
                style={{ y: yBackground }}
                className="absolute inset-0 z-0 bg-gradient-to-br from-[#EFF6FF] via-[#E0F2FE] to-[#DBEAFE] bg-[length:200%_200%] animate-gradient-shift"
            />

            {/* Floating Particles */}
            {particles.map((p) => (
                <motion.div
                    key={p.id}
                    className="absolute bg-primary rounded-full pointer-events-none"
                    style={{
                        width: p.size,
                        height: p.size,
                        left: `${p.x}%`,
                        top: `${p.y}%`,
                        opacity: p.opacity,
                        filter: `blur(${p.blur}px)`,
                    }}
                    animate={{
                        x: [0, 100, -100, 0], // Simplified random movement simulation
                        y: [0, -100, 100, 0],
                    }}
                    transition={{
                        duration: p.duration,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: p.delay
                    }}
                />
            ))}

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center w-full">
                <motion.div style={{ opacity: opacityContent }}>

                    {/* H1 Headline */}
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                        className="text-5xl md:text-6xl lg:text-[60px] font-bold tracking-tight text-text-primary mb-6 leading-[1.2] max-w-4xl mx-auto"
                    >
                        Every Hire, <br className="hidden sm:block" />
                        <span className="text-primary">Faster and Better</span>
                    </motion.h1>

                    {/* Subheadline */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
                        className="mt-4 text-xl md:text-[20px] text-text-muted max-w-2xl mx-auto mb-10 leading-relaxed"
                    >
                        Stop losing great candidates to slow, manual hiring processes. Let AI handle the heavy lifting while you focus on building your team.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.6 }}
                        className="flex flex-col sm:flex-row justify-center items-center gap-4"
                    >
                        <Button variant="primary" className="w-full sm:w-auto">
                            Start Hiring Smarter
                        </Button>
                        <Button variant="secondary" className="w-full sm:w-auto">
                            See How It Works
                        </Button>
                    </motion.div>
                </motion.div>
            </div>

            {/* Conversation Cards - Desktop Only */}
            <div className="hidden lg:block">
                {/* Card 1: Top Left */}
                <FloatingCard
                    quote="Candidates wait 3 weeks for replies while I'm juggling everything. We're losing great talent to competitors."
                    author="Sarah K., Founder at TechStart"
                    className="top-[160px] left-[5%]"
                    delay={0.3}
                />

                {/* Card 2: Top Right */}
                <FloatingCard
                    quote="Posted on LinkedIn. Got 200 applications. Skimmed through 20. Hired on gut feeling. They quit in 2 months."
                    author="Rahul M., Hiring Manager at GrowthCo"
                    className="top-[160px] right-[5%]"
                    delay={0.5}
                />

                {/* Card 3: Bottom Left */}
                <FloatingCard
                    quote="I'm the CEO, product lead, AND now doing HR? There's zero time to read 200 resumes properly."
                    author="Priya S., CEO at InnovateLabs"
                    className="bottom-[160px] left-[8%]"
                    delay={0.7}
                />

                {/* Card 4: Bottom Right */}
                <FloatingCard
                    quote="Our best candidate accepted another offer while we were still scheduling interviews. This keeps happening."
                    author="Amit T., Head of HR at ScaleUp"
                    className="bottom-[160px] right-[8%]"
                    delay={0.9}
                />
            </div>
        </section>
    );
};

// Reusable Floating Card Component
const FloatingCard = ({ quote, author, className, delay }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{
                opacity: 1,
                scale: 1,
                y: [0, -10, 0] // Continuous float
            }}
            transition={{
                // Entrance
                opacity: { duration: 0.8, delay, ease: "easeOut" },
                scale: { duration: 0.8, delay, ease: "easeOut" },
                // Float loop
                y: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: delay + 0.8 // Start floating after entrance
                }
            }}
            className={`absolute w-[300px] bg-white/90 backdrop-blur-md p-6 rounded-3xl shadow-xl border border-white/50 z-20 ${className}`}
        >
            <p className="text-base text-text-primary leading-snug font-medium">"{quote}"</p>
            <p className="text-sm text-text-muted mt-4 italic font-medium">— {author}</p>
        </motion.div>
    );
};

export default Hero;
