import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle, Card, Badge } from '../ui/Elements';
import { Project } from '../../types';

const projects: Project[] = [
  {
    id: '1',
    title: 'Automated Lead Routing Engine',
    description: 'A Python-based engine using LeanData logic to distribute leads based on complex territory rules and capacity.',
    tags: ['Python', 'Salesforce', 'API'],
    image: '/images/projects/project-1.svg'
  },
  {
    id: '2',
    title: 'Revenue Intelligence Dashboard',
    description: 'Full-stack dashboard visualizing ARR, Churn, and Expansion revenue in real-time for executive leadership.',
    tags: ['React', 'D3.js', 'Snowflake'],
    image: '/images/projects/project-2.svg'
  },
  {
    id: '3',
    title: 'CPQ Implementation',
    description: 'End-to-end implementation of Salesforce CPQ reducing quote generation time by 75%.',
    tags: ['Salesforce CPQ', 'Process Design'],
    image: '/images/projects/project-3.svg'
  },
  {
    id: '4',
    title: 'Marketing Attribution Model',
    description: 'Multi-touch attribution model built to track ROI across 15+ marketing channels.',
    tags: ['SQL', 'Tableau', 'Marketo'],
    image: '/images/projects/project-4.svg'
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle title="Selected Projects" subtitle="Work" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col p-0 overflow-hidden border-white/5">
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" 
                  />
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-slate-400 mb-6 flex-1 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <Badge key={tag}>{tag}</Badge>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;