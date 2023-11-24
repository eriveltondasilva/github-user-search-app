import MainCard from '@/components/Card';
import Header from '@/components/Header';

export default function UserPage({ params }) {
  const USER = params.user;

  return (
    <div className='w-[24rem] sm:w-[36rem] mx-2 px-2 sm:px-4 my-8 sm:my-16'>
      <Header userLogin={USER} />
      <MainCard />
    </div>
  );
}
