import ReposCards from '@/components/Card/ReposCards';
import UserCard from '@/components/Card/UserCard';
import Divider from '@/components/Divider';
import ReposHeader from '@/components/Header/ReposHeader';
import LinkNext from '@/components/LinkNext';
import getFetch from '@/utils/getFetch';

// ==============================
export default async function ReposPage({ params }) {
  // url busca os dados do user apresente nos params
  const URL = `https://api.github.com/users/${params.user}/repos?sort=created&per_page=50`;
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
