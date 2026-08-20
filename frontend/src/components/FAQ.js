import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { fadeInUp } from '../utils/animation';

const faqs = [
  {
    question: 'Do I need to know how to code to use Flashh?',
    answer: 'Not at all. Flashh is designed for everyone. You describe what you want in plain language, and Flashh builds the workflow for you. Engineers can still inspect, edit, or extend workflows when needed.',
  },
  {
    question: 'What apps and services does Flashh integrate with?',
    answer: 'Flashh connects with 200+ tools including Slack, HubSpot, Salesforce, Notion, Linear, GitHub, Google Workspace, Microsoft 365, Zapier, and many more. New integrations are added every week.',
  },
  {
    question: 'How secure is my data?',
    answer: 'Security is built in from day one. We use end-to-end encryption, SOC 2 Type II controls, GDPR-aligned practices, and offer SSO, audit logs, and custom SLAs on Enterprise plans.',
  },
  {
    question: 'Can Flashh handle complex workflows with approvals?',
    answer: 'Yes. Flashh supports multi-step workflows, conditional branches, loops, human-in-the-loop approvals, error handling, and retries — all managed through conversation or the visual editor.',
  },
  {
    question: 'What happens if a workflow fails?',
    answer: 'You get real-time notifications, detailed execution logs, and one-click retry. You can also set up fallback actions so critical work keeps moving even when an integration hiccups.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="relative py-24 sm:py-32" aria-labelledby="faq-heading">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 id="faq-heading" className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Questions? <span className="gradient-text">Answers.</span>
          </h2>
          <p className="text-lg text-slate-400">
            Everything you need to know about Flashh.
          </p>
        </motion.div>

        <motion.div {...fadeInUp} className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-colors ${
                  isOpen ? 'bg-slate-900/60 border-violet-500/30' : 'glass border-white/5 hover:bg-white/[0.04]'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="text-lg font-semibold text-white pr-4">{faq.question}</span>
                  <span className="shrink-0 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-slate-300">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 text-slate-400 leading-relaxed">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
