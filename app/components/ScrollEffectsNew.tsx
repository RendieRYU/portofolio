'use client';

import { useEffect, useState } from 'react';

function ScrollEffects() {
  const [isEnabled, setIsEnabled] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    const savedPreference = localStorage.getItem('particlesEnabled');
    const initialState = savedPreference !== null 
      ? savedPreference === 'true' && !mediaQuery.matches
      : !mediaQuery.matches;
      
    setIsEnabled(initialState);
    
    const handleToggle = (e: CustomEvent) => {
      setIsEnabled(e.detail.enabled && !mediaQuery.matches);
    };
    
    window.addEventListener('particlesToggle', handleToggle as EventListener);
    
    return () => {
      window.removeEventListener('particlesToggle', handleToggle as EventListener);
    };
  }, []);

  if (!isEnabled) return null;

  return null; // Simple version for now
}

export default ScrollEffects;
