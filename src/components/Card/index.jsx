import Image from 'next/image';
import { twJoin } from 'tailwind-merge';

import CardInfo from './CardInfo';
import CardList from './CardList';

// =============================
export default function Card({ type, children }) {
  const styledCard = twJoin(
    'grid sm:grid-cols-[auto_1fr] gap-5 p-6 drop-shadow-md rounded-xl',
    !type && 'bg-white dark:bg-slate-800',
    type === 'danger' && 'bg-red-600 dark:bg-red-500'
  );

  return <main className={styledCard}>{children}</main>;
}

// -----------------------------
function CardImage({ src, alt, size = 80 }) {
  if (!src) return null
  return (
    <section className='w-20 h-20'>
      <Image
        className='rounded-full drop-shadow-md'
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
    <header className='flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between'>
      {children}
    </header>
  );
}

// -----------------------------
function CardHeaderWrapper({ children }) {
  return <div className='w-64 truncate'>{children}</div>;
}

// -----------------------------
function CardTitle({ title }) {
  return (
    <h2
      className='text-lg font-semibold truncate sm:text-xl'
      title={title}>
      {title || 'Unnamed User'}
    </h2>
  );
}

// -----------------------------
function CardSubtitle({ created_at }) {
  return (
    <div className='flex-none text-sm font-medium text-slate-400'>
      Joined {created_at}
    </div>
  );
}

// -----------------------------
function CardLink({ href, children }) {
  return (
    <h3>
      <a
        href={href}
        className='font-medium text-blue-500 truncate dark:text-blue-700'
        target='_blank'
        rel='noopener'>
        @{children}
      </a>
    </h3>
  );
}

// -----------------------------
function CardBio({ children }) {
  return (
    <p className='mt-5 text-sm font-medium text-slate-400 dark:text-slate-300'>
      {children ?? 'This profile has no bio'}
    </p>
  );
}

// =============================
Card.Image = CardImage;
Card.Content = CardContent;
Card.Header = CardHeader;
Card.HeaderWrapper = CardHeaderWrapper;
Card.Title = CardTitle;
Card.Subtitle = CardSubtitle;
Card.Link = CardLink;
Card.Bio = CardBio;
Card.Info = CardInfo;
Card.List = CardList;
