import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SectionTitle } from '../ui/Elements';

interface LocationCard {
    id: string;
    slug: string;
    name: string;
}

const locations: LocationCard[] = [
    { id: '1', slug: 'antarctica', name: 'Antarctica' },
    { id: '2', slug: 'tekapo', name: 'Tekapo' },
    { id: '3', slug: 'canterbury', name: 'Canterbury' },
    { id: '4', slug: 'coromandel', name: 'Coromandel' },
];

const PhotographyPage: React.FC = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="py-24"
        >
            <div className="max-w-7xl mx-auto px-6">
                <SectionTitle title="Photography" subtitle="Perspective" />

                <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {locations.map((location, index) => (
                        <motion.div
                            key={location.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                        >
                            <Link
                                to={`/photography/${location.slug}`}
                                className="block group"
                            >
                                <div className="relative bg-white/5 border border-white/10 rounded-xl overflow-hidden h-80 flex flex-col">
                                    {/* Placeholder image area */}
                                    <div className="flex-1 bg-gradient-to-br from-slate-800/50 to-slate-900/80 flex items-center justify-center">
                                        <span className="text-slate-500 text-sm">Photo placeholder</span>
                                    </div>

                                    {/* Card footer */}
                                    <div className="p-6 border-t border-white/10">
                                        <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors">
                                            {location.name}
                                        </h3>
                                        <p className="text-slate-500 text-sm mt-1">Location</p>
                                    </div>

                                    {/* Hover overlay */}
                                    <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default PhotographyPage;
