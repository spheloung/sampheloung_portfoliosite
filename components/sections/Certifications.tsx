import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const Certifications: React.FC = () => {
  return (
    <section className="pt-8 pb-24 md:pb-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12">
          {[1, 2, 3].map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="w-full max-w-[300px] h-32 rounded-full border border-white/5 bg-white/[0.02] flex items-center justify-center group hover:border-white/10 hover:bg-white/[0.04] transition-all duration-500 cursor-default relative overflow-hidden"
            >
              {/* Subtle hover glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="flex flex-col items-center gap-2 opacity-30 group-hover:opacity-60 transition-opacity duration-500 z-10">
                <Award size={28} strokeWidth={1.5} />
                <span className="text-xs font-mono tracking-widest uppercase">Certification Badge</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;