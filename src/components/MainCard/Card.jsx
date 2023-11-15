import Image from 'next/image';
import Link from 'next/link';

import CardInfo from './CardInfo';
import CardList from './CardList';

// =============================

export default function Card({ children }) {
  return (
    <main className='grid grid-cols-[auto_1fr] gap-5 p-6 bg-slate-800 rounded-xl'>
      {children}
    </main>
  );
}

// -----------------------------
function CardImage({ src, alt, size = 80 }) {
  return (
    <section className='w-20 h-20'>
      <Image
        className='rounded-full'
        src={src}
        alt={alt}
        width={size}
        height={size}
      />
    </section>
  );
}

// -----------------------------
function CardContent({ children }) {
  return <section>{children}</section>;
}

// -----------------------------
function CardHeader({ children }) {
  return (
    <header className='grid items-baseline grid-cols-2'>{children}</header>
  );
}

// -----------------------------
function CardTitle({ children }) {
  return <h2 className='text-xl font-semibold'>{children}</h2>;
}

// -----------------------------
function CardSubtitle({ children }) {
  return <div className='text-sm font-medium text-right'>{children}</div>;
}

// -----------------------------
function CardLink({ href, children }) {
  return (
    <h3>
      <Link href={href} className='font-medium text-blue-700'>
        {children}
      </Link>
    </h3>
  );
}

// -----------------------------
function CardBio({ children }) {
  return <p className='mt-5 font-medium text-slate-300'>{children}</p>;
}

// =============================

Card.Image = CardImage;
Card.Content = CardContent;
Card.Header = CardHeader;
Card.Title = CardTitle;
Card.Subtitle = CardSubtitle;
Card.Link = CardLink;
Card.Bio = CardBio;
Card.List = CardList;
Card.Info = CardInfo;
