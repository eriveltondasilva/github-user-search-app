'use client';
import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

// =============================
export default function UserProvider({ children }) {
  const [user, setUser] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  return (
    <UserContext.Provider
      value={{ user, setUser, isLoading, setIsLoading, error, setError }}>
      {children}
    </UserContext.Provider>
  );
}

// -----------------------------
export function useUserContext() {
  const context = useContext(UserContext);
  return context;
}
