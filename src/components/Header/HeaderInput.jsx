'use client';
import { Search } from 'lucide-react';
import { useState } from 'react';

export default function HeaderInput() {
  const [search, setSearch] = useState('eriveltondasilva');

  function handleSearch(e) {
    setSearch(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit} role='search'>
      <div className='flex justify-between py-2 my-4 rounded-xl bg-slate-800'>
        <div className='flex items-center w-full'>
          <label htmlFor='headerInput' className='mx-4 text-blue-500'>
            <Search size={28} />
          </label>
          <input
            className='w-full bg-transparent focus:outline-none placeholder:tracking-tight'
            id='headerInput'
            type='text'
            value={search}
            onChange={handleSearch}
            placeholder='Search GitHub username...'
            autoFocus
          />
        </div>
        <div className='mx-2'>
          
        </div>
      </div>
    </form>
  );
}
