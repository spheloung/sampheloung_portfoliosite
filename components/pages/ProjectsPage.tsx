import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SectionTitle } from '../ui/Elements';

interface ProjectCard {
    id: string;
    slug: string;
    title: string;
    description: string;
}

const projects: ProjectCard[] = [
    { id: '1', slug: 'billing-engine', title: 'Til - an automated billing engine', description: 'Automated billing and invoicing system' },
    { id: '2', slug: 'visa-tracker', title: 'VisaTracker Pro', description: 'Immigration visa tracking application' },
    { id: '3', slug: 'portfolio-website', title: 'Portfolio Website', description: 'This portfolio website' },
    { id: '4', slug: 'rise-of-china', title: 'The Rise of China', description: 'Data visualization project' },
];

const ProjectsPage: React.FC = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="py-24"
        >
            <div className="max-w-7xl mx-auto px-6">
                <SectionTitle title="Projects" subtitle="My Work" />

                <div className="mt-12 grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                        >
                            <Link
                                to={`/projects/${project.slug}`}
                                className="block group"
                            >
                                <div className="relative bg-white/5 border border-white/10 rounded-xl overflow-hidden h-64 flex flex-col">
                                    {/* Placeholder image area */}
                                    <div className="flex-1 bg-gradient-to-br from-slate-800/50 to-slate-900/80 flex items-center justify-center">
                                        <span className="text-slate-500 text-sm">Project preview</span>
                                    </div>

                                    {/* Card footer */}
                                    <div className="p-6 border-t border-white/10">
                                        <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="text-slate-500 text-sm mt-1">{project.description}</p>
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

export default ProjectsPage;
