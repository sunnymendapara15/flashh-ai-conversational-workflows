import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils/animation';

const plans = [
  {
    name: 'Starter',
    description: 'For individuals and small teams exploring automation.',
    price: '$0',
    period: 'forever free',
    features: [
      'Up to 3 active workflows',
      '50 task runs per month',
      'Core integrations',
      'Community support',
      'Basic analytics',
    ],
    cta: 'Start free',
    highlighted: false,
  },
  {
    name: 'Pro',
    description: 'For growing teams that need power and reliability.',
    price: '$29',
    period: 'per user / month',
    features: [
      'Unlimited workflows',
      '10,000 task runs per month',
      '200+ integrations',
      'Priority support',
      'Advanced analytics',
      'Custom triggers & webhooks',
      'Team collaboration',
    ],
    cta: 'Start 14-day trial',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    description: 'For organizations that need scale, security, and control.',
    price: 'Custom',
    period: 'tailored to you',
    features: [
      'Everything in Pro',
      'Unlimited task runs',
      'SSO & SAML',
      'Dedicated success manager',
      'Custom SLA',
      'Audit logs & compliance',
      'On-premise deployment option',
    ],
    cta: 'Contact sales',
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 sm:py-32 bg-slate-900/30" aria-labelledby="pricing-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-20">
          <h2 id="pricing-heading" className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Simple pricing. <span className="gradient-text">Serious power.</span>
          </h2>
          <p className="text-lg text-slate-400">
            Start free, upgrade when you are ready. No hidden fees, no credit card required.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={staggerContainer.viewport}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch"
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={fadeInUp}
              whileHover={{ y: -8 }}
              className={`relative flex flex-col p-8 rounded-3xl border transition-all duration-300 ${
                plan.highlighted
                  ? 'bg-slate-900/80 border-violet-500/40 shadow-2xl shadow-violet-500/15'
                  : 'glass hover:bg-white/[0.06] border-white/5'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white text-xs font-bold uppercase tracking-wider">
                  Most popular
                </div>
              )}
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-slate-400 text-sm">{plan.description}</p>
              </div>
              <div className="mb-8">
                <span className="text-5xl font-extrabold text-white">{plan.price}</span>
                <p className="text-slate-400 mt-1">{plan.period}</p>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-slate-300">
                    <Check className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#pricing"
                className={`w-full text-center py-3.5 rounded-full font-semibold transition-all duration-300 ${
                  plan.highlighted
                    ? 'bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white hover:from-violet-500 hover:to-fuchsia-500 shadow-lg shadow-violet-500/25'
                    : 'bg-white/5 text-slate-200 border border-white/10 hover:bg-white/10'
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
