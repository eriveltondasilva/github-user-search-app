import Image from 'next/image';

import CardInfo from './CardInfo';
import CardList from './CardList';

// =============================
export default function Card({ className, children }) {
  return (
    <main
      className={`grid sm:grid-cols-[auto_1fr] gap-5 p-6 bg-white shadow-lg dark:bg-slate-800 rounded-xl ${className}`}>
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
    <h2 className='text-lg sm:text-xl font-semibold truncate' title={title}>
      {title}
    </h2>
  );
}

// -----------------------------
function CardSubtitle({ subtitle }) {
  const date = new Date(subtitle);
  const optionDate = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  };

  return (
    <div className='flex-none text-sm font-medium text-slate-400'>
      Joined {date?.toLocaleDateString('en-GB', optionDate)}
    </div>
  );
}

// -----------------------------
function CardLink({ href, children }) {
  return (
    <h3>
      <a href={href ?? ''} className='font-medium text-blue-500 dark:text-blue-700 truncate'>
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
