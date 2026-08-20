import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Bot, CheckCircle2, Mail, MessageCircle, Database } from 'lucide-react';
import { fadeInUp, fadeIn } from '../utils/animation';

const scenarios = [
  {
    id: 'support',
    title: 'Customer support handoff',
    prompt: 'When a user reports a billing bug, create a Linear ticket, notify the team in Slack, and send a confirmation email.',
    steps: [
      { icon: MessageCircle, label: 'Support ticket received' },
      { icon: Bot, label: 'Flashh understands intent' },
      { icon: CheckCircle2, label: 'Linear issue created' },
      { icon: MessageCircle, label: 'Slack channel notified' },
      { icon: Mail, label: 'Customer email sent' },
    ],
  },
  {
    id: 'sales',
    title: 'Lead qualification',
    prompt: 'Score inbound leads from our website form, enrich them with Clearbit, and add hot leads to a Salesforce queue.',
    steps: [
      { icon: Database, label: 'Form submission captured' },
      { icon: Bot, label: 'Lead scored by Flashh' },
      { icon: Database, label: 'Data enriched' },
      { icon: CheckCircle2, label: 'Added to Salesforce queue' },
    ],
  },
  {
    id: 'hr',
    title: 'New hire onboarding',
    prompt: 'Onboard a new hire by creating accounts, scheduling intro calls, and sending a welcome Notion page.',
    steps: [
      { icon: MessageCircle, label: 'Hire record added' },
      { icon: Bot, label: 'Flashh maps onboarding steps' },
      { icon: Database, label: 'Accounts provisioned' },
      { icon: CheckCircle2, label: 'Calendar invites sent' },
      { icon: Mail, label: 'Welcome page delivered' },
    ],
  },
];

export default function ProductShowcase() {
  const [active, setActive] = useState(scenarios[0]);

  return (
    <section id="showcase" className="relative py-24 sm:py-32 overflow-hidden" aria-labelledby="showcase-heading">
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full bg-violet-600/10 blur-[140px] -translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-16">
          <h2 id="showcase-heading" className="text-4xl sm:text-5xl font-bold text-white mb-6">
            See how teams <span className="gradient-text">actually use it</span>
          </h2>
          <p className="text-lg text-slate-400">
            Pick a scenario and watch Flashh turn a simple request into a connected, running workflow.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div {...fadeIn} className="space-y-4">
            {scenarios.map((scenario) => (
              <button
                key={scenario.id}
                onClick={() => setActive(scenario)}
                className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 ${
                  active.id === scenario.id
                    ? 'bg-violet-600/10 border-violet-500/30 shadow-lg shadow-violet-500/10'
                    : 'glass hover:bg-white/5 border-white/5'
                }`}
                aria-pressed={active.id === scenario.id}
              >
                <h3 className={`text-lg font-semibold mb-1 ${active.id === scenario.id ? 'text-white' : 'text-slate-300'}`}>
                  {scenario.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">{scenario.prompt}</p>
              </button>
            ))}
          </motion.div>

          <motion.div {...fadeInUp} className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-violet-500/30 to-fuchsia-500/30 rounded-3xl blur-lg" />
            <div className="relative glass-strong rounded-3xl p-6 sm:p-8 min-h-[420px] flex flex-col">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="flex-1 flex flex-col"
                >
                  <div className="flex items-start gap-3 mb-8">
                    <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center shrink-0">
                      <Send className="w-4 h-4 text-slate-300" />
                    </div>
                    <div className="bg-slate-800/70 rounded-2xl rounded-tl-none px-5 py-3.5 border border-white/5">
                      <p className="text-slate-200 text-sm sm:text-base">{active.prompt}</p>
                    </div>
                  </div>

                  <div className="flex-1 space-y-4">
                    {active.steps.map((step, index) => (
                      <motion.div
                        key={step.label}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.12 + 0.2 }}
                        className="flex items-center gap-4 p-4 rounded-xl bg-slate-800/40 border border-white/5 hover:border-violet-500/30 transition-colors"
                      >
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 flex items-center justify-center shrink-0">
                          <step.icon className="w-5 h-5 text-violet-300" aria-hidden="true" />
                        </div>
                        <span className="text-slate-200 font-medium">{step.label}</span>
                        {index === active.steps.length - 1 && (
                          <span className="ml-auto text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded-full">
                            Done
                          </span>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
