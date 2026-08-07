import React from 'react';
import { motion } from 'motion/react';

const stats = [
  { value: '5+', label: 'Companies' },
  { value: '100+', label: 'Projects Delivered' },
  { value: '20+', label: 'Industries' },
  { value: 'Pan India', label: 'Operations' },
  { value: '100%', label: 'Client Focus' },
];

export default function TrustBar() {
  return (
    <section className="py-20 border-y border-avenza-surface-light bg-avenza-bg">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-12 md:gap-6">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-2 font-display">
                {stat.value}
              </h3>
              <p className="text-sm md:text-base text-avenza-gray-light/60 uppercase tracking-widest font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
