// typescript-ignore
import Link from 'next/link';
import { twJoin } from 'tailwind-merge';

export default function LinkNext({ text = '', href = '' }) {
  return (
    <Link
      className={twJoin(
        'text-sm sm:text-md font-semibold tracking-wide uppercase',
        'px-3 py-2 sm:px-5',
        'transition duration-100 ease-in rounded-md',
        'active:outline active:outline-3 active:outline-offset-2',
        'text-white bg-blue-600 hover:bg-blue-700',
        'dark:bg-blue-500 dark:hover:bg-blue-600'
      )}
      href={href}>
      {text}
    </Link>
  );
}
