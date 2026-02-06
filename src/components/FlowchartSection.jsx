// ... imports unchanged
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check, X, GitCommit } from 'lucide-react';

const FlowchartSection = () => {
    return (
        <section className="py-24 lg:py-32 bg-white overflow-hidden relative">
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-40"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-20 max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-3 py-1 mb-6 text-xs font-semibold tracking-wider text-primary uppercase bg-primary/10 rounded-full"
                    >
                        System Architecture
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-text-primary mb-6"
                    >
                        AI Recruiting Software That Works Like Your Own HR Team
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg md:text-xl text-text-muted max-w-2xl mx-auto"
                    >
                        Build custom hiring workflows in minutes. No coding required.
                    </motion.p>
                </div>

                {/* Connected Flowchart Cards */}
                <div className="relative">
                    {/* Connecting Pipeline Line (Desktop) */}
                    <div className="hidden lg:block absolute top-[40%] left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent -translate-y-1/2 z-0">
                        {/* Animated Flow Packet */}
                        <motion.div
                            animate={{ x: ["0%", "100%"] }}
                            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                            className="w-20 h-full bg-gradient-to-r from-transparent via-primary to-transparent opacity-50 blur-sm"
                        />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 relative z-10">
                        <FlowchartCard
                            title="Automated Candidate Screening"
                            step="01"
                            delay={0.1}
                            flow={
                                <>
                                    <Node label="New Application" type="start" />
                                    <Connector />
                                    <Node label="AI Resume Screening" helper="Ranks top 20%" />
                                    <Connector />
                                    <Node label="Score > 75%?" type="decision" />
                                    <div className="grid grid-cols-2 gap-2 mt-2 w-full">
                                        <div className="flex flex-col items-center">
                                            <BranchLine type="yes" />
                                            <Node label="Auto-schedule" minimal />
                                        </div>
                                        <div className="flex flex-col items-center">
                                            <BranchLine type="no" />
                                            <Node label="Send Rejection" minimal type="end" />
                                        </div>
                                    </div>
                                </>
                            }
                            benefit="Screen 250+ applications in minutes vs. 8 hours manually"
                        />

                        {/* Mobile Connector */}
                        <div className="lg:hidden flex justify-center py-4 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEwIDAgTTEwIDQwIiBzdHJva2U9IiNlN2U1ZTQiIHN0cm9rZS13aWR0aD0iMiIgLz48L3N2Zz4=')] bg-repeat-y opacity-30 h-10"></div>

                        <FlowchartCard
                            title="Multi-Stage Interview"
                            step="02"
                            delay={0.3}
                            flow={
                                <>
                                    <Node label="Interview Invite Accepted" type="start" />
                                    <Connector />
                                    <Node label="AI Video Interview" helper="Technical Screening" />
                                    <Connector />
                                    <Node label="Score > 80%?" type="decision" />
                                    <div className="grid grid-cols-2 gap-2 mt-2 w-full">
                                        <div className="flex flex-col items-center">
                                            <BranchLine type="yes" />
                                            <Node label="HM Round" minimal />
                                        </div>
                                        <div className="flex flex-col items-center">
                                            <BranchLine type="no" />
                                            <Node label="Feedback Email" minimal type="end" />
                                        </div>
                                    </div>
                                </>
                            }
                            benefit="Reduce time-to-hire from 42 days to 12 days"
                        />

                        {/* Mobile Connector */}
                        <div className="lg:hidden flex justify-center py-4 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEwIDAgTTEwIDQwIiBzdHJva2U9IiNlN2U1ZTQiIHN0cm9rZS13aWR0aD0iMiIgLz48L3N2Zz4=')] bg-repeat-y opacity-30 h-10"></div>

                        <FlowchartCard
                            title="Candidate Re-engagement"
                            step="03"
                            delay={0.5}
                            flow={
                                <>
                                    <Node label="Candidate Rejected" type="start" helper="But scored 60-74%" />
                                    <Connector />
                                    <Node label="Add to Talent Pool" />
                                    <Connector />
                                    <Node label="New Open Role?" type="decision" />
                                    <div className="grid grid-cols-2 gap-2 mt-2 w-full">
                                        <div className="flex flex-col items-center">
                                            <BranchLine type="yes" />
                                            <Node label="AI Personal Email" minimal />
                                        </div>
                                        <div className="flex flex-col items-center">
                                            <BranchLine type="no" />
                                            <Node label="Wait Quarter" minimal type="end" />
                                        </div>
                                    </div>
                                </>
                            }
                            benefit="Build a qualified talent pipeline automatically"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const FlowchartCard = ({ title, flow, benefit, delay, step }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay, ease: "easeOut" }}
            className="group relative bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-500 overflow-hidden"
        >
            {/* Top accent bar */}
            <div className="h-1.5 w-full bg-gray-100 group-hover:bg-primary transition-colors duration-500"></div>

            <div className="p-8">
                <div className="flex items-center justify-between mb-8 text-text-primary">
                    <h3 className="text-xl font-bold">{title}</h3>
                    <div className="text-5xl font-bold text-gray-100 font-sans tracking-tighter opacity-50 group-hover:text-primary/10 transition-colors">{step}</div>
                </div>

                <div className="flex flex-col items-center min-h-[360px] relative">
                    <div className="absolute inset-0 border border-gray-100 rounded-lg bg-gray-50/50 -z-10"></div>
                    <div className="py-6 w-full flex flex-col items-center">
                        {flow}
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: delay + 0.4 }}
                    className="mt-8 pt-6 border-t border-gray-100 group-hover:border-primary/10 transition-colors"
                >
                    <div className="flex items-start gap-3">
                        <div className="p-1 rounded-full bg-success/10 text-success mt-0.5">
                            <Check size={14} strokeWidth={3} />
                        </div>
                        <div>
                            <p className="text-xs font-bold text-text-muted uppercase tracking-wider mb-1">Impact</p>
                            <p className="text-text-primary text-sm font-medium leading-relaxed">{benefit}</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

const Node = ({ label, type = 'process', helper, minimal }) => {
    const isDecision = type === 'decision';
    const isStart = type === 'start';
    const isEnd = type === 'end';

    // Different styles for node types
    let baseStyles = "relative z-10 flex flex-col items-center justify-center transition-all duration-300 ";
    let boxStyles = "border text-xs font-semibold text-center shadow-sm backdrop-blur-sm ";

    if (minimal) {
        boxStyles += "px-2 py-1.5 rounded-md min-w-[100px] text-[10px] ";
    } else {
        boxStyles += "px-4 py-3 rounded-lg min-w-[140px] text-sm ";
    }

    if (isDecision) {
        // Updated Decision Node: No rotation, rounded-xl, prominent border
        boxStyles += "bg-white border-2 border-primary text-primary rounded-xl ";
    } else if (isStart) {
        boxStyles += "bg-text-primary border-text-primary text-white rounded-full ";
    } else if (isEnd) {
        boxStyles += "bg-gray-100 border-gray-200 text-text-muted rounded-md ";
    } else {
        boxStyles += "bg-white border-gray-200 text-text-primary group-hover:border-primary/50 ";
    }

    return (
        <motion.div
            className={baseStyles}
            whileHover={{ scale: 1.02 }}
        >
            <div className={boxStyles}>
                <span className="block">{label}</span>
            </div>
            {helper && !minimal && (
                <div className="absolute left-full ml-3 top-1/2 -translate-y-1/2 w-24">
                    <div className="text-[10px] text-text-muted leading-tight border-l-2 border-primary/20 pl-2">
                        {helper}
                    </div>
                </div>
            )}
        </motion.div>
    );
};

const Connector = () => (
    <div className="h-6 w-px bg-gray-200 relative my-1 overflow-hidden group-hover:bg-primary/20 transition-colors duration-500">
        <div className="absolute top-0 left-0 w-full h-full bg-primary/30 -translate-y-full group-hover:animate-[flow_1.5s_infinite]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-gray-300 rounded-full group-hover:bg-primary transition-colors duration-500"></div>
    </div>
);

const BranchLine = ({ type }) => {
    const isYes = type === 'yes';
    return (
        <div className="pb-2 flex flex-col items-center">
            <div className="h-4 w-px bg-gray-200"></div>
            <div className={`text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded ${isYes ? 'text-success bg-success/5' : 'text-error bg-error/5'}`}>
                {isYes ? 'Yes' : 'No'}
            </div>
            <div className="h-2 w-px bg-gray-200"></div>
        </div>
    );
};

export default FlowchartSection;
