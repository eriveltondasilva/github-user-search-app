'use client';
import { Moon, Sun } from 'lucide-react';
import { useState } from 'react';

export default function HeaderButton() {
  const [darkMode, setDarkMode] = useState(true);

  function toggleDarkMode() {
    setDarkMode(!darkMode);
  }

  return (
    <button
      className='flex gap-2 font-medium tracking-wide'
      onClick={toggleDarkMode}>
      <span>{darkMode ? 'DARK' : 'LIGHT'}</span>

      {darkMode ? <Sun /> : <Moon />}
    </button>
  );
}
