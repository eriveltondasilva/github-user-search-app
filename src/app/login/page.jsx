'use client';
import { Home } from 'lucide-react';
import { signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { twJoin } from 'tailwind-merge';

const styledButton = twJoin(
  'inline-flex items-center justify-center w-full px-4 py-3 text-base font-medium tracking-wide border rounded-lg shadow-sm gap-x-2 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1',
  'text-gray-800 bg-white border-gray-200 hover:bg-gray-50 disabled:opacity-50 dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:ring-gray-600'
);

export default function LoginPage() {
  const [isDisabled, setIsDisabled] = useState(false);
  const { data: session, status } = useSession();
  const { name, email, image, login } = session?.user ?? '';

  const styledStatus = twJoin(
    'font-semibold uppercase',
    status === 'loading' && 'animate-pulse'
  );

  useEffect(() => {
    if (status !== 'unauthenticated') {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }, [isDisabled, status]);

  // ------------------------------
  function handleSignIn() {
    signIn();
  }

  function handleSignOut() {
    signOut();
  }

  console.log(session);
  return (
    <main className='flex items-center justify-center'>
      <div className='bg-white border border-gray-200 shadow-sm mt-7 rounded-xl dark:bg-gray-800 dark:border-gray-700'>
        <div className='p-4 sm:p-7'>
          <div className='text-center'>
            <h1 className='block text-2xl font-bold tracking-widest text-gray-800 dark:text-white'>
              LOGIN
            </h1>
            <br />

            <InfoUser
              name={name}
              email={email}
              image={image}
            />

            <div className={styledStatus}>
              {status == 'loading' ? status + '...' : status}
            </div>
            <br />
          </div>

          {/* # Botão */}
          <div className='flex flex-col justify-center gap-4 mt-2'>
            {session ? (
              <Button onClick={handleSignOut}>Sign out</Button>
            ) : (
              <Button
                onClick={handleSignIn}
                disabled={isDisabled}>
                Sign in with Google
              </Button>
            )}
            <Link
              href='/'
              className={styledButton}>
              <Home size={18} />
              Go to Home
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

function InfoUser({ name, email, image }) {
  const size = 130;

  // ------------------------------
  if (!name || !email) {
    return null;
  }
  return (
    <section className='flex flex-col'>
      <Image
        className='m-auto rounded-full'
        src={image}
        width={size}
        height={size}
        alt={name}
      />
      <h2 className='text-xl font-bold'>{name}</h2>
      <p>{email}</p>
      <br />
    </section>
  );
}

function Button({ onClick, children, ...props }) {
  return (
    <button
      type='button'
      onClick={onClick}
      className={styledButton}
      {...props}>
      <svg
        className='w-4 h-auto'
        width='46'
        height='47'
        viewBox='0 0 46 47'
        fill='none'>
        <path
          d='M46 24.0287C46 22.09 45.8533 20.68 45.5013 19.2112H23.4694V27.9356H36.4069C36.1429 30.1094 34.7347 33.37 31.5957 35.5731L31.5663 35.8669L38.5191 41.2719L38.9885 41.3306C43.4477 37.2181 46 31.1669 46 24.0287Z'
          fill='#4285F4'
        />
        <path
          d='M23.4694 47C29.8061 47 35.1161 44.9144 39.0179 41.3012L31.625 35.5437C29.6301 36.9244 26.9898 37.8937 23.4987 37.8937C17.2793 37.8937 12.0281 33.7812 10.1505 28.1412L9.88649 28.1706L2.61097 33.7812L2.52296 34.0456C6.36608 41.7125 14.287 47 23.4694 47Z'
          fill='#34A853'
        />
        <path
          d='M10.1212 28.1413C9.62245 26.6725 9.32908 25.1156 9.32908 23.5C9.32908 21.8844 9.62245 20.3275 10.0918 18.8588V18.5356L2.75765 12.8369L2.52296 12.9544C0.909439 16.1269 0 19.7106 0 23.5C0 27.2894 0.909439 30.8731 2.49362 34.0456L10.1212 28.1413Z'
          fill='#FBBC05'
        />
        <path
          d='M23.4694 9.07688C27.8699 9.07688 30.8622 10.9863 32.5344 12.5725L39.1645 6.11C35.0867 2.32063 29.8061 0 23.4694 0C14.287 0 6.36607 5.2875 2.49362 12.9544L10.0918 18.8588C11.9987 13.1894 17.25 9.07688 23.4694 9.07688Z'
          fill='#EB4335'
        />
      </svg>
      {children}
    </button>
  );
}
