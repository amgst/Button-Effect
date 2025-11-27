import React, { ReactNode } from 'react';

export interface EffectCategory {
  id: string;
  name: string;
  icon: ReactNode;
  description: string;
  components: ButtonEffectComponent[];
}

export interface ButtonEffectComponent {
  id: string;
  name: string;
  component: React.ComponentType<{}>;
  description?: string;
}

export enum ThemeColor {
  Cyan = 'cyan',
  Magenta = 'magenta',
  Lime = 'lime',
  Violet = 'violet',
}