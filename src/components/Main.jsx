import SocialList from './SocialList';

/* eslint-disable @next/next/no-img-element */
export default function Main() {
  const cardItems = [
    ['Repos', 8],
    ['Followers', 3938],
    ['Following', 9],
  ];
  const socialItems = [
    { icon: 'MapPin', title: 'San Francisco', link: '' },
    { icon: 'Twitter', title: 'Not Available', link: '' },
    { icon: 'Link', title: 'github.blog', link: 'teste' },
    { icon: 'Building2', title: '@agithub', link: 'teste' },
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
          <ul className='flex justify-between py-4 rounded-lg bg-slate-900 px-7'>
            {cardItems.map((item, i) => (
              <li key={item[0]}>
                <h5>{item[0]}</h5>
                <div className='text-xl font-semibold'>{item[1]}</div>
              </li>
            ))}
          </ul>
        </section>
        <section>
          <SocialList items={socialItems} />
        </section>
      </section>
    </main>
  );
}
