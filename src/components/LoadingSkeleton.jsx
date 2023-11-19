export default function Loading() {
  return (
    <>
      <div className='w-20 h-20 duration-100 rounded-full bg-slate-600 dark:bg-slate-400 animate-pulse'></div>
      <div>
        <div className='h-8 rounded-lg bg-slate-600 dark:bg-slate-400 animate-pulse'></div>
        <div className='my-6 rounded-lg sm:h-40 h-80 bg-slate-600 dark:bg-slate-400 animate-pulse'></div>
      </div>
    </>
  );
}
