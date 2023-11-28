import { Suspense } from 'react';

import MainCard from '@/app/MainCard';
import Loading from '@/components/CardLoadingSkeleton';
import Header from '@/components/Header';

// ==============================
export default async function UserPage({ params }) {
  const USER_NAME = params.user;

  return (
    <div className='w-[24rem] sm:w-[36rem] mx-2 px-2 sm:px-4 my-8 sm:my-16'>
      <Header />

      <Suspense fallback={<Loading />}>
        <MainCard userName={USER_NAME} />
      </Suspense>
    </div>
  );
}
