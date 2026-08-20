import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { fadeInUp } from '../utils/animation';

export default function CTA() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden" aria-labelledby="cta-heading">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-violet-950/20 to-slate-950" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-violet-600/15 blur-[140px]" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div {...fadeInUp}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8">
            <Sparkles className="w-4 h-4 text-violet-400" aria-hidden="true" />
            <span className="text-sm font-medium text-slate-200">Start automating in under 2 minutes</span>
          </div>
          <h2 id="cta-heading" className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Ready to turn ideas into <span className="gradient-text">workflows?</span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
            Join thousands of teams using Flashh to move faster, reduce busywork, and focus on what matters.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#pricing" className="btn-primary text-lg px-10 py-4 group w-full sm:w-auto">
              Get started for free
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#showcase" className="btn-secondary text-lg px-10 py-4 w-full sm:w-auto">
              Watch a demo
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
