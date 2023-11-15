import Header from '@/components/Header';
import HeaderInput from '@/components/HeaderInput';
import MainCard from '@/components/MainCard';
// import InfoCard from './InfoCard';
// import SocialList from './SocialList';

export default async function Home() {
  return (
    <div className='w-[36rem]'>
      <Header>
        <HeaderInput />
      </Header>

      <MainCard />
    </div>
  );
}
