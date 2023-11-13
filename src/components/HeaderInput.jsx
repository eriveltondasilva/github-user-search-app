'use client';
import { useState } from 'react';

import getData from '@/utils/getData';
import { Search } from 'lucide-react';

export default function HeaderInput() {
  const [search, setSearch] = useState('eriveltondasilva');
  const [user, setUser] = useState('');

  function handleSearch(e) {
    setSearch(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const userData = await getData(search);
      setUser(userData);
    } catch (error) {
      console.error('Erro ao obter dados do usuário:', error);
    }
  }

  console.log(user);
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
      <div>{user.name}</div>
      <div>{user.login}</div>
    </form>
  );
}
