import React from 'react';
import { 
  Terminal, 
  Copy, 
  CheckCircle2, 
  MousePointer2, 
  Sparkles, 
  Heart, 
  Zap, 
  PartyPopper 
} from 'lucide-react';

export const Documentation: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto pb-20 animate-in fade-in duration-500">
      {/* Header Section */}
      <div className="mb-12 border-b border-slate-800 pb-8">
        <h1 className="text-4xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
          Integration Guide
        </h1>
        <p className="text-xl text-slate-400 max-w-3xl">
          Learn how to drop these high-performance micro-interactions into your React application using Framer Motion and Tailwind CSS.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-12">
          
          {/* Section 1: Where to use */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Sparkles className="text-cyan-400" />
              Where to use these effects?
            </h2>
            <div className="grid gap-4">
              <UseCaseCard 
                icon={<Zap className="text-yellow-400" />}
                title="CTAs & Landing Pages"
                description="Use Particle or Star effects for primary actions like 'Get Started' or 'Purchase' to draw immediate attention."
              />
              <UseCaseCard 
                icon={<PartyPopper className="text-pink-400" />}
                title="Success States & Gamification"
                description="Trigger Confetti effects when a user completes a task, submits a form, or unlocks an achievement."
              />
              <UseCaseCard 
                icon={<Heart className="text-red-400" />}
                title="Social Interactions"
                description="Use Heart effects for 'Like', 'Favorite', or health-related dashboards."
              />
              <UseCaseCard 
                icon={<Terminal className="text-blue-400" />}
                title="Loading & Processing"
                description="Replace boring spinners with Data Stream or Quantum Pulse animations during API calls."
              />
            </div>
          </section>

          {/* Section 2: Installation */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Terminal className="text-cyan-400" />
              Installation
            </h2>
            <p className="text-slate-400 mb-4">
              These components rely on <code className="text-cyan-300">framer-motion</code> for animation and <code className="text-cyan-300">lucide-react</code> for icons.
            </p>
            <div className="bg-slate-950 rounded-lg border border-slate-800 p-4 relative group">
              <code className="text-cyan-300 font-mono text-sm">npm install framer-motion lucide-react clsx</code>
              <button className="absolute top-3 right-3 p-2 rounded hover:bg-slate-800 text-slate-400 hover:text-white transition-colors">
                <Copy className="w-4 h-4" />
              </button>
            </div>
          </section>

          {/* Section 3: Usage Example */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <MousePointer2 className="text-cyan-400" />
              How to use
            </h2>
            <p className="text-slate-400 mb-4">
              The components are designed to be modular. Here is an example of how to extract the <strong className="text-white">Atomic Orbit</strong> effect into a reusable button component.
            </p>
            
            <div className="relative rounded-xl overflow-hidden border border-slate-800 bg-slate-950">
              <div className="flex items-center justify-between px-4 py-3 bg-slate-900 border-b border-slate-800">
                <span className="text-xs font-mono text-slate-400">components/AtomicButton.tsx</span>
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/20"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/20"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/20"></div>
                </div>
              </div>
              <div className="overflow-x-auto">
                <pre className="p-6 text-sm font-mono leading-relaxed text-slate-300">
{`import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AtomicButtonProps {
  label: string;
  onClick?: () => void;
}

export const AtomicButton: React.FC<AtomicButtonProps> = ({ label, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    // Trigger animation
    setTimeout(() => setIsClicked(false), 1000);
    // Trigger actual logic
    if (onClick) onClick();
  };

  return (
    <div className="relative inline-block">
      <AnimatePresence>
        {(isHovered || isClicked) && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: isClicked ? 2 : 1.2 }}
            exit={{ opacity: 0, scale: 0 }}
            className="absolute inset-0 rounded-full border border-cyan-400/30"
          />
        )}
      </AnimatePresence>

      <motion.button
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleClick}
        whileTap={{ scale: 0.95 }}
        className="relative z-10 px-8 py-3 bg-slate-900 text-cyan-400 border border-cyan-500/50 rounded-full font-bold uppercase tracking-widest"
      >
        {label}
      </motion.button>
    </div>
  );
};`}
                </pre>
              </div>
            </div>
          </section>
        </div>

        {/* Sidebar Info */}
        <div className="space-y-8">
           <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800">
              <h3 className="font-bold text-white mb-4">Export Checklist</h3>
              <ul className="space-y-3">
                {[
                  "Ensure Tailwind config allows custom colors",
                  "Add 'use client' directive for Next.js",
                  "Keep semantic HTML <button> tags",
                  "Add aria-labels for accessibility"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-400">
                    <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
           </div>

           <div className="p-6 rounded-xl bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-500/20">
              <h3 className="font-bold text-cyan-100 mb-2">Need Custom Effects?</h3>
              <p className="text-sm text-slate-400 mb-4">
                We can design bespoke animations tailored to your brand identity.
              </p>
              <button className="w-full py-2 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg text-sm font-medium transition-colors">
                Contact Support
              </button>
           </div>
        </div>
      </div>
    </div>
  );
};

const UseCaseCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="flex items-start gap-4 p-4 rounded-lg bg-slate-900/40 border border-slate-800/50 hover:border-slate-700 transition-colors">
    <div className="p-2 rounded-lg bg-slate-800">
      {icon}
    </div>
    <div>
      <h3 className="font-bold text-slate-200 text-sm mb-1">{title}</h3>
      <p className="text-sm text-slate-500 leading-relaxed">{description}</p>
    </div>
  </div>
);
