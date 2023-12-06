import ReposCards from '@/components/Card/ReposCards'
import UserCard from '@/components/Card/UserCard'
import Divider from '@/components/Divider'
import ReposHeader from '@/components/Header/ReposHeader'
import LinkNext from '@/components/LinkNext'
import getFetch from '@/utils/getFetch'

export const metadata = {
  title: `Repositories | ${process.env.APP_TITLE}`,
}

// ==============================
export default async function ReposPage({ params }) {
  const user = params.user

  const userUrl = `https://api.github.com/users/${user}`
  const reposUrl = `https://api.github.com/users/${user}/repos?sort=created&per_page=50`

  const { data: userData } = await getFetch(userUrl)
  const { data: reposData } = await getFetch(reposUrl)

  const lengthRepos = reposData?.length
  const dividerText = `${lengthRepos ? lengthRepos : ''} ${
    lengthRepos > 1 ? 'repositories' : 'repository'
  }`

  return (
    <main className='mx-2 my-8 w-[24rem] px-2 sm:my-16 sm:w-[36rem] sm:px-4'>
      <ReposHeader />

      <div className='my-6'>
        <LinkNext
          text='voltar'
          href={`/users/${user}`}
        />
      </div>

      <UserCard user={userData} />

      <Divider text={dividerText.trim()} />

      <ReposCards items={reposData} />
    </main>
  )
}
