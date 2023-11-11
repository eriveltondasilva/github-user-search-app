import { Space_Mono } from 'next/font/google';
import './globals.css';

const space_mono = Space_Mono({
  display: 'swap',
  // style: ['normal', 'italic'],
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={space_mono.className}>
        <div className='flex min-h-screen flex-col items-center justify-between'>
          {children}
        </div>
      </body>
    </html>
  );
}
