'use client';
import { Moon, Sun } from 'lucide-react';
import { useState } from 'react';

export default function HeaderToggleDarkMode() {
  const [darkMode, setDarkMode] = useState(true);

  function toggleDarkMode() {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  }

  return (
    <button
      className='flex gap-2 font-semibold text-sm text-slate-500 dark:text-white tracking-wide'
      onClick={toggleDarkMode}>
      <span>{darkMode ? 'LIGHT' : 'DARK'}</span>

      {darkMode ? <Sun className='fill-current' /> : <Moon className='fill-current stroke-0' />}
    </button>
  );
}
