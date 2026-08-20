import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Code2, Rocket } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils/animation';

const benefits = [
  {
    icon: Clock,
    title: 'Ship in minutes, not weeks',
    description: 'What used to require back-and-forth with engineering now happens in a single conversation. Flashh drafts, connects, and deploys workflows instantly.',
  },
  {
    icon: Code2,
    title: 'No-code, low-friction',
    description: 'Non-technical teams finally have the power to automate. Engineers stay focused on hard problems while everyone else moves faster.',
  },
  {
    icon: Rocket,
    title: 'Scale without chaos',
    description: 'Every workflow is versioned, observable, and governable. Add complexity only when you need it, with guardrails always in place.',
  },
];

export default function Benefits() {
  return (
    <section className="relative py-24 sm:py-32 bg-slate-900/30" aria-labelledby="benefits-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-20">
          <h2 id="benefits-heading" className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Built for speed. <span className="gradient-text">Designed for scale.</span>
          </h2>
          <p className="text-lg text-slate-400">
            Flashh removes the trade-off between moving fast and staying in control.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={staggerContainer.viewport}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {benefits.map((benefit) => (
            <motion.div
              key={benefit.title}
              variants={fadeInUp}
              className="relative p-8 rounded-2xl bg-slate-900/50 border border-white/5 hover:border-violet-500/30 transition-colors group"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-600 flex items-center justify-center mb-6 shadow-lg shadow-violet-500/20 group-hover:scale-110 transition-transform">
                <benefit.icon className="w-7 h-7 text-white" aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{benefit.title}</h3>
              <p className="text-slate-400 leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
