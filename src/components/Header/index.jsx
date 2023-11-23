'use client';

import { useState } from 'react';
import Header from './Header';

// ==============================
export default function HeaderIndex({ userLogin }) {
  const [hasDarkMode, setHasDarkMode] = useState(true);

  const TITLE = 'devFinder';

  // ------------------------------
  function handleToggleDarkMode() {
    setHasDarkMode(!hasDarkMode);
    document.documentElement.classList.toggle('dark');
  }

  // ------------------------------
  return (
    <Header>
      <Header.Wrapper>
        <Header.Title title={TITLE} />

        <Header.ToggleDarkMode
          onClick={handleToggleDarkMode}
          hasDarkMode={hasDarkMode}
        />
      </Header.Wrapper>
      <Header.Form userLogin={userLogin} />
    </Header>
  );
}
