// app/components/ModeToggle.tsx
"use client";

import { useTheme } from 'next-themes';
import React from 'react';

const ModeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      className="p-2 text-xl bg-gray-200 dark:bg-gray-800 rounded-full"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  );
};

export default ModeToggle;
