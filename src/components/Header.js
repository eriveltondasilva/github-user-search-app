import DarkModeButton from '@/components/DarkModeButton';
import HeaderInput from './HeaderInput';

export default function Header() {
  return (
    <header>
      <div className='flex justify-between'>
        <div className='text-2xl font-bold'>devFinder</div>
        <div>
          <DarkModeButton />
        </div>
      </div>
      <HeaderInput />
    </header>
  );
}
