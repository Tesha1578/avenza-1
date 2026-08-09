import React from 'react';
import { motion } from 'motion/react';
import { Link2, Globe } from 'lucide-react';

import photo1 from '../../assets/5th-1.jpeg';
import photo2 from '../../assets/5th.jpeg';
import photo3 from '../../assets/3rd.jpeg';
import photo4 from '../../assets/axoweb_ceo.jpeg';
import venuMukeshPhoto from '../../assets/venu-mukesh.png';

const team = [
  {
    name: 'Venu Mukesh',
    role: 'Founder of ( Upgrade ) and ( Mental & Health Foundation )',
    image: venuMukeshPhoto,
  },
  {
    name: 'A M TESHA',
    role: 'CEO, Axoweb Technologies',
    image: photo4,
  },
  {
    name: 'Thomas Astle',
    role: 'Head of Marketing, Thomas Astle',
    image: photo3,
  },
  {
    name: 'Pranith',
    role: '',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop',
  },
  {
    name: 'Tharun S',
    role: 'TSP & CO',
    image: photo1,
  },
  {
    name: 'Parthasarathy P',
    role: 'TSP & CO',
    image: photo2,
  },
];

export default function Team() {
  return (
    <section className="py-32 bg-avenza-bg relative z-10">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative rounded-[32px] overflow-hidden bg-avenza-surface border border-white/5 p-8 flex flex-col items-center text-center hover:bg-avenza-surface-light transition-colors duration-500"
            >
              <div className="w-40 h-40 rounded-full overflow-hidden mb-6 border-4 border-avenza-bg group-hover:border-avenza-green transition-colors duration-500">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
              {member.role && (
                <p className="text-sm text-avenza-green mb-6 h-10">{member.role}</p>
              )}

              <div className="flex items-center gap-4 mt-auto">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-avenza-bg flex items-center justify-center text-white hover:text-avenza-green transition-colors"
                >
                  <Link2 size={18} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-avenza-bg flex items-center justify-center text-white hover:text-avenza-green transition-colors"
                >
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
