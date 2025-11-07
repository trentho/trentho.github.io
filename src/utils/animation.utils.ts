/**
 * Animation Utilities
 * Helper functions for animations and transitions
 */

import type { AnimationConfig, AnimationEasing } from '../types';

/**
 * Get easing function CSS value
 */
export const getEasingFunction = (easing: AnimationEasing): string => {
  const easingMap: Record<AnimationEasing, string> = {
    'linear': 'linear',
    'ease-in': 'cubic-bezier(0.4, 0, 1, 1)',
    'ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
    'ease-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
    'bounce': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    'smooth': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  };
  
  return easingMap[easing] || easingMap['ease-out'];
};

/**
 * Create animation config string for CSS
 */
export const createAnimationString = (config: AnimationConfig): string => {
  const {
    variant,
    duration = 300,
    delay = 0,
    easing = 'ease-out',
  } = config;
  
  const easingFunction = getEasingFunction(easing);
  
  return `${variant} ${duration}ms ${easingFunction} ${delay}ms`;
};

/**
 * Check if animations should be disabled based on user preference
 */
export const shouldReduceMotion = (): boolean => {
  return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

/**
 * Get safe animation duration (respects reduced motion preference)
 */
export const getSafeAnimationDuration = (duration: number): number => {
  return shouldReduceMotion() ? 0 : duration;
};

/**
 * Debounce function for scroll events
 */
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: ReturnType<typeof setTimeout> | null = null;
  
  return (...args: Parameters<T>) => {
    if (timeout) {
      clearTimeout(timeout);
    }
    
    timeout = setTimeout(() => {
      func(...args);
    }, wait);
  };
};

/**
 * Throttle function for scroll events
 */
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean = false;
  
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => {
        inThrottle = false;
      }, limit);
    }
  };
};

/**
 * Request animation frame with fallback
 */
export const requestAnimFrame = (
  callback: FrameRequestCallback
): number => {
  return window.requestAnimationFrame(callback);
};

/**
 * Cancel animation frame with fallback
 */
export const cancelAnimFrame = (id: number): void => {
  window.cancelAnimationFrame(id);
};

/**
 * Linear interpolation between two values
 */
export const lerp = (start: number, end: number, factor: number): number => {
  return start + (end - start) * factor;
};

/**
 * Clamp a value between min and max
 */
export const clamp = (value: number, min: number, max: number): number => {
  return Math.min(Math.max(value, min), max);
};

/**
 * Map a value from one range to another
 */
export const mapRange = (
  value: number,
  inMin: number,
  inMax: number,
  outMin: number,
  outMax: number
): number => {
  return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
};

/**
 * Calculate parallax offset
 */
export const calculateParallaxOffset = (
  scrollY: number,
  speed: number,
  elementOffset: number = 0
): number => {
  return (scrollY - elementOffset) * speed;
};

/**
 * Easing functions for custom animations
 */
export const easingFunctions = {
  easeInQuad: (t: number): number => t * t,
  easeOutQuad: (t: number): number => t * (2 - t),
  easeInOutQuad: (t: number): number => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t),
  easeInCubic: (t: number): number => t * t * t,
  easeOutCubic: (t: number): number => (--t) * t * t + 1,
  easeInOutCubic: (t: number): number => (t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1),
  easeInQuart: (t: number): number => t * t * t * t,
  easeOutQuart: (t: number): number => 1 - (--t) * t * t * t,
  easeInOutQuart: (t: number): number => (t < 0.5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t),
};

/**
 * Animate a value over time using requestAnimationFrame
 */
export const animateValue = (
  start: number,
  end: number,
  duration: number,
  onUpdate: (value: number) => void,
  easing: (t: number) => number = easingFunctions.easeOutQuad
): void => {
  const startTime = performance.now();
  
  const animate = (currentTime: number) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easedProgress = easing(progress);
    const currentValue = start + (end - start) * easedProgress;
    
    onUpdate(currentValue);
    
    if (progress < 1) {
      requestAnimFrame(animate);
    }
  };
  
  requestAnimFrame(animate);
};

/**
 * Stagger animation delays for multiple elements
 */
export const getStaggerDelay = (index: number, baseDelay: number = 100): number => {
  return index * baseDelay;
};

/**
 * Check if element is in viewport
 */
export const isInViewport = (element: HTMLElement, offset: number = 0): boolean => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= -offset &&
    rect.left >= -offset &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) + offset &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth) + offset
  );
};

/**
 * Get scroll percentage of element
 */
export const getElementScrollPercentage = (element: HTMLElement): number => {
  const rect = element.getBoundingClientRect();
  const windowHeight = window.innerHeight;
  const elementHeight = rect.height;
  const elementTop = rect.top;
  
  // Element is above viewport
  if (elementTop > windowHeight) return 0;
  
  // Element is below viewport
  if (elementTop + elementHeight < 0) return 1;
  
  // Element is in viewport
  const visibleHeight = Math.min(windowHeight - elementTop, elementHeight);
  return visibleHeight / elementHeight;
};