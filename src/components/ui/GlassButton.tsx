/**
 * GlassButton Component
 * Glassmorphism-styled button with multiple variants and sizes
 * Supports both button and link functionality with hover effects
 */

import React from 'react';
import type { GlassButtonProps } from '../../types';

const GlassButton: React.FC<GlassButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  disabled = false,
  className = '',
  href,
  external = false,
}) => {
  // Build class names based on props
  const baseClass = 'glass-button';
  const variantClass = `glass-button--${variant}`;
  const sizeClass = `glass-button--${size}`;
  const disabledClass = disabled ? 'glass-button--disabled' : '';

  const combinedClassName = [
    baseClass,
    variantClass,
    sizeClass,
    disabledClass,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  // If href is provided, render as anchor tag
  if (href) {
    return (
      <a
        href={href}
        className={combinedClassName}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        aria-disabled={disabled}
        onClick={disabled ? (e) => e.preventDefault() : onClick}
      >
        {children}
      </a>
    );
  }

  // Otherwise render as button
  return (
    <button
      type="button"
      className={combinedClassName}
      onClick={onClick}
      disabled={disabled}
      aria-label={typeof children === 'string' ? children : undefined}
    >
      {children}
    </button>
  );
};

export default GlassButton;