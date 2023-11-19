'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { useUserContext } from '@/contexts/UserContext';
import useSetUser from '@/hooks/useSetUser';
import HeaderForm from './HeaderForm';

// =============================
export default function HeaderFormIndex({ userLogin }) {
  const router = useRouter();
  const [search, setSearch] = useState(userLogin);
  const { refetchData } = useSetUser(search);
  const { user, isLoading } = useUserContext();

  const isDisabled = isLoading || search === user.login || !search;

  // ------------------------------
  function handleSubmit(e) {
    e.preventDefault();
    router.push(`/user/${search}`);
    refetchData();
  }
  function handleSearch(e) {
    setSearch(e.target.value.trim().toLowerCase());
  }

  return (
    <HeaderForm onSubmit={handleSubmit}>
      <HeaderForm.Input search={search} onChange={handleSearch} />
      <HeaderForm.Button isDisabled={isDisabled} />
    </HeaderForm>
  );
}
