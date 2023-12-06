import UserCard from '@/components/Card/UserCard'
import UserCards from '@/components/Card/UserCards'
import Divider from '@/components/Divider'
import ReposHeader from '@/components/Header/ReposHeader'
import LinkNext from '@/components/LinkNext'
import getFetch from '@/utils/getFetch'

// ==============================
export default async function FollowersPage({ params }) {
  const user = params.user

  const userUrl = `https://api.github.com/users/${user}`
  const followersUrl = `https://api.github.com/users/${user}/followers?per_page=50`

  const { data: userData } = await getFetch(userUrl)
  const { data: followersData } = await getFetch(followersUrl)

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

      <Divider text='followers' />

      <UserCards users={followersData} />
    </main>
  )
}
