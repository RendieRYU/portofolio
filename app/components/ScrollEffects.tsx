'use client';

import { useEffect, useState, useRef } from 'react';

const ScrollEffects = () => {
  const [isEnabled, setIsEnabled] = useState(true);
  const isEnabledRef = useRef(true);
  const lastScrollRef = useRef(0);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Sync ref with state
  useEffect(() => {
    isEnabledRef.current = isEnabled;
  }, [isEnabled]);

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
    };
    
    window.addEventListener('particlesToggle', handleToggle as EventListener);
    
    return () => {
      window.removeEventListener('particlesToggle', handleToggle as EventListener);
    };
  }, []);

  useEffect(() => {
    if (!isEnabled) return;

    const handleScroll = () => {
      if (!isEnabledRef.current) return;
      
      const scrollY = window.scrollY;
      const scrollDelta = Math.abs(scrollY - lastScrollRef.current);
      
      // Only trigger on significant scroll
      if (scrollDelta > 50) {
        lastScrollRef.current = scrollY;
        
        // Create visual feedback for scrolling
        const sections = document.querySelectorAll('section[id]');
        sections.forEach((section) => {
          const rect = section.getBoundingClientRect();
          const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
          
          if (isVisible) {
            section.classList.add('scroll-active');
            if (scrollTimeoutRef.current) {
              clearTimeout(scrollTimeoutRef.current);
            }
            scrollTimeoutRef.current = setTimeout(() => {
              section.classList.remove('scroll-active');
            }, 1000);
          }
        });
      }
    };

    const throttledScroll = () => {
      requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', throttledScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [isEnabled]);

  if (!isEnabled) return null;

  return null; // Temporarily disabled for debugging
};

export default ScrollEffects;
