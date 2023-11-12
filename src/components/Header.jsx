import DarkModeButton from '@/components/DarkModeButton';
import HeaderInput from './HeaderInput';

export default function Header() {
  return (
    <header>
      <div className='flex justify-between'>
        <h1 className='text-2xl font-bold'>devFinder</h1>
        <div>
          <DarkModeButton />
        </div>
      </div>
      <HeaderInput />
    </header>
  );
}
