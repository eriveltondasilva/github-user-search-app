'use client';
import { useState } from 'react';

export default function HeaderInput() {
  const [search, setSearch] = useState('eriveltondasilva');

  function handleSearch(e) {
    setSearch(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return <></>;
}


'use client';
import { Search } from 'lucide-react';
import PrimaryButton from '../PrimaryButton';

// -----------------------------
function HeaderForm({ onSubmit, children }) {
  return (
    <form onSubmit={onSubmit} role='search'>
      <div className='flex justify-between py-2 my-4 rounded-xl bg-slate-800'>
        {children}
      </div>
    </form>
  );
}

// -----------------------------
function HeaderInput({ value, onChange }) {
  return (
    <div className='flex items-center w-full'>
      <label htmlFor='headerInput' className='mx-4 text-blue-500'>
        <Search size={28} />
      </label>
      <input
        className='w-full bg-transparent focus:outline-none placeholder:tracking-tight'
        id='headerInput'
        type='text'
        // value={value}
        // onChange={onChange}
        placeholder='Search GitHub username...'
        autoFocus
      />
    </div>
  );
}

// -----------------------------
function HeaderPrimaryButton({ name }) {
  return (
    <div className='mx-2'>
      <PrimaryButton>{name}</PrimaryButton>
    </div>
  );
}

