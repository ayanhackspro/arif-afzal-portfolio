'use client';

import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const hasDark = document.documentElement.classList.contains('dark');
    setIsDark(hasDark);
  }, []);

  const toggleTheme = () => {
    const nextState = !isDark;
    setIsDark(nextState);
    if (nextState) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  if (!mounted) {
    return (
      <button
        aria-label="Toggle theme"
        className="w-9 h-9 flex items-center justify-center rounded-sm border border-[#E5E3D8] dark:border-[#2A2C29] text-[#737168] dark:text-[#7E7C74]"
      >
        <span className="w-4 h-4" />
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to warm paper mode' : 'Switch to nocturnal dark mode'}
      title={isDark ? 'Paper Mode' : 'Night Mode'}
      className="group relative w-9 h-9 flex items-center justify-center rounded-sm border border-[#E5E3D8] dark:border-[#2A2C29] bg-transparent hover:border-[#284E3A] dark:hover:border-[#4E8767] text-[#403F3A] dark:text-[#BFBEB6] transition-all duration-200 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#284E3A]"
    >
      {isDark ? (
        <Sun className="w-4 h-4 text-[#E2DFD2] group-hover:text-[#4E8767] transition-transform duration-300 group-hover:rotate-45" />
      ) : (
        <Moon className="w-4 h-4 text-[#403F3A] group-hover:text-[#284E3A] transition-transform duration-300 group-hover:-rotate-12" />
      )}
    </button>
  );
}
