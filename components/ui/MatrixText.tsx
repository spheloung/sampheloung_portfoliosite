import React, { useMemo } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface RainCharProps {
  char: string;
  scrollY: MotionValue<number>;
  index: number; // Unique global index for consistency if needed, though random is preferred now
}

const RainChar: React.FC<RainCharProps> = ({ char, scrollY }) => {
  // Generate random values once on mount
  const { startY, duration, delay } = useMemo(() => {
    return {
      // Fall from a random height between -200px and -800px
      startY: -(Math.random() * 600 + 200),
      // Duration between 1.5s and 2.0s
      duration: 1.5 + Math.random() * 0.5,
      // Delay between 0s and 0.5s
      // Total max time = ~0.5s delay + 2.0s duration = 2.5s
      delay: Math.random() * 0.5,
    };
  }, []);

  // Use a random speed multiplier for the scroll effect to give it depth
  // Some letters will scroll slightly faster/slower than others
  const scrollSpeed = useMemo(() => 0.6 + Math.random() * 0.4, []);

  // Parallax effect: Move UP when scrolling down ("rain up")
  // The user requested they never drop below their final position (y=0).
  // So we map scrollY 0->500 to y 0->negative value.
  const yScroll = useTransform(scrollY, [0, 500], [0, -200 * scrollSpeed]);

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
            ease: "easeOut" // Smooth landing
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
}

export const MatrixText: React.FC<MatrixTextProps> = ({ text, className = "" }) => {
  const { scrollY } = useScroll();

  // Split into words to allow browser text wrapping
  const words = text.split(" ");
  let globalCharIndex = 0;

  return (
    <span className={`inline-block ${className}`}>
      {words.map((word, wordIndex) => {
        return (
          <span key={wordIndex} className="inline-block whitespace-nowrap mr-[0.25em]">
            {word.split('').map((char, charIndex) => {
              globalCharIndex++;
              return (
                <RainChar
                  key={`${wordIndex}-${charIndex}`}
                  char={char}
                  scrollY={scrollY}
                  index={globalCharIndex}
                />
              );
            })}
          </span>
        );
      })}
    </span>
  );
};