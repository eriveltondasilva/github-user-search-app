'use client';
import { Search } from 'lucide-react';
import { useState } from 'react';

import { useUserContext } from '@/contexts/UserContext';
import useSetUser from '@/hooks/useSetUser';
import PrimaryButton from '../PrimaryButton';

// =============================
export default function HeaderForm() {
  const [search, setSearch] = useState('eriveltondasilva');
  const { user, isLoading } = useUserContext();

  const { fetchData } = useSetUser(search);

  function handleSearch(e) {
    e.preventDefault();
    fetchData();
  }

  return (
    <form onSubmit={handleSearch} role='search'>
      <div className='flex justify-between py-2 my-4 bg-white drop-shadow-md rounded-xl dark:bg-slate-800'>
        <HeaderInput search={search} setSearch={setSearch} />
        <HeaderButton search={search} isLoading={isLoading} user={user} />
      </div>
    </form>
  );
}

// -----------------------------
function HeaderInput({ search, setSearch }) {
  function handleSearch(e) {
    setSearch(e.target.value.trim());
  }

  return (
    <div className='flex items-center w-full'>
      <label htmlFor='headerInput' className='mx-2 text-blue-500 sm:mx-5'>
        <Search />
      </label>
      <input
        className='w-full text-sm bg-transparent sm:text-base text-slate-600 dark:text-white focus:outline-none placeholder:tracking-tight'
        id='headerInput'
        type='text'
        value={search}
        onChange={handleSearch}
        placeholder='Search GitHub username...'
        autoFocus
      />
    </div>
  );
}

// -----------------------------
function HeaderButton({ search, user, isLoading }) {
  return (
    <div className='mx-2'>
      <PrimaryButton
        disabled={isLoading || search === user.login || !search}
        type='submit'>
        Search
      </PrimaryButton>
    </div>
  );
}
