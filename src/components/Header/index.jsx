'use client';
import { useState } from 'react';
import Header from './Header';

export default function HeaderIndex({ userLogin }) {
  const [darkMode, setDarkMode] = useState(true);

  const title = 'devFinder';

  // ------------------------------
  function handleToggleDarkMode() {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  }

  return (
    <Header>
      <Header.Wrapper>
        <Header.Title title={title} />

        <Header.ToggleDarkMode
          onClick={handleToggleDarkMode}
          darkMode={darkMode}
        />
      </Header.Wrapper>
      <Header.Form userLogin={userLogin} />
    </Header>
  );
}
