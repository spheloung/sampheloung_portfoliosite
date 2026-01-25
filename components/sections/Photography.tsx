import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SectionTitle } from '../ui/Elements';

interface LocationCard {
  id: string;
  name: string;
  image: string;
  href: string;
}

const locations: LocationCard[] = [
  {
    id: '1',
    name: 'Antarctica',
    href: '/photography/antarctica',
    image: '/images/photography/antarctica/Gentoo-Conga.webp'
  },
  {
    id: '2',
    name: 'Tekapo',
    href: '/photography/tekapo',
    image: '/images/photography/tekapo/Church-of-the-Good-Shepard.webp'
  },
  {
    id: '3',
    name: 'Canterbury',
    href: '/photography/canterbury',
    image: '/images/photography/antarctica/Gentoo-Conga.webp'
  },
  {
    id: '4',
    name: 'Coromandel',
    href: '/photography/coromandel',
    image: '/images/photography/antarctica/Gentoo-Conga.webp'
  },
];

const Photography: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollPosition = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    checkScrollPosition();
    container.addEventListener('scroll', checkScrollPosition);
    window.addEventListener('resize', checkScrollPosition);

    return () => {
      container.removeEventListener('scroll', checkScrollPosition);
      window.removeEventListener('resize', checkScrollPosition);
    };
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const cardWidth = scrollRef.current.clientWidth / 3;
    const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  return (
    <section id="photography" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle title="Photography" subtitle="Perspective" />

        {/* Carousel Container with Arrows */}
        <div className="relative group/carousel">

          {/* Left Arrow */}
          {canScrollLeft && (
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 top-0 bottom-4 z-20 w-12 
                         bg-gradient-to-r from-black/80 to-transparent
                         flex items-center justify-start pl-2
                         opacity-0 group-hover/carousel:opacity-100 
                         transition-opacity duration-300
                         hover:from-black/90"
              aria-label="Scroll left"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          {/* Right Arrow */}
          {canScrollRight && (
            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-0 bottom-4 z-20 w-12 
                         bg-gradient-to-l from-black/80 to-transparent
                         flex items-center justify-end pr-2
                         opacity-0 group-hover/carousel:opacity-100 
                         transition-opacity duration-300
                         hover:from-black/90"
              aria-label="Scroll right"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}

          {/* Inner scrollable row */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {locations.map((location, index) => (
              <motion.div
                key={location.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="shrink-0 w-full md:w-[calc(33.333%-1rem)] snap-start"
              >
                <Link to={location.href} className="block group h-full">
                  {/* Card */}
                  <div className="relative group rounded-xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-sm h-80 flex flex-col transition-all duration-300 hover:border-accent/20">
                    {/* Image Area */}
                    <div className="absolute inset-0">
                      <img
                        src={location.image}
                        alt={location.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    </div>

                    {/* Card footer */}
                    <div className="relative mt-auto p-6 z-10">
                      <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors">{location.name}</h3>
                      <p className="text-slate-400 text-sm mt-1 flex items-center gap-1">
                        View Gallery
                        <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Photography;