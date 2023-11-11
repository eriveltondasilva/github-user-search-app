import { Search } from 'lucide-react';
import SearchButton from './SearchButton';

export default function HeaderInput() {
  return (
    <div className='flex justify-between my-4 bg-slate-800 rounded-lg p-2'>
      <div className='flex w-full items-center'>
        <Search size={28} className='mx-4 text-blue-500' />
        <input
          className='bg-transparent w-full'
          name='headerInput'
          placeholder='Search GitHub username...'
        />
      </div>
      <SearchButton />
    </div>
  );
}
