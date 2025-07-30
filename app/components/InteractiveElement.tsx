'use client';

import { useEffect, useState } from 'react';

interface InteractiveElement {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: 'glow' | 'particles' | 'ripple' | 'shake';
  particleCount?: number;
}

const InteractiveElement: React.FC<InteractiveElement> = ({ 
  children, 
  className = '', 
  hoverEffect = 'glow',
  particleCount = 5
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [hoverParticles, setHoverParticles] = useState<Array<{
    id: number;
    x: number;
    y: number;
    color: string;
  }>>([]);

  const colors = ['#FF69B4', '#8A2BE2', '#1E90FF', '#FF1493', '#9370DB'];

  const handleMouseEnter = (e: React.MouseEvent) => {
    setIsHovered(true);
    
    if (hoverEffect === 'particles') {
      const rect = e.currentTarget.getBoundingClientRect();
      const particles = [];
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          id: Date.now() + i,
          x: Math.random() * rect.width,
          y: Math.random() * rect.height,
          color: colors[Math.floor(Math.random() * colors.length)]
        });
      }
      
      setHoverParticles(particles);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setHoverParticles([]);
  };

  const getHoverClasses = () => {
    switch (hoverEffect) {
      case 'glow':
        return 'hover:shadow-lg hover:shadow-pink-500/25 transition-all duration-300';
      case 'particles':
        return 'transition-all duration-300 hover:scale-105';
      case 'ripple':
        return 'relative overflow-hidden transition-all duration-300 hover:scale-102';
      case 'shake':
        return 'hover:animate-pulse transition-all duration-300';
      default:
        return '';
    }
  };

  return (
    <div 
      className={`${className} ${getHoverClasses()} ${isHovered ? 'anime-glow' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      
      {/* Hover Particles */}
      {hoverEffect === 'particles' && hoverParticles.map(particle => (
        <div
          key={particle.id}
          className="absolute pointer-events-none animate-ping"
          style={{
            left: particle.x,
            top: particle.y,
            width: 4,
            height: 4,
            backgroundColor: particle.color,
            borderRadius: '50%',
            animationDuration: '0.8s',
            boxShadow: `0 0 6px ${particle.color}`
          }}
        />
      ))}
      
      {/* Ripple Effect */}
      {hoverEffect === 'ripple' && isHovered && (
        <div 
          className="absolute inset-0 rounded-inherit animate-ping"
          style={{
            border: '2px solid rgba(255, 105, 180, 0.6)',
            animationDuration: '1.5s'
          }}
        />
      )}
    </div>
  );
};

export default InteractiveElement;
