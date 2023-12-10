'use client'
import { signIn, signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { twJoin } from 'tailwind-merge'

import Button from '@/components/Button'
import InfoUser from './InfoUser'

// ==============================
export default function LoginPage() {
  const [isDisabled, setIsDisabled] = useState(false)
  const { data: session, status } = useSession()

  useEffect(() => {
    if (status !== 'unauthenticated') {
      setIsDisabled(true)
    } else {
      setIsDisabled(false)
    }
  }, [isDisabled, status])

  return (
    <main className='flex items-center justify-center'>
      <div className='mt-7 rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800'>
        <div className='p-4 sm:p-7'>
          <div className='text-center'>
            <h1 className='block text-2xl font-bold tracking-widest text-gray-800 dark:text-white'>
              LOGIN
            </h1>
            <br />

            <InfoUser user={session?.user} />

            <div
              className={twJoin(
                'font-semibold uppercase',
                status === 'loading' && 'animate-pulse'
              )}>
              {status == 'loading' ? status + '...' : status}
            </div>
            <br />
          </div>

          {/* # Botões */}
          <div className='mt-2 flex flex-col justify-center gap-4'>
            {session ? (
              <Button onClick={() => signOut()}>Sign out</Button>
            ) : (
              <Button
                onClick={() => signIn()}
                disabled={isDisabled}>
                Sign in with Github
              </Button>
            )}
            <Link
              href='/'
              className={twJoin(
                'px-3 py-1',
                'text-center font-semibold',
                'hover:rounded-md hover:outline hover:outline-1',
                'hover:text-slate-400'
              )}>
              Go to Home
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
