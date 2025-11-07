/**
 * FadeIn Component
 * Wrapper for fade-in animations on scroll using Intersection Observer
 * Supports multiple directions and configurable timing
 */

import React, { useEffect, useState } from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import type { FadeInProps } from '../../types';

const FadeIn: React.FC<FadeInProps> = ({
  children,
  delay = 0,
  duration = 600,
  direction = 'up',
  threshold = 0.1,
}) => {
  const { ref, isIntersecting, hasIntersected } = useIntersectionObserver({
    threshold,
    triggerOnce: true,
  });

  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    if (isIntersecting || hasIntersected) {
      // Apply delay before starting animation
      const timer = setTimeout(() => {
        setShouldAnimate(true);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [isIntersecting, hasIntersected, delay]);

  // Calculate transform based on direction
  const getInitialTransform = () => {
    const distance = 30; // pixels
    switch (direction) {
      case 'up':
        return `translateY(${distance}px)`;
      case 'down':
        return `translateY(-${distance}px)`;
      case 'left':
        return `translateX(${distance}px)`;
      case 'right':
        return `translateX(-${distance}px)`;
      default:
        return 'none';
    }
  };

  const style: React.CSSProperties = {
    opacity: shouldAnimate ? 1 : 0,
    transform: shouldAnimate ? 'translate(0, 0)' : getInitialTransform(),
    transition: `opacity ${duration}ms var(--ease-out), transform ${duration}ms var(--ease-out)`,
    willChange: shouldAnimate ? 'auto' : 'opacity, transform',
  };

  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} style={style} className="fade-in-wrapper">
      {children}
    </div>
  );
};

export default FadeIn;