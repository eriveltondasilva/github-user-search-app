import ReposCard from '@/components/Cards/ReposCard';

export default function ReposPage({ params }) {
  const user = params.user;

  return (
    <div className='w-[24rem] sm:w-[36rem] mx-2 px-2 sm:px-4 my-8 sm:my-16'>
      <ReposCard />
    </div>
  );
}
