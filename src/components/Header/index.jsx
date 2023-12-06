import { Moon, Search, Sun } from 'lucide-react'
import Link from 'next/link'
import { twJoin } from 'tailwind-merge'

import Button from '@/components/Button'

// =============================
export default function Header({ children }) {
  return <header>{children}</header>
}

// -----------------------------
function HeaderWrapper({ children }) {
  return (
    <div className='mb-8 flex items-baseline justify-between'>{children}</div>
  )
}

// -----------------------------
function HeaderTitle({ title }) {
  const TITLE = 'devFinder' || title

  return (
    <h1 className='text-2xl font-bold'>
      <Link href='/'>{TITLE}</Link>
    </h1>
  )
}

// -----------------------------
function HeaderToggleDarkMode({ hasDarkMode, onClick }) {
  const SUN_ICON = <Sun className='fill-current' />
  const MOON_ICON = <Moon className='fill-current stroke-0' />

  return (
    <button
      className={twJoin(
        'flex items-center gap-2',
        'text-sm font-semibold tracking-wide',
        'text-slate-500 dark:text-white'
      )}
      type='button'
      onClick={onClick}>
      <span>{hasDarkMode ? 'LIGHT' : 'DARK'}</span>
      {hasDarkMode ? SUN_ICON : MOON_ICON}
    </button>
  )
}

// -----------------------------
function HeaderForm({ onSubmit, children }) {
  return (
    <form onSubmit={onSubmit}>
      <div
        className={twJoin(
          'flex justify-between',
          'my-4 rounded-xl py-2 drop-shadow-md',
          'bg-white dark:bg-slate-800'
        )}>
        {children}
      </div>
    </form>
  )
}
// -----------------------------
function HeaderInput({ search, setSearch }) {
  function handleChange(e) {
    const regex = /[^a-z]/g
    setSearch(e.target.value.trim().toLowerCase().replace(regex, ''))
  }

  return (
    <div className='flex w-full items-center'>
      <label
        htmlFor='headerInput'
        className='mx-2 text-blue-500 sm:mx-5'>
        <Search />
      </label>
      <input
        className={twJoin(
          'w-full text-sm placeholder:tracking-tight focus:outline-none sm:text-base',
          'bg-transparent text-slate-600 dark:text-white'
        )}
        id='headerInput'
        type='text'
        value={search}
        onChange={handleChange}
        placeholder='Search GitHub username...'
        autoFocus
      />
    </div>
  )
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
  )
}

// =============================
Header.Wrapper = HeaderWrapper
Header.Title = HeaderTitle
Header.ToggleDarkMode = HeaderToggleDarkMode
Header.Form = HeaderForm
Header.Input = HeaderInput
Header.Button = HeaderButton
