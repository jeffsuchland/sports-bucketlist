import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme === 'dark' : true;
  });

  useEffect(() => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    document.body.style.setProperty('--bg-color', isDarkMode ? '#1a1a1a' : '#f5f5f5');
    document.body.style.setProperty('--text-color', isDarkMode ? '#ffffff' : '#000000');
    document.body.style.setProperty('--paper-bg', isDarkMode ? '#2d2d2d' : '#ffffff');
    document.body.style.setProperty('--secondary-text', isDarkMode ? '#999999' : '#666666');
    document.body.style.setProperty('--border-color', isDarkMode ? '#424242' : '#e0e0e0');
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
