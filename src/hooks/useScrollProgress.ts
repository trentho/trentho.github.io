/**
 * useScrollProgress Hook
 * Track scroll position and progress through the page
 * 
 * Returns:
 * - scrollY: Current vertical scroll position
 * - scrollDirection: Direction of scroll ('up' or 'down')
 * - scrollProgress: Progress through page (0-1)
 */

import { useState, useEffect, useCallback } from 'react';
import type { UseScrollPositionReturn } from '../types';

export const useScrollProgress = (): UseScrollPositionReturn => {
  const [scrollY, setScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down');
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    
    // Update scroll direction
    if (currentScrollY > scrollY) {
      setScrollDirection('down');
    } else if (currentScrollY < scrollY) {
      setScrollDirection('up');
    }
    
    // Update scroll position
    setScrollY(currentScrollY);
    
    // Calculate scroll progress (0-1)
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollableHeight = documentHeight - windowHeight;
    const progress = scrollableHeight > 0 ? currentScrollY / scrollableHeight : 0;
    
    setScrollProgress(Math.min(Math.max(progress, 0), 1));
  }, [scrollY]);

  useEffect(() => {
    // Set initial values
    handleScroll();
    
    // Add scroll event listener with throttling
    let ticking = false;
    
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', onScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [handleScroll]);

  return {
    scrollY,
    scrollDirection,
    scrollProgress,
  };
};