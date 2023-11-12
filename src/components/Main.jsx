import InfoCard from './InfoCard';
import SocialList from './SocialList';

/* eslint-disable @next/next/no-img-element */
export default function Main() {
  const cardItems = [
    ['Repos', 8],
    ['Followers', 3938],
    ['Following', 9],
  ];
  const socialList = [
    { icon: 'MapPin', title: 'San Francisco', link: '' },
    { icon: 'Twitter', title: 'Not Available', link: '' },
    { icon: 'Link', title: 'github.blog', link: '#' },
    { icon: 'Building2', title: '@agithub', link: '#' },
  ];

  return (
    <main className='grid grid-cols-[auto_1fr] gap-5 p-6 bg-slate-800 rounded-xl'>
      <section>
        <img
          className='w-20 h-20 rounded-full'
          src='https://xsgames.co/randomusers/avatar.php?g=female'
          title='teste'
        />
      </section>
      <section>
        <header className='flex items-baseline justify-between'>
          <h2 className='text-xl font-semibold'>The Octocat</h2>
          <div className='text-sm font-medium text-right'>
            Joined 25 Jan 2011
          </div>
        </header>
        <h3>
          <a href='#' className='font-medium text-blue-700'>
            @octocat
          </a>
        </h3>

        <p className='mt-5 font-medium text-slate-300'>
          This profile has no bio
        </p>
        <section className='my-5'>
          <InfoCard items={cardItems} />
        </section>
        <section>
          <SocialList items={socialList} />
        </section>
      </section>
    </main>
  );
}
