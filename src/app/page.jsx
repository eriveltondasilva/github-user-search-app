import Header from '@/components/Header';
import Main from '@/components/Main';
import getData from '@/utils/getData';

export default async function Home() {
  const login = 'eriveltondasilva';
  const user = await getData(login);

  return (
    <div className='w-[36rem]'>
      <div>{user.name}</div>
      <Header />
      <Main />
    </div>
  );
}
