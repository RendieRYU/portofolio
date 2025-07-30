'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface PerformanceContextType {
  particlesEnabled: boolean;
  toggleParticles: () => void;
  reducedMotion: boolean;
  setReducedMotion: (value: boolean) => void;
}

const PerformanceContext = createContext<PerformanceContextType | undefined>(undefined);

export const usePerformance = () => {
  const context = useContext(PerformanceContext);
  if (!context) {
    throw new Error('usePerformance must be used within a PerformanceProvider');
  }
  return context;
};

interface PerformanceProviderProps {
  children: ReactNode;
}

export const PerformanceProvider: React.FC<PerformanceProviderProps> = ({ children }) => {
  const [particlesEnabled, setParticlesEnabled] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);

  const toggleParticles = () => {
    setParticlesEnabled(prev => !prev);
  };

  return (
    <PerformanceContext.Provider value={{
      particlesEnabled,
      toggleParticles,
      reducedMotion,
      setReducedMotion
    }}>
      {children}
    </PerformanceContext.Provider>
  );
};
