import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '../ui/Elements';

interface TimelineItem {
  role: string;
  company: string;
  date: string; // YYYY-MM-DD
  side: 'left' | 'right';
}

const timelineItems: TimelineItem[] = [
  {
    role: "Revenue Operations Specialist",
    company: "ApprovalMax",
    date: "2025-04-01",
    side: "left",
  },
  {
    role: "Technical Operations Specialist",
    company: "First AML",
    date: "2021-06-01",
    side: "right",
  },
  {
    role: "Senior AML Analyst",
    company: "First AML",
    date: "2020-01-01",
    side: "left",
  },
];

const Career: React.FC = () => {
  // 1. Data Processing
  // We want Today at 0% and the Oldest Date at 100%.
  const today = new Date();
  const dates = timelineItems.map(i => new Date(i.date));
  const oldestDate = new Date(Math.min(...dates.map(d => d.getTime())));

  // Total span of time from Today back to the oldest role
  const rangeMs = today.getTime() - oldestDate.getTime();

  const getPercentFromTop = (dateStr: string) => {
    const itemDate = new Date(dateStr);
    const delta = today.getTime() - itemDate.getTime();
    // Calculate percentage, clamped between 0 and 100 just in case
    const rawPercent = (delta / rangeMs) * 100;
    return Math.max(0, Math.min(100, rawPercent));
  };

  return (
    <section id="career" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle title="Career History" subtitle="Experience" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

          {/* Left Column: Summary Text */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="prose prose-invert prose-lg text-slate-400"
            >
              <p className="mb-6">
                My professional journey has been driven by solving complex problems and delivering solutions that can be
                quickly adopted by Go-To-Market teams to improve efficiency.
              </p>
              <p className="mb-6">
                I thrive in dynamic and fast paced environments where technical precision meets business strategy,
                ensuring that every process implementation directly contributes to broader organisational goals.
              </p>
            </motion.div>
          </div>

          {/* Right Column: The Vertical Timeline */}
          {/* We use a fixed height container for the timeline visual */}
          <div className="lg:col-span-7 relative h-[700px] mt-8 lg:mt-0">

            {/* FULL HEIGHT CENTER LINE */}
            <div className="absolute left-1/2 top-[55px] bottom-0 w-px bg-gradient-to-b from-white/40 via-white/20 to-white/5 -translate-x-1/2" />

            {/* ARROW (TODAY) - FIXED AT TOP (0%) */}
            <motion.div
              initial={{ opacity: 0, x: "-50%", y: -10 }}
              whileInView={{ opacity: 1, x: "-50%", y: 0 }}
              viewport={{ once: true }}
              className="absolute left-1/2 top-0 flex flex-col items-center z-20"
            >
              <span className="text-accent text-lg font-bold mb-2 whitespace-nowrap">
                The next big thing
              </span>
              <div className="w-0 h-0 border-l-[10px] border-r-[10px] border-b-[16px]
                              border-l-transparent border-r-transparent border-b-accent" />
            </motion.div>

            {/* TIMELINE ITEMS */}
            {timelineItems.map((item, index) => {
              const topPercent = getPercentFromTop(item.date);

              return (
                <motion.div
                  key={item.date}
                  initial={{ opacity: 0, scale: 0.9, x: "-50%" }}
                  whileInView={{ opacity: 1, scale: 1, x: "-50%" }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  // Master Container: Positioned at the specific % from top.
                  // We use a flex row to align everything relative to the vertical center of the ROW.
                  className="absolute left-1/2 w-full flex items-center justify-center pointer-events-none"
                  style={{ top: `${topPercent}%` }}
                >

                  {/* LEFT SIDE CONTENT */}
                  <div className="flex-1 flex justify-end items-center pr-8 relative">
                    {/* If item is on the LEFT, show Role/Company here */}
                    {item.side === "left" && (
                      <div className="text-right pointer-events-auto">
                        <h4 className="text-lg md:text-xl font-bold text-white leading-tight">{item.role}</h4>
                        <span className="text-sm text-slate-500 font-medium mt-1">{item.company}</span>
                      </div>
                    )}
                    {/* If item is on the RIGHT, show Date here */}
                    {item.side === "right" && (
                      <div className="text-right pointer-events-auto">
                        <span className="font-mono text-sm text-slate-500">
                          {new Date(item.date).toLocaleDateString("en-GB", {
                            month: "long",
                            year: "numeric",
                          })}
                        </span>
                      </div>
                    )}

                    {/* Left Connector Line */}
                    {/* Touches the dot on the right side of this box */}
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-px bg-white/20" />
                  </div>


                  {/* CENTER NODE DOT */}
                  {/* Static flex item. 'shrink-0' ensures it stays 12x12px. */}
                  {/* z-10 puts it above the vertical line. */}
                  <div className="relative z-10 shrink-0">
                    <div className="w-3 h-3 bg-accent rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
                  </div>


                  {/* RIGHT SIDE CONTENT */}
                  <div className="flex-1 flex justify-start items-center pl-8 relative">
                    {/* Right Connector Line */}
                    {/* Touches the dot on the left side of this box */}
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-px bg-white/20" />

                    {/* If item is on the LEFT, show Date here */}
                    {item.side === "left" && (
                      <div className="text-left pointer-events-auto">
                        <span className="font-mono text-sm text-slate-500">
                          {new Date(item.date).toLocaleDateString("en-GB", {
                            month: "long",
                            year: "numeric",
                          })}
                        </span>
                      </div>
                    )}
                    {/* If item is on the RIGHT, show Role/Company here */}
                    {item.side === "right" && (
                      <div className="text-left pointer-events-auto">
                        <h4 className="text-lg md:text-xl font-bold text-white leading-tight">{item.role}</h4>
                        <span className="text-sm text-slate-500 font-medium mt-1">{item.company}</span>
                      </div>
                    )}
                  </div>

                </motion.div>
              );
            })}

          </div>
        </div>
      </div>
    </section>
  );
};

export default Career;