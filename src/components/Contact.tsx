import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-white text-avenza-text rounded-[40px] md:rounded-[80px] -mt-10 relative z-20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[48px] md:text-[72px] font-bold mb-8 leading-tight"
            >
              Let's build <br/> something <br/> <span className="text-avenza-text-light">extraordinary.</span>
            </motion.h2>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col gap-6 mt-12"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-avenza-gray-light flex items-center justify-center flex-shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Email Us</h4>
                  <a href="mailto:hello@avenzagroup.com" className="text-avenza-text-light hover:text-avenza-bg transition-colors">hello@avenzagroup.com</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-avenza-gray-light flex items-center justify-center flex-shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Call Us</h4>
                  <a href="tel:+919876543210" className="text-avenza-text-light hover:text-avenza-bg transition-colors">+91 98765 43210</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-avenza-gray-light flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Headquarters</h4>
                  <p className="text-avenza-text-light">Level 5, Avenza Tower,<br/>Cyber City, Gurugram, India</p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <form className="bg-avenza-gray-light p-8 md:p-12 rounded-[32px] flex flex-col gap-6">
              <h3 className="text-2xl font-bold mb-4">Send a message</h3>
              
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold">Name</label>
                <input type="text" placeholder="John Doe" className="w-full bg-white border border-gray-200 rounded-2xl px-4 py-4 outline-none focus:border-avenza-bg transition-colors" />
              </div>
              
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold">Email</label>
                <input type="email" placeholder="john@example.com" className="w-full bg-white border border-gray-200 rounded-2xl px-4 py-4 outline-none focus:border-avenza-bg transition-colors" />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold">Company Requirement</label>
                <select className="w-full bg-white border border-gray-200 rounded-2xl px-4 py-4 outline-none focus:border-avenza-bg transition-colors appearance-none">
                  <option>Select a service...</option>
                  <option>Branding (Upgrade)</option>
                  <option>Technology (Axoweb)</option>
                  <option>Marketing (Thomas Astle)</option>
                  <option>Advertising (Acton Creations)</option>
                  <option>Compliance (TSP & CO.)</option>
                  <option>Full Ecosystem Solution</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold">Message</label>
                <textarea rows={4} placeholder="Tell us about your project..." className="w-full bg-white border border-gray-200 rounded-2xl px-4 py-4 outline-none focus:border-avenza-bg transition-colors resize-none"></textarea>
              </div>

              <button type="button" className="w-full h-14 mt-4 rounded-full bg-avenza-bg text-white font-semibold flex items-center justify-center gap-2 hover:bg-avenza-green hover:text-avenza-bg transition-all duration-300">
                Submit Inquiry
                <ArrowRight size={20} />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
