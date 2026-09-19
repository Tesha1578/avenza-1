import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, ShieldCheck, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] lg:min-h-0 lg:h-screen lg:max-h-[720px] flex items-center justify-center pt-14 sm:pt-16 lg:pt-14 pb-4 sm:pb-6 overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ 
            scale: [1, 1.15, 1],
            opacity: [0.18, 0.3, 0.18],
            rotate: [0, 45, 0]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute top-[8%] right-[-5%] w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] rounded-full bg-avenza-green/10 blur-[120px]"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.25, 1],
            opacity: [0.1, 0.22, 0.1]
          }}
          transition={{ duration: 14, repeat: Infinity, ease: "linear", delay: 2 }}
          className="absolute bottom-[-10%] left-[-5%] w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] rounded-full bg-avenza-surface-light/40 blur-[100px]"
        />
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 w-full relative z-10 grid lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-center">
        
        {/* Left Column: Headline, Description & CTAs */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-avenza-surface/90 border border-avenza-green/20 mb-2.5 sm:mb-3 shadow-sm"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-avenza-green animate-pulse" />
            <span className="text-[10px] sm:text-xs font-semibold text-avenza-gray-light">
              AVENZA Corporate Collective • 5 Specialist Divisions
            </span>
          </motion.div>

          {/* Headline - Proportioned to fit any display without vertical overflow */}
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[40px] xl:text-[46px] 2xl:text-5xl font-bold text-white mb-2.5 sm:mb-3.5 font-display tracking-tight leading-[1.08]"
          >
            Building Brands.<br />
            Engineering Growth.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-avenza-green via-white to-avenza-gray-light">
              Dominating Markets.
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="text-xs sm:text-sm md:text-[14px] text-avenza-gray-light/80 max-w-xl mb-4 sm:mb-5 leading-relaxed font-normal"
          >
            AVENZA unites elite specialists in digital marketing, 22+ exclusive creator roster management, experiential branding, enterprise software development, and corporate tax compliance into one seamless growth collective.
          </motion.p>

          {/* Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.35 }}
            className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto"
          >
            <Link
              to="/companies"
              className="w-full sm:w-auto h-10 sm:h-11 px-5 sm:px-6 rounded-full bg-avenza-green text-avenza-bg font-bold text-xs sm:text-sm flex items-center justify-center gap-2 hover:bg-white hover:scale-105 hover:shadow-[0_0_20px_rgba(166,255,61,0.25)] transition-all duration-300 shadow-md"
            >
              <span>Explore Group Divisions</span>
              <ArrowRight size={15} />
            </Link>
            <Link
              to="/contact"
              className="w-full sm:w-auto h-10 sm:h-11 px-5 sm:px-6 rounded-full bg-avenza-surface text-white border border-white/10 font-semibold text-xs sm:text-sm flex items-center justify-center hover:bg-white hover:text-avenza-bg transition-all duration-300"
            >
              Let's Build Together
            </Link>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex flex-wrap items-center gap-4 sm:gap-6 mt-4 sm:mt-5 pt-3 border-t border-white/5 text-[11px] sm:text-xs text-avenza-gray-light/60"
          >
            <div className="flex items-center gap-1.5">
              <ShieldCheck size={14} className="text-avenza-green" />
              <span>Institutional Delivery</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Sparkles size={14} className="text-avenza-green" />
              <span>22+ Exclusive Talent</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Zap size={14} className="text-avenza-green" />
              <span>Pan-India Reach</span>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Visual Showcase Card */}
        <div className="lg:col-span-5 relative flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative w-full max-w-[400px] lg:max-w-none aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/5] max-h-[250px] sm:max-h-[300px] lg:max-h-[360px] xl:max-h-[390px] rounded-[24px] overflow-hidden border border-white/10 shadow-2xl group"
          >
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
              alt="AVENZA Group Team" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-avenza-bg/95 via-avenza-bg/20 to-transparent" />
            
            {/* Embedded Live Stats Pill Card */}
            <motion.div 
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.55, duration: 0.4 }}
              className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-3.5 sm:left-3.5 sm:right-3.5 p-2.5 sm:p-3 rounded-[16px] bg-avenza-surface/90 backdrop-blur-xl border border-white/10 shadow-xl"
            >
              <div className="grid grid-cols-3 gap-2 text-center">
                <div>
                  <p className="text-base sm:text-xl font-bold text-white font-display leading-tight">5</p>
                  <p className="text-[9px] sm:text-[10px] text-avenza-gray-light/60 uppercase tracking-wider font-semibold">
                    Divisions
                  </p>
                </div>
                <div className="border-x border-white/10">
                  <p className="text-base sm:text-xl font-bold text-white font-display leading-tight">150+</p>
                  <p className="text-[9px] sm:text-[10px] text-avenza-gray-light/60 uppercase tracking-wider font-semibold">
                    Projects
                  </p>
                </div>
                <div>
                  <p className="text-base sm:text-xl font-bold text-avenza-green font-display leading-tight">Pan</p>
                  <p className="text-[9px] sm:text-[10px] text-avenza-gray-light/60 uppercase tracking-wider font-semibold">
                    India Reach
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
