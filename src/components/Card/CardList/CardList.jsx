import { Building2, Link as LinkIcon, MapPin, Twitter } from 'lucide-react';
import { twJoin } from 'tailwind-merge';

// ==============================
export default function CardList({ children }) {
  return (
    <footer>
      <ul className='grid sm:grid-cols-2 grid-cols-1'>{children}</ul>
    </footer>
  );
}

// ------------------------------
function CardListItem({ icon = '', name = '', link = '' }) {
  const iconMap = {
    Link: <LinkIcon size={16} />,
    MapPin: <MapPin size={16} />,
    Building2: <Building2 size={16} />,
    Twitter: <Twitter size={16} />,
  };

  const regex = /https:\/\/|http:\/\//;
  const itemName = name?.replace(regex, '') || 'Not Available';

  return (
    <li
      className={twJoin(
        'flex items-center font-medium text-sm text-slate-500 dark:text-white gap-3 mb-3 mr-3 truncate',
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
  );
}

// ==============================
CardList.Item = CardListItem;
