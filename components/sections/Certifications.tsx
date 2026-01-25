import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

interface Certification {
  id: string;
  name: string;
  image?: string;
  scale?: number;
}

const certifications: Certification[] = [
  {
    id: '1',
    name: 'SF App Builder',
    image: '/images/about/SF-App-Builder-Badge.webp',
    scale: 1,
  },
  {
    id: '2',
    name: 'SF Admin',
    image: '/images/about/SF-Admin-Badge.webp',
    scale: 1,
  },
  {
    id: '3',
    name: 'MIRAD',
    image: '/images/about/UC-Badge.webp',
    scale: 1,
  }
];

const Certifications: React.FC = () => {
  return (
    <section className="pt-8 pb-24 md:pb-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-row flex-wrap justify-center items-center gap-12 md:gap-16">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="flex items-center justify-center group relative"
            >
              {cert.image ? (
                <div className="relative">
                  <div className="absolute inset-0 bg-accent/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className="h-24 md:h-28 w-auto object-contain relative z-10 transition-transform duration-500 group-hover:scale-110 drop-shadow-2xl"
                    style={{ transform: `scale(${cert.scale || 1})` }}
                  />
                </div>
              ) : (
                <div className="flex flex-col items-center gap-3 opacity-30 group-hover:opacity-60 transition-opacity duration-500">
                  <div className="w-16 h-16 rounded-full border border-dashed border-white/30 flex items-center justify-center">
                    <Award size={24} strokeWidth={1.5} />
                  </div>
                  <span className="text-xs font-mono tracking-widest uppercase text-center max-w-[120px]">{cert.name}</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;