import { twJoin } from 'tailwind-merge'

// ==============================
export default function CardSkeleton() {
  return (
    <main
      className={twJoin(
        'grid grid-cols-[auto_1fr] gap-5',
        'rounded-xl p-6 drop-shadow-md',
        'bg-white dark:bg-slate-800'
      )}>
      <div
        className={twJoin(
          'h-20 w-20 animate-pulse rounded-full',
          'bg-slate-600/50 dark:bg-slate-400/50'
        )}></div>
      <div className='animate-pulse'>
        <div
          className={twJoin(
            'mb-6 h-8 rounded-lg',
            'bg-slate-600/50 dark:bg-slate-400/50'
          )}></div>
        <div
          className={twJoin(
            'h-80 rounded-lg',
            'bg-slate-600/50 dark:bg-slate-400/50 sm:h-40'
          )}></div>
      </div>
    </main>
  )
}
