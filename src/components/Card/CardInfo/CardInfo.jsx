import Link from 'next/link';

export default function CardInfo({ children }) {
  return (
    <ul className='flex justify-between py-4 my-5 rounded-lg bg-slate-100 dark:bg-slate-900 px-7'>
      {children}
    </ul>
  );
}

// ------------------------------
function CardInfoItem({ name = '', value = '', link = '' }) {
  return (
    <li className='hover:opacity-75'>
      <Link href={link}>
        <h5 className='text-sm font-medium text-slate-500 dark:text-white'>
          {name}
        </h5>
        <div className='text-lg font-semibold sm:text-xl'>{value}</div>
      </Link>
    </li>
  );
}

// ==============================
CardInfo.Item = CardInfoItem;
