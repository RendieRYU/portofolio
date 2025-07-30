'use client';

import { useEffect, useState, useCallback, useRef } from 'react';

interface StarParticle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  color: string;
  life: number;
  maxLife: number;
  velocityX: number;
  velocityY: number;
}

const CursorEffects = () => {
  const [particles, setParticles] = useState<StarParticle[]>([]);
  const [isMouseMoving, setIsMouseMoving] = useState(false);
  const [lastMousePos, setLastMousePos] = useState({ x: 0, y: 0 });
  const [isEnabled, setIsEnabled] = useState(true);
  const isEnabledRef = useRef(true);

  const colors = ['#FF69B4', '#8A2BE2', '#1E90FF', '#FF1493'];

  // Sync ref with state
  useEffect(() => {
    isEnabledRef.current = isEnabled;
  }, [isEnabled]);

  // Initialize and handle toggles
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    // Initial setup
    const savedPreference = localStorage.getItem('particlesEnabled');
    const initialState = savedPreference !== null 
      ? savedPreference === 'true' && !mediaQuery.matches
      : !mediaQuery.matches;
      
    setIsEnabled(initialState);
    isEnabledRef.current = initialState;
    
    const handleToggle = (e: CustomEvent) => {
      const newState = e.detail.enabled && !mediaQuery.matches;
      setIsEnabled(newState);
      isEnabledRef.current = newState;
      
      // Clear particles when disabled
      if (!newState) {
        setParticles([]);
      }
    };
    
    window.addEventListener('particlesToggle', handleToggle as EventListener);
    
    return () => {
      window.removeEventListener('particlesToggle', handleToggle as EventListener);
    };
  }, []);

  const createParticle = useCallback((x: number, y: number) => {
    if (!isEnabledRef.current) return;
    
    const newParticle: StarParticle = {
      id: Date.now() + Math.random(),
      x: x + (Math.random() - 0.5) * 10,
      y: y + (Math.random() - 0.5) * 10,
      size: Math.random() * 3 + 1,
      opacity: 1,
      color: colors[Math.floor(Math.random() * colors.length)],
      life: 0,
      maxLife: 20,
      velocityX: (Math.random() - 0.5) * 1.5,
      velocityY: (Math.random() - 0.5) * 1.5,
    };

    setParticles(prev => [...prev, newParticle].slice(-10));
  }, [colors]);

  useEffect(() => {
    let mouseTimeout: NodeJS.Timeout;
    let lastTime = 0;

    const handleMouseMove = (e: MouseEvent) => {
      if (!isEnabledRef.current) return;
      
      const now = Date.now();
      
      if (now - lastTime > 150) {
        const currentPos = { x: e.clientX, y: e.clientY };
        
        const deltaX = currentPos.x - lastMousePos.x;
        const deltaY = currentPos.y - lastMousePos.y;
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

        setLastMousePos(currentPos);
        setIsMouseMoving(true);

        if (distance > 30) {
          createParticle(currentPos.x, currentPos.y);
        }

        lastTime = now;
      }

      clearTimeout(mouseTimeout);
      mouseTimeout = setTimeout(() => {
        setIsMouseMoving(false);
      }, 300);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(mouseTimeout);
    };
  }, [lastMousePos, createParticle]);

  useEffect(() => {
    if (!isEnabled) {
      setParticles([]);
      return;
    }
    
    const animateParticles = () => {
      if (!isEnabledRef.current) return;
      
      setParticles(prev => 
        prev
          .map(particle => ({
            ...particle,
            x: particle.x + particle.velocityX,
            y: particle.y + particle.velocityY,
            opacity: 1 - (particle.life / particle.maxLife),
            life: particle.life + 1,
            velocityX: particle.velocityX * 0.96,
            velocityY: particle.velocityY * 0.96,
          }))
          .filter(particle => particle.life < particle.maxLife)
      );
    };

    const interval = setInterval(animateParticles, 50);
    return () => clearInterval(interval);
  }, [isEnabled]);

  if (!isEnabled) return null;

  return (
    <>
      <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
        {particles.map(particle => (
          <div
            key={particle.id}
            className="absolute w-1 h-1 rounded-full"
            style={{
              left: particle.x,
              top: particle.y,
              backgroundColor: particle.color,
              opacity: particle.opacity * 0.8,
              transform: `scale(${particle.size})`,
              willChange: 'transform, opacity',
            }}
          />
        ))}
      </div>

      {isMouseMoving && (
        <div 
          className="fixed w-6 h-6 rounded-full pointer-events-none z-40 transition-opacity duration-300"
          style={{
            left: lastMousePos.x - 12,
            top: lastMousePos.y - 12,
            background: 'radial-gradient(circle, rgba(255,105,180,0.2) 0%, transparent 60%)',
          }}
        />
      )}
    </>
  );
};

export default CursorEffects;
