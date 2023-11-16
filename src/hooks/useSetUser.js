'use client';
import { useUserContext } from '@/contexts/UserContext';
import { useEffect } from 'react';

// =============================
export default function useSetUser(userSearched) {
  const { setUser, setIsLoading, setError } = useUserContext();

  async function fetchData() {
    try {
      setIsLoading(true);
      // const url = `https://api.github.com/users/${userSearched}`;
      const data = await fetch(url).then((response) => response.json());
      setUser(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return { fetchData, user };
}
