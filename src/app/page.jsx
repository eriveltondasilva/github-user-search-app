import MainCard from '@/components/Card/MainCard'
import Header from '@/components/Header/MainHeader'

// ==============================
export default function HomePage() {
  // url buscar o user logado no app
  const url = 'https://api.github.com/user'

  return (
    <main className='mx-2 my-8 w-[24rem] px-2 sm:my-16 sm:w-[36rem] sm:px-4'>
      <Header />

      <MainCard url={url} />
    </main>
  )
}
