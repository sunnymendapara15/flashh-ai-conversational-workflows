import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../utils/animation';

const logos = ['Acme Corp', 'Nebula', 'Pulse', 'Vertex', 'Kinetic', 'Orbit'];
const stats = [
  { value: '12,000+', label: 'Workflows automated' },
  { value: '3.5M+', label: 'Tasks completed' },
  { value: '40 hrs', label: 'Saved per team monthly' },
];

export default function SocialProof() {
  return (
    <section className="relative py-20 border-y border-white/5 bg-slate-950/50" aria-labelledby="social-proof-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          {...fadeIn}
          className="text-center text-sm font-semibold uppercase tracking-widest text-slate-500 mb-10"
        >
          Trusted by forward-thinking teams
        </motion.p>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={staggerContainer.viewport}
          className="flex flex-wrap justify-center items-center gap-8 md:gap-14 mb-16"
        >
          {logos.map((logo) => (
            <motion.div
              key={logo}
              variants={fadeIn}
              className="text-slate-500 hover:text-slate-300 transition-colors duration-300"
            >
              <span className="text-xl md:text-2xl font-bold tracking-tight">{logo}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={staggerContainer.viewport}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeIn}
              className="text-center p-6 rounded-2xl glass hover:bg-white/5 transition-colors"
            >
              <p className="text-4xl md:text-5xl font-extrabold gradient-text mb-2">{stat.value}</p>
              <p className="text-slate-400 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
