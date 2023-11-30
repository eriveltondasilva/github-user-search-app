import Button from '@/components/Button';
import { Moon, Search, Sun } from 'lucide-react';
import Link from 'next/link';

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
function HeaderTitle({ title }) {
  const TITLE = 'devFinder' || title;

  return (
    <h1 className='text-2xl font-bold'>
      <Link href='/'>{TITLE}</Link>
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
      type='button'
      onClick={onClick}>
      <span>{hasDarkMode ? 'LIGHT' : 'DARK'}</span>
      {hasDarkMode ? SUN_ICON : MOON_ICON}
    </button>
  );
}

// -----------------------------
function HeaderForm({ onSubmit, children }) {
  return (
    <form onSubmit={onSubmit}>
      <div className='flex justify-between py-2 my-4 bg-white drop-shadow-md rounded-xl dark:bg-slate-800'>
        {children}
      </div>
    </form>
  );
}
// -----------------------------
function HeaderInput({ search, setSearch }) {
  function handleChange(e) {
    setSearch(e.target.value.trim().toLowerCase());
  }

  return (
    <div className='flex items-center w-full'>
      <label
        htmlFor='headerInput'
        className='mx-2 text-blue-500 sm:mx-5'>
        <Search />
      </label>
      <input
        className='w-full text-sm bg-transparent sm:text-base text-slate-600 dark:text-white focus:outline-none placeholder:tracking-tight'
        id='headerInput'
        type='text'
        value={search}
        onChange={handleChange}
        placeholder='Search GitHub username...'
        autoFocus
      />
    </div>
  );
}

// -----------------------------
function HeaderButton({ text = '', type, isDisabled }) {
  return (
    <div className='mx-2'>
      <Button
        disabled={isDisabled}
        type={type || 'button'}
        text={text}
      />
    </div>
  );
}

// =============================
Header.Wrapper = HeaderWrapper;
Header.Title = HeaderTitle;
Header.ToggleDarkMode = HeaderToggleDarkMode;
Header.Form = HeaderForm;
Header.Input = HeaderInput;
Header.Button = HeaderButton;
