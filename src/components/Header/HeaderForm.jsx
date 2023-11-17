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
      <div className='flex justify-between py-2 my-4 rounded-xl bg-slate-800'>
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
