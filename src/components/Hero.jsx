import React, { useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Button from './ui/Button';
import { cn } from '../lib/utils'; // Assuming cn is available, typically is. If not, I'll stick to template literals or simple strings. The view_file showed utils.js has cn.

const Hero = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end start"]
    });

    const yBackground = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
    const opacityContent = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    // Subtle ambient particles - Reduced count for performance/calmness
    const particles = Array.from({ length: 12 }).map((_, i) => ({
        id: i,
        size: Math.random() < 0.5 ? 2 : 3,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: 0.1 + Math.random() * 0.2,
        duration: 25 + Math.random() * 10,
    }));

    // Cycling Text Logic
    const [wordIndex, setWordIndex] = React.useState(0);
    const words = ["Faster", "Smarter", "Better"];

    React.useEffect(() => {
        const interval = setInterval(() => {
            setWordIndex((prev) => (prev + 1) % words.length);
        }, 2500);
        return () => clearInterval(interval);
    }, []);

    return (
        <section
            ref={targetRef}
            className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden min-h-screen flex items-center justify-center bg-secondary-bg"
        >
            {/* Background Layer: z-0 */}
            <motion.div
                style={{ y: yBackground }}
                className="absolute inset-0 z-0 bg-gradient-to-br from-[#EFF6FF] via-[#E0F2FE] to-[#DBEAFE] opacity-70"
            />

            {/* Lively Background Blobs */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 90, 0],
                    x: [0, 50, 0]
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-300/20 rounded-full blur-[100px] pointer-events-none"
            />
            <motion.div
                animate={{
                    scale: [1, 1.1, 1],
                    x: [0, -30, 0],
                    y: [0, 50, 0]
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] bg-blue-300/20 rounded-full blur-[100px] pointer-events-none"
            />

            {/* Ambient Particles: z-0 */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                {particles.map((p) => (
                    <motion.div
                        key={p.id}
                        className="absolute bg-primary rounded-full"
                        style={{
                            width: p.size,
                            height: p.size,
                            left: `${p.x}%`,
                            top: `${p.y}%`,
                            opacity: p.opacity,
                        }}
                        animate={{
                            y: [0, -100, 0],
                        }}
                        transition={{
                            duration: p.duration,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    />
                ))}
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Left Column: Text Content - z-10 */}
                    <motion.div
                        style={{ opacity: opacityContent }}
                        className="relative z-10 text-center lg:text-left flex flex-col items-center lg:items-start"
                    >
                        {/* Decorative Label */}
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="inline-flex items-center px-3 py-1 rounded-full bg-white/50 border border-white/60 shadow-sm backdrop-blur-sm mb-8"
                        >
                            <span className="w-2 h-2 rounded-full bg-success mr-2 animate-pulse"></span>
                            <span className="text-sm font-medium text-text-muted">AI-Powered Recruiting</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.12 }}
                            className="text-5xl md:text-6xl lg:text-[72px] font-bold tracking-tight text-text-primary mb-8 leading-[1.1]"
                        >
                            Every Hire, <br className="hidden lg:block" />
                            <span className="relative inline-block min-w-[280px]">
                                <AnimatePresence mode="wait">
                                    <motion.span
                                        key={words[wordIndex]}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ duration: 0.3 }}
                                        className="text-primary block"
                                    >
                                        {words[wordIndex]}
                                    </motion.span>
                                </AnimatePresence>
                                {/* Creative Underline */}
                                <motion.svg
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
                                    className="absolute -bottom-2 lg:-bottom-4 left-0 w-full h-3 lg:h-4 text-accent-1 opacity-60"
                                    viewBox="0 0 200 9"
                                    fill="none"
                                >
                                    <path d="M2.00018 7.00005C39.9176 2.76618 102.544 -1.33405 197.946 2.50391" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                                </motion.svg>
                            </span>
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.24 }}
                            className="relative"
                        >
                            <div className="absolute -left-6 top-0 w-1 h-full bg-gradient-to-b from-primary/0 via-primary/30 to-primary/0 hidden lg:block" />
                            <p className="text-xl md:text-[22px] text-text-muted mb-10 leading-relaxed max-w-2xl lg:max-w-xl">
                                Stop losing great candidates to slow, manual hiring processes. Let AI handle the heavy lifting while you focus on building your team.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                        >
                            <Button variant="primary" className="h-14 px-8 text-lg w-full sm:w-auto">
                                Start Hiring Smarter
                            </Button>
                            <Button variant="secondary" className="h-14 px-8 text-lg w-full sm:w-auto bg-white/80 backdrop-blur border border-white hover:bg-white">
                                See How It Works
                            </Button>
                        </motion.div>
                    </motion.div>

                    {/* Right Column: Dynamic Visual Composition - z-20 */}
                    <div className="relative mt-16 lg:mt-0 lg:h-[600px] w-full perspective-1000 z-20 flex flex-col items-center lg:block">
                        {/* Abstract Background Shape - z-0 relative to this container */}
                        <motion.div
                            animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] bg-gradient-to-tr from-accent-1/30 to-accent-2/30 rounded-full blur-3xl z-[-1]"
                        />

                        {/* Card Container */}
                        <div className="relative w-full h-full flex flex-col gap-6 lg:block">
                            {/* Card 1: Top-Right (Outer) */}
                            <FloatingCard
                                quote="Candidates wait 3 weeks for replies. We're losing great talent."
                                author="Sarah K., Founder"
                                type="problem"
                                className="lg:absolute lg:top-[5%] lg:-right-4 max-w-sm z-20"
                                delay={0.6}
                                floatDuration={7}
                            />

                            {/* Card 2: Top-Right (Inner) */}
                            <FloatingCard
                                quote="Posted on LinkedIn. Got 200 applications. Hired on gut feeling."
                                author="Rahul M., Manager"
                                type="problem"
                                className="lg:absolute lg:top-[29%] lg:right-[15%] max-w-sm z-10"
                                delay={0.8}
                                floatDuration={8}
                            />

                            {/* Card 3: Bottom-Right (Outer) */}
                            <FloatingCard
                                quote="Our best candidate accepted another offer while we were scheduling."
                                author="Amit T., HR Head"
                                type="problem"
                                className="lg:absolute lg:top-[53%] lg:-right-8 max-w-sm z-20 block"
                                delay={1.0}
                                floatDuration={6.5}
                            />

                            {/* Card 4: Bottom-Right (Inner) - Replaces the Solution Card */}
                            <FloatingCard
                                quote="We reduced our time-to-hire by 50% using RecruiterAI."
                                author="Jason L., VP of People"
                                type="solution"
                                className="lg:absolute lg:top-[77%] lg:right-[10%] max-w-sm z-10 block"
                                delay={1.2}
                                floatDuration={7.5}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const FloatingCard = ({ quote, author, className, delay, type, floatDuration = 7 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{
                opacity: 1,
                y: [0, -6, 0]
            }}
            whileHover={{
                y: -10,
                boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
                transition: { duration: 0.3 }
            }}
            transition={{
                opacity: { duration: 0.6, delay, ease: "easeOut" },
                y: {
                    repeat: Infinity,
                    duration: floatDuration,
                    ease: "easeInOut",
                    times: [0, 0.5, 1],
                    // Random delay to desynchronize float
                    delay: Math.random() * 2
                }
            }}
            className={`w-full bg-white/60 backdrop-blur-md p-5 rounded-xl shadow-lg border border-white/60 ${className}`}
        >
            <div className="flex gap-3 mb-2">
                <div className={`w-2 h-2 rounded-full ${type === 'problem' ? 'bg-error/60' : 'bg-success/60'}`} />
                <div className={`w-2 h-2 rounded-full bg-gray-200`} />
                <div className={`w-2 h-2 rounded-full bg-gray-200`} />
            </div>
            <p className="text-sm text-text-priority leading-snug font-medium text-gray-800">"{quote}"</p>
            <p className="text-xs text-text-muted mt-3 font-medium">— {author}</p>
        </motion.div>
    );
};

export default Hero;
