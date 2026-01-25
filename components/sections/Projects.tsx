import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SectionTitle, Card, Badge } from '../ui/Elements';
import { Project } from '../../types';

interface ProjectWithLink extends Project {
  href: string;
}

const projects: ProjectWithLink[] = [
  {
    id: '1',
    title: 'Til - an automated billing engine',
    description: 'A Python-based engine using Salesforce and App data to generate invoices in Xero.',
    tags: ['Python', 'Salesforce', 'SQL'],
    image: '/images/projects/project-1.svg',
    href: '/projects/billing-engine'
  },
  {
    id: '2',
    title: 'VisaTracker Pro',
    description: 'Full-stack web application to track the number of days left before a visa expires.',
    tags: ['React', 'AntiGravity', 'SupaBase'],
    image: '/images/projects/project-2.svg',
    href: '/projects/visa-tracker'
  },
  {
    id: '3',
    title: 'Portfolio Website',
    description: 'End-to-end implementation of Salesforce CPQ reducing quote generation time by 75%.',
    tags: ['Next.js', 'Claude', 'Framer Motion'],
    image: '/images/projects/project-3.svg',
    href: '/projects/portfolio-website'
  },
  {
    id: '4',
    title: 'The Rise of China',
    description: 'The link between diplomacy and Revenue Operations.',
    tags: ['Research', 'International Relations', 'Academic'],
    image: '/images/projects/project-4.svg',
    href: '/projects/rise-of-china'
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle title="Projects" subtitle="Work" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link to={project.href} className="block group h-full">
                <Card className="h-full flex flex-col p-0 overflow-hidden border-white/5 transition-all duration-300 hover:border-accent/20">
                  <div className="relative h-64 overflow-hidden">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>
                  <div className="p-8 flex-1 flex flex-col">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-accent transition-colors">{project.title}</h3>
                    <p className="text-slate-400 mb-6 flex-1 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <Badge key={tag}>{tag}</Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;