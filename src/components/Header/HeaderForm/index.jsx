import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { useUserContext } from '@/contexts/UserContext';
import useSetUser from '@/hooks/useSetUser';
import HeaderForm from './HeaderForm';

// =============================
export default function HeaderFormIndex({ userLogin }) {
  const router = useRouter();
  const [userSearch, setUserSearch] = useState(userLogin);
  const { refetchData } = useSetUser(userSearch);
  const { user, isLoading } = useUserContext();

  const isDisabled = isLoading || userSearch === user.login || !userSearch;

  // ------------------------------
  function handleSubmit(e) {
    e.preventDefault();
    router.push(`/user/${userSearch}`);
    refetchData();
  }

  function handleSearch(e) {
    setUserSearch(e.target.value.trim().toLowerCase());
  }

  return (
    <HeaderForm onSubmit={handleSubmit}>
      <HeaderForm.Input
        userSearch={userSearch}
        onChange={handleSearch}
      />
      <HeaderForm.Button isDisabled={isDisabled} />
    </HeaderForm>
  );
}
