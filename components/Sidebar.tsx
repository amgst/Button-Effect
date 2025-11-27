import React from 'react';
import { EffectCategory } from '../types';
import { ChevronRight } from 'lucide-react';

interface SidebarProps {
  categories: EffectCategory[];
  activeCategory: string;
  onSelectCategory: (id: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ categories, activeCategory, onSelectCategory }) => {
  return (
    <nav className="p-4 space-y-2">
      <div className="px-4 py-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
        Effect Categories
      </div>
      {categories.map((category) => {
        const isActive = activeCategory === category.id;
        return (
          <button
            key={category.id}
            onClick={() => onSelectCategory(category.id)}
            className={`
              w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-300 ease-out group relative overflow-hidden
              hover:scale-[1.02] active:scale-[0.98]
              ${isActive 
                ? 'bg-gradient-to-r from-cyan-900/40 to-blue-900/20 text-cyan-400 border border-cyan-500/30 shadow-lg shadow-cyan-900/20' 
                : 'text-slate-400 hover:bg-slate-800/40 hover:text-slate-200 border border-transparent hover:border-cyan-500/20 hover:shadow-lg hover:shadow-cyan-900/10'
              }
            `}
          >
            {/* Hover Glow Effect Background for inactive items */}
            {!isActive && (
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            )}
            
            {/* Active Glow Background */}
            {isActive && (
               <div className="absolute inset-0 bg-cyan-500/5 animate-pulse" />
            )}

            <div className="flex items-center gap-3 relative z-10">
              <span className={`
                transition-all duration-300
                ${isActive ? 'text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)] scale-110' : 'text-slate-500 group-hover:text-cyan-400 group-hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.4)] group-hover:scale-110'}
              `}>
                {category.icon}
              </span>
              <span className={`font-medium tracking-wide transition-colors ${isActive ? 'text-cyan-100' : 'group-hover:text-cyan-100'}`}>
                {category.name}
              </span>
            </div>
            
            {isActive && <ChevronRight className="w-4 h-4 text-cyan-500 relative z-10" />}
            
             {/* Arrow on hover for inactive */}
            {!isActive && (
               <ChevronRight className="w-4 h-4 text-cyan-500/70 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 relative z-10" />
            )}
          </button>
        );
      })}
    </nav>
  );
};