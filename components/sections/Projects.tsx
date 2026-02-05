import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionTitle, Card, Badge, Button } from '../ui/Elements';
import { Project } from '../../types';

const projects: Project[] = [
  {
    id: '1',
    title: 'Automated billing engine',
    description: 'A Python-based engine using Salesforce and App data to generate invoices in Xero.',
    longDescription: `
      <p>
      Anyone in charge of finance will tell you how difficult billing can be,
      especially when there are multiple complex pricing models to deal with.
      The largest project I have ever undertaken was tackling this problem. 
        By the end we had to deal with billing for two distinct products in three
        countries / currencies with over 12 unique pricing models. This project
        alone saved 100+ hours a month of manual billing work for over 40 staff.
      </p>
      <br />
      <p>
        To build this project, we needed to implement a brand new way of storing
        customer information in Salesforce. This system had to:
      </p>
      <ul class="list-disc pl-5 space-y-2 mt-2">
        <li>Allow the simple creation and approval of new contracts</li>
        <li>Capture key pricing information for all pricing models</li>
        <li>Move those contracts through the system automatically</li>
        <li>Get replaced with a new contract at the end of its term</li>
      </ul>
      <br />
      <p>
        Once these contracts were approved this whole process had to be an entirely
        hands off experience. This was achieved by leveraging Salesforce automations to move contracts through the system and update key information.
      </p>
      <br />
      <p>
        All this contract information was then sent into a Snowflake data lake via
        ETL tooling to sit alongside platform usage information from the product.
        The data was then transformed into a workable format for billing
        purposes.
      </p>
      <br />
      <p>
        At the end of each month all this data had to be collated and processed by a
        bespoke billing engine developed in Python. This would capture the relevant
        contract information from Salesforce, get all the billable work completed
        that month, generate an invoice and a schedule of work for that customer and
        send that information via an API directly into the accounting system Xero.
      </p>
      <br />
      <p>
        Start-ups move fast and change frequently. Building systems that can both
        change and adapt where necessary is critical. 
        If you'd like to hear how I can help your business get in touch below.
      </p>
      `,
    tags: ['Python', 'Salesforce', 'SQL'],
    image: '/images/billing-dataflow.webp'
  },
  {
    id: '2',
    title: 'CS Reporting Dashboard',
    description: 'Reporting on customer success metrics.',
    longDescription: `
      <p>
        Arming your customer success team with the right data and automations is one of the most important things you can do. To do this you need:
      </p>
      <ul class="list-disc pl-5 space-y-2 mt-2">
        <li><strong>CRM Architecture</strong> - Reliable data format</li>
        <li><strong>Data Accessibility</strong> - It has to be easy to find and understand</li>
        <li><strong>Portfolio Overview</strong> - See the forest through the trees</li>
      </ul>
      <br />
      <p>
        Having a reliable data structure is important not just to a data analyst, but to the frontline staff as well. Making sure that everything is in a consistent location reduces confusion & misplaced data and leveraging automations to keep that data alive and moving is critical in fast paced environments. Using Salesforce I was able to ensure that contract information was consistent and I used that to automate parts of the contract renewal process. I also introduced more accurate “at risk” tracking for customers that allowed the CS team to flag high risk customers and provided oversight of this to the leadership team.
      </p>
      <br />
      <p>
        Providing the team with an in depth dive into customers is also critical. They need to be able to see usage trends, track user engagement with the platform, identify bottlenecks for their clients and be fully armed with the data for renewal conversations. Building a detailed and dynamic dashboard here was critical as it had to support multiple pricing and consumption models as well as surface critical information at the correct time. This dashboard leveraged contract and opportunity data from Salesforce, usage data from the platform and invoice data from Xero to construct a clear image of the customers current state.
      </p>
      <br />
      <p>
        On top of a deep dive of information on each client, Customer Success teams also require an overview of the customers in their portfolio. At a glance they need to see which of their clients require the most attention, whether they are at risk of churning or need a renewal. This dashboard provided clear oversight of the entire customer base and provided links to the Salesforce record and the in depth customer review dashboard to make this a one stop shop for users to have as a launching point to solve the problems of the day.
      </p>
      <br />
      <p>
        Need better customer reporting? Get in touch below to see how I can help.
      </p>
    `,
    tags: ['SQL', 'Salesforce', 'MetaBase'],
    image: '/images/cs-dashboard.webp'
  },
  {
    id: '3',
    title: 'Pardot -> Hubspot',
    description: 'Optimising the marketing engine across multiple platforms',
    longDescription: `
      <p>Building a powerful marketing engine is critical to driving brand awareness and driving warm leads into the pipeline, but choosing which engine to run that off is a difficult decision.</p>
      <br />
      <p>Pardot, or Account Engagement as it's now known, is a powerful engine, with one of its biggest advantages being that it is natively integrated into all Salesforce data. But there are some major limitations to the tool as well, notably that it is slow and difficult to automate properly. Despite recent improvements in the tool it is still not on the same level as Hubspot for marketing purposes.</p>
      <br />
      <p>Ultimately we decided that the best course of action was to transition into Hubspot. I led the migration efforts, ensuring that the system had a smooth and reliable integration with Salesforce that surfaced relevant marketing prospects in Hubspot and pushed Marketing Qualified Leads (MQLs) to Salesforce to be picked up by the Sales team.</p>
      <br />
      <p>We also needed to ensure the proper migration of campaigns, email automations and marketing content to Hubspot. Working closely with the Marketing team we were able to ensure that all the required information was moved across seamlessly and improvements to existing workflows were implemented in the process.</p>
      <br />
      <p>This transition to a more powerful, reliable and workable system doubled the efficiency of the marketing team and allowed them to focus on generating world class content rather than implementing its delivery system.</p>
      <br />
      <p>If your teams are hampered down by inefficient tooling get in touch to see how I can help.</p>
    `,
    tags: ['Pardot', 'Hubspot', 'SQL'],
    image: '/images/pardot-hubspot.webp'
  },
  {
    id: '4',
    title: 'JobTracker Pro',
    description: 'Full-stack web application to track my job applications in a CRM style interface.',
    longDescription: `
      <p>This is a personal project I have been working on and is my first attempt at solo developing a full stack web application leveraging AI.</p>
      <br />
      <p>As I have been operating in the job market I saw an opportunity to not just streamline how I track my application, but also comstruct a detailed database architecture that I could use to gain massive insights into my job hunt.</p>
      <br />
      <p>Leveraging Google's AntiGravity IDE and Supabase I have been able to construct a full stack web application that is both reliable and scalable.</p>
      <br />
      <p>While by no means a software engineer, I have worked closely and reported to software engineers in my career, so I have been able to leverage those skills effectively to avoid many of the pitfalls that impact non technical developers. My deep understanding of information and data security thanks to my experience getting ISO27001 certified as well as understanding the importance of solid back end architecture through my Salesforce platform app building experience I am creating a reliable piece of software on my own.</p>
      <br />
      <p>The core of the application is completed, but I am constantly thinking of new features to include as I progress through the stages of my job hunt.</p>
      <br />
      <p>If you need custom automations that leverage AI, get in touch below.</p>
    `,
    tags: ['React', 'AntiGravity', 'SupaBase'],
    image: '/images/visa-tracker.webp'
  },
  {
    id: '5',
    title: 'Diplomacy and RevOps',
    description: 'The link between diplomacy and Revenue Operations.',
    longDescription: `
      <p>It is not uncommon for people with degrees in political science and international relations to end up working in the Revenue Operations space. As someone who has followed that path it is very clear as to why that is.</p>
<br />
<p>Because what is Revenue Operations Manager but the diplomat of the Go-to-Market team.</p>
<br />
<p>Now that I have made that connection, you can indulge my academic flexing and let me discuss my topic of study at the University of Canterbury.</p>
<br />
<p>I wrote my dissertation on the Chinese Military Technology Transfer Strategy and the Implications on New Zealand. Under the supervision of Professor Anne-Marie Brady, one of New Zealand's leading experts on China, I did a deep dive into various strategies employed by the Chinese government to acquire new technology and expand its military capabilities.</p>
<br />
<p>This can be broken down into four strategies, Acquisition, Espionage, Academic & 1000 Talents.</p>
<br />
<p><strong>Acquisition:</strong></p>
<p>Large military technology companies are not up for sale, so buying Lockheed Martin is out of the question. But these companies don't build everything. If you go far enough down the chain of sub contractors you can acquire companies that build certain components. Acquire enough of these companies and like the pieces of a puzzle you can start to gain a clearer picture of what you're building. One such example is the acquisition of the company that makes the next-gen screens installed in the F-35 fighter jet. Leveraging this strategy China was able to build a working prototype of the F-35 before it was deployed by the United States.</p>
<br />
<p><strong>Espionage:</strong></p>
<p>Why buy when you can steal. Espionage is a strategy used by every major player on the international stage, including China, and they are good at it. Whether through cyber attacks, corporate espionage or the coercion of their own citizens to act as agents for the state, China can get their hands on just about anything. There have been reports of tourists entering restricted zones of factories producing critical assets for Germany, and there is a reason high level executives take blank devices (phones, laptops etc.) on business trips to China. Protecting IP is critical, and China wants it to help develop their economy and military.</p>
<br />
<p><strong>Academic:</strong></p>
<p>Research and development is a critical part of developing modern military capabilities and some of the best centres of this are western universities. China has a well documented strategy of sending their top students to elite western institutions to study at a high level, almost exclusively in the STEM fields. The research they conduct is often smuggled out of the country they are studying in and sent back to China to aid in their military development, and should they fail to get the research, they have the added bonus of getting back their highly educated citizens who can move into the Chinese workforce and help develop their economy and military further forward.</p>
<br />
<p><strong>1000 Talents:</strong></p>
<p>China is not only focused on sending its best and brightest out into the world to extract knowledge, but also bringing the world's leading minds to China. This is called the 1000 Talents program. Through this program the Chinese government offers enticing incentives to the world's leading minds in science and engineering to work at the cutting edge of Chinese innovation</p>
<br />
<p><strong>What does this have to do with New Zealand?</strong></p>
<p>New Zealand is not renowned for its development of military technology, so why would they be at risk of aiding China's military? And why does it matter?</p>
<br />
<p>This cuts to the heart of the Chinese strategy. Getting military technology is good. But getting civilian technology that has military applications is even better. This is the dual use technology problem.</p>
<br />
<p>Whether it is new 5g technology that improves connection and data transfer speeds but has the consequence of being able to accurately track the users location immediately (researched by a Chinese student at MIT) to buying a small New Zealand company run out of a garage in Christchurch dedicated to developing a working jetpack. There is a wealth of technology out there that can be used for unintended military development.</p>
<br />
<p>For New Zealand this is important because as a signatory to the Wassenaar Agreement, we are prohibited from selling any technology with a military use to a country that is not also a signatory of this agreement. So is selling jetpack technology a breach of this agreement? Will that technology be used by rich thrill seekers? Firefighters rescuing people from sky scrapers? Or will it be strapped to the back of a soldier and used on the battlefield?</p>
<br />
<p>These are not easy questions to answer, but they are important things to consider as New Zealand navigates the evolving geo-political landscape.</p>
<br />
<p>If you would like to know more about this you can read the paper I co-authored with Professor Anne-Marie Brady published on the <a href="https://www.wilsoncenter.org/publication/holding-pen-one-hand-gripping-gun-other" target="_blank" class="text-blue-400 underline hover:text-blue-300 transition-colors">Wilson Center's Kissinger Institue on China</a> or you can get in touch below to discuss.</p>
    `,
    tags: ['Research', 'International Relations', 'Academic'],
    image: '/images/diplomacy.webp'
  }
];

const Projects: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  // Scroll to a specific index (for Title Navigation)
  const scrollToIndex = (index: number) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const cards = container.getElementsByClassName('project-card');
    if (cards[index]) {
      cards[index].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
    setActiveIndex(index);
  };

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
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

    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => container.removeEventListener('scroll', handleScroll);
  }, [activeIndex]);

  // Keyboard navigation for Projects Modal
  useEffect(() => {
    if (!selectedId) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      const currentIndex = projects.findIndex(p => p.id === selectedId);

      if (e.key === 'ArrowLeft') {
        const prevIndex = currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
        setSelectedId(projects[prevIndex].id);
      } else if (e.key === 'ArrowRight') {
        const nextIndex = currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
        setSelectedId(projects[nextIndex].id);
      } else if (e.key === 'Escape') {
        setSelectedId(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedId]);
  const selectedProject = projects.find(p => p.id === selectedId);

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
          <div className="absolute left-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          {/* Navigation Arrows */}
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
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-8 px-8 md:px-[25%] no-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="project-card shrink-0 w-full md:w-[600px] snap-center cursor-pointer"
                onClick={() => setSelectedId(project.id)}
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

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedId && selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />

            {/* Navigation Arrows */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                const currentIndex = projects.findIndex(p => p.id === selectedId);
                const prevIndex = currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
                setSelectedId(projects[prevIndex].id);
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-[60] p-3 bg-black/50 hover:bg-white/10 rounded-full text-white/70 hover:text-white transition-all backdrop-blur-sm border border-white/10 hidden md:block"
              aria-label="Previous project"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                const currentIndex = projects.findIndex(p => p.id === selectedId);
                const nextIndex = currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
                setSelectedId(projects[nextIndex].id);
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-[60] p-3 bg-black/50 hover:bg-white/10 rounded-full text-white/70 hover:text-white transition-all backdrop-blur-sm border border-white/10 hidden md:block"
              aria-label="Next project"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Modal Content */}
            <motion.div
              layoutId={selectedId}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-5xl bg-[#0F0F10] border border-white/10 rounded-2xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col z-50"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedId(null)}
                className="absolute top-4 right-4 z-20 p-2 bg-black/50 hover:bg-white/10 rounded-full text-white/70 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="relative w-full aspect-[2.35/1] shrink-0">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F10] to-transparent opacity-80" />
              </div>

              {/* Content Body */}
              <div className="p-8 overflow-y-auto custom-scrollbar">
                <h2 className="text-3xl font-bold text-white mb-2">{selectedProject.title}</h2>
                <p className="text-lg text-slate-400 mb-6">{selectedProject.description}</p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {selectedProject.tags.map(tag => (
                    <Badge key={tag}>{tag}</Badge>
                  ))}
                </div>

                {/* Long Description (Rich Text) */}
                <div className="prose prose-invert prose-lg max-w-none">
                  {/* Divider */}
                  <div className="h-px bg-white/10 my-8" />

                  <div
                    className="text-slate-300 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: selectedProject.longDescription || '' }}
                  />
                </div>

                {/* CTA Button */}
                <div className="mt-8 flex justify-center">
                  <Button
                    onClick={() => {
                      setSelectedId(null);
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Get in touch
                  </Button>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;