import React, { useRef, useState, useEffect } from 'react';
import { SectionTitle, Card, Badge } from '../ui/Elements';
import { Project } from '../../types';

const projects: Project[] = [
  {
    id: '1',
    title: 'Automated billing engine',
    description: 'A Python-based engine using Salesforce and App data to generate invoices in Xero.',
    tags: ['Python', 'Salesforce', 'SQL'],
    image: '/images/til-card.webp'
  },
  {
    id: '2',
    title: 'CS Reporting Dashboard',
    description: 'Reporting on customer success metrics.',
    tags: ['SQL', 'Salesforce', 'MetaBase'],
    image: '/images/project-3.svg'
  },
  {
    id: '3',
    title: 'Pardot -> Hubspot',
    description: 'Optimising the marketing engine across multiple platforms',
    tags: ['Pardot', 'Hubspot', 'SQL'],
    image: '/images/project-2.svg'
  },
  {
    id: '4',
    title: 'VisaTracker Pro',
    description: 'Full-stack web application to track the number of days left before a visa expires.',
    tags: ['React', 'AntiGravity', 'SupaBase'],
    image: '/images/project-2.svg'
  },
  {
    id: '5',
    title: 'Diplomacy and RevOps',
    description: 'The link between diplomacy and Revenue Operations.',
    tags: ['Research', 'International Relations', 'Academic'],
    image: '/images/project-4.svg'
  }
];

const Projects: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Scroll to a specific index (for Title Navigation)
  const scrollToIndex = (index: number) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;

    // Calculate position: (cardWidth + gap) * index
    // We need to account for the padding-left to center the item
    // Actually, because we use snap-center and padded container, simpler math works better?
    // Let's use standard scrollLeft calculation.

    const cards = container.getElementsByClassName('project-card');
    if (cards[index]) {
      cards[index].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
    setActiveIndex(index);
  };

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;

    // Determine next index
    const newIndex = direction === 'left'
      ? Math.max(0, activeIndex - 1)
      : Math.min(projects.length - 1, activeIndex + 1);

    scrollToIndex(newIndex);
  };

  // Sync active state on manual scroll
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleScroll = () => {
      // Find which card is closest to the center
      const containerCenter = container.getBoundingClientRect().left + container.clientWidth / 2;
      const cards = Array.from(container.getElementsByClassName('project-card'));

      let closestIndex = 0;
      let closestDistance = Infinity;

      cards.forEach((card, index) => {
        const cardElement = card as HTMLElement;
        const cardRect = cardElement.getBoundingClientRect();
        const cardCenter = cardRect.left + cardRect.width / 2;
        const distance = Math.abs(containerCenter - cardCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      if (closestIndex !== activeIndex) {
        setActiveIndex(closestIndex);
      }
    };

    // Debounce/Throttle could be good, but for 4 items rAF/normal listener is fine
    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => container.removeEventListener('scroll', handleScroll);
  }, [activeIndex]);


  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle title="Projects" subtitle="Work" />

        {/* Title Navigation */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12">
          {projects.map((project, index) => (
            <button
              key={project.id}
              onClick={() => scrollToIndex(index)}
              className={`text-sm md:text-base font-medium tracking-wide transition-colors duration-300 ${index === activeIndex ? 'text-white' : 'text-slate-500 hover:text-slate-300'
                }`}
            >
              {project.title}
            </button>
          ))}
        </div>

        {/* Carousel Container */}
        <div className="relative group/carousel">

          {/* Gradient Overlays */}
          {/* Left Gradient - Fades the left peeking card */}
          <div className="absolute left-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          {/* Right Gradient - Fades the right peeking card */}
          <div className="absolute right-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          {/* Navigation Arrows (Always Visible) */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/80 text-white p-3 rounded-full backdrop-blur-sm transition-all border border-white/10"
            aria-label="Previous Project"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          </button>

          <button
            onClick={() => scroll('right')}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/80 text-white p-3 rounded-full backdrop-blur-sm transition-all border border-white/10"
            aria-label="Next Project"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </button>


          {/* Scrollable Track */}
          {/* gap-6 = 24px. width on desktop approx 600px. 
              We use px-[15%] or similar on container so the first item can be centered. 
              snap-center aligns them.
          */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-8 px-8 md:px-[25%] no-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="project-card shrink-0 w-full md:w-[600px] snap-center"
              >
                <Card className={`h-full flex flex-col p-0 overflow-hidden border-white/5 transition-all duration-500 group ${index === activeIndex ? 'border-accent/40 shadow-[0_0_30px_rgba(59,130,246,0.1)]' : 'opacity-50 scale-95'}`}>
                  <div className="relative h-64 overflow-hidden">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>
                  <div className="p-8 flex-1 flex flex-col">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-accent transition-colors">{project.title}</h3>
                    <p className="text-slate-400 mb-6 flex-1 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <Badge key={tag}>{tag}</Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;