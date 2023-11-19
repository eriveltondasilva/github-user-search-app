import { twJoin } from 'tailwind-merge';

export default function Loading() {
  const LSImage = twJoin(
    'w-20 h-20 rounded-full bg-slate-600/50 dark:bg-slate-400/50 animate-pulse'
  );

  const LSTitle = twJoin(
    'h-8 mb-6 rounded-lg bg-slate-600/50 dark:bg-slate-400/50'
  );

  const LSText = twJoin(
    'rounded-lg sm:h-40 h-80 bg-slate-600/50 dark:bg-slate-400/50'
  );

  return (
    <>
      {/* image loading skeleton */}
      <div className={LSImage}></div>
      <div className='animate-pulse'>
        <div className={LSTitle}></div>
        <div className={LSText}></div>
      </div>
    </>
  );
}
