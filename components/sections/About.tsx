import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '../ui/Elements';

const About: React.FC = () => {
  return (
    <section id="about" className="pt-24 md:pt-32 pb-8 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">

          {/* Left Column: Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative aspect-[3/4] w-full max-w-md mx-auto md:mx-0 rounded-2xl overflow-hidden bg-surfaceHighlight border border-white/5 group"
          >
            <img
              src="/images/about/Profile-Pic.webp"
              alt="Sam Pheloung"
              className="w-full h-full object-cover transition-all duration-700 ease-out scale-105 group-hover:scale-100"
            />

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-40 group-hover:opacity-20 transition-opacity duration-500" />

            {/* Decorative Corner Accents */}
            <div className="absolute top-4 left-4 w-12 h-12 border-l border-t border-white/10 rounded-tl-lg" />
            <div className="absolute bottom-4 right-4 w-12 h-12 border-r border-b border-white/10 rounded-br-lg" />
          </motion.div>

          {/* Right Column: Text Content */}
          <div className="flex flex-col">
            <SectionTitle title="About Me" subtitle="Introduction" />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-slate-300 leading-relaxed text-lg space-y-8"
            >
              <p>
                I operate at the intersection of business strategy and technical execution.
                My passion lies in untangling operational complexity—the systems, processes,
                and data silos that slow down revenue teams—and weaving them into scalable,
                automated solutions.
              </p>
              <p>
                I've worked as a strategic bridge between Go-To-Market teams, engineering,
                and senior leadership. I translate business requirements (the what and why)
                into robust technical systems (the how) that support revenue generation,
                compliance, and data-driven decision-making at scale.
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;