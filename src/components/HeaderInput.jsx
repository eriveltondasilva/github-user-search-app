import { Search } from 'lucide-react';
import SearchButton from './SearchButton';

export default function HeaderInput() {
  return (
    <div className='flex justify-between py-2 my-4 rounded-xl bg-slate-800'>
      <div className='flex items-center w-full'>
        <label
          htmlFor='headerInput'
          className='mx-4 text-blue-500'>
          <Search size={28} />
        </label>
        <input
          className='w-full bg-transparent focus:outline-none placeholder:tracking-tight'
          id='headerInput'
          name='headerInput'
          type='text'
          placeholder='Search GitHub username...'
          autoFocus
        />
      </div>
      <div className='mx-2'>
        <SearchButton />
      </div>
    </div>
  );
}
