import React from 'react';
import { motion } from 'framer-motion';
import Button from './ui/Button';

const FinalCTA = () => {
    return (
        <section className="py-24 relative overflow-hidden bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative bg-gradient-to-br from-blue-600 via-primary to-blue-500 rounded-[2.5rem] p-12 md:p-24 text-center overflow-hidden shadow-2xl shadow-primary/20"
                >
                    {/* Background Pattern */}
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIvPjwvc3ZnPg==')] opacity-30"></div>

                    {/* Glowing Orbs */}
                    <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400/20 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

                    <div className="relative z-10 max-w-3xl mx-auto">
                        <motion.h2
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-4xl md:text-5xl lg:text-[64px] font-bold text-white mb-8 leading-[1.1] tracking-tight"
                        >
                            Ready to Hire Better, Faster?
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="text-xl md:text-2xl text-white/90 mb-12"
                        >
                            Join 500+ companies hiring smarter with AI
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 }}
                            className="flex flex-col sm:flex-row justify-center items-center gap-6"
                        >
                            <Button
                                className="bg-white text-primary hover:bg-gray-50 hover:scale-105 active:scale-95 shadow-xl w-full sm:w-auto text-lg px-10 py-5 font-bold transition-all duration-300"
                            >
                                Start Free Trial
                            </Button>
                            <Button
                                className="bg-transparent border-2 border-white/30 text-white hover:bg-white/10 hover:border-white w-full sm:w-auto text-lg px-10 py-5 font-semibold backdrop-blur-sm transition-all duration-300"
                            >
                                Schedule Demo
                            </Button>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default FinalCTA;
