
<<<<<<< HEAD
import React, { createContext, useContext, useEffect, useState } from 'react';
=======
import React, { createContext, useContext, useEffect } from 'react';
>>>>>>> asif-update

type Theme = 'dark' | 'light';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
<<<<<<< HEAD
  const [theme, setTheme] = useState<Theme>('dark');

  useEffect(() => {
    // Check if user has previously selected a theme
    const storedTheme = localStorage.getItem('theme') as Theme | null;
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);

  useEffect(() => {
    // Apply theme to the document
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
  };
=======
  // Permanently set theme to 'dark'
  const theme: Theme = 'dark';

  useEffect(() => {
    // Always apply dark theme to the document
    document.documentElement.classList.remove('light');
    document.documentElement.classList.add('dark');
  }, []);

  const setTheme = () => {};
  const toggleTheme = () => {};
>>>>>>> asif-update

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
