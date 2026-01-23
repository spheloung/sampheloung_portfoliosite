import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

const PortfolioWebsitePage: React.FC = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="py-24"
        >
            <div className="max-w-7xl mx-auto px-6">
                {/* Back link */}
                <Link
                    to="/projects"
                    className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8"
                >
                    <ArrowLeft size={20} />
                    Back to Projects
                </Link>

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                >
                    <span className="text-accent uppercase tracking-widest text-sm font-medium">Project</span>
                    <h1 className="text-5xl md:text-6xl font-bold text-white mt-2 mb-4">Portfolio Website</h1>
                    <p className="text-xl text-slate-400">This portfolio website</p>
                </motion.div>

                {/* Content - Fully customizable */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="mt-12"
                >
                    <div className="bg-white/5 border border-white/10 rounded-xl p-8">
                        <h2 className="text-2xl font-bold text-white mb-4">Overview</h2>
                        <p className="text-slate-300 leading-relaxed">
                            A modern React-based portfolio website showcasing my work and experience.
                        </p>
                    </div>

                    {/* Add custom sections here */}
                </motion.div>
            </div>
        </motion.div>
    );
};

export default PortfolioWebsitePage;
