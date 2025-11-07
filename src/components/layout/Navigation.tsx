/**
 * Navigation Component
 * Main navigation bar with glassmorphism effect, sticky positioning, and theme toggle
 * Features smooth scroll to sections, active section highlighting, and mobile hamburger menu
 */

import React, { useState, useEffect } from 'react';
import { useScrollProgress } from '../../hooks/useScrollProgress';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import ThemeToggle from '../ui/ThemeToggle';
import type { NavigationProps } from '../../types';

const Navigation: React.FC<NavigationProps> = ({ className = '' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { scrollY } = useScrollProgress();
  const isMobile = useMediaQuery('(max-width: 768px)');

  // Navigation links
  const navLinks = [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'about', label: 'About', href: '#about' },
    { id: 'experience', label: 'Experience', href: '#experience' },
    { id: 'projects', label: 'Projects', href: '#projects' },
    { id: 'skills', label: 'Skills', href: '#skills' },
    { id: 'contact', label: 'Contact', href: '#contact' },
  ];

  // Determine if navigation should have scrolled styling
  const isScrolled = scrollY > 50;

  // Handle smooth scroll to section
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 80; // Account for fixed nav height
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
    
    // Close mobile menu after clicking
    setIsMenuOpen(false);
  };

  // Track active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => link.id);
      const scrollPosition = window.scrollY + 100; // Offset for better detection

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when switching to desktop
  useEffect(() => {
    if (!isMobile && isMenuOpen) {
      setIsMenuOpen(false);
    }
  }, [isMobile, isMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <nav
      className={`navigation glass-nav ${isScrolled ? 'scrolled' : ''} ${className}`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="navigation__container">
        {/* Logo/Brand */}
        <a
          href="#home"
          className="navigation__brand"
          onClick={(e) => handleNavClick(e, '#home')}
          aria-label="Go to home"
        >
          <span className="navigation__logo">Portfolio</span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="navigation__links">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={`navigation__link ${activeSection === link.id ? 'active' : ''}`}
              onClick={(e) => handleNavClick(e, link.href)}
              aria-current={activeSection === link.id ? 'page' : undefined}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Theme Toggle & Mobile Menu Button */}
        <div className="navigation__actions">
          <ThemeToggle className="navigation__theme-toggle" />
          
          {/* Mobile Hamburger Button */}
          <button
            type="button"
            className={`navigation__hamburger ${isMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            <span className="navigation__hamburger-line"></span>
            <span className="navigation__hamburger-line"></span>
            <span className="navigation__hamburger-line"></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMenuOpen && (
        <>
          {/* Overlay */}
          <div
            className="navigation__overlay"
            onClick={() => setIsMenuOpen(false)}
            aria-hidden="true"
          />
          
          {/* Mobile Menu */}
          <div
            id="mobile-menu"
            className="navigation__mobile-menu"
            role="menu"
          >
            <div className="navigation__mobile-links">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  className={`navigation__mobile-link ${activeSection === link.id ? 'active' : ''}`}
                  onClick={(e) => handleNavClick(e, link.href)}
                  role="menuitem"
                  aria-current={activeSection === link.id ? 'page' : undefined}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navigation;