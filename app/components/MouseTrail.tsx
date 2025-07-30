'use client';

import { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  opacity: number;
  scale: number;
  color: string;
  velocity: { x: number; y: number };
}

const MouseTrail = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const colors = [
    '#FF69B4', // Hot Pink
    '#8A2BE2', // Blue Violet
    '#1E90FF', // Dodger Blue
    '#FF1493', // Deep Pink
    '#9370DB', // Medium Purple
    '#00BFFF', // Deep Sky Blue
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      
      // Create new particle
      const newParticle: Particle = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY,
        opacity: 1,
        scale: Math.random() * 0.5 + 0.5,
        color: colors[Math.floor(Math.random() * colors.length)],
        velocity: {
          x: (Math.random() - 0.5) * 4,
          y: (Math.random() - 0.5) * 4
        }
      };

      setParticles(prev => [...prev, newParticle].slice(-50)); // Keep only last 50 particles
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const animateParticles = () => {
      setParticles(prev => 
        prev
          .map(particle => ({
            ...particle,
            x: particle.x + particle.velocity.x,
            y: particle.y + particle.velocity.y,
            opacity: particle.opacity - 0.02,
            scale: particle.scale * 0.98
          }))
          .filter(particle => particle.opacity > 0)
      );
    };

    const interval = setInterval(animateParticles, 16); // ~60fps
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Mouse Trail Particles */}
      <div className="fixed inset-0 pointer-events-none z-50">
        {particles.map(particle => (
          <div
            key={particle.id}
            className="absolute w-2 h-2 rounded-full animate-pulse"
            style={{
              left: particle.x - 4,
              top: particle.y - 4,
              backgroundColor: particle.color,
              opacity: particle.opacity,
              transform: `scale(${particle.scale})`,
              boxShadow: `0 0 6px ${particle.color}`,
              transition: 'none'
            }}
          />
        ))}
      </div>

      {/* Mouse Glow Effect */}
      <div 
        className="fixed w-8 h-8 rounded-full pointer-events-none z-40 mix-blend-screen"
        style={{
          left: mousePos.x - 16,
          top: mousePos.y - 16,
          background: 'radial-gradient(circle, rgba(255,105,180,0.3) 0%, rgba(138,43,226,0.2) 50%, transparent 100%)',
          transition: 'all 0.1s ease-out'
        }}
      />
    </>
  );
};

export default MouseTrail;
