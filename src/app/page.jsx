import Header from '@/components/Header';
import MainCard from '@/components/MainCard';

export default async function Home() {
  return (
    <div className='w-[36rem]'>
      <Header />
      <MainCard />
    </div>
  );
}
