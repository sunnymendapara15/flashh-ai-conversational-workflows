import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils/animation';

const testimonials = [
  {
    quote: 'Flashh turned our onboarding process from a 47-step manual checklist into a single sentence. Our ops team finally sleeps at night.',
    name: 'Priya Sharma',
    role: 'Head of Operations, Nebula',
    initials: 'PS',
  },
  {
    quote: 'I built a lead-routing workflow in three minutes without touching our codebase. It would have taken our engineering team two days.',
    name: 'Marcus Chen',
    role: 'VP of Sales, Vertex',
    initials: 'MC',
  },
  {
    quote: 'The interface is so simple our non-technical marketing team uses it daily, yet it is powerful enough for our infrastructure workflows.',
    name: 'Elena Rossi',
    role: 'Engineering Lead, Kinetic',
    initials: 'ER',
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-24 sm:py-32" aria-labelledby="testimonials-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-20">
          <h2 id="testimonials-heading" className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Loved by builders <span className="gradient-text">and operators</span>
          </h2>
          <p className="text-lg text-slate-400">
            From sales leaders to senior engineers, teams rely on Flashh to move work forward.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={staggerContainer.viewport}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={fadeInUp}
              whileHover={{ y: -6 }}
              className="relative p-8 rounded-2xl glass hover:bg-white/[0.06] transition-colors"
            >
              <Quote className="w-10 h-10 text-violet-500/30 mb-4" aria-hidden="true" />
              <p className="text-slate-200 text-lg leading-relaxed mb-8">"{t.quote}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-600 flex items-center justify-center text-white font-bold">
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-white">{t.name}</p>
                  <p className="text-sm text-slate-400">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
