import React from 'react';
import { motion } from 'motion/react';
import { Link2, Globe, UserPlus, Shield } from 'lucide-react';

import founderImg from '../../assets/1st.jpeg';
import managingHeadImg from '../../assets/axoweb_ceo.jpeg';
import digitalMarketingImg from '../../assets/3rd.jpeg';
import auditor1Img from '../../assets/5th-1.jpeg';
import auditor2Img from '../../assets/5th.jpeg';

// Individual leadership members (positions 1-4)
const leaders = [
  {
    name: 'Founder',
    role: 'Founder & Visionary',
    image: founderImg,
  },
  {
    name: 'Managing Head',
    role: 'Managing Head, Axoweb Technologies',
    image: managingHeadImg,
  },
  {
    name: 'Digital Marketing Lead',
    role: 'Head of Digital Marketing',
    image: digitalMarketingImg,
  },
];

// 4th position is a placeholder (empty slot)
// 5th position is the auditing team (2 members)
const auditingTeam = [
  {
    name: 'Auditor 1',
    role: 'Auditing Team',
    image: auditor1Img,
  },
  {
    name: 'Auditor 2',
    role: 'Auditing Team',
    image: auditor2Img,
  },
];

export default function Team() {
  return (
    <section className="py-32 bg-avanza-bg relative z-10">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[48px] md:text-[64px] font-bold text-white mb-6"
          >
            Leadership
          </motion.h2>
        </div>

        {/* Row 1: Positions 1–4 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Positions 1-3: Real members */}
          {leaders.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative rounded-[32px] overflow-hidden bg-avanza-surface border border-white/5 p-8 flex flex-col items-center text-center hover:bg-avanza-surface-light transition-colors duration-500"
            >
              <div className="w-40 h-40 rounded-full overflow-hidden mb-6 border-4 border-avanza-bg group-hover:border-avanza-green transition-colors duration-500">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
              <p className="text-sm text-avanza-green mb-6 h-10">{member.role}</p>
              
              <div className="flex items-center gap-4 mt-auto">
                <a href="#" className="w-10 h-10 rounded-full bg-avanza-bg flex items-center justify-center text-white hover:text-avanza-green transition-colors">
                  <Link2 size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-avanza-bg flex items-center justify-center text-white hover:text-avanza-green transition-colors">
                  <Globe size={18} />
                </a>
              </div>
            </motion.div>
          ))}

          {/* Position 4: Empty placeholder slot */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="group relative rounded-[32px] overflow-hidden bg-avanza-surface border-2 border-dashed border-white/10 p-8 flex flex-col items-center justify-center text-center hover:border-avanza-green/30 transition-colors duration-500"
          >
            <div className="w-40 h-40 rounded-full overflow-hidden mb-6 border-4 border-avanza-bg bg-avanza-bg/50 flex items-center justify-center">
              <UserPlus size={48} className="text-white/20" />
            </div>
            <h3 className="text-2xl font-bold text-white/30 mb-2">Coming Soon</h3>
            <p className="text-sm text-avanza-green/40 mb-6 h-10">Position Available</p>
          </motion.div>
        </div>

        {/* Row 2: Position 5 – Auditing Team (2 members) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-2xl mx-auto"
        >
          <div className="rounded-[32px] overflow-hidden bg-avanza-surface border border-white/5 p-8 hover:bg-avanza-surface-light transition-colors duration-500">
            <div className="flex items-center justify-center gap-2 mb-8">
              <Shield size={20} className="text-avanza-green" />
              <h4 className="text-lg font-semibold text-avanza-green uppercase tracking-widest">Auditing Team</h4>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {auditingTeam.map((member, index) => (
                <div key={index} className="group flex flex-col items-center text-center">
                  <div className="w-36 h-36 rounded-full overflow-hidden mb-5 border-4 border-avanza-bg group-hover:border-avanza-green transition-colors duration-500">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-sm text-avanza-green">{member.role}</p>
                  <div className="flex items-center gap-3 mt-4">
                    <a href="#" className="w-9 h-9 rounded-full bg-avanza-bg flex items-center justify-center text-white hover:text-avanza-green transition-colors">
                      <Link2 size={16} />
                    </a>
                    <a href="#" className="w-9 h-9 rounded-full bg-avanza-bg flex items-center justify-center text-white hover:text-avanza-green transition-colors">
                      <Globe size={16} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
