import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '../ui/Elements';

const CareerPage: React.FC = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="py-24"
        >
            <div className="max-w-7xl mx-auto px-6">
                <SectionTitle title="Career" subtitle="My Journey" />

                <div className="mt-12 space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="prose prose-invert max-w-none"
                    >
                        <p className="text-lg text-slate-300 leading-relaxed">
                            This is the standalone Career page where I can share my professional journey in more detail.
                        </p>
                    </motion.div>

                    {/* Timeline or career sections can go here */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="space-y-6"
                    >
                        <div className="bg-white/5 border border-white/10 rounded-xl p-8">
                            <h3 className="text-xl font-bold text-white mb-2">Current Role</h3>
                            <p className="text-accent mb-4">RevOps Specialist</p>
                            <p className="text-slate-400">
                                Detailed description of your current role and responsibilities.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

export default CareerPage;
