import PrimaryButton from '@/components/PrimaryButton';
import { Search } from 'lucide-react';

// =============================
export default function HeaderForm({ onSubmit, children }) {
  return (
    <form onSubmit={onSubmit} role='search'>
      <div className='flex justify-between py-2 my-4 bg-white drop-shadow-md rounded-xl dark:bg-slate-800'>
        {children}
      </div>
    </form>
  );
}

// -----------------------------
function HeaderFormInput({ hasSearch, onChange }) {
  return (
    <div className='flex items-center w-full'>
      <label htmlFor='headerInput' className='mx-2 text-blue-500 sm:mx-5'>
        <Search />
      </label>
      <input
        className='w-full text-sm bg-transparent sm:text-base text-slate-600 dark:text-white focus:outline-none placeholder:tracking-tight'
        id='headerInput'
        type='text'
        value={hasSearch}
        onChange={onChange}
        placeholder='Search GitHub username...'
        autoFocus
      />
    </div>
  );
}

// -----------------------------
function HeaderFormButton({ isDisabled }) {
  return (
    <div className='mx-2'>
      <PrimaryButton disabled={isDisabled} type='submit'>
        Search
      </PrimaryButton>
    </div>
  );
}

// ==============================
HeaderForm.Input = HeaderFormInput;
HeaderForm.Button = HeaderFormButton;
