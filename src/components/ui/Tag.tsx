/**
 * Tag Component
 * Skill/technology tag component with glassmorphic styling
 * Used for displaying technologies, skills, and categories
 */

import React from 'react';

interface TagProps {
  label: string;
  variant?: 'default' | 'primary' | 'secondary' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  onClick?: () => void;
  active?: boolean;
  className?: string;
}

const Tag: React.FC<TagProps> = ({
  label,
  variant = 'default',
  size = 'md',
  icon,
  onClick,
  active = false,
  className = '',
}) => {
  const baseClass = 'tag';
  const variantClass = `tag--${variant}`;
  const sizeClass = `tag--${size}`;
  const activeClass = active ? 'tag--active' : '';
  const clickableClass = onClick ? 'tag--clickable' : '';

  const combinedClassName = [
    baseClass,
    variantClass,
    sizeClass,
    activeClass,
    clickableClass,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const TagElement = onClick ? 'button' : 'span';

  return (
    <TagElement
      className={combinedClassName}
      onClick={onClick}
      type={onClick ? 'button' : undefined}
      aria-pressed={onClick ? active : undefined}
      aria-label={onClick ? `Filter by ${label}` : undefined}
    >
      {icon && <span className="tag__icon" aria-hidden="true">{icon}</span>}
      <span className="tag__label">{label}</span>
    </TagElement>
  );
};

export default Tag;