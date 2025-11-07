/**
 * SectionTitle Component
 * Styled section heading component with optional subtitle
 * Provides consistent typography and spacing across sections
 */

import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  align = 'center',
  className = '',
}) => {
  const alignClass = `text-${align}`;

  return (
    <div className={`section-title ${alignClass} ${className}`}>
      <h2 className="section-title__heading">{title}</h2>
      {subtitle && <p className="section-title__subtitle">{subtitle}</p>}
      <div className="section-title__divider" aria-hidden="true">
        <span className="section-title__divider-line"></span>
        <span className="section-title__divider-dot"></span>
        <span className="section-title__divider-line"></span>
      </div>
    </div>
  );
};

export default SectionTitle;