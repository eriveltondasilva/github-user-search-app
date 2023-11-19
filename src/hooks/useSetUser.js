'use client';
import { useUserContext } from '@/contexts/UserContext';
import { useEffect } from 'react';

// =============================
export default function useSetUser(user) {
  const { setUser, setIsLoading, setError } = useUserContext();

  async function fetchData() {
    const url = `https://api.github.com/users/${user}`;

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(url);
      const data = await response.json();

      setUser(data);

      // não captura erro na api do github,
      if (data.message) {
        setError(data.message);
      }
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return { refetchData: fetchData };
}
