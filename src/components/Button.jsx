'use client';
import { twJoin } from 'tailwind-merge';

// ==============================
export default function PrimaryButton({
  disabled = false,
  text = '',
  ...props
}) {
  const styledButton = twJoin(
    'text-sm sm:text-md font-semibold tracking-wide',
    'px-3 py-2 sm:px-5',
    'transition duration-100 ease-in rounded-md',
    'text-white bg-blue-600 dark:bg-blue-500',
    disabled
      ? 'cursor-not-allowed opacity-75'
      : 'hover:bg-blue-700 dark:hover:bg-blue-600 active:outline active:outline-3 active:outline-offset-2'
  );

  return (
    <button
      disabled={disabled}
      className={styledButton}
      {...props}>
      {text}
    </button>
  );
}
