import { Moon, Sun } from 'lucide-react';

export default function HeaderToggleDarkMode({ darkMode, onClick }) {
  return (
    <button
      className='flex items-center gap-2 text-sm font-semibold tracking-wide text-slate-500 dark:text-white'
      onClick={onClick}>
      <span>{darkMode ? 'LIGHT' : 'DARK'}</span>

      {darkMode ? (
        <Sun className='fill-current' />
      ) : (
        <Moon className='fill-current stroke-0' />
      )}
    </button>
  );
}
