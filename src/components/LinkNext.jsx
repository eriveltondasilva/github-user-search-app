// typescript-ignore
import Link from 'next/link'
import { twJoin } from 'tailwind-merge'

export default function LinkNext({ text = '', href = '' }) {
  return (
    <Link
      className={twJoin(
        'sm:text-md text-sm font-semibold uppercase tracking-wide',
        'px-3 py-2 sm:px-5',
        'rounded-md transition duration-100 ease-in',
        'active:outline-3 active:outline active:outline-offset-2',
        'bg-blue-600 text-white hover:bg-blue-700',
        'dark:bg-blue-500 dark:hover:bg-blue-600'
      )}
      href={href}>
      {text}
    </Link>
  )
}
