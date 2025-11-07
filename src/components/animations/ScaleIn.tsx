/**
 * ScaleIn Component
 * Wrapper for scale-in animations on scroll
 * Creates a zoom-in effect when element enters viewport
 */

import React, { useEffect, useState } from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import type { ScaleInProps } from '../../types';

const ScaleIn: React.FC<ScaleInProps> = ({
  children,
  delay = 0,
  duration = 600,
  initialScale = 0.8,
}) => {
  const { ref, isIntersecting, hasIntersected } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    if (isIntersecting || hasIntersected) {
      const timer = setTimeout(() => {
        setShouldAnimate(true);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [isIntersecting, hasIntersected, delay]);

  const style: React.CSSProperties = {
    opacity: shouldAnimate ? 1 : 0,
    transform: shouldAnimate ? 'scale(1)' : `scale(${initialScale})`,
    transition: `opacity ${duration}ms var(--ease-out), transform ${duration}ms var(--ease-out)`,
    willChange: shouldAnimate ? 'auto' : 'opacity, transform',
  };

  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} style={style} className="scale-in-wrapper">
      {children}
    </div>
  );
};

export default ScaleIn;