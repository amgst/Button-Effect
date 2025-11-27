import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Button 1: Atomic Orbit ---
export const AtomicOrbitButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 1000);
  };

  return (
    <div className="relative">
      {/* Orbital Rings */}
      <AnimatePresence>
        {(isHovered || isClicked) && (
          <>
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8, rotate: i * 60 }}
                animate={{ 
                  opacity: [0, 1, 0], 
                  scale: isClicked ? 2 : 1.2, 
                  rotate: isClicked ? i * 60 + 360 : i * 60 + 180 
                }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ 
                  duration: isClicked ? 0.8 : 2, 
                  repeat: isClicked ? 0 : Infinity,
                  ease: "linear"
                }}
                className="absolute inset-0 rounded-full border border-cyan-400/30"
                style={{ borderRadius: '50%' }}
              />
            ))}
          </>
        )}
      </AnimatePresence>

      <motion.button
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleClick}
        whileTap={{ scale: 0.95 }}
        className="relative z-10 px-8 py-3 bg-slate-900 text-cyan-400 border border-cyan-500/50 rounded-full font-bold uppercase tracking-widest overflow-hidden group"
      >
        <span className="relative z-10 group-hover:text-white transition-colors">Atomic</span>
        <motion.div 
          className="absolute inset-0 bg-cyan-600"
          initial={{ x: '-100%' }}
          animate={{ x: isHovered ? '0%' : '-100%' }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        />
      </motion.button>
    </div>
  );
};

// --- Button 2: Quantum Pulse ---
export const QuantumPulseButton = () => {
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>([]);
  
  const handleClick = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const newRipple = { id: Date.now(), x, y };
    
    setRipples((prev) => [...prev, newRipple]);
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
    }, 1000);
  };

  return (
    <button
      onClick={handleClick}
      className="relative px-8 py-4 bg-transparent text-white border-2 border-violet-500 rounded-lg overflow-hidden group font-mono"
    >
      <span className="relative z-10 flex items-center gap-2">
        <span className="w-2 h-2 bg-violet-500 rounded-full animate-pulse"/>
        QUANTUM_EXEC
      </span>
      
      {/* Background fill on hover */}
      <div className="absolute inset-0 bg-violet-500/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />

      {/* Ripples */}
      <AnimatePresence>
        {ripples.map((ripple) => (
          <motion.span
            key={ripple.id}
            initial={{ width: 0, height: 0, opacity: 0.8 }}
            animate={{ width: 500, height: 500, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ 
              left: ripple.x, 
              top: ripple.y,
              transform: 'translate(-50%, -50%)',
              position: 'absolute',
              borderRadius: '50%',
              backgroundColor: 'rgba(139, 92, 246, 0.4)',
              pointerEvents: 'none',
              zIndex: 0
            }}
          />
        ))}
      </AnimatePresence>
    </button>
  );
};

// --- Button 3: Neon Vortex ---
export const NeonVortexButton = () => {
  const [active, setActive] = useState(false);

  return (
    <motion.button
      onClick={() => {
        setActive(true);
        setTimeout(() => setActive(false), 1500);
      }}
      className="relative w-16 h-16 rounded-full flex items-center justify-center bg-slate-900 border border-slate-700"
    >
      {/* Swirling Particles */}
      <AnimatePresence>
        {active && [...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 1, scale: 0, x: 0, y: 0 }}
            animate={{ 
              opacity: 0,
              scale: [0, 1.5, 0],
              x: [0, Math.cos(i * 45) * 50],
              y: [0, Math.sin(i * 45) * 50],
              rotate: 360
            }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="absolute w-2 h-2 bg-lime-400 rounded-full shadow-[0_0_10px_rgba(163,230,53,0.8)]"
          />
        ))}
      </AnimatePresence>

      <div className={`transition-all duration-300 ${active ? 'scale-90 text-lime-400' : 'text-slate-400'}`}>
        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
          <path d="M3 3v5h5" />
          <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
          <path d="M16 21h5v-5" />
        </svg>
      </div>
    </motion.button>
  );
};

// --- Button 4: Data Stream ---
export const DataStreamButton = () => {
  const [streaming, setStreaming] = useState(false);

  return (
    <button
      onClick={() => {
        setStreaming(true);
        setTimeout(() => setStreaming(false), 2000);
      }}
      className="relative px-10 py-3 bg-slate-900 border border-blue-500/30 text-blue-400 font-bold tracking-widest uppercase overflow-hidden"
    >
      <span className="relative z-10 mix-blend-difference">Upload</span>
      
      {/* Horizontal Data Lines */}
      {streaming && [...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ x: '-100%', opacity: 0.5 }}
          animate={{ x: '100%', opacity: 0 }}
          transition={{ 
            duration: 0.5 + Math.random() * 0.5, 
            repeat: Infinity,
            delay: i * 0.1,
            ease: "linear"
          }}
          className="absolute left-0 h-[2px] bg-blue-500 w-1/2"
          style={{ top: `${20 + i * 15}%` }}
        />
      ))}
      
      <motion.div 
        className="absolute bottom-0 left-0 h-1 bg-blue-500"
        initial={{ width: "0%" }}
        animate={{ width: streaming ? "100%" : "0%" }}
        transition={{ duration: 2 }}
      />
    </button>
  );
};