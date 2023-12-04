import Image from 'next/image';
import Link from 'next/link';
import { twJoin, twMerge } from 'tailwind-merge';

import CardInfo from './CardInfo';
import CardList from './CardList';

// =============================
export default function Card({ href, type, children }) {
  const styledCard = twJoin(
    'grid sm:grid-cols-[auto_1fr] gap-5 p-6 drop-shadow-md rounded-xl',
    type === 'danger'
      ? 'bg-red-600 dark:bg-red-500'
      : 'bg-white dark:bg-slate-800'
  );

  if (href) {
    return (
      <article className={styledCard}>
        <Link
          href={href}
          target='_blank'
          rel='noopener'>
          {children}
        </Link>
      </article>
    );
  }

  return <article className={styledCard}>{children}</article>;
}

// -----------------------------
function CardImage({ src, alt, size = 80 }) {
  if (!src) return null;

  return (
    <section className='w-20 h-20'>
      <Image
        className='rounded-full shadow-lg'
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
function CardHeaderWrapper({ className, children }) {
  return (
    <div className={twMerge('w-80 sm:w-64 truncate', className)}>
      {children}
    </div>
  );
}

// -----------------------------
function CardTitle({ title, index }) {
  return (
    <h2
      className='text-lg font-semibold truncate sm:text-xl'
      title={title}>
      <span className={twJoin(!index && 'hidden')}>{index}. </span>
      {title ?? 'Unnamed User'}
    </h2>
  );
}

// -----------------------------
function CardCreated({ children }) {
  return (
    <div className='flex-none text-sm font-medium text-slate-400'>
      {children}
    </div>
  );
}

// -----------------------------
function CardLink({ href, children }) {
  return (
    <h3>
      <Link
        href={href}
        className='font-medium text-blue-500 truncate dark:text-blue-700'
        target='_blank'
        rel='noopener'>
        @{children}
      </Link>
    </h3>
  );
}

// -----------------------------
function CardBio({ children }) {
  return (
    <p className='mt-5 text-sm font-medium text-slate-500 dark:text-slate-300'>
      {children ?? 'This profile has no bio'}
    </p>
  );
}

// -----------------------------
function CardDescription({ children }) {
  return (
    <p className='mt-5 text-sm font-medium text-slate-500 dark:text-slate-300'>
      {children ?? 'This repository has no description'}
    </p>
  );
}

// -----------------------------
function CardTopics({ children }) {
  return (
    <p className='mt-5 text-sm font-medium italic text-slate-500 dark:text-slate-300'>
      {children}
    </p>
  );
}

// =============================
Card.Image = CardImage;
Card.Content = CardContent;
Card.Header = CardHeader;
Card.HeaderWrapper = CardHeaderWrapper;
Card.Title = CardTitle;
Card.Created = CardCreated;
Card.Link = CardLink;
Card.Info = CardInfo;
Card.List = CardList;
Card.Bio = CardBio;
Card.Description = CardDescription;
Card.Topics = CardTopics;
