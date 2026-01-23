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
            className="relative aspect-[3/4] w-full max-w-md mx-auto md:mx-0 rounded-2xl overflow-hidden bg-surfaceHighlight border border-white/5 flex items-center justify-center group"
          >
            {/* Abstract placeholder styling */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-blue-900/10 opacity-50" />

            {/* Placeholder Text */}
            <h3 className="relative z-10 text-4xl md:text-5xl font-bold text-white/20 text-center leading-tight p-6 group-hover:text-white/30 transition-colors select-none">
              Image<br />Goes<br />Here
            </h3>

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
                Hi, I'm Sam. I operate at the intersection of
                business strategy and technical execution. My passion
                lies in untangling complex operational knots and
                weaving them into streamlined, automated systems that
                drive revenue.
              </p>
              <p>
                Operating as a bridge between the Go-To-Market teams, engineering teams
                and senior leadership, I translate business requirements into
                robust systems that support revenue, compliance and
                decision-making at scale.
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;