export default function Loading() {
  return (
    <>
      <div className='w-20 h-20 rounded-full bg-slate-500 animate-pulse duration-100'></div>
      <div>
        <div className='h-8 rounded-lg bg-slate-500 animate-pulse'></div>
        <div className='my-6 rounded-lg h-28 bg-slate-500 animate-pulse'></div>
      </div>
    </>
  );
}
