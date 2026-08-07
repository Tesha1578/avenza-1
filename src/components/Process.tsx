import React from 'react';
import { motion } from 'motion/react';

const processes = [
  'Discovery',
  'Strategy',
  'Design',
  'Development',
  'Launch',
  'Growth'
];

export default function Process() {
  return (
    <section className="py-32 bg-white text-avenza-text rounded-[40px] md:rounded-[80px] -mt-10 relative z-20 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16">
          
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[48px] md:text-[64px] font-bold mb-6"
            >
              Our Process
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-avenza-text-light max-w-md"
            >
              A proven methodology combining creativity with data-driven execution to ensure predictable success.
            </motion.p>
          </div>

          <div className="flex flex-col gap-8">
            {processes.map((proc, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex items-center gap-8 p-6 rounded-[24px] hover:bg-avenza-gray-light transition-colors"
              >
                <div className="text-2xl font-display font-bold text-avenza-text-light/30 group-hover:text-avenza-bg transition-colors">
                  0{index + 1}
                </div>
                <div className="text-3xl font-bold text-avenza-text group-hover:translate-x-4 transition-transform duration-300">
                  {proc}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
