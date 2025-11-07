/**
 * useMediaQuery Hook
 * Responsive design helper for conditional rendering
 * 
 * Parameters:
 * - query: Media query string (e.g., '(min-width: 768px)')
 * 
 * Returns:
 * - boolean: Whether the media query matches
 */

import { useState, useEffect } from 'react';

export const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState(() => {
    // Check if window is available (SSR safety)
    if (typeof window !== 'undefined') {
      return window.matchMedia(query).matches;
    }
    return false;
  });

  useEffect(() => {
    // Check if window is available
    if (typeof window === 'undefined') {
      return;
    }

    const mediaQuery = window.matchMedia(query);
    
    // Update state if query match changes
    const handleChange = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    // Set initial value
    setMatches(mediaQuery.matches);

    // Modern browsers
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
    // Legacy browsers
    else if (mediaQuery.addListener) {
      mediaQuery.addListener(handleChange);
      return () => mediaQuery.removeListener(handleChange);
    }
  }, [query]);

  return matches;
};

/**
 * Predefined breakpoint hooks for convenience
 */

export const useIsMobile = (): boolean => {
  return useMediaQuery('(max-width: 639px)');
};

export const useIsTablet = (): boolean => {
  return useMediaQuery('(min-width: 640px) and (max-width: 1023px)');
};

export const useIsDesktop = (): boolean => {
  return useMediaQuery('(min-width: 1024px)');
};

export const useIsTabletOrLarger = (): boolean => {
  return useMediaQuery('(min-width: 640px)');
};

export const useIsDesktopOrLarger = (): boolean => {
  return useMediaQuery('(min-width: 1024px)');
};

export const usePrefersReducedMotion = (): boolean => {
  return useMediaQuery('(prefers-reduced-motion: reduce)');
};

export const usePrefersDarkMode = (): boolean => {
  return useMediaQuery('(prefers-color-scheme: dark)');
};