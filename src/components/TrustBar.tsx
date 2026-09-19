import React from 'react';
import { motion } from 'motion/react';

const stats = [
  { value: '5', label: 'Specialist Companies' },
  { value: '150+', label: 'Delivered Projects' },
  { value: '25M+', label: 'Audience Impressions' },
  { value: 'Pan-India', label: 'Operational Reach' },
  { value: '100%', label: 'Compliance & Quality' },
];

export default function TrustBar() {
  return (
    <section className="py-8 sm:py-10 border-y border-white/5 bg-avenza-surface/30">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-6 items-center">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`flex flex-col items-center text-center ${
                index === stats.length - 1 ? 'col-span-2 md:col-span-1' : ''
              }`}
            >
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-1.5 font-display tracking-tight">
                {stat.value}
              </h3>
              <p className="text-[11px] sm:text-xs text-avenza-gray-light/60 uppercase tracking-widest font-semibold">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
