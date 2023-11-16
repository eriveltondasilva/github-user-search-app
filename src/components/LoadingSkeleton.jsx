export default function Loading() {
  return (
    <main className='p-6 rounded-xl bg-slate-800'>
      <div className='grid grid-cols-[auto_1fr] gap-5 animate-pulse'>
        {/* imagem */}
        <div className='w-20 h-20 rounded-full bg-slate-500'></div>
        <div >
          <div className='h-8 rounded-lg bg-slate-500'></div>
          <div className='h-20 my-6 rounded-lg  bg-slate-500'></div>
        </div>
      </div>
    </main>
  );
}
