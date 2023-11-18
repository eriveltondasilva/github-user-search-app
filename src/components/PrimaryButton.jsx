'use client';
import { twJoin } from 'tailwind-merge';

export default function PrimaryButton({ disabled, children, ...props }) {
  const styledButton = twJoin(
    'px-3 py-2 sm:px-5 text-sm sm:text-md font-semibold tracking-wide transition duration-100 ease-in rounded-md',
    'text-white bg-blue-600 dark:bg-blue-500',
    !disabled &&
      'hover:bg-blue-700 dark:hover:bg-blue-600 active:outline active:outline-3 active:outline-offset-2',
    disabled && 'cursor-not-allowed opacity-75'
  );

  return (
    <button disabled={disabled} className={styledButton} {...props}>
      {children}
    </button>
  );
}
