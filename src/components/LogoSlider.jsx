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
                        <div key={index} className="mx-8 flex items-center justify-center min-w-[200px]">
                            {/* Placeholder for Logos - Text styled to look like logos */}
                            <span className="text-2xl md:text-3xl font-bold text-gray-300 hover:text-gray-900 transition-colors duration-300 cursor-default select-none grayscale hover:grayscale-0 hover:scale-115 transform block">
                                {logo}
                            </span>
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
