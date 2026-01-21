import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { SectionTitle } from '../ui/Elements';
import { Photo } from '../../types';

const photos: Photo[] = [
  { id: '1', url: '/images/photos/photo-1.svg', caption: 'Urban Solitude' },
  { id: '2', url: '/images/photos/photo-2.svg', caption: 'Neon Nights' },
  { id: '3', url: '/images/photos/photo-3.svg', caption: 'Geometric Shadows' },
  { id: '4', url: '/images/photos/photo-4.svg', caption: 'Architecture' },
  { id: '5', url: '/images/photos/photo-5.svg', caption: 'Motion' },
];

const Photography: React.FC = () => {
  return (
    <section id="photography" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle title="Photography" subtitle="Perspective" />
        
        {/* Masonry-style abstract layout with parallax feel */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.8 }}
              className="relative group break-inside-avoid"
            >
              <div className="overflow-hidden rounded-lg">
                <img 
                  src={photo.url} 
                  alt={photo.caption} 
                  className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="text-white font-medium tracking-wide">{photo.caption}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Photography;