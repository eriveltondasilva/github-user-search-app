/* eslint-disable react/display-name */
import { Moon, Search, Sun } from 'lucide-react'
import Link from 'next/link'
import { twJoin } from 'tailwind-merge'

import Button from '@/components/Button'

// =============================
export default function Header({ children }) {
  return <header>{children}</header>
}

// -----------------------------
Header.Wrapper = function ({ children }) {
  return (
    <div className='mb-8 flex items-baseline justify-between'>{children}</div>
  )
}

// -----------------------------
Header.Title = function ({ children }) {
  return (
    <h1 className='text-2xl font-bold'>
      <Link href='/'>{children ?? 'devFinder'}</Link>
    </h1>
  )
}

// -----------------------------
Header.ToggleDarkMode = function ({ hasDarkMode, onClick }) {
  const SUN_ICON = <Sun className='fill-current' />
  const MOON_ICON = <Moon className='fill-current stroke-0' />

  const MODE_TEXT = hasDarkMode ? 'LIGHT' : 'DARK'
  const MODE_ICON = hasDarkMode ? SUN_ICON : MOON_ICON

  return (
    <button
      className={twJoin(
        'flex items-center gap-2',
        'text-sm font-semibold tracking-wide',
        'text-slate-500 dark:text-white'
      )}
      type='button'
      onClick={onClick}>
      <span>{MODE_TEXT}</span>
      {MODE_ICON}
    </button>
  )
}

// -----------------------------
Header.Form = function ({ onSubmit, children }) {
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
Header.Input = function ({ search, setSearch }) {
  function handleChange(e) {
    const regex = /[^a-z0-9_-]/g
    setSearch(e.target.value.trim().toLowerCase().replace(regex, ''))
  }

  const styledInput = twJoin(
    'w-full focus:outline-none',
    'text-sm placeholder:tracking-tight sm:text-base',
    'bg-transparent text-slate-600 dark:text-white'
  )

  return (
    <div className='flex w-full items-center'>
      <label
        htmlFor='headerInput'
        className='mx-2 text-blue-500 sm:mx-5'>
        <Search />
      </label>
      <input
        className={styledInput}
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
Header.Button = function ({ type, isDisabled, children }) {
  return (
    <div className='mx-2'>
      <Button
        disabled={isDisabled}
        type={type ?? 'button'}>
        {children}
      </Button>
    </div>
  )
}
