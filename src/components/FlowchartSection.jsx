import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, CornerDownRight, Check, X } from 'lucide-react';

const FlowchartSection = () => {
    return (
        <section className="py-20 lg:py-32 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-text-primary mb-4"
                    >
                        AI Recruiting Software That Works Like Your Own HR Team
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl text-text-muted"
                    >
                        Build custom hiring workflows in minutes. No coding required.
                    </motion.p>
                </div>

                {/* Flowchart Cards Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <FlowchartCard
                        title="Automated Candidate Screening"
                        delay={0.1}
                        flow={
                            <>
                                <Node label="New Application" bg="blue" />
                                <Connector />
                                <Node label="AI Resume Screening" bg="blue" helper="Ranks top 20%" />
                                <Connector />
                                <Node label="Score > 75%?" bg="light" type="decision" />
                                <div className="grid grid-cols-2 gap-4 mt-2">
                                    <div className="flex flex-col items-center">
                                        <BranchLabel type="yes" />
                                        <Connector small />
                                        <Node label="Auto-schedule Interview" bg="blue" />
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <BranchLabel type="no" />
                                        <Connector small />
                                        <Node label="Send Rejection" bg="blue" />
                                    </div>
                                </div>
                            </>
                        }
                        benefit="Screen 250+ applications in minutes vs. 8 hours manually"
                    />

                    <FlowchartCard
                        title="Multi-Stage Interview"
                        delay={0.3}
                        flow={
                            <>
                                <Node label="Interview Invite Accepted" bg="blue" />
                                <Connector />
                                <Node label="AI Video Interview" bg="blue" helper="Technical Screening" />
                                <Connector />
                                <Node label="Score > 80%?" bg="light" type="decision" />
                                <div className="grid grid-cols-2 gap-4 mt-2">
                                    <div className="flex flex-col items-center">
                                        <BranchLabel type="yes" />
                                        <Connector small />
                                        <Node label="Hiring Manager Round" bg="blue" />
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <BranchLabel type="no" />
                                        <Connector small />
                                        <Node label="Auto-feedback Email" bg="blue" />
                                    </div>
                                </div>
                            </>
                        }
                        benefit="Reduce time-to-hire from 42 days to 12 days"
                    />

                    <FlowchartCard
                        title="Candidate Re-engagement"
                        delay={0.5}
                        flow={
                            <>
                                <Node label="Candidate Rejected" bg="blue" helper="But scored 60-74%" />
                                <Connector />
                                <Node label="Add to Talent Pool" bg="blue" />
                                <Connector />
                                <Node label="New Position Open?" bg="light" type="decision" />
                                <div className="grid grid-cols-2 gap-4 mt-2">
                                    <div className="flex flex-col items-center">
                                        <BranchLabel type="yes" />
                                        <Connector small />
                                        <Node label="AI Personal Email" bg="blue" />
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <BranchLabel type="no" />
                                        <Connector small />
                                        <Node label="Wait Next Quarter" bg="blue" />
                                    </div>
                                </div>
                            </>
                        }
                        benefit="Build a qualified talent pipeline automatically"
                    />
                </div>
            </div>
        </section>
    );
};

const FlowchartCard = ({ title, flow, benefit, delay }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50, rotateX: 10 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay, ease: "easeOut" }}
            className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 hover:shadow-2xl transition-all duration-300 hover:scale-[1.01]"
        >
            <h3 className="text-xl font-bold text-text-primary mb-8 text-center">{title}</h3>

            <div className="flex flex-col items-center min-h-[400px]">
                {flow}
            </div>

            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: delay + 0.8 }}
                className="mt-8 bg-blue-50 border-l-4 border-primary p-4 rounded-r-lg"
            >
                <p className="text-sm font-bold text-primary mb-1">Benefit:</p>
                <p className="text-text-primary text-sm leading-relaxed">{benefit}</p>
            </motion.div>
        </motion.div>
    );
};

const Node = ({ label, bg, type = 'process', helper }) => {
    const isDecision = type === 'decision';

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="relative flex flex-col items-center z-10"
        >
            <div className={cn(
                "px-4 py-3 rounded-xl border text-sm font-bold text-center min-w-[140px] shadow-sm transition-all",
                isDecision ? "bg-blue-50 border-primary text-text-primary animate-pulse-scale" : "bg-primary border-primary text-white",
                "max-w-[160px]"
            )}>
                {label}
            </div>
            {helper && (
                <span className="mt-2 text-xs text-text-muted font-medium text-center max-w-[140px] leading-tight">
                    {helper}
                </span>
            )}
        </motion.div>
    );
};

const Connector = ({ small }) => {
    return (
        <div className={cn("h-8 w-px bg-primary/20 relative my-1 overflow-hidden", small && "h-4")}>
            <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="absolute top-0 left-0 w-full bg-primary"
            />
        </div>
    );
};

const BranchLabel = ({ type }) => {
    const isYes = type === 'yes';
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className={cn(
                "text-[10px] font-black uppercase tracking-widest mb-1",
                isYes ? "text-success" : "text-error"
            )}
        >
            {isYes ? 'YES' : 'NO'}
        </motion.div>
    );
};

// Utils
function cn(...classes) {
    return classes.filter(Boolean).join(' ');
}

export default FlowchartSection;
