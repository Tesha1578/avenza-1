import React from 'react';
import { motion } from 'motion/react';
import { Link2, Globe } from 'lucide-react';

const team = [
  {
    name: 'Sarah Jenkins',
    role: 'Managing Director, Upgrade',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop'
  },
  {
    name: 'David Chen',
    role: 'CTO, Axoweb Technologies',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop'
  },
  {
    name: 'Priya Sharma',
    role: 'Head of Marketing, Thomas Astle',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop'
  },
  {
    name: 'Marcus Thorne',
    role: 'Director, Acton Creations',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop'
  }
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
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
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
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
        </div>
      </div>
    </section>
  );
}
