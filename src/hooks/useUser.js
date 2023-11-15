import { useContext } from 'react';

import UserContext from '@/contexts/UserContext';

// =============================
export function useUser() {
  const { user, setUser } = useContext(UserContext);
  return { user, setUser };
}
