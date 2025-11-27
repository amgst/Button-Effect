import React from 'react';
import { ButtonEffectComponent } from '../types';
import { ButtonWrapper } from './ButtonWrapper';

interface EffectGridProps {
  components: ButtonEffectComponent[];
}

export const EffectGrid: React.FC<EffectGridProps> = ({ components }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
      {components.map((item, index) => (
        <ButtonWrapper 
          key={item.id} 
          title={item.name} 
          description={item.description || "Click to trigger animation"}
          delay={index * 0.1}
        >
          <item.component />
        </ButtonWrapper>
      ))}
    </div>
  );
};