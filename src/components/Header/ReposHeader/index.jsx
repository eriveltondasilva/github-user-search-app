'use client'
import { useState } from 'react'
import Header from '../index'

// ==============================
export default function HeaderIndex() {
  const [hasDarkMode, setHasDarkMode] = useState(true)

  // ------------------------------
  function handleToggleDarkMode() {
    setHasDarkMode(!hasDarkMode)
    document.documentElement.classList.toggle('dark')
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
    </Header>
  )
}
