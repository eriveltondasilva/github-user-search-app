import { Suspense } from 'react';

import CardSkeleton from '@/components/Loading/CardSkeleton';
import MainCard from './MainCard';
import Header from './MainHeader';

// ==============================
export default function HomePage() {
  // url buscar o user logado no app
  const URL = 'https://api.github.com/user';

  return (
    <main className='w-[24rem] sm:w-[36rem] mx-2 px-2 sm:px-4 my-8 sm:my-16'>
      <Header />

      <Suspense fallback={<CardSkeleton />}>
        <MainCard url={URL} />
      </Suspense>
    </main>
  );
}
