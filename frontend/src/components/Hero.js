import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Play } from 'lucide-react';
import { fadeInUp, fadeIn } from '../utils/animation';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Ambient background */}
      <div className="absolute inset-0 bg-slate-950">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-violet-600/20 blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] rounded-full bg-cyan-500/15 blur-[120px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-fuchsia-600/10 blur-[140px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#020617_100%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
        >
          <Sparkles className="w-4 h-4 text-violet-400" aria-hidden="true" />
          <span className="text-sm font-medium text-slate-200">Now with intelligent memory across conversations</span>
        </motion.div>

        <motion.h1
          {...fadeInUp}
          id="hero-heading"
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-balance mb-6"
        >
          Describe your idea.
          <br />
          <span className="gradient-text">Flashh builds the workflow.</span>
        </motion.h1>

        <motion.p
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.1 }}
          className="max-w-2xl mx-auto text-lg sm:text-xl text-slate-400 leading-relaxed mb-10"
        >
          The first workflow builder that speaks human. Just chat with Flashh and watch your
          processes, automations, and integrations come to life — no code, no complexity, no waiting.
        </motion.p>

        <motion.div
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a href="#pricing" className="btn-primary text-lg px-8 py-4 w-full sm:w-auto group">
            Start building free
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#showcase" className="btn-secondary text-lg px-8 py-4 w-full sm:w-auto group">
            <Play className="mr-2 w-5 h-5 text-violet-400 group-hover:scale-110 transition-transform" />
            See it in action
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto max-w-4xl"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-500 rounded-2xl blur opacity-30" />
          <div className="relative glass rounded-2xl p-6 sm:p-8 text-left">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-amber-400" />
              <div className="w-3 h-3 rounded-full bg-emerald-400" />
              <span className="ml-3 text-xs font-medium text-slate-500 uppercase tracking-wider">Flashh chat</span>
            </div>
            <div className="space-y-4">
              <ChatMessage user="You" text="I need to onboard new customers, send a welcome email, create a Slack channel, and add them to HubSpot." delay={0} />
              <ChatMessage user="Flashh" text="Got it. I’ll build a workflow that triggers on new customer signup, sends a personalized welcome email, creates a private Slack channel, and creates or updates the contact in HubSpot. Want me to add a follow-up reminder?" delay={0.8} isAi />
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2.2, duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-sm font-medium"
              >
                <Sparkles className="w-4 h-4" />
                Workflow generated — 4 steps connected
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ChatMessage({ user, text, delay, isAi }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: isAi ? -20 : 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.5, ease: 'easeOut' }}
      className={`flex ${isAi ? 'justify-start' : 'justify-end'}`}
    >
      <div className={`max-w-[85%] sm:max-w-[75%] px-5 py-3.5 rounded-2xl ${
        isAi
          ? 'bg-slate-700/50 text-slate-100 rounded-tl-none border border-white/5'
          : 'bg-gradient-to-br from-violet-600 to-fuchsia-600 text-white rounded-tr-none shadow-lg shadow-violet-500/20'
      }`}>
        <p className="text-sm font-semibold mb-1">{user}</p>
        <p className="text-sm sm:text-base leading-relaxed">{text}</p>
      </div>
    </motion.div>
  );
}
