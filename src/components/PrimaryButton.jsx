'use client';
import { twJoin } from 'tailwind-merge';

export default function PrimaryButton({ disabled, children, ...props }) {
  const styledButton = twJoin(
    'px-3 py-2 sm:px-5 text-sm sm:text-lg font-semibold tracking-wide transition duration-200 ease-in rounded-md ',
    'bg-blue-500',
    !disabled &&
      'hover:bg-blue-600 active:outline active:outline-2 active:outline-offset-2',
    disabled && 'cursor-not-allowed opacity-75'
  );

  return (
    <button disabled={disabled} className={styledButton} {...props}>
      {children}
    </button>
  );
}
