import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center pt-32 pb-20 overflow-hidden">
      {/* Background abstract elements */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            rotate: [0, 90, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[20%] right-[-10%] w-[800px] h-[800px] rounded-full bg-avenza-green/10 blur-[120px]"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear", delay: 2 }}
          className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-avenza-surface-light/40 blur-[100px]"
        />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full relative z-10 grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Text Content */}
        <div className="lg:col-span-7 flex flex-col items-start pt-12 lg:pt-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-avenza-surface border border-avenza-surface-light mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-avenza-green animate-pulse"></span>
            <span className="text-sm font-medium">Avenza Group Portfolio</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-[48px] leading-[1.1] md:text-[72px] lg:text-[96px] font-bold text-white mb-8"
          >
            Building Brands.<br />
            Engineering Growth.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-avenza-green to-white">
              Driving Success.
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg md:text-xl text-avenza-gray-light/80 max-w-2xl mb-12 leading-relaxed"
          >
            AVENZA is a collective of specialist companies delivering branding, technology, digital marketing, advertising, and financial compliance services that empower businesses from idea to execution.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <button className="w-full sm:w-auto h-14 px-8 rounded-full bg-avenza-green text-avenza-bg font-semibold flex items-center justify-center gap-2 hover:scale-105 hover:shadow-[0_0_30px_rgba(166,255,61,0.3)] transition-all duration-300">
              Explore Our Group
              <ArrowRight size={20} />
            </button>
            <button className="w-full sm:w-auto h-14 px-8 rounded-full bg-avenza-surface text-white border border-avenza-surface-light font-semibold hover:bg-white hover:text-avenza-bg transition-all duration-300">
              Let's Work Together
            </button>
          </motion.div>
        </div>

        {/* Image/Visuals */}
        <div className="lg:col-span-5 relative mt-12 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5, type: 'spring' }}
            className="relative w-full aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded-[32px] overflow-hidden"
          >
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
              alt="Avenza Professionals" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-avenza-bg via-transparent to-transparent"></div>
            
            {/* Floating Stats */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="absolute bottom-8 left-4 right-4 md:left-8 md:right-8 p-4 md:p-6 rounded-[24px] bg-avenza-surface/80 backdrop-blur-xl border border-white/10"
            >
              <div className="flex justify-between items-center text-center">
                <div>
                  <p className="text-2xl md:text-3xl font-bold text-white mb-1">5+</p>
                  <p className="text-[10px] md:text-xs text-avenza-gray-light/60 uppercase tracking-wider">Cos</p>
                </div>
                <div className="w-px h-10 bg-white/10"></div>
                <div>
                  <p className="text-2xl md:text-3xl font-bold text-white mb-1">100+</p>
                  <p className="text-[10px] md:text-xs text-avenza-gray-light/60 uppercase tracking-wider">Projects</p>
                </div>
                <div className="w-px h-10 bg-white/10"></div>
                <div>
                  <p className="text-2xl md:text-3xl font-bold text-avenza-green mb-1">Pan</p>
                  <p className="text-[10px] md:text-xs text-avenza-gray-light/60 uppercase tracking-wider">India</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
