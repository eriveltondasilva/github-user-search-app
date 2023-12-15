import Link from 'next/link'
import { twJoin } from 'tailwind-merge'

// ==============================
export default function CardInfo({ items }) {
  if (!items) return null

  return (
    <CardInfoRoot>
      {items.map((item, index) => (
        <CardInfoItem
          key={`${item.name}-${index}`}
          item={item}
        />
      ))}
    </CardInfoRoot>
  )
}

// ------------------------------
function CardInfoRoot({ children }) {
  return (
    <ul
      className={twJoin(
        'flex justify-between',
        'my-5 rounded-lg px-7 py-4',
        'bg-slate-100 dark:bg-slate-900'
      )}>
      {children}
    </ul>
  )
}

// ------------------------------
function CardInfoItem({ item }) {
  const { name, value, link } = item

  return (
    <li className='hover:opacity-75'>
      <Link href={link}>
        <h5 className='text-sm font-medium text-slate-500 dark:text-white'>
          {name}
        </h5>
        <div className='text-lg font-semibold sm:text-xl'>{value}</div>
      </Link>
    </li>
  )
}
