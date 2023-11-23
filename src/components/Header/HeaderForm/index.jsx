import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { useUserContext } from '@/contexts/UserContext';
import useSetUser from '@/hooks/useSetUser';
import HeaderForm from './HeaderForm';

// =============================
export default function HeaderFormIndex({ userLogin }) {
  const router = useRouter();
  const [hasSearch, setHasSearch] = useState(userLogin);
  const { refetchData } = useSetUser(hasSearch);
  const { user, isLoading } = useUserContext();

  const isDisabled = isLoading || hasSearch === user.login || !hasSearch;

  // ------------------------------
  function handleSubmit(e) {
    e.preventDefault();
    router.push(`/user/${hasSearch}`);
    refetchData();
  }

  function handleSearch(e) {
    setHasSearch(e.target.value.trim().toLowerCase());
  }

  return (
    <HeaderForm onSubmit={handleSubmit}>
      <HeaderForm.Input hasSearch={hasSearch} onChange={handleSearch} />
      <HeaderForm.Button isDisabled={isDisabled} />
    </HeaderForm>
  );
}
