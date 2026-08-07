import React from 'react';
import { motion } from 'motion/react';

const services = [
  {
    pillar: 'Branding',
    items: ['Brand Activations', 'Corporate Events', 'MICE', 'Roadshows', 'Mall Campaigns', 'LED Promotions'],
    image: 'https://images.unsplash.com/photo-1551818255-e6e10975bc17?q=80&w=1973&auto=format&fit=crop'
  },
  {
    pillar: 'Technology',
    items: ['Software Development', 'AI Integration', 'Mobile Apps', 'Websites', 'UI/UX Design', 'Cloud & Automation'],
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop'
  },
  {
    pillar: 'Marketing',
    items: ['Content Strategy', 'Social Media', 'Creative Campaigns', 'Influencer Marketing', 'Video Editing'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop'
  },
  {
    pillar: 'Advertising',
    items: ['Performance Marketing', 'SEO', 'Paid Ads', 'Brand Growth', 'Campaign Management'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop'
  },
  {
    pillar: 'Finance',
    items: ['GST', 'Income Tax', 'Business Registration', 'Financial Advisory', 'Compliance'],
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2026&auto=format&fit=crop'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-32 bg-white text-avenza-text rounded-[40px] md:rounded-[80px] -mt-10 relative z-20 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[48px] md:text-[64px] font-bold mb-6"
          >
            Capabilities
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-avenza-text-light max-w-2xl mx-auto"
          >
            Comprehensive services tailored to drive your business forward.
          </motion.p>
        </div>

        <div className="flex flex-col gap-12 md:gap-24">
          {services.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}
              >
                <div className="flex-1 w-full relative group">
                  <div className="overflow-hidden rounded-[32px] aspect-[4/3] bg-avenza-gray-light">
                    <img 
                      src={service.image} 
                      alt={service.pillar} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>
                </div>

                <div className={`flex-1 w-full ${isEven ? 'md:pl-12' : 'md:pr-12'}`}>
                  <h3 className="text-4xl font-bold mb-8">{service.pillar}</h3>
                  <div className="flex flex-wrap gap-4">
                    {service.items.map((item, i) => (
                      <span 
                        key={i} 
                        className="px-6 py-3 rounded-full border border-gray-200 text-sm font-medium text-avenza-text-light hover:border-avenza-bg hover:text-avenza-bg transition-colors cursor-default"
                      >
                        {item}
                      </span>
                    ))}
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
