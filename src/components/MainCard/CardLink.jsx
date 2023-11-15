import Link from 'next/link';

export default function CardLink({ href, children }) {
  return (
    <h3>
      <Link href={href} className='font-medium text-blue-700'>
        {children}
      </Link>
    </h3>
  );
}
