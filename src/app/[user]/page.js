import Header from '@/components/Header';
import MainCard from '@/components/MainCard';

export default function UserPage({ params }) {
  return (
    <>
      <Header userLogin={params.user} />
      <MainCard />
    </>
  );
}
