import Divider from '@/components/Divider';
import LinkNext from '@/components/LinkNext';
import getFetch from '@/utils/getFetch';
import ReposCards from './ReposCards';
import ReposHeader from './ReposHeader';
import UserCard from './UserCard';

// ==============================
export default async function FollowingPage({ params }) {
  // url busca os dados do user apresente nos params
  const URL = `https://api.github.com/users/${params.user}/following`;
  const DATA_REPOS = await getFetch(URL);

  const lengthRepos = DATA_REPOS.length;
  const dividerText = `${lengthRepos > 0 ? lengthRepos : ''} ${
    lengthRepos > 1 ? 'repositories' : 'repository'
  }`;

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

      <Divider text={dividerText.trim()} />

      <ReposCards dataRepos={DATA_REPOS} />
    </main>
  );
}
