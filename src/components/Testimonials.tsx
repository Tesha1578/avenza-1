import React from 'react';
import { motion } from 'motion/react';
import { Quote, Star, Sparkles } from 'lucide-react';

const testimonials = [
  {
    quote: "AVENZA completely transformed our enterprise brand presence. Upgrade's physical roadshow activations paired with Axoweb's custom Next.js e-commerce platform tripled our quarterly revenue within 90 days.",
    author: "Elena Rodriguez",
    role: "Chief Executive Officer",
    company: "TechFlow Enterprise",
    service: "Branding & Full-Stack Tech",
    rating: 5,
  },
  {
    quote: "Thomas Astle's creator network executed a synchronized campaign across 15 exclusive influencers. The resulting 12M+ organic reel views drove a 4.8x ROAS on our Meta ad funnels managed by Acton.",
    author: "James Mitchell",
    role: "Founder & Brand Director",
    company: "Zenith Lifestyle Apparel",
    service: "Creator Marketing & Performance Ads",
    rating: 5,
  },
  {
    quote: "Having corporate tax strategy, GST filings, and brand IP managed by TSP & CO. under the same roof gave our board total peace of mind during our Pan-India retail expansion.",
    author: "Anita Desai",
    role: "Chief Operating Officer",
    company: "Horizon Retail Networks",
    service: "Tax & Compliance Advisory",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-avenza-bg border-t border-white/5 overflow-hidden relative">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-avenza-green/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-6">
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-avenza-surface border border-avenza-green/20 text-avenza-green text-xs font-medium mb-3.5 sm:mb-4"
            >
              <Sparkles size={15} />
              <span>Verified Client Testimonials</span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white font-display tracking-tight"
            >
              What Industry Leaders Say
            </motion.h2>
          </div>

          <p className="text-sm sm:text-base text-avenza-gray-light/60 max-w-md">
            Delivering high-converting digital marketing, creator activations, and enterprise technology across India.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-avenza-surface p-8 sm:p-10 rounded-[32px] border border-white/5 hover:border-avenza-green/30 transition-all duration-300 relative flex flex-col justify-between shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <Quote size={36} className="text-avenza-green/30" />
                  <div className="flex gap-1 text-avenza-green">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={14} className="fill-avenza-green" />
                    ))}
                  </div>
                </div>

                <p className="text-sm sm:text-base text-white/90 mb-8 leading-relaxed font-normal">
                  "{testimonial.quote}"
                </p>
              </div>

              <div className="pt-6 border-t border-white/10">
                <span className="text-[11px] font-mono text-avenza-green uppercase tracking-wider block mb-1">
                  {testimonial.service}
                </span>
                <p className="font-bold text-white font-display text-base sm:text-lg">
                  {testimonial.author}
                </p>
                <p className="text-xs text-avenza-gray-light/60">
                  {testimonial.role} • <span className="text-white/80">{testimonial.company}</span>
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
