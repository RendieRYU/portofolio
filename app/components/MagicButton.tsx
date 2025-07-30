'use client';

import { useState } from 'react';

interface MagicButton {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  type?: 'button' | 'submit';
}

const MagicButton: React.FC<MagicButton> = ({ 
  children, 
  className = '', 
  onClick, 
  href, 
  type = 'button' 
}) => {
  const [isPressed, setIsPressed] = useState(false);

  const handleMouseDown = () => setIsPressed(true);
  const handleMouseUp = () => setIsPressed(false);
  const handleMouseLeave = () => setIsPressed(false);

  const handleClick = (e: React.MouseEvent) => {
    if (onClick) onClick();
  };

  const baseClasses = `
    anime-button interactive-glow relative overflow-hidden
    transition-transform duration-200 ease-out
    hover:scale-105 active:scale-95
    ${isPressed ? 'scale-95' : ''}
    ${className}
  `;

  if (href) {
    return (
      <a
        href={href}
        className={baseClasses}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={baseClasses}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default MagicButton;
