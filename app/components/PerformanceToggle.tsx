'use client';

import { useState, useEffect, useCallback } from 'react';

const PerformanceToggle = () => {
  const [particlesEnabled, setParticlesEnabled] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  const toggleParticles = useCallback(() => {
    setParticlesEnabled(prev => {
      const newValue = !prev;
      localStorage.setItem('particlesEnabled', newValue.toString());
      
      // Dispatch event with delay to avoid render conflicts
      requestAnimationFrame(() => {
        window.dispatchEvent(new CustomEvent('particlesToggle', { 
          detail: { enabled: newValue } 
        }));
      });
      
      return newValue;
    });
  }, []);

  useEffect(() => {
    // Load saved preference on mount
    const saved = localStorage.getItem('particlesEnabled');
    if (saved !== null) {
      setParticlesEnabled(saved === 'true');
    }
    setIsLoaded(true);
  }, []);

  // Don't render until loaded to prevent hydration issues
  if (!isLoaded) {
    return null;
  }

  return (
    <button
      onClick={toggleParticles}
      className={`fixed top-20 right-4 z-50 p-3 rounded-full transition-all duration-300 ${
        particlesEnabled 
          ? 'bg-pink-500 text-white shadow-lg shadow-pink-500/25' 
          : 'bg-gray-500 text-white shadow-lg'
      }`}
      title={particlesEnabled ? 'Disable particles' : 'Enable particles'}
      aria-label={particlesEnabled ? 'Disable particle effects' : 'Enable particle effects'}
    >
      {particlesEnabled ? '✨' : '🚫'}
    </button>
  );
};

export default PerformanceToggle;
