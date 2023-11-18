import Header from '@/components/Header';
import MainCard from '@/components/MainCard';

export default async function Home() {
  return (
    <div className='w-[24rem] sm:w-[36rem] mx-2 px-4 mt-8 sm:mt-16'>
      <Header />
      <MainCard />
    </div>
  );
}
