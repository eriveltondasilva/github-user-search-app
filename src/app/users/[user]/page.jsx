import MainCard from '@/components/Card/MainCard';
import Header from '@/components/Header/MainHeader';

// ==============================
export default async function UserPage({ params }) {
  // url busca os dados do user apresente nos params
  const URL = `https://api.github.com/users/${params.user}`;

  return (
    <main className='w-[24rem] sm:w-[36rem] mx-2 px-2 sm:px-4 my-8 sm:my-16'>
      <Header />

      <MainCard url={URL} />
    </main>
  );
}
