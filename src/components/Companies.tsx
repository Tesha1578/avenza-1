import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Compass } from 'lucide-react';
import { companiesData } from '../data/companiesData';
import { cn } from '../lib/utils';

const divisions = Object.values(companiesData);
// Duplicate divisions to create a seamless infinite revolving loop on wide screens
const revolvingItems = [...divisions, ...divisions, ...divisions];

export default function Companies({ className }: { className?: string } = {}) {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section id="companies" className={cn("py-12 sm:py-16 md:py-20 bg-avenza-bg relative overflow-hidden", className)}>
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[1000px] h-[600px] bg-avenza-green/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 relative z-10 mb-8 sm:mb-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-avenza-surface border border-avenza-green/20 text-avenza-green text-xs font-medium mb-3.5 sm:mb-4"
            >
              <Compass size={15} />
              <span>Avenza Group Divisions</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight font-display tracking-tight"
            >
              Specialized Divisions & Companies
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-avenza-gray-light/70 max-w-xl"
          >
            Five specialized powerhouses operating under the unified AVENZA collective to deliver coordinated digital marketing, software, event, and compliance solutions.
          </motion.p>
        </div>
      </div>

      {/* Slowly Revolving Cards Carousel for Desktop / Tablet */}
      <div 
        className="relative w-full overflow-hidden py-4 hidden lg:block"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Subtle Fade Edges */}
        <div className="absolute top-0 bottom-0 left-0 w-28 bg-gradient-to-r from-avenza-bg to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-28 bg-gradient-to-l from-avenza-bg to-transparent z-20 pointer-events-none" />

        <motion.div
          animate={{ x: isPaused ? undefined : [0, -2100] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 35,
              ease: 'linear',
            },
          }}
          className="flex gap-6 w-max px-6"
        >
          {revolvingItems.map((divItem, index) => {
            const Icon = divItem.icon;
            return (
              <div
                key={`${divItem.slug}-${index}`}
                className="w-[380px] flex-shrink-0"
              >
                <Link
                  to={`/companies/${divItem.slug}`}
                  className={`bg-gradient-to-br ${divItem.color} rounded-[32px] p-8 relative group block overflow-hidden border border-white/10 hover:border-avenza-green/40 transition-all duration-500 h-full shadow-xl hover:shadow-2xl hover:shadow-avenza-green/10 hover:-translate-y-2`}
                >
                  <div className="flex flex-col h-full relative z-10 justify-between min-h-[340px]">
                    <div>
                      <div className="flex justify-between items-start mb-6">
                        <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center text-avenza-green group-hover:scale-110 group-hover:bg-avenza-green group-hover:text-avenza-bg transition-all duration-500">
                          <Icon size={26} />
                        </div>
                        
                        <div className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white group-hover:bg-white group-hover:text-avenza-bg transition-all duration-300">
                          <ArrowUpRight size={18} />
                        </div>
                      </div>

                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-[11px] font-bold text-avenza-green bg-avenza-green/10 border border-avenza-green/20 rounded-full px-2.5 py-0.5">
                          {divItem.subsidiaryName}
                        </span>
                        <span className="text-[11px] font-medium text-avenza-gray-light/60">
                          {divItem.category}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-avenza-green transition-colors leading-snug font-display">
                        {divItem.name}
                      </h3>
                    </div>

                    <div className="pt-6 border-t border-white/10">
                      <p className="text-xs text-avenza-gray-light/70 leading-relaxed line-clamp-3">
                        {divItem.shortDescription}
                      </p>
                      
                      <div className="mt-4 flex items-center text-xs font-semibold text-avenza-green group-hover:underline">
                        <span>Explore Capabilities & Stats</span>
                        <ArrowUpRight size={14} className="ml-1" />
                      </div>
                    </div>

                  </div>
                </Link>
              </div>
            );
          })}
        </motion.div>

        <p className="text-center text-xs text-avenza-gray-light/40 mt-6 font-mono">
          Hover over any division card to pause • Click to view full team specs & case studies
        </p>
      </div>

      {/* Responsive Grid for Mobile & Tablet screens */}
      <div className="lg:hidden max-w-[1400px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {divisions.map((divItem) => {
            const Icon = divItem.icon;
            return (
              <Link
                key={divItem.slug}
                to={`/companies/${divItem.slug}`}
                className={`bg-gradient-to-br ${divItem.color} rounded-[28px] p-6 relative group block overflow-hidden border border-white/10 hover:border-avenza-green/40 transition-all duration-300 shadow-xl`}
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-avenza-green">
                    <Icon size={22} />
                  </div>
                  <span className="text-[10px] font-bold text-avenza-green bg-avenza-green/10 border border-avenza-green/20 rounded-full px-2.5 py-1">
                    {divItem.subsidiaryName}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 font-display">
                  {divItem.name}
                </h3>

                <p className="text-xs text-avenza-gray-light/70 mb-4 line-clamp-2">
                  {divItem.shortDescription}
                </p>

                <div className="flex items-center text-xs font-semibold text-avenza-green">
                  <span>View Division</span>
                  <ArrowUpRight size={14} className="ml-1" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>

    </section>
  );
}
