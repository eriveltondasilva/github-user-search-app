'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Header from './Header';

// ==============================
export default function HeaderIndex() {
  const [hasDarkMode, setHasDarkMode] = useState(true);
  const [search, setSearch] = useState('');

  const router = useRouter();

  const isDisabled = !search;
  // ------------------------------
  function handleToggleDarkMode() {
    setHasDarkMode(!hasDarkMode);
    document.documentElement.classList.toggle('dark');
  }

  function handleSubmit(e) {
    e.preventDefault();
    router.push(`/user/${search}`);
  }

  return (
    <Header>
      <Header.Wrapper>
        <Header.Title />

        <Header.ToggleDarkMode
          onClick={handleToggleDarkMode}
          hasDarkMode={hasDarkMode}
        />
      </Header.Wrapper>
      <Header.Form onSubmit={handleSubmit}>
        <Header.Input
          search={search}
          setSearch={setSearch}
        />
        <Header.Button
          isDisabled={isDisabled}
          text='search'
          type='submit'
        />
      </Header.Form>
    </Header>
  );
}
