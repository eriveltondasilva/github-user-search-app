import Link from 'next/link';

// =============================
export default function HeaderTitle({ title }) {
    return (
      <h1 className='text-2xl font-bold'>
        <Link href='/'>{title}</Link>
      </h1>
    );
  }