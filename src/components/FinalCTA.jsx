import React from 'react';
import { motion } from 'framer-motion';
import Button from './ui/Button';

const FinalCTA = () => {
    return (
        <section className="py-20 lg:py-32 bg-gradient-to-br from-blue-600 via-primary to-blue-500 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-white mb-6 leading-tight">
                        Ready to Hire Better, Faster?
                    </h2>
                    <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto">
                        Join 500+ companies hiring smarter with AI
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                        <Button
                            className="bg-white text-primary hover:bg-gray-100 hover:text-primary shadow-xl w-full sm:w-auto text-lg px-9 py-4"
                        >
                            Start Free Trial
                        </Button>
                        <Button
                            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary w-full sm:w-auto text-lg px-9 py-4"
                        >
                            Schedule Demo
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default FinalCTA;
