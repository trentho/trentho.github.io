/**
 * Footer Component
 * Footer section with glassmorphic styling, social links, and navigation
 * Includes copyright information and back to top button
 */

import React from 'react';
import SocialLinks from '../ui/SocialLinks';
import { socialLinks } from '../../data/portfolio';
import type { FooterProps } from '../../types';

const Footer: React.FC<FooterProps> = ({ className = '' }) => {
  const currentYear = new Date().getFullYear();

  // Quick navigation links
  const quickLinks = [
    { id: 'about', label: 'About', href: '#about' },
    { id: 'projects', label: 'Projects', href: '#projects' },
    { id: 'skills', label: 'Skills', href: '#skills' },
    { id: 'contact', label: 'Contact', href: '#contact' },
  ];

  // Handle smooth scroll to section
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className={`footer glass ${className}`} role="contentinfo">
      <div className="footer__container">
        {/* Footer Content Grid */}
        <div className="footer__content">
          {/* Brand Section */}
          <div className="footer__section footer__brand">
            <h3 className="footer__title">Portfolio</h3>
            <p className="footer__description">
              Building beautiful and functional web experiences with modern technologies.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="footer__section">
            <h4 className="footer__section-title">Quick Links</h4>
            <nav className="footer__nav" aria-label="Footer navigation">
              <ul className="footer__links">
                {quickLinks.map((link) => (
                  <li key={link.id}>
                    <a
                      href={link.href}
                      className="footer__link"
                      onClick={(e) => handleNavClick(e, link.href)}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Social Links Section */}
          <div className="footer__section">
            <h4 className="footer__section-title">Connect</h4>
            <SocialLinks 
              links={socialLinks} 
              size="sm" 
              className="footer__social"
            />
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer__bottom">
          <div className="footer__copyright">
            <p>
              © {currentYear} Portfolio. All rights reserved.
            </p>
          </div>

          {/* Back to Top Button */}
          <button
            type="button"
            className="footer__back-to-top"
            onClick={scrollToTop}
            aria-label="Back to top"
            title="Back to top"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polyline points="18 15 12 9 6 15" />
            </svg>
            <span className="footer__back-to-top-text">Top</span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;