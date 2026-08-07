import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Code2, Megaphone, Target, Landmark, ArrowUpRight } from 'lucide-react';

const companies = [
  {
    name: 'Upgrade',
    category: 'Branding & Experiential',
    description: 'Brand Activations, Corporate Events, MICE, Roadshows, Mall Campaigns, LED Promotions.',
    icon: Sparkles,
    color: 'bg-gradient-to-br from-avenza-surface to-avenza-surface-light',
    colSpan: 'lg:col-span-8',
    rowSpan: 'lg:row-span-1',
  },
  {
    name: 'Axoweb Technologies',
    category: 'Technology',
    description: 'Software, AI, Apps, Websites, UI/UX, Cloud, Automation.',
    icon: Code2,
    color: 'bg-gradient-to-br from-avenza-surface-light to-avenza-surface',
    colSpan: 'lg:col-span-4',
    rowSpan: 'lg:row-span-1',
  },
  {
    name: 'Thomas Astle',
    category: 'Digital Marketing',
    description: 'Content Strategy, Social Media, Creative Campaigns, Influencer Marketing, Video Editing.',
    icon: Megaphone,
    color: 'bg-gradient-to-br from-[#1A1A1A] to-avenza-surface',
    colSpan: 'lg:col-span-4',
    rowSpan: 'lg:row-span-1',
  },
  {
    name: 'Acton Creations',
    category: 'Advertising',
    description: 'Performance Marketing, SEO, Paid Ads, Brand Growth, Campaign Management.',
    icon: Target,
    color: 'bg-gradient-to-br from-avenza-surface to-[#222222]',
    colSpan: 'lg:col-span-4',
    rowSpan: 'lg:row-span-1',
  },
  {
    name: 'TSP & CO.',
    category: 'Tax & Compliance',
    description: 'GST, Income Tax, Business Registration, Financial Advisory.',
    icon: Landmark,
    color: 'bg-gradient-to-br from-[#161616] to-avenza-surface-light',
    colSpan: 'lg:col-span-4',
    rowSpan: 'lg:row-span-1',
  },
];

export default function Companies() {
  return (
    <section id="companies" className="py-32 bg-avenza-bg">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        <div className="mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[48px] md:text-[64px] font-bold text-white mb-6"
          >
            Our Companies
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-avenza-gray-light/60 max-w-2xl"
          >
            Five specialist divisions working in synergy to provide end-to-end solutions for your business.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {companies.map((company, index) => {
            const Icon = company.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`${company.colSpan} ${company.rowSpan} ${company.color} rounded-[32px] p-8 md:p-12 relative group overflow-hidden border border-white/5 hover:border-avenza-green/30 transition-all duration-500`}
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-avenza-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[32px]"></div>
                
                <div className="flex flex-col h-full relative z-10">
                  <div className="flex justify-between items-start mb-12">
                    <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-avenza-green group-hover:scale-110 group-hover:bg-avenza-green group-hover:text-avenza-bg transition-all duration-500">
                      <Icon size={32} />
                    </div>
                    <button className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white group-hover:bg-white group-hover:text-avenza-bg transition-all duration-300">
                      <ArrowUpRight size={24} />
                    </button>
                  </div>
                  
                  <div className="mt-auto">
                    <p className="text-avenza-green font-medium mb-2">{company.category}</p>
                    <h3 className="text-3xl font-bold text-white mb-4">{company.name}</h3>
                    <p className="text-avenza-gray-light/60">{company.description}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  );
}
