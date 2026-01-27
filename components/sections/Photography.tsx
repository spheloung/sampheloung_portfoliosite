import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionTitle } from '../ui/Elements';

// Real images from public/images/photography
const uniquePhotos = [
  { src: '/images/Photography/gentoo-conga.webp', alt: 'Gentoo Conga' },
  { src: '/images/Photography/good-shepard.webp', alt: 'Church of the Good Shepard' },
  { src: '/images/Photography/lake-tekapo.webp', alt: 'Lake Tekapo' },
  { src: '/images/Photography/skua.webp', alt: 'Skua' },
  { src: '/images/Photography/mountain-cruise.webp', alt: 'Mountain Cruise' },
  { src: '/images/Photography/whalers-hut.webp', alt: 'Whalers Hut' },
  { src: '/images/Photography/iceberg.webp', alt: 'Iceberg' },
  { src: '/images/Photography/mountain-glacier.webp', alt: 'Mountain Glacier' },
];

// Gallery Photos
const photos = uniquePhotos.map((photo, i) => ({
  id: i.toString(),
  ...photo
}));

const Photography: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  // Keyboard navigation
  useEffect(() => {
    if (selectedPhotoIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        setSelectedPhotoIndex(prev => (prev === null || prev === 0 ? photos.length - 1 : prev - 1));
      } else if (e.key === 'ArrowRight') {
        setSelectedPhotoIndex(prev => (prev === null || prev === photos.length - 1 ? 0 : prev + 1));
      } else if (e.key === 'Escape') {
        setSelectedPhotoIndex(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhotoIndex]);

  return (
    <section id="photography" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle title="Photography" subtitle="Perspective" />

        <p className="text-slate-400 text-lg mb-12 -mt-8">Explore some of my favourite shots and incredible adventures around the world.</p>

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
                  className="break-inside-avoid relative group rounded-xl overflow-hidden bg-white/5 border border-white/10 cursor-pointer"
                  onClick={() => setSelectedPhotoIndex(index)}
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

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {selectedPhotoIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4"
            onClick={() => setSelectedPhotoIndex(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedPhotoIndex(null)}
              className="absolute top-6 right-6 z-50 p-2 text-white/50 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Navigation Arrows */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedPhotoIndex((prev) => (prev === null || prev === 0 ? photos.length - 1 : prev - 1));
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 bg-black/50 hover:bg-white/10 rounded-full text-white/70 hover:text-white transition-all backdrop-blur-sm border border-white/10"
              aria-label="Previous photo"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedPhotoIndex((prev) => (prev === null || prev === photos.length - 1 ? 0 : prev + 1));
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 bg-black/50 hover:bg-white/10 rounded-full text-white/70 hover:text-white transition-all backdrop-blur-sm border border-white/10"
              aria-label="Next photo"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Image */}
            <motion.div
              layoutId={photos[selectedPhotoIndex].id}
              className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={photos[selectedPhotoIndex].src}
                alt={photos[selectedPhotoIndex].alt}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              />

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Photography;