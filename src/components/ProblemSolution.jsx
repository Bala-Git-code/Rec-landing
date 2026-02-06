import React from 'react';

const ProblemSolution = () => {
    const steps = [
        {
            title: "The Old Way",
            description: "Drowning in resumes, manual screening, and endless back-and-forth emails.",
            icon: (
                <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            type: "problem"
        },
        {
            title: "The RecruiterAI Way",
            description: "Instant AI screening, automated scheduling, and top 1% candidates delivered.",
            icon: (
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
            type: "solution"
        }
    ];

    return (
        <section className="py-24 bg-white" id="how-it-works">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Hiring shouldn't feel like a burden.
                    </h2>
                    <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
                        We replaced the slow, manual parts of recruiting with intelligent automation.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 relative">
                    {/* Connector Line (Desktop) */}
                    <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                        <div className="w-12 h-12 bg-white rounded-full border border-gray-100 shadow-sm flex items-center justify-center">
                            <svg className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </div>
                    </div>

                    {/* Problem Card */}
                    <div className="group relative p-8 bg-muted/30 rounded-2xl border border-transparent hover:border-gray-200 transition-all duration-300">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <svg className="w-24 h-24 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
                            </svg>
                        </div>
                        <div className="relative z-10">
                            <div className="inline-flex items-center justify-center p-3 bg-white rounded-xl shadow-sm mb-6">
                                {steps[0].icon}
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">{steps[0].title}</h3>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                {steps[0].description}
                            </p>
                            <ul className="mt-6 space-y-3">
                                <li className="flex items-center text-gray-500">
                                    <span className="w-1.5 h-1.5 bg-red-400 rounded-full mr-2"></span>
                                    Avg. 45 days to hire
                                </li>
                                <li className="flex items-center text-gray-500">
                                    <span className="w-1.5 h-1.5 bg-red-400 rounded-full mr-2"></span>
                                    Buried in unqualified resumes
                                </li>
                                <li className="flex items-center text-gray-500">
                                    <span className="w-1.5 h-1.5 bg-red-400 rounded-full mr-2"></span>
                                    Manual scheduling hell
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Solution Card */}
                    <div className="group relative p-8 bg-primary-bg rounded-2xl border border-primary/10 hover:border-primary/30 shadow-sm hover:shadow-md transition-all duration-300">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <svg className="w-24 h-24 text-primary" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                            </svg>
                        </div>
                        <div className="relative z-10">
                            <div className="inline-flex items-center justify-center p-3 bg-primary text-white rounded-xl shadow-lg shadow-primary/30 mb-6">
                                {steps[1].icon}
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">{steps[1].title}</h3>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                {steps[1].description}
                            </p>
                            <ul className="mt-6 space-y-3">
                                <li className="flex items-center text-gray-700 font-medium">
                                    <svg className="w-4 h-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                    </svg>
                                    Avg. 5 days to hire
                                </li>
                                <li className="flex items-center text-gray-700 font-medium">
                                    <svg className="w-4 h-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                    </svg>
                                    AI-ranked candidates only
                                </li>
                                <li className="flex items-center text-gray-700 font-medium">
                                    <svg className="w-4 h-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                    </svg>
                                    Auto-pilot scheduling
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProblemSolution;
