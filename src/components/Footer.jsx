import React from 'react';
import { motion } from 'framer-motion';
import { Twitter, Linkedin, Github, Instagram, ArrowRight } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-950 text-white overflow-hidden relative border-t border-gray-900 font-sans">
            {/* Decorative Top Gradient Line - Enhanced */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent blur-sm" />

            <div className="max-w-[1400px] mx-auto px-6 lg:px-12 pt-24 pb-12">

                {/* Top Section: Brand & Newsletter */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <a href="#" className="inline-block text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400 mb-6 tracking-tight">
                            RecruiterAI
                        </a>
                        <p className="text-gray-400 text-lg leading-relaxed max-w-md font-light">
                            Revolutionizing the hiring process with intelligent automation and data-driven insights for modern teams.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex flex-col justify-center"
                    >
                        <h3 className="text-xl font-bold mb-6 text-gray-100">Stay up to date</h3>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-gray-900/50 border border-gray-800 rounded-xl px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all w-full backdrop-blur-sm"
                            />
                            <button className="bg-white text-black font-semibold px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2 group whitespace-nowrap shadow-lg hover:shadow-white/10 hover:-translate-y-0.5">
                                Subscribe
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </motion.div>
                </div>

                <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-800 to-transparent mb-16" />

                {/* Middle Section: Links Grid */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: { staggerChildren: 0.1 }
                        }
                    }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-12 mb-24"
                >
                    <FooterColumn
                        title="Product"
                        links={['Features', 'Pricing', 'Integrations', 'Changelog', 'Roadmap']}
                    />
                    <FooterColumn
                        title="Company"
                        links={['About', 'Careers', 'Blog', 'Contact', 'Partners']}
                    />
                    <FooterColumn
                        title="Resources"
                        links={['Help Center', 'API Docs', 'Status', 'Community', 'Webinars']}
                    />
                    <FooterColumn
                        title="Legal"
                        links={['Privacy Policy', 'Terms of Service', 'Security', 'GDPR', 'Cookie Settings']}
                    />
                </motion.div>

                {/* Bottom Section: Copyright & Socials */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-gray-900/50">
                    <p className="text-gray-500 text-sm font-medium">
                        &copy; {new Date().getFullYear()} RecruiterAI Inc. All rights reserved.
                    </p>

                    <div className="flex items-center gap-6">
                        <SocialIcon Icon={Twitter} href="#" />
                        <SocialIcon Icon={Linkedin} href="#" />
                        <SocialIcon Icon={Github} href="#" />
                        <SocialIcon Icon={Instagram} href="#" />
                    </div>
                </div>
            </div>
        </footer>
    );
};

const FooterColumn = ({ title, links }) => (
    <motion.div
        variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
        }}
    >
        <h4 className="font-bold text-white mb-6 text-base tracking-wide">{title}</h4>
        <ul className="space-y-4">
            {links.map((link, i) => (
                <li key={i}>
                    <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 text-sm hover:translate-x-1 inline-block">
                        {link}
                    </a>
                </li>
            ))}
        </ul>
    </motion.div>
);

const SocialIcon = ({ Icon, href }) => (
    <a
        href={href}
        className="text-gray-500 hover:text-white transition-all duration-300 transform hover:scale-110 hover:bg-white/10 p-2 rounded-full"
        target="_blank"
        rel="noopener noreferrer"
    >
        <Icon size={20} />
    </a>
);

export default Footer;
