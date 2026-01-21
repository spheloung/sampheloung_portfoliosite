import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '../ui/Elements';

const Career: React.FC = () => {
  // Timeline configuration
  // We extend the end date to 2026 to ensure there's space at the top
  const startDate = new Date('2019-01-01').getTime();
  const endDate = new Date('2026-06-01').getTime(); 
  const totalTime = endDate - startDate;

  const getPositionPercent = (dateStr: string | number) => {
    const date = typeof dateStr === 'number' ? dateStr : new Date(dateStr).getTime();
    return ((date - startDate) / totalTime) * 100;
  };

  // Anchor "Next big thing" to today's date
  // Using actual Date.now() as requested.
  const todayPercent = getPositionPercent(Date.now());
  
  // Specific Job Positions
  const job1Percent = getPositionPercent('2025-04-01');
  const job2Percent = getPositionPercent('2021-06-01');
  const job3Percent = getPositionPercent('2020-01-01');

  return (
    <section id="career" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle title="Career History" subtitle="Experience" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Text Content (Compressed ~40%) */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="prose prose-invert prose-lg text-slate-400"
            >
              <p className="mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="mb-6">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </p>
            </motion.div>
          </div>

          {/* Right Column: Vertical Timeline */}
          <div className="lg:col-span-7 relative h-[700px] block lg:pl-12">
            
            {/* Center Vertical Line */}
            {/* Runs from bottom up to the arrow base (todayPercent) */}
            <div 
              className="absolute left-1/2 -translate-x-1/2 w-px bg-gradient-to-t from-white/5 via-white/20 to-white/40"
              style={{ top: `${100 - todayPercent}%`, bottom: '0' }}
            />

            {/* "The Next Big Thing" Marker */}
            {/* Anchored to Today's date */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center z-20 transform -translate-y-full"
                style={{ bottom: `${todayPercent}%` }}
            >
                 <div className="text-accent text-lg md:text-xl font-bold tracking-wide whitespace-nowrap mb-2">
                   The next big thing
                 </div>
                 {/* Solid Arrow Head pointing UP */}
                 <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[16px] border-b-accent" />
            </motion.div>


            {/* =========================================================
                TIMELINE ITEM 1 (Top)
                Left: Revenue Operations Specialist - ApprovalMax
                Right: April 2025
               ========================================================= */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="absolute w-full flex items-center justify-center"
                style={{ bottom: `${job1Percent}%` }}
            >
                {/* Central Node */}
                <div className="w-3 h-3 bg-accent rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)] z-10" />
                
                {/* Content Container */}
                <div className="absolute w-full flex justify-between items-center px-8 md:px-12">
                    
                    {/* LEFT CONTENT: Role */}
                    <div className="flex-1 text-right pr-4 md:pr-0">
                        <div className="group cursor-default">
                             <h4 className="text-lg md:text-xl font-bold text-white group-hover:text-accent transition-colors duration-300">Revenue Operations Specialist</h4>
                             <span className="text-sm text-slate-500 font-medium tracking-wide block mt-1">ApprovalMax</span>
                        </div>
                    </div>

                    {/* Spacer */}
                    <div className="w-8 md:w-12" />

                    {/* RIGHT CONTENT: Date */}
                    <div className="flex-1 text-left pl-4 md:pl-0">
                        <span className="font-mono text-sm text-slate-500">April 2025</span>
                    </div>

                    {/* Decorative Arrow Pointing LEFT (to Title) */}
                    <motion.div 
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.4 }}
                        className="absolute top-1/2 -translate-y-1/2 h-px bg-white/20 w-8 md:w-12 right-1/2 mr-[2px] origin-right"
                    />
                </div>
            </motion.div>


            {/* =========================================================
                TIMELINE ITEM 2 (Middle)
                Left: June 2021
                Right: Technical Operations Specialist - First AML
               ========================================================= */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="absolute w-full flex items-center justify-center"
                style={{ bottom: `${job2Percent}%` }}
            >
                {/* Central Node */}
                <div className="w-3 h-3 bg-accent rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)] z-10" />
                
                <div className="absolute w-full flex justify-between items-center px-8 md:px-12">
                    
                    {/* LEFT CONTENT: Date */}
                    <div className="flex-1 text-right pr-4 md:pr-0">
                        <span className="font-mono text-sm text-slate-500">June 2021</span>
                    </div>

                    {/* Spacer */}
                    <div className="w-8 md:w-12" />

                    {/* RIGHT CONTENT: Role */}
                    <div className="flex-1 text-left pl-4 md:pl-0">
                        <div className="group cursor-default">
                             <h4 className="text-lg md:text-xl font-bold text-white group-hover:text-accent transition-colors duration-300">Technical Operations Specialist</h4>
                             <span className="text-sm text-slate-500 font-medium tracking-wide block mt-1">First AML</span>
                        </div>
                    </div>

                    {/* Decorative Arrow Pointing RIGHT (to Title) */}
                    <motion.div 
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.4 }}
                        className="absolute top-1/2 -translate-y-1/2 h-px bg-white/20 w-8 md:w-12 left-1/2 ml-[2px] origin-left"
                    />
                </div>
            </motion.div>


            {/* =========================================================
                TIMELINE ITEM 3 (Bottom)
                Left: Senior AML Analyst
                Right: January 2020
               ========================================================= */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="absolute w-full flex items-center justify-center"
                style={{ bottom: `${job3Percent}%` }}
            >
                {/* Central Node */}
                <div className="w-3 h-3 bg-accent rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)] z-10" />
                
                <div className="absolute w-full flex justify-between items-center px-8 md:px-12">
                    
                    {/* LEFT CONTENT: Role */}
                    <div className="flex-1 text-right pr-4 md:pr-0">
                        <div className="group cursor-default">
                             <h4 className="text-lg md:text-xl font-bold text-white group-hover:text-accent transition-colors duration-300">Senior AML Analyst</h4>
                             <span className="text-sm text-slate-500 font-medium tracking-wide block mt-1">First AML</span>
                        </div>
                    </div>

                    {/* Spacer */}
                    <div className="w-8 md:w-12" />

                    {/* RIGHT CONTENT: Date */}
                    <div className="flex-1 text-left pl-4 md:pl-0">
                        <span className="font-mono text-sm text-slate-500">January 2020</span>
                    </div>

                    {/* Decorative Arrow Pointing LEFT (to Title) */}
                    <motion.div 
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6, duration: 0.4 }}
                        className="absolute top-1/2 -translate-y-1/2 h-px bg-white/20 w-8 md:w-12 right-1/2 mr-[2px] origin-right"
                    />
                </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Career;