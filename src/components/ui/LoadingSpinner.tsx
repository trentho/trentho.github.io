/**
 * LoadingSpinner Component
 * Animated loading indicator with glassmorphic styling
 * Provides visual feedback during loading states
 */

import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'primary' | 'accent';
  className?: string;
  label?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',
  variant = 'default',
  className = '',
  label = 'Loading...',
}) => {
  const sizeClass = `loading-spinner--${size}`;
  const variantClass = `loading-spinner--${variant}`;

  return (
    <div
      className={`loading-spinner ${sizeClass} ${variantClass} ${className}`}
      role="status"
      aria-live="polite"
      aria-label={label}
    >
      <div className="loading-spinner__circle">
        <svg
          className="loading-spinner__svg"
          viewBox="0 0 50 50"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            className="loading-spinner__path"
            cx="25"
            cy="25"
            r="20"
            fill="none"
            strokeWidth="4"
          />
        </svg>
      </div>
      <span className="loading-spinner__label visually-hidden">{label}</span>
    </div>
  );
};

export default LoadingSpinner;