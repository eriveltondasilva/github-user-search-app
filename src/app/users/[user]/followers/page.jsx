import UserCard from '@/components/Card/UserCard';
import UserCards from '@/components/Card/UserCards';
import Divider from '@/components/Divider';
import ReposHeader from '@/components/Header/ReposHeader';
import LinkNext from '@/components/LinkNext';

// ==============================
export default async function FollowersPage({ params }) {
  // url busca os dados do user apresente nos params
  const URL = `https://api.github.com/users/${params.user}/followers?sort=login&per_page=50`;

  return (
    <main className='w-[24rem] sm:w-[36rem] mx-2 px-2 sm:px-4 my-8 sm:my-16'>
      <ReposHeader />

      <div className='my-6'>
        <LinkNext
          text='voltar'
          href={`/users/${params.user}`}
        />
      </div>

      <UserCard user={params.user} />

      <Divider text='followers' />

      <UserCards url={URL} />
    </main>
  );
}
