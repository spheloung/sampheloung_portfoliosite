import React from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface RainCharProps {
  char: string;
  baseDelay: number;
  scrollY: MotionValue<number>;
  charIndex: number;
}

const RainChar: React.FC<RainCharProps> = ({ char, baseDelay, scrollY, charIndex }) => {
  // Deterministic per-character animation (no randomness) to avoid jitter + reduce runtime work.
  const startY = -260;
  const duration = 1.8;
  const delay = baseDelay + charIndex * 0.02;

  // Keep scroll-linked motion for now, but make it deterministic.
  // Slight per-character variation for depth without randomness.
  const speed = 0.85 + (charIndex % 5) * 0.06;
  const yScroll = useTransform(scrollY, [0, 500], [0, -500 * speed]);
  
  return (
    <span className="relative inline-block">
      {/* Ghost character for layout stability */}
      <span className="opacity-0 select-none pointer-events-none">{char}</span>
      
      {/* Animating Character Overlay */}
      <motion.span
        style={{ y: yScroll }}
        className="absolute inset-0 flex justify-center"
      >
        <motion.span
          initial={{ y: startY, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ 
            duration: duration, 
            delay: delay,
            ease: "easeOut"
          }}
          className="inline-block"
        >
          {char}
        </motion.span>
      </motion.span>
    </span>
  );
};

interface MatrixTextProps {
  text: string;
  className?: string;
  baseDelay?: number;
}

export const MatrixText: React.FC<MatrixTextProps> = ({ text, className = "", baseDelay = 0 }) => {
  const { scrollY } = useScroll();
  
  // Split into words to allow browser text wrapping
  const words = text.split(" ");
  
  return (
    <span className={`inline-block ${className}`}>
      {words.map((word, wordIndex) => {
        // Stagger words slightly
        const wordDelay = baseDelay + (wordIndex * 0.1); 
        
        return (
          <span key={wordIndex} className="inline-block whitespace-nowrap mr-[0.25em]">
            {word.split('').map((char, charIndex) => (
              <RainChar 
                key={`${wordIndex}-${charIndex}`} 
                char={char} 
                baseDelay={wordDelay}
                scrollY={scrollY}
                charIndex={(wordIndex * 100) + charIndex}
              />
            ))}
          </span>
        );
      })}
    </span>
  );
};