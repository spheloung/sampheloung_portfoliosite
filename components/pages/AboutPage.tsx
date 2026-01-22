import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '../ui/Elements';

const AboutPage: React.FC = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="py-24"
        >
            <div className="max-w-7xl mx-auto px-6">
                <SectionTitle title="About Me" subtitle="Who I Am" />

                <div className="mt-12 space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="prose prose-invert max-w-none"
                    >
                        <p className="text-lg text-slate-300 leading-relaxed">
                            Welcome to my About page. This is a standalone page where I can share more detailed information about myself, my background, and my journey.
                        </p>
                    </motion.div>

                    {/* Add more content sections here */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="grid md:grid-cols-2 gap-8"
                    >
                        <div className="bg-white/5 border border-white/10 rounded-xl p-8">
                            <h3 className="text-xl font-bold text-white mb-4">Background</h3>
                            <p className="text-slate-400">
                                Content about your background goes here.
                            </p>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-xl p-8">
                            <h3 className="text-xl font-bold text-white mb-4">Interests</h3>
                            <p className="text-slate-400">
                                Content about your interests goes here.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

export default AboutPage;
