import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { Button } from '../ui/Elements';
import { Particles } from '../ui/BackgroundEffects';
import { MatrixText } from '../ui/MatrixText';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-32 md:pt-48 overflow-hidden">
      <Particles />

      {/* Central Beam Effect behind text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-transparent via-blue-900/20 to-transparent blur-[100px] opacity-50" />

      {/* Added mt-24 to create specific 'dead space' below the new larger header */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center mt-12 md:mt-24">

        {/* Title with Matrix Rain Effect */}
        <div className="min-h-[160px] flex items-center justify-center mb-12">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight">
            <MatrixText text="RevOps Systems Built for Scale" baseDelay={0} />
          </h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.5, ease: "easeOut" }}
          className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 mt-16 leading-relaxed"
        >
          I design and implement automated RevOps workflows that cut manual work and unlock scalable revenue growth.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button variant="primary" icon onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
            Explore my work
          </Button>
          <Button variant="ghost" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            Let's chat
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-500"
      >
        <ArrowDown size={20} />
      </motion.div>
    </section>
  );
};

export default Hero;