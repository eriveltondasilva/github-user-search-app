export default function CardRoot({ children }) {
  return (
    <main className='grid grid-cols-[auto_1fr] gap-5 p-6 bg-slate-800 rounded-xl'>
      {children}
    </main>
  );
}
