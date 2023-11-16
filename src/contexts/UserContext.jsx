'use client';
import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

// =============================
export default function UserProvider({ children }) {
  const [user, setUser] = useState('');
  const [loading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  return (
    <UserContext.Provider
      value={{ user, setUser, loading, setIsLoading, error, setError }}>
      {children}
    </UserContext.Provider>
  );
}

// -----------------------------
export function useUserContext() {
  const context = useContext(UserContext);
  return context;
}
