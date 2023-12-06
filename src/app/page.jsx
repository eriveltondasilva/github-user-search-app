import MainCard from '@/components/Card/MainCard'
import Header from '@/components/Header/MainHeader'
import getFetch from '@/utils/getFetch'

// ==============================
export default async function HomePage() {
  // url buscar o user logado no app
  const url = 'https://api.github.com/user'
  const { data, error } = await getFetch(url)

  return (
    <main className='mx-2 my-8 w-[24rem] px-2 sm:my-16 sm:w-[36rem] sm:px-4'>
      <Header />

      <MainCard
        user={data}
        error={error}
      />
    </main>
  )
}
