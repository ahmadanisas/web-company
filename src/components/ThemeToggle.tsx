'use client';
import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle the theme mode
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem('theme', newMode ? 'dark' : 'light');
      return newMode;
    });
  };

  // Set the theme mode based on stored preference on initial load
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle dark/light mode"
      className="p-2 rounded-full bg-gray-300 dark:bg-blue-500 cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-110 hover:bg-gray-400 dark:hover:bg-gray-600"
    >
      {isDarkMode ? (
        <Moon className="text-gray-800 dark:text-white" size={24} />
      ) : (
        <Sun className="text-gray-800 dark:text-white" size={24} />
      )}
    </button>
  );
};

export default ThemeToggle;
