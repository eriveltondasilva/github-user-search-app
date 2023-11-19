import Header from '@/components/Header';
import MainCard from '@/components/MainCard';

export default function HomePage() {
  const userLogin = 'eriveltondasilva';

  return (
    <>
      <Header userLogin={userLogin} />
      <MainCard />
    </>
  );
}
