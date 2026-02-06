import React from 'react';

const WorkflowVisual = () => {
    return (
        <section className="py-24 bg-secondary-bg overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        The Operating System for Hiring
                    </h2>
                    <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
                        A complete pipeline that works 24/7.
                    </p>
                </div>

                {/* Stacked Visual Layer */}
                <div className="relative max-w-4xl mx-auto perspective-1000">
                    <div className="absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-primary-bg/50 to-transparent rounded-full blur-3xl -z-10"></div>

                    <div className="flex flex-col space-y-4">
                        {/* Layer 1: Sources */}
                        <div className="w-full bg-white border border-gray-200 rounded-xl p-6 shadow-sm flex items-center justify-between transform hover:scale-[1.01] transition-transform duration-300">
                            <div className="flex items-center space-x-4">
                                <div className="h-10 w-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-500">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900">Step 1: Intake & Sourcing</h4>
                                    <p className="text-sm text-gray-500">Aggregates from LinkedIn, Indeed, and Your Career Page</p>
                                </div>
                            </div>
                            <div className="flex -space-x-2">
                                <div className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white"></div>
                                <div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white"></div>
                                <div className="w-8 h-8 rounded-full bg-gray-400 border-2 border-white flex items-center justify-center text-[10px] text-white font-bold">+5</div>
                            </div>
                        </div>

                        {/* Arrow Down */}
                        <div className="flex justify-center -my-2 z-10">
                            <div className="bg-muted p-1 rounded-full border border-white shadow-sm">
                                <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                </svg>
                            </div>
                        </div>

                        {/* Layer 2: AI Processing (Highlighted) */}
                        <div className="w-full bg-primary-bg border border-primary/20 rounded-xl p-8 shadow-lg z-20 transform scale-[1.02] ring-1 ring-primary/30">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-4">
                                    <div className="h-12 w-12 bg-primary text-white rounded-lg flex items-center justify-center shadow-lg shadow-primary/30">
                                        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-gray-900">Step 2: AI Screening Engine</h4>
                                        <p className="text-primary font-medium">Analyzing experience, skills, and cultural fit...</p>
                                    </div>
                                </div>
                                <div className="hidden sm:flex space-x-2">
                                    <span className="px-3 py-1 bg-white rounded-md text-xs font-semibold text-primary border border-primary/10 shadow-sm">Parsing</span>
                                    <span className="px-3 py-1 bg-white rounded-md text-xs font-semibold text-primary border border-primary/10 shadow-sm">Ranking</span>
                                    <span className="px-3 py-1 bg-white rounded-md text-xs font-semibold text-primary border border-primary/10 shadow-sm">Matching</span>
                                </div>
                            </div>
                        </div>

                        {/* Arrow Down */}
                        <div className="flex justify-center -my-2 z-10">
                            <div className="bg-muted p-1 rounded-full border border-white shadow-sm">
                                <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                </svg>
                            </div>
                        </div>

                        {/* Layer 3: Results */}
                        <div className="w-full bg-white border border-gray-200 rounded-xl p-6 shadow-sm flex items-center justify-between transform hover:scale-[1.01] transition-transform duration-300">
                            <div className="flex items-center space-x-4">
                                <div className="h-10 w-10 bg-accent-2/20 text-accent-3 rounded-lg flex items-center justify-center">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900">Step 3: Interview-Ready Candidates</h4>
                                    <p className="text-sm text-gray-500">Delivered directly to your calendar via email/Slack.</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-2">
                                <button className="text-sm font-medium text-primary hover:underline">View Demo</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorkflowVisual;
