/**
 * ParallaxLayer Component
 * Individual parallax layer with configurable scroll speed
 * Creates depth effect by moving at different speeds relative to scroll
 */

import React, { useEffect, useState, useRef } from 'react';
import { useScrollProgress } from '../../hooks/useScrollProgress';
import type { ParallaxLayerProps } from '../../types';

const ParallaxLayer: React.FC<ParallaxLayerProps> = ({
  children,
  speed,
  className = '',
}) => {
  const { scrollY } = useScrollProgress();
  const [offset, setOffset] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    // Calculate parallax offset based on scroll position and speed
    // Speed is a multiplier: 0.5 = half speed, 1 = normal speed, 2 = double speed
    const elementTop = elementRef.current.offsetTop;
    const parallaxOffset = (scrollY - elementTop) * speed;

    setOffset(parallaxOffset);
  }, [scrollY, speed]);

  const style: React.CSSProperties = {
    transform: `translateY(${offset}px)`,
    willChange: 'transform',
  };

  return (
    <div
      ref={elementRef}
      style={style}
      className={`parallax-layer ${className}`}
    >
      {children}
    </div>
  );
};

export default ParallaxLayer;