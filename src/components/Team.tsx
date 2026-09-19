import React from 'react';
import { motion } from 'motion/react';
import { Mail, Sparkles } from 'lucide-react';

function LinkedInIcon({ size = 16, className = '' }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

import photo1 from '../../assets/5th-1.jpeg';
import photo2 from '../../assets/5th.jpeg';
import photo3 from '../../assets/3rd.jpeg';
import photo4 from '../../assets/axoweb_ceo.jpeg';
import photoPranith from '../../assets/1st.jpeg';
import venuMukeshPhoto from '../../assets/venu-mukesh.png';

interface TeamMember {
  name: string;
  role: string;
  division: string;
  bio: string;
  image: string;
  email: string;
  linkedin: string;
}

const team: TeamMember[] = [
  {
    name: 'Venu Mukesh',
    role: 'Founder & Chairman',
    division: 'AVENZA GROUP',
    bio: 'Visionary entrepreneur steering cross-industry consolidation, corporate venture incubation, and multi-disciplinary expansion.',
    image: venuMukeshPhoto,
    email: 'venu@avenzagroup.com',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'A M TESHA',
    role: 'Chief Executive Officer',
    division: 'Axoweb Technologies',
    bio: 'Technology strategist and software architect directing cloud systems, AI workflows, and enterprise web engineering.',
    image: photo4,
    email: 'tesha@avenzagroup.com',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Thomas Astle',
    role: 'Managing Director & CMO',
    division: 'Thomas Astle & Acton',
    bio: 'Digital marketing pioneer managing viral creator cohorts, high-velocity reel strategy, and multi-channel performance media.',
    image: photo3,
    email: 'thomas@avenzagroup.com',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Pranith',
    role: 'Head of Brand Activations',
    division: 'Upgrade Experiential',
    bio: 'Experiential marketer leading large-scale corporate summits, nationwide mobile roadshows, and curved LED outdoor installations.',
    image: photoPranith,
    email: 'pranith@avenzagroup.com',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Tharun S',
    role: 'Partner & Tax Strategist',
    division: 'TSP & CO.',
    bio: 'Senior corporate tax advisor specializing in GST statutory filings, corporate restructuring, and international tax compliance.',
    image: photo1,
    email: 'tharun@avenzagroup.com',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Parthasarathy P',
    role: 'Partner & Financial Governance',
    division: 'TSP & CO.',
    bio: 'Chartered financial auditor leading balance sheet certifications, regulatory governance, and corporate risk mitigation.',
    image: photo2,
    email: 'partha@avenzagroup.com',
    linkedin: 'https://linkedin.com',
  },
];

export default function Team() {
  return (
    <section id="team" className="py-12 sm:py-16 md:py-20 bg-avenza-bg relative z-10 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-avenza-surface border border-avenza-green/20 text-avenza-green text-xs font-medium mb-3.5 sm:mb-4"
          >
            <Sparkles size={15} />
            <span>Executive Board</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 font-display tracking-tight"
          >
            Leadership Team
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-sm sm:text-base text-avenza-gray-light/70"
          >
            Seasoned founders, media executives, software engineers, and chartered tax practitioners leading the AVENZA collective.
          </motion.p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative rounded-[32px] overflow-hidden bg-avenza-surface border border-white/5 p-6 sm:p-8 flex flex-col items-center text-center hover:bg-avenza-surface-light hover:border-avenza-green/30 transition-all duration-500 shadow-xl"
            >
              {/* Avatar Photo */}
              <div className="w-36 h-36 sm:w-40 sm:h-40 rounded-full overflow-hidden mb-6 border-4 border-avenza-bg group-hover:border-avenza-green transition-all duration-500 shadow-xl bg-avenza-surface-light flex-shrink-0">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Badges & Name */}
              <span className="text-[11px] font-bold text-avenza-green bg-avenza-green/10 border border-avenza-green/20 rounded-full px-3 py-1 mb-2">
                {member.division}
              </span>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 font-display group-hover:text-avenza-green transition-colors">
                {member.name}
              </h3>

              <p className="text-xs sm:text-sm font-semibold text-white/90 mb-3">
                {member.role}
              </p>

              <p className="text-xs text-avenza-gray-light/65 leading-relaxed mb-6 flex-1">
                {member.bio}
              </p>

              {/* Social Connect Icons */}
              <div className="flex items-center gap-3 mt-auto pt-4 border-t border-white/5 w-full justify-center">
                <a
                  href={`mailto:${member.email}`}
                  aria-label={`Email ${member.name}`}
                  className="w-9 h-9 rounded-full bg-avenza-bg flex items-center justify-center text-avenza-gray-light/70 hover:text-avenza-green hover:bg-white/10 transition-colors"
                >
                  <Mail size={16} />
                </a>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`LinkedIn profile of ${member.name}`}
                  className="w-9 h-9 rounded-full bg-avenza-bg flex items-center justify-center text-avenza-gray-light/70 hover:text-avenza-green hover:bg-white/10 transition-colors"
                >
                  <LinkedInIcon size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
