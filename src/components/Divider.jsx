import { twJoin } from 'tailwind-merge'

export default function Divider({ children }) {
  return (
    <div
      className={twJoin(
        'flex items-center before:flex-[1_1_0%] after:flex-[1_1_0%]',
        'pt-8 before:me-6 after:ms-6',
        'text-lg font-semibold uppercase tracking-wider',
        'before:border-t-2 after:border-t-2',
        'text-gray-800 before:border-gray-300 after:border-gray-300',
        'dark:text-white dark:before:border-gray-600 dark:after:border-gray-600'
      )}>
      {children}
    </div>
  )
}
