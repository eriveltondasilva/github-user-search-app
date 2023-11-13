import DarkModeButton from '@/components/DarkModeButton';

export default function Header({ children }) {
  return (
    <header>
      <div className='flex justify-between'>
        <h1 className='text-2xl font-bold'>devFinder</h1>
        <div>
          <DarkModeButton />
        </div>
      </div>
      {children}
    </header>
  );
}
