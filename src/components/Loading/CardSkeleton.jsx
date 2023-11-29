import { twJoin } from 'tailwind-merge';

// ==============================
export default function CardSkeleton() {
  return (
    <main
      className={twJoin(
        'grid grid-cols-[auto_1fr] gap-5 p-6 drop-shadow-md rounded-xl',
        'bg-white dark:bg-slate-800'
      )}>
      <div className='w-20 h-20 rounded-full bg-slate-600/50 dark:bg-slate-400/50 animate-pulse'></div>
      <div className='animate-pulse'>
        <div className='h-8 mb-6 rounded-lg bg-slate-600/50 dark:bg-slate-400/50'></div>
        <div className='rounded-lg sm:h-40 h-80 bg-slate-600/50 dark:bg-slate-400/50'></div>
      </div>
    </main>
  );
}
