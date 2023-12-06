import UserCard from '@/components/Card/UserCard'
import UserCards from '@/components/Card/UserCards'
import Divider from '@/components/Divider'
import ReposHeader from '@/components/Header/ReposHeader'
import LinkNext from '@/components/LinkNext'

// ==============================
export default function FollowingPage({ params }) {
  // url busca os dados do user apresente nos params
  const url = `https://api.github.com/users/${params.user}/following?sort=id&per_page=50`

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

      <Divider text='Following' />

      <UserCards url={url} />
    </main>
  )
}
