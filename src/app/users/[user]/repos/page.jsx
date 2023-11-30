import ReposCards from './ReposCards';
import ReposHeader from './ReposHeader';

// ==============================
export default function ReposPage({ params }) {
  // url busca os dados do user apresente nos params
  const URL = `https://api.github.com/users/${params.user}/repos`;

  return (
    <main className='w-[24rem] sm:w-[36rem] mx-2 px-2 sm:px-4 my-8 sm:my-16'>
      <ReposHeader />

      <ReposCards url={URL} />
    </main>
  );
}
