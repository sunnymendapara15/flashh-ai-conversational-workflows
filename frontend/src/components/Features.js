import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Workflow, Plug, Shield, Gauge, Users } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils/animation';

const features = [
  {
    icon: MessageSquare,
    title: 'Talk in plain language',
    description: 'No drag-and-drop builders or scripting. Just describe what you need, and Flashh translates intent into a working workflow.',
  },
  {
    icon: Workflow,
    title: 'Full workflows in seconds',
    description: 'Flashh generates multi-step automations with conditionals, loops, and approvals — complete and ready to run.',
  },
  {
    icon: Plug,
    title: 'Connects to everything',
    description: 'Native integrations with Slack, HubSpot, Notion, Salesforce, GitHub, Google Workspace, and 200+ more tools.',
  },
  {
    icon: Shield,
    title: 'Enterprise-grade security',
    description: 'SOC 2 Type II, GDPR-ready, encrypted data in transit and at rest. Your workflows and data stay protected.',
  },
  {
    icon: Gauge,
    title: 'Observability built in',
    description: 'Real-time logs, error tracing, and performance metrics for every workflow — so your ops stay transparent.',
  },
  {
    icon: Users,
    title: 'Built for every team',
    description: 'Marketing, sales, support, engineering, and finance can each build the workflows they actually need.',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-24 sm:py-32" aria-labelledby="features-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-20">
          <h2 id="features-heading" className="text-4xl sm:text-5xl font-bold text-white mb-6">
            One conversation. <span className="gradient-text">Infinite automation.</span>
          </h2>
          <p className="text-lg text-slate-400">
            Flashh combines a large language model with a powerful workflow engine so anyone can automate work that used to take engineers days.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={staggerContainer.viewport}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={fadeInUp}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
              className="group relative p-8 rounded-2xl glass hover:bg-white/[0.06] transition-colors"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-500/5 to-fuchsia-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-violet-300" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
