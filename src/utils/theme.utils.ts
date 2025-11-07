/**
 * Theme Utilities
 * Helper functions for theme management
 */

import type { Theme } from '../types';

/**
 * Get the current theme from localStorage or system preference
 */
export const getInitialTheme = (): Theme => {
  // Check localStorage first
  const savedTheme = localStorage.getItem('theme') as Theme | null;
  if (savedTheme === 'light' || savedTheme === 'dark') {
    return savedTheme;
  }
  
  // Fall back to system preference
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  }
  
  // Default to light theme
  return 'light';
};

/**
 * Save theme to localStorage
 */
export const saveTheme = (theme: Theme): void => {
  localStorage.setItem('theme', theme);
};

/**
 * Apply theme class to document root
 */
export const applyThemeClass = (theme: Theme): void => {
  document.documentElement.classList.remove('light', 'dark');
  document.documentElement.classList.add(theme);
};

/**
 * Update meta theme-color for mobile browsers
 */
export const updateMetaThemeColor = (theme: Theme): void => {
  const metaThemeColor = document.querySelector('meta[name="theme-color"]');
  if (metaThemeColor) {
    const color = theme === 'dark' ? '#0f172a' : '#f8fafc';
    metaThemeColor.setAttribute('content', color);
  }
};

/**
 * Get CSS variable value
 */
export const getCSSVariable = (variable: string): string => {
  return getComputedStyle(document.documentElement)
    .getPropertyValue(variable)
    .trim();
};

/**
 * Set CSS variable value
 */
export const setCSSVariable = (variable: string, value: string): void => {
  document.documentElement.style.setProperty(variable, value);
};

/**
 * Check if system prefers dark mode
 */
export const systemPrefersDarkMode = (): boolean => {
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
};

/**
 * Check if system prefers reduced motion
 */
export const systemPrefersReducedMotion = (): boolean => {
  return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

/**
 * Get contrast ratio between two colors
 * Useful for accessibility checks
 */
export const getContrastRatio = (color1: string, color2: string): number => {
  const getLuminance = (_color: string): number => {
    // Simple luminance calculation
    // In a real implementation, you'd parse the color and calculate properly
    return 0.5; // Placeholder
  };
  
  const lum1 = getLuminance(color1);
  const lum2 = getLuminance(color2);
  const brightest = Math.max(lum1, lum2);
  const darkest = Math.min(lum1, lum2);
  
  return (brightest + 0.05) / (darkest + 0.05);
};

/**
 * Check if contrast ratio meets WCAG AA standards
 */
export const meetsWCAGAA = (contrastRatio: number, isLargeText: boolean = false): boolean => {
  return isLargeText ? contrastRatio >= 3 : contrastRatio >= 4.5;
};

/**
 * Check if contrast ratio meets WCAG AAA standards
 */
export const meetsWCAGAAA = (contrastRatio: number, isLargeText: boolean = false): boolean => {
  return isLargeText ? contrastRatio >= 4.5 : contrastRatio >= 7;
};