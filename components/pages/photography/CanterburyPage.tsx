import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

const CanterburyPage: React.FC = () => {
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
                    to="/photography"
                    className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8"
                >
                    <ArrowLeft size={20} />
                    Back to Photography
                </Link>

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                >
                    <span className="text-accent uppercase tracking-widest text-sm font-medium">Location</span>
                    <h1 className="text-5xl md:text-6xl font-bold text-white mt-2 mb-4">Canterbury</h1>
                    <p className="text-xl text-slate-400">New Zealand's heartland</p>
                </motion.div>

                {/* Content - Fully customizable */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="mt-12"
                >
                    <div className="bg-white/5 border border-white/10 rounded-xl p-8 mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4">About this location</h2>
                        <p className="text-slate-300 leading-relaxed">
                            The Canterbury region offers diverse landscapes from the Southern Alps to the Pacific coast, with rolling farmland in between.
                        </p>
                    </div>

                    {/* Photo gallery placeholder - customize as needed */}
                    <div className="grid md:grid-cols-3 gap-6">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <div
                                key={i}
                                className="bg-white/5 border border-white/10 rounded-xl h-64 flex items-center justify-center"
                            >
                                <span className="text-slate-500">Photo {i}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default CanterburyPage;
