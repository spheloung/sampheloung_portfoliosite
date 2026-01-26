import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionTitle } from '../ui/Elements';

// Real images from public/images/photography
const uniquePhotos = [
  { src: '/images/Photography/Gentoo-Conga.webp', alt: 'Gentoo Conga' },
  { src: '/images/Photography/Church-of-the-Good-Shepard.webp', alt: 'Church of the Good Shepard' },
  { src: '/images/Photography/Profile-Pic.webp', alt: 'Profile Picture' },
  { src: '/images/Photography/til-card.webp', alt: 'Automated Billing Engine' },
  { src: '/images/Photography/project-2.svg', alt: 'Project Diagram' },
  { src: '/images/Photography/photo-5.svg', alt: 'Photo 5' },
];

// Duplicate to reach a decent gallery size (12 items)
const photos = [...uniquePhotos, ...uniquePhotos].map((photo, i) => ({
  id: i.toString(),
  ...photo
}));

const Photography: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="photography" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle title="Photography" subtitle="Perspective" />

        <p className="text-slate-400 text-lg mb-12 -mt-8">Text goes here...</p>

        {/* Gallery Container */}
        <div className="relative">

          <motion.div
            layout
            // Use max-height for the "cut-off" effect when collapsed. 
            // 500px should show the top row and cut the second row.
            className={`relative overflow-hidden transition-all duration-1000 ease-in-out ${isExpanded ? 'max-h-[5000px]' : 'max-h-[500px]'
              }`}
          >
            {/* Masonry Layout: columns-1 -> 2 -> 3 */}
            <div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">
              {photos.map((photo, index) => (
                <div
                  key={photo.id}
                  className="break-inside-avoid relative group rounded-xl overflow-hidden bg-white/5 border border-white/10"
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    loading="lazy"
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>

            {/* Gradient Overlay (Only when collapsed) - Fades out the bottom "half-visible" content */}
            <div
              className={`absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none transition-opacity duration-500 ${isExpanded ? 'opacity-0' : 'opacity-100'
                }`}
            />
          </motion.div>

          {/* Expand/Collapse Button */}
          <div className="flex justify-center mt-8 relative z-10">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="group flex flex-col items-center gap-2 text-slate-400 hover:text-white transition-colors"
              aria-label={isExpanded ? "Collapse gallery" : "Expand gallery"}
            >
              <span className="text-sm font-medium tracking-wide uppercase">
                {isExpanded ? 'Show Less' : 'View Gallery'}
              </span>
              <div className="p-3 rounded-full bg-white/5 border border-white/10 group-hover:bg-white/10 transition-all">
                <svg
                  className={`w-6 h-6 transition-transform duration-500 ${isExpanded ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Photography;