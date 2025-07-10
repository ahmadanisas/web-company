"use client";

import { useThemeStore } from "../../store/theme";

export default function ThemeToggle() {
  const { darkMode, toggleDarkMode } = useThemeStore();

  return (
    <label className="relative inline-flex items-center cursor-pointer ml-4">
      <input
        type="checkbox"
        checked={darkMode}
        onChange={toggleDarkMode}
        className="sr-only peer"
      />
      <div className="w-11 h-6 bg-gray-300 peer-focus:ring-2 peer-focus:ring-blue-500 dark:bg-gray-600 rounded-full peer peer-checked:bg-blue-600 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-transform peer-checked:after:translate-x-full peer-checked:after:border-white" />
      <span className="ml-3 text-sm text-gray-900 dark:text-gray-200">
        {darkMode ? "Dark" : "Light"}
      </span>
    </label>
  );
}
