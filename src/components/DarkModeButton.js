'use client';
import { Moon, Sun } from 'lucide-react';
import { useState } from 'react';

export default function DarkModeButton() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <button
      className='flex gap-2 tracking-wide font-medium '
      onClick={() => setDarkMode(!darkMode)}>
      <span>{darkMode ? 'DARK' : 'LIGHT'}</span>
      {darkMode ? <Sun /> : <Moon />}
    </button>
  );
}
