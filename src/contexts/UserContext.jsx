'use client';
import { createContext, useState } from 'react';

const UserContext = createContext();

// =============================
export default function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
