import Header from '@/components/Header';
import HeaderInput from '@/components/HeaderInput';
import Main from '@/components/Main';

export default async function Home() {
  const login = 'eriveltondasilva';

  return (
    <div className='w-[36rem]'>
      <div></div>
      <Header>
        <HeaderInput />
      </Header>
      <Main />
    </div>
  );
}
