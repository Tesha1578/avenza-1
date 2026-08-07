import React from 'react';
import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "AVENZA completely transformed our brand presence. Between Upgrade's physical activations and Axoweb's platform development, our sales have tripled.",
    author: "Elena Rodriguez",
    role: "CEO, TechFlow",
  },
  {
    quote: "Having digital marketing, performance ads, and compliance all under one umbrella made our expansion seamless. Highly recommended ecosystem.",
    author: "James Mitchell",
    role: "Founder, Zenith Lifestyle",
  },
  {
    quote: "The synergy between their divisions is unmatched. They don't just execute tasks; they strategically engineer business growth from every angle.",
    author: "Anita Desai",
    role: "Marketing Director, Horizon",
  }
];

export default function Testimonials() {
  return (
    <section className="py-32 bg-avenza-bg border-t border-avenza-surface-light overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-16"
        >
          <div className="w-16 h-[2px] bg-avenza-green"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-widest text-sm">Client Voices</h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-avenza-surface p-10 rounded-[32px] border border-white/5 relative"
            >
              <Quote size={48} className="text-avenza-surface-light mb-8" />
              <p className="text-lg md:text-xl text-white mb-8 leading-relaxed font-medium">
                "{testimonial.quote}"
              </p>
              <div>
                <p className="font-bold text-avenza-green">{testimonial.author}</p>
                <p className="text-sm text-avenza-gray-light/60">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
