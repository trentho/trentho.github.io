/**
 * useIntersectionObserver Hook
 * Detect when elements enter viewport for scroll animations
 * 
 * Parameters:
 * - threshold: Percentage of element visibility to trigger (0-1)
 * - rootMargin: Margin around root element
 * - triggerOnce: Whether to trigger only once
 * 
 * Returns:
 * - ref: Ref to attach to the element
 * - isIntersecting: Whether element is currently intersecting
 * - hasIntersected: Whether element has ever intersected
 */

import { useEffect, useRef, useState } from 'react';
import type { UseIntersectionObserverReturn, UseIntersectionObserverOptions } from '../types';

export const useIntersectionObserver = (
  options: UseIntersectionObserverOptions = {}
): UseIntersectionObserverReturn => {
  const {
    threshold = 0.1,
    rootMargin = '0px',
    triggerOnce = false,
  } = options;

  const ref = useRef<HTMLElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Check if IntersectionObserver is supported
    if (!('IntersectionObserver' in window)) {
      // Fallback: assume element is visible
      setIsIntersecting(true);
      setHasIntersected(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const isCurrentlyIntersecting = entry.isIntersecting;
          
          setIsIntersecting(isCurrentlyIntersecting);
          
          if (isCurrentlyIntersecting) {
            setHasIntersected(true);
            
            // If triggerOnce is true, disconnect after first intersection
            if (triggerOnce) {
              observer.disconnect();
            }
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, triggerOnce]);

  return {
    ref,
    isIntersecting,
    hasIntersected,
  };
};