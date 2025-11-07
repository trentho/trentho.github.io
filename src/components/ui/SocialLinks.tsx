/**
 * SocialLinks Component
 * Grid of social media icon links with hover effects
 * Displays social media platforms with glassmorphic styling
 */

import React from 'react';
import type { SocialLinksProps } from '../../types';

const SocialLinks: React.FC<SocialLinksProps> = ({
  links,
  size = 'md',
  className = '',
}) => {
  const sizeClass = `social-links--${size}`;

  return (
    <div className={`social-links ${sizeClass} ${className}`}>
      {links.map((link) => (
        <a
          key={link.id}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="social-links__item"
          aria-label={`Visit ${link.platform} profile`}
          title={link.platform}
        >
          <div className="social-links__icon-wrapper">
            {/* Icon can be an SVG string, emoji, or component */}
            {typeof link.icon === 'string' ? (
              <span
                className="social-links__icon"
                dangerouslySetInnerHTML={{ __html: link.icon }}
                aria-hidden="true"
              />
            ) : (
              <span className="social-links__icon" aria-hidden="true">
                {link.icon}
              </span>
            )}
          </div>
          <span className="social-links__label">{link.platform}</span>
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;