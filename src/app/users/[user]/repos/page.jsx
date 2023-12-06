import ReposCards from '@/components/Card/ReposCards'
import UserCard from '@/components/Card/UserCard'
import Divider from '@/components/Divider'
import ReposHeader from '@/components/Header/ReposHeader'
import LinkNext from '@/components/LinkNext'
import getFetch from '@/utils/getFetch'

// ==============================
export default async function ReposPage({ params }) {
  // url busca os dados do user apresente nos params
  const URL = `https://api.github.com/users/${params.user}/repos?sort=created&per_page=50`
  const { data } = await getFetch(URL)

  const lengthRepos = data.length
  const dividerText = `${lengthRepos > 0 ? lengthRepos : ''} ${
    lengthRepos > 1 ? 'repositories' : 'repository'
  }`

  return (
    <main className='mx-2 my-8 w-[24rem] px-2 sm:my-16 sm:w-[36rem] sm:px-4'>
      <ReposHeader />

      <div className='my-6'>
        <LinkNext
          text='voltar'
          href={`/users/${params.user}`}
        />
      </div>

      <UserCard user={params.user} />

      <Divider text={dividerText.trim()} />

      <ReposCards items={data} />
    </main>
  )
}
