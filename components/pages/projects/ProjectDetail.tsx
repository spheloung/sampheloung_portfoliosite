import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

interface ProjectData {
    title: string;
    description: string;
    details: string;
}

const projectsData: Record<string, ProjectData> = {
    'visa-tracker': {
        title: 'VisaTracker',
        description: 'Immigration visa tracking application',
        details: 'A comprehensive application for tracking immigration visa applications and statuses.',
    },
    'billing-engine': {
        title: 'Billing Engine',
        description: 'Automated billing and invoicing system',
        details: 'An automated system for generating invoices, tracking payments, and managing billing cycles.',
    },
    'portfolio-website': {
        title: 'Portfolio Website',
        description: 'This portfolio website',
        details: 'A modern React-based portfolio website showcasing my work and experience.',
    },
    'rise-of-china': {
        title: 'The Rise of China',
        description: 'Data visualization project',
        details: 'An interactive data visualization exploring economic and geopolitical trends.',
    },
};

const ProjectDetail: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const project = slug ? projectsData[slug] : null;

    if (!project) {
        return (
            <div className="py-24">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
                    <Link to="/projects" className="text-accent hover:underline">
                        ← Back to Projects
                    </Link>
                </div>
            </div>
        );
    }

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
                    <h1 className="text-5xl md:text-6xl font-bold text-white mt-2 mb-4">{project.title}</h1>
                    <p className="text-xl text-slate-400">{project.description}</p>
                </motion.div>

                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="mt-12"
                >
                    <div className="bg-white/5 border border-white/10 rounded-xl p-8">
                        <h2 className="text-2xl font-bold text-white mb-4">Overview</h2>
                        <p className="text-slate-300 leading-relaxed">{project.details}</p>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default ProjectDetail;
