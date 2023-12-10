'use client'
import { twJoin } from 'tailwind-merge'

// ==============================
function PrimaryButton({ disabled = false, full = false, children, ...props }) {
  const styledButton = twJoin(
    'sm:text-md text-sm font-semibold tracking-wide',
    'px-3 py-2 sm:px-5',
    'rounded-md transition duration-100 ease-in',
    'bg-blue-600 text-white dark:bg-blue-500',
    full && 'w-full',
    disabled
      ? 'cursor-not-allowed opacity-75'
      : 'active:outline-3 hover:bg-blue-700 active:outline active:outline-offset-2 dark:hover:bg-blue-600'
  )

  return (
    <button
      disabled={disabled}
      className={styledButton}
      {...props}>
      {children}
    </button>
  )
}

// ==============================
const Button = PrimaryButton
export default Button
