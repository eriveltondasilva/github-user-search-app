'use client';
import { Search } from 'lucide-react';
import { useEffect, useState } from 'react';

import { useUser } from '@/contexts/UserContext';
import getData from '@/utils/getData';

export default function HeaderInput() {
  const [search, setSearch] = useState('eriveltondasilva');
  const { user, userData } = useUser();

  async function getUser() {
    const data = await getData(search);
    userData(data);
  }

  function handleSearch(e) {
    setSearch(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    try {
      getUser();
    } catch (error) {
      console.error('Erro ao obter dados do usuário:', error);
    }
  }

  useEffect(() => {
    getUser();
  }, []);

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
          <button
            type='submit'
            className='px-5 py-2 font-semibold tracking-wide bg-blue-500 rounded-md hover:bg-blue-600'>
            Search
          </button>
        </div>
      </div>
    </form>
  );
}
