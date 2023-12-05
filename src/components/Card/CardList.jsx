import { Building2, Link as LinkIcon, MapPin, Twitter } from 'lucide-react'
import { twJoin } from 'tailwind-merge'

// ==============================
export default function CardList({ items }) {
  if (!items) return null

  return (
    <CardListRoot>
      {items.map((item, index) => (
        <CardListItem
          key={`${item.icon}-${index}`}
          item={item}
        />
      ))}
    </CardListRoot>
  )
}

// ==============================
function CardListRoot({ children }) {
  return (
    <footer>
      <ul className='grid grid-cols-1 sm:grid-cols-2'>{children}</ul>
    </footer>
  )
}

// ------------------------------
function CardListItem({ item }) {
  const { icon, name, link } = item

  const iconMap = {
    Link: <LinkIcon size={16} />,
    MapPin: <MapPin size={16} />,
    Building2: <Building2 size={16} />,
    Twitter: <Twitter size={16} />,
  }

  const regex = /https:\/\/|http:\/\//

  const itemName = name?.replace(regex, '') || 'Not Available'

  return (
    <li
      className={twJoin(
        'mb-3 mr-3',
        'flex items-center gap-3',
        'truncate text-sm font-medium',
        'text-slate-500 dark:text-white',
        !name && 'opacity-50'
      )}>
      <span>{iconMap[icon]}</span>
      {link !== null ? (
        <a
          href={link}
          title={link}
          target='_blank'
          rel='noopener'>
          {itemName}
        </a>
      ) : (
        <span title={itemName}>{itemName}</span>
      )}
    </li>
  )
}
