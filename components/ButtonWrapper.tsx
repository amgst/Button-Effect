import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check } from 'lucide-react';

interface ButtonWrapperProps {
  children: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
  code?: string;
}

export const ButtonWrapper: React.FC<ButtonWrapperProps> = ({ children, title, description, delay = 0, code }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (code) {
      navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="group relative bg-[#0f172a] rounded-2xl border border-slate-800 overflow-hidden hover:border-slate-700 transition-colors"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
      
      {/* Canvas Area */}
      <div className="h-48 flex items-center justify-center relative bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]">
        <div className="absolute inset-0 bg-slate-900/80" />
        
        {/* Copy Button */}
        {code && (
          <button 
            onClick={handleCopy}
            className="absolute top-4 right-4 p-2 rounded-lg bg-slate-900/50 hover:bg-slate-800 border border-slate-700 text-slate-400 hover:text-cyan-400 transition-all z-20 backdrop-blur-sm opacity-0 group-hover:opacity-100"
            title="Copy Source Code"
          >
            {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
          </button>
        )}

        <div className="relative z-10 scale-125">
          {children}
        </div>
      </div>

      {/* Info Area */}
      <div className="p-5 border-t border-slate-800 bg-[#0f172a] relative z-20">
        <h3 className="text-white font-bold text-lg mb-1">{title}</h3>
        <p className="text-slate-500 text-sm">{description}</p>
        
        <div className="mt-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
          <span className="text-xs font-mono px-2 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">TypeScript</span>
          <span className="text-xs font-mono px-2 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">Motion</span>
        </div>
      </div>
    </motion.div>
  );
};