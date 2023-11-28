// import ReposCard from './ReposCard';

export default function ReposPage({ params }) {
  const USER = params.user;

  return (
    <div className='w-[24rem] sm:w-[36rem] mx-2 px-2 sm:px-4 my-8 sm:my-16'>
      {USER}
    </div>
  );
}
