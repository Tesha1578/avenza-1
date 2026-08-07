import React from 'react';
import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-32 bg-white text-avenza-text rounded-[40px] md:rounded-[80px] -mt-10 relative z-20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-[48px] md:text-[64px] font-bold leading-tight mb-8">
              One ecosystem for <br className="hidden md:block"/>
              <span className="text-avenza-bg">complete business growth.</span>
            </h2>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-8"
          >
            <p className="text-xl md:text-2xl text-avenza-text-light leading-relaxed">
              AVENZA is an umbrella group combining five specialist companies offering complete business solutions. From branding to compliance, we provide end-to-end expertise under one roof.
            </p>
            
            <div className="grid grid-cols-2 gap-6 pt-8 border-t border-gray-200">
              <div>
                <h4 className="text-lg font-bold mb-2">Our Vision</h4>
                <p className="text-avenza-text-light text-sm">To be the ultimate growth partner for businesses across India.</p>
              </div>
              <div>
                <h4 className="text-lg font-bold mb-2">Our Approach</h4>
                <p className="text-avenza-text-light text-sm">Specialized excellence combined with seamless integration.</p>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Infographic visualization of the 5 companies forming AVENZA */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-24 p-8 md:p-16 bg-avenza-gray-light rounded-[40px] flex flex-col md:flex-row items-center justify-between gap-12"
        >
           <div className="text-center md:text-left flex-1">
             <h3 className="text-[32px] font-bold mb-4">The AVENZA Collective</h3>
             <p className="text-avenza-text-light">Five distinct pillars supporting one common goal: Your success.</p>
           </div>
           
           <div className="flex-1 w-full grid grid-cols-2 sm:grid-cols-3 gap-4">
              {['Branding', 'Technology', 'Marketing', 'Advertising', 'Finance'].map((pillar, i) => (
                <div key={i} className="aspect-square bg-white rounded-3xl flex items-center justify-center p-4 text-center shadow-sm font-semibold">
                  {pillar}
                </div>
              ))}
           </div>
        </motion.div>
      </div>
    </section>
  );
}
