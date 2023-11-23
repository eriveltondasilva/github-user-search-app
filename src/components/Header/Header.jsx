import { Moon, Sun } from 'lucide-react';
import Link from 'next/link';

import HeaderForm from './HeaderForm';

// =============================
export default function Header({ children }) {
  return <header>{children}</header>;
}

// -----------------------------
function HeaderWrapper({ children }) {
  return (
    <div className='flex items-baseline justify-between mb-8'>{children}</div>
  );
}

// -----------------------------
function HeaderTitle({ title = '' }) {
  return (
    <h1 className='text-2xl font-bold'>
      <Link href='/'>{title}</Link>
    </h1>
  );
}

// -----------------------------
function HeaderToggleDarkMode({ hasDarkMode, onClick }) {
  const SUN_ICON = <Sun className='fill-current' />;
  const MOON_ICON = <Moon className='fill-current stroke-0' />;

  return (
    <button
      className='flex items-center gap-2 text-sm font-semibold tracking-wide text-slate-500 dark:text-white'
      onClick={onClick}>
      <span>{hasDarkMode ? 'LIGHT' : 'DARK'}</span>
      {hasDarkMode ? SUN_ICON : MOON_ICON}
    </button>
  );
}

// =============================
Header.Wrapper = HeaderWrapper;
Header.Title = HeaderTitle;
Header.ToggleDarkMode = HeaderToggleDarkMode;
Header.Form = HeaderForm;
