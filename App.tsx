import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { EffectGrid } from './components/EffectGrid';
import { 
  Zap, 
  Flower, 
  Atom, 
  PartyPopper, 
  Heart, 
  Star,
  Menu,
  X
} from 'lucide-react';
import { EffectCategory } from './types';

// Import effect components
import * as FlowerButtons from './components/effects/FlowerButtons';
import * as ParticleButtons from './components/effects/ParticleButtons';
import * as ConfettiButtons from './components/effects/ConfettiButtons';
import * as HeartButtons from './components/effects/HeartEffects';
import * as StarButtons from './components/effects/StarEffects';

const App: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('particle');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const categories: EffectCategory[] = [
    {
      id: 'particle',
      name: 'Particle Effects',
      icon: <Atom className="w-5 h-5" />,
      description: 'DNA helix, atomic orbits, particle streams, vortex swirls.',
      components: [
        { id: 'p1', name: 'Atomic Orbit', component: ParticleButtons.AtomicOrbitButton },
        { id: 'p2', name: 'Quantum Pulse', component: ParticleButtons.QuantumPulseButton },
        { id: 'p3', name: 'Neon Vortex', component: ParticleButtons.NeonVortexButton },
        { id: 'p4', name: 'Data Stream', component: ParticleButtons.DataStreamButton },
      ]
    },
    {
      id: 'flower',
      name: 'Flower Effects',
      icon: <Flower className="w-5 h-5" />,
      description: 'Cherry blossoms, vine growth, petal rain, blooming animations.',
      components: [
        { id: 'f1', name: 'Sakura Bloom', component: FlowerButtons.SakuraBloomButton },
        { id: 'f2', name: 'Neon Lotus', component: FlowerButtons.NeonLotusButton },
        { id: 'f3', name: 'Vine Growth', component: FlowerButtons.VineGrowthButton },
      ]
    },
    {
      id: 'confetti',
      name: 'Confetti Effects',
      icon: <PartyPopper className="w-5 h-5" />,
      description: 'Glass shatter, liquid splash, firework bursts, balloon pops.',
      components: [
        { id: 'c1', name: 'Cyber Burst', component: ConfettiButtons.CyberBurstButton },
        { id: 'c2', name: 'Glass Shatter', component: ConfettiButtons.GlassShatterButton },
        { id: 'c3', name: 'Pixel Rain', component: ConfettiButtons.PixelRainButton },
      ]
    },
    {
      id: 'heart',
      name: 'Heart Effects',
      icon: <Heart className="w-5 h-5" />,
      description: 'Morphing hearts, EKG monitors, heart explosions.',
      components: [
        { id: 'h1', name: 'Digital Pulse', component: HeartButtons.DigitalPulseButton },
        { id: 'h2', name: 'Love Circuit', component: HeartButtons.LoveCircuitButton },
        { id: 'h3', name: 'Hologram Heart', component: HeartButtons.HologramHeartButton },
      ]
    },
    {
      id: 'star',
      name: 'Star Effects',
      icon: <Star className="w-5 h-5" />,
      description: 'Supernova, galaxy spirals, shooting stars, pulsar beacons.',
      components: [
        { id: 's1', name: 'Supernova', component: StarButtons.SupernovaButton },
        { id: 's2', name: 'Constellation', component: StarButtons.ConstellationButton },
        { id: 's3', name: 'Warp Speed', component: StarButtons.WarpSpeedButton },
      ]
    },
  ];

  const activeCategoryData = categories.find(c => c.id === activeCategory) || categories[0];

  return (
    <div className="flex h-screen w-full bg-[#020617] text-white overflow-hidden selection:bg-cyan-500/30">
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/80 z-40 lg:hidden backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed lg:relative z-50 h-full w-72 bg-[#0b1221] border-r border-slate-800 transform transition-transform duration-300 ease-in-out
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="p-6 flex items-center gap-3 border-b border-slate-800">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20">
            <Zap className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="font-bold text-lg leading-tight">Atmosphere</h1>
            <p className="text-xs text-slate-400">UI FX Library</p>
          </div>
          <button 
            onClick={() => setIsMobileMenuOpen(false)}
            className="ml-auto lg:hidden text-slate-400 hover:text-white"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <Sidebar 
          categories={categories} 
          activeCategory={activeCategory} 
          onSelectCategory={(id) => {
            setActiveCategory(id);
            setIsMobileMenuOpen(false);
          }} 
        />

        <div className="absolute bottom-0 w-full p-6 border-t border-slate-800 bg-[#0b1221]">
          <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-900/50 border border-slate-800">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-xs font-mono text-slate-400">v2.4.0 Stable</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col h-full overflow-hidden relative">
        {/* Header */}
        <header className="h-16 border-b border-slate-800 flex items-center justify-between px-6 bg-[#020617]/80 backdrop-blur-md z-30">
          <button 
            onClick={() => setIsMobileMenuOpen(true)}
            className="lg:hidden p-2 text-slate-400 hover:text-white"
          >
            <Menu className="w-6 h-6" />
          </button>
          
          <div className="flex items-center gap-4 ml-auto">
             <a href="#" className="hidden sm:block text-sm text-slate-400 hover:text-cyan-400 transition-colors">Documentation</a>
             <a href="#" className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-sm font-medium rounded-full transition-all border border-slate-700">
               Get Full Access
             </a>
          </div>
        </header>

        {/* Content Scroll Area */}
        <main className="flex-1 overflow-y-auto p-6 lg:p-10 relative">
          <div className="max-w-6xl mx-auto">
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-2">
                <span className="p-2 rounded-lg bg-slate-800 text-cyan-400">
                  {activeCategoryData.icon}
                </span>
                <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
                  {activeCategoryData.name}
                </h2>
              </div>
              <p className="text-slate-400 text-lg max-w-2xl">
                {activeCategoryData.description}
              </p>
            </div>

            <EffectGrid components={activeCategoryData.components} />
            
            <div className="mt-20 py-10 border-t border-slate-800 text-center">
               <p className="text-slate-600 mb-4">Want to see the other 85+ effects?</p>
               <button className="px-8 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold rounded-lg shadow-lg shadow-cyan-500/20 transition-all transform hover:scale-105">
                 Purchase Full Library
               </button>
            </div>
          </div>
        </main>
        
        {/* Background Gradients */}
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-cyan-900/10 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl pointer-events-none" />
      </div>
    </div>
  );
};

export default App;