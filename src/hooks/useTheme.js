import { useEffect } from 'react';

/**
 * useTheme — permanently locked to premium Cyber Obsidian Dark Mode
 */
export function useTheme() {
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('portfolio-theme', 'dark');
  }, []);

  return { theme: 'dark', toggleTheme: () => {}, isDark: true };
}
