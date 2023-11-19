import { twJoin } from 'tailwind-merge';

export default function CardInfo({ items }) {
  const styleCardInfo = twJoin(
    'flex justify-between py-4 my-5 rounded-lg bg-slate-100 dark:bg-slate-900 px-7',
    !items && 'hidden'
  );

  return (
    <ul className={styleCardInfo}>
      {items &&
        items.map(([title, value], index) => (
          <li key={`${title}-${index}`}>
            <h5 className='text-sm font-medium text-slate-500 dark:text-white'>
              {title}
            </h5>
            <div className='text-lg font-semibold sm:text-xl'>{value}</div>
          </li>
        ))}
    </ul>
  );
}
