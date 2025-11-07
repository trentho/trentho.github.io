/**
 * Theme Context
 * Manages theme state and provides theme utilities throughout the app
 */

import React, { createContext, useEffect, useState, useCallback } from 'react';
import type { Theme, ThemeContextValue } from '../types';

// Create the context with undefined as default
export const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

interface ThemeProviderProps {
  children: React.ReactNode;
}

/**
 * ThemeProvider Component
 * Wraps the app and provides theme management functionality
 * 
 * Features:
 * - Persists theme preference to localStorage
 * - Applies theme class to document root
 * - Provides smooth transition between themes
 * - Respects system preference on first load
 */
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  // Initialize theme from localStorage or system preference
  const [theme, setThemeState] = useState<Theme>(() => {
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
  });

  /**
   * Apply theme to document root and save to localStorage
   */
  const applyTheme = useCallback((newTheme: Theme) => {
    // Remove both classes first
    document.documentElement.classList.remove('light', 'dark');
    
    // Add the new theme class
    document.documentElement.classList.add(newTheme);
    
    // Save to localStorage
    localStorage.setItem('theme', newTheme);
    
    // Update meta theme-color for mobile browsers
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      const color = newTheme === 'dark' ? '#0f172a' : '#f8fafc';
      metaThemeColor.setAttribute('content', color);
    }
  }, []);

  /**
   * Set theme and apply it
   */
  const setTheme = useCallback((newTheme: Theme) => {
    setThemeState(newTheme);
    applyTheme(newTheme);
  }, [applyTheme]);

  /**
   * Toggle between light and dark themes
   */
  const toggleTheme = useCallback(() => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }, [theme, setTheme]);

  /**
   * Apply theme on mount and when theme changes
   */
  useEffect(() => {
    applyTheme(theme);
  }, [theme, applyTheme]);

  /**
   * Listen for system theme changes
   */
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = (e: MediaQueryListEvent) => {
      // Only update if user hasn't manually set a preference
      const savedTheme = localStorage.getItem('theme');
      if (!savedTheme) {
        setTheme(e.matches ? 'dark' : 'light');
      }
    };

    // Modern browsers
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
    // Legacy browsers
    else if (mediaQuery.addListener) {
      mediaQuery.addListener(handleChange);
      return () => mediaQuery.removeListener(handleChange);
    }
  }, [setTheme]);

  const value: ThemeContextValue = {
    theme,
    toggleTheme,
    setTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

/**
 * Custom hook to use the theme context
 * Throws an error if used outside of ThemeProvider
 */
export const useTheme = (): ThemeContextValue => {
  const context = React.useContext(ThemeContext);
  
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  
  return context;
};