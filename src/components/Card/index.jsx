/* eslint-disable react/display-name */
import Image from 'next/image'
import Link from 'next/link'
import { twJoin, twMerge } from 'tailwind-merge'

import CardInfo from './CardInfo'
import CardList from './CardList'
import CardNotFound from './CardNotFound'

// =============================
export default function Card({ href, type, children }) {
  const styledCard = twJoin(
    'grid gap-5 p-6 sm:grid-cols-[auto_1fr]',
    'rounded-xl drop-shadow-md',
    type === 'danger'
      ? 'bg-red-600 dark:bg-red-500'
      : 'bg-white dark:bg-slate-800'
  )

  if (href) {
    return (
      <article className={styledCard}>
        <Link
          href={href}
          target='_blank'
          rel='noopener'>
          {children}
        </Link>
      </article>
    )
  }

  return <article className={styledCard}>{children}</article>
}

// -----------------------------
Card.Image = function ({ src, alt, size = 80 }) {
  if (!src) return null

  return (
    <section className='h-20 w-20'>
      <Image
        className='rounded-full shadow-lg'
        src={src}
        alt={alt}
        width={size}
        height={size}
      />
    </section>
  )
}

// -----------------------------
Card.Content = function ({ children }) {
  return <section>{children}</section>
}

// -----------------------------
Card.Header = function ({ children }) {
  return (
    <header className='flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between'>
      {children}
    </header>
  )
}

// -----------------------------
Card.HeaderWrapper = function ({ className, children }) {
  return (
    <div className={twMerge('w-80 truncate sm:w-64', className)}>
      {children}
    </div>
  )
}

// -----------------------------
Card.Title = function ({ index, children }) {
  return (
    <h2 className='truncate text-lg font-semibold sm:text-xl'>
      <span className={twJoin(!index && 'hidden')}>{index}. </span>
      {children ?? 'Unnamed User'}
    </h2>
  )
}

// -----------------------------
Card.Created = function ({ children }) {
  return (
    <div className='flex-none text-sm font-medium text-slate-400'>
      {children}
    </div>
  )
}

// -----------------------------
Card.Link = function ({ href, children }) {
  return (
    <h3>
      <Link
        href={href}
        className='truncate font-medium text-blue-500 dark:text-blue-700'
        target='_blank'
        rel='noopener'>
        @{children}
      </Link>
    </h3>
  )
}

// -----------------------------
Card.Bio = function ({ children }) {
  return (
    <p className='mt-5 text-sm font-medium text-slate-500 dark:text-slate-300'>
      {children ?? 'This profile has no bio'}
    </p>
  )
}

// -----------------------------
Card.Description = function ({ children }) {
  return (
    <p className='mt-5 text-sm font-medium text-slate-500 dark:text-slate-300'>
      {children ?? 'This repository has no description'}
    </p>
  )
}

// -----------------------------
Card.Topics = function ({ children }) {
  return (
    <p className='mt-5 text-sm font-medium italic text-slate-500 dark:text-slate-300'>
      {children}
    </p>
  )
}

// =============================
Card.Info = CardInfo
Card.List = CardList
Card.NotFound = CardNotFound
