import ProviderContext from '@/contexts/ProviderContext'
import { Space_Mono } from 'next/font/google'
import { twJoin } from 'tailwind-merge'
import './globals.css'

const space_mono = Space_Mono({
  display: 'swap',
  subsets: ['latin'],
  weight: ['400', '700'],
})

// =============================
export default function RootLayout({ children }) {
  return (
    <html
      lang='en'
      className='dark'>
      <body className={space_mono.className}>
        <ProviderContext>
          <div
            className={twJoin(
              'flex min-h-screen justify-center',
              'bg-slate-100 text-slate-950 dark:bg-slate-900 dark:text-white'
            )}>
            {children}
          </div>
        </ProviderContext>
      </body>
    </html>
  )
}
