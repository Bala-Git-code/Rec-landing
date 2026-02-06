import React, { useState } from 'react';
import { cn } from '../lib/utils';

const LogoSlider = () => {
    const [isPaused, setIsPaused] = useState(false);

    const logos = [
        "LinkedIn", "Naukri.com", "Indeed", "AngelList", "Instahyre",
        "Wellfound", "IIMJobs", "Glassdoor", "Monster India", "Cutshort"
    ];

    return (
        <section className="py-20 lg:py-32 bg-white overflow-hidden border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
                <h2 className="text-4xl lg:text-5xl font-bold text-text-primary mb-4">Post Once, Reach Everywhere</h2>
                <p className="text-xl text-text-muted">RecruiterAI automatically syncs your job postings across all major platforms</p>
            </div>

            <div
                className="relative flex overflow-hidden w-full"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                {/* Gradient Masks */}
                <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-40 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-40 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none" />

                {/* Slider Container */}
                <div
                    className={cn(
                        "flex whitespace-nowrap",
                        isPaused ? "animate-none" : "animate-scroll-infinite"
                    )}
                    style={{ animationDuration: '40s', animationTimingFunction: 'linear' }}
                >
                    {/* Double the logos to create seamless loop - EXACTLY 2 sets for 50% translation */}
                    {[...logos, ...logos].map((logo, index) => (
                        <div key={index} className="mx-6 flex items-center justify-center min-w-[180px]">
                            {/* Interactive "Logo Pill" */}
                            <div className="group relative cursor-pointer perspective-1000">
                                <div className="relative px-8 py-4 bg-gray-50 rounded-2xl border border-gray-100 shadow-sm transition-all duration-300 group-hover:shadow-xl group-hover:scale-110 group-hover:-translate-y-1 group-hover:bg-white group-hover:border-primary/20">
                                    <span className="text-xl md:text-2xl font-bold text-gray-400 group-hover:text-primary transition-colors duration-300 select-none block transform group-hover:rotate-x-12">
                                        {logo}
                                    </span>
                                    {/* Shine effect */}
                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/0 via-white/50 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Styles for animation needed in index.css if not already there, 
                but we added animate-scroll-infinite to index.css earlier */}
        </section>
    );
};

export default LogoSlider;
