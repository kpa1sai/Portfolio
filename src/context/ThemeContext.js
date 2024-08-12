import React, { createContext, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light'); // Default theme

  const toggleTheme = () => {
    setTheme((current) => (current === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`App ${theme}`}>
      {children}
      </div>
    </ThemeContext.Provider>
  );
};

export const themes = {
  light: {
    '--header-bg': '#ffffff',
    '--header-text': '#2c3e50',
    '--header-hover': '#3498db',
    '--header-accent': '#e74c3c',
    '--header-shadow': '0 2px 4px rgba(0,0,0,0.1)',
    // ... other theme variables
  },
  dark: {
    '--header-bg': '#1a1a2e',
    '--header-text': '#e0e0e0',
    '--header-hover': '#4da6ff',
    '--header-accent': '#ff6b6b',
    '--header-shadow': '0 2px 4px rgba(255,255,255,0.1)',
    // ... other theme variables
  },
};

export default ThemeContext;