/**
 * GlassCard Component
 * Reusable glassmorphic card container with configurable variants
 * Supports light, medium, and heavy glass effects with customizable blur levels
 */

import React from 'react';
import type { GlassCardProps } from '../../types';

const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = '',
  variant = 'medium',
  blur = 'md',
  hover = false,
  onClick,
}) => {
  // Build class names based on props
  const variantClass = `glass-${variant}`;
  const blurClass = `glass-blur-${blur}`;
  const hoverClass = hover ? 'glass-hover' : '';
  const clickableClass = onClick ? 'glass-clickable' : '';

  const combinedClassName = [
    'glass-card',
    variantClass,
    blurClass,
    hoverClass,
    clickableClass,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div
      className={combinedClassName}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={
        onClick
          ? (e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onClick();
              }
            }
          : undefined
      }
    >
      {children}
    </div>
  );
};

export default GlassCard;