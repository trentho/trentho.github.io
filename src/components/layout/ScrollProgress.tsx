/**
 * ScrollProgress Component
 * Visual indicator of scroll progress through the page
 * Fixed position progress bar at top with smooth animation and theme-aware colors
 */

import React from 'react';
import { useScrollProgress } from '../../hooks/useScrollProgress';
import type { ScrollProgressProps } from '../../types';

const ScrollProgress: React.FC<ScrollProgressProps> = ({ 
  className = '',
  color,
}) => {
  const { scrollProgress } = useScrollProgress();

  // Convert progress (0-1) to percentage
  const progressPercentage = scrollProgress * 100;

  return (
    <div 
      className={`scroll-progress ${className}`}
      role="progressbar"
      aria-label="Page scroll progress"
      aria-valuenow={Math.round(progressPercentage)}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div 
        className="scroll-progress__bar"
        style={{
          width: `${progressPercentage}%`,
          backgroundColor: color,
        }}
      />
    </div>
  );
};

export default ScrollProgress;