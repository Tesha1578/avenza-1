import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    title: 'Global Tech Summit',
    category: 'Branding & Events',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop',
    company: 'Upgrade'
  },
  {
    title: 'FinTech App UI/UX',
    category: 'Technology',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
    company: 'Axoweb Technologies'
  },
  {
    title: 'Lifestyle Brand Launch',
    category: 'Digital Marketing',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1974&auto=format&fit=crop',
    company: 'Thomas Astle'
  },
  {
    title: 'E-commerce Scaling',
    category: 'Performance Ads',
    image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=2074&auto=format&fit=crop',
    company: 'Acton Creations'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 bg-avenza-bg">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[48px] md:text-[64px] font-bold text-white mb-6 leading-tight"
            >
              Featured <br/>Projects
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <button className="h-14 px-8 rounded-full bg-white text-avenza-bg font-semibold flex items-center gap-2 hover:bg-avenza-green transition-all duration-300">
              View All Work
              <ArrowRight size={20} />
            </button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group cursor-pointer ${index % 2 !== 0 ? 'md:mt-24' : ''}`}
            >
              <div className="overflow-hidden rounded-[32px] mb-8 relative">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-6 left-6 z-20 px-4 py-2 rounded-full bg-black/50 backdrop-blur-md text-white text-xs font-semibold tracking-wider uppercase">
                  {project.company}
                </div>
              </div>
              <div>
                <p className="text-avenza-green font-medium mb-3 tracking-wide">{project.category}</p>
                <h3 className="text-3xl font-bold text-white group-hover:text-avenza-gray-light transition-colors">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
