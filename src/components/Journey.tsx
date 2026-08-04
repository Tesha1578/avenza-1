import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';

const steps = [
  { id: '01', title: 'Idea', desc: 'Conceptualizing the vision.' },
  { id: '02', title: 'Brand', desc: 'Crafting identity & experiences via Upgrade.' },
  { id: '03', title: 'Technology', desc: 'Building platforms via Axoweb.' },
  { id: '04', title: 'Marketing', desc: 'Driving engagement via Thomas Astle & Acton.' },
  { id: '05', title: 'Compliance', desc: 'Ensuring financial health via TSP & CO.' },
];

export default function Journey() {
  return (
    <section className="py-32 bg-avanza-bg relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        
        <div className="mb-20 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[48px] md:text-[64px] font-bold text-white mb-6"
          >
            The Client Journey
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-avanza-gray-light/60 max-w-2xl mx-auto"
          >
            How businesses scale seamlessly within the AVANZA ecosystem.
          </motion.p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-px bg-white/10 z-0"></div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="flex flex-row md:flex-col items-center md:items-start text-left mb-8 md:mb-0 relative z-10 w-full md:w-1/5 group"
            >
              <div className="flex-shrink-0 w-24 h-24 rounded-full bg-avanza-surface border border-white/10 flex items-center justify-center text-2xl font-bold text-white mb-0 md:mb-6 mr-6 md:mr-0 group-hover:bg-avanza-green group-hover:text-avanza-bg group-hover:border-avanza-green transition-all duration-300">
                {step.id}
              </div>
              <div>
                <h4 className="text-2xl font-bold text-white mb-2">{step.title}</h4>
                <p className="text-sm text-avanza-gray-light/60 max-w-[200px]">{step.desc}</p>
              </div>

              {/* Connecting Line (Mobile) */}
              {index < steps.length - 1 && (
                <div className="md:hidden absolute left-12 top-24 bottom-[-32px] w-px bg-white/10"></div>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
