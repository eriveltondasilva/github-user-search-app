import { Building2, Link as LinkIcon, MapPin, Twitter } from 'lucide-react';
import { twJoin } from 'tailwind-merge';

export default function CardList({ items }) {
  const iconMap = {
    Link: <LinkIcon size={16} />,
    MapPin: <MapPin size={16} />,
    Building2: <Building2 size={16} />,
    Twitter: <Twitter size={16} />,
  };

  const styledCardList = twJoin(
    'grid sm:grid-cols-2 grid-cols-1',
    !items && 'hidden',
  );

  return (
    <footer>
      <ul
        className={styledCardList}>
        {items &&
          items.map(([icon, title], index) => (
            <li
              className={`flex items-center font-medium text-sm text-slate-500 dark:text-white gap-3 mb-3 mr-3 truncate ${
                title || 'opacity-50'
              }`}
              key={`${icon}-${index}`}
              title={title}>
              <span>{iconMap[icon]}</span>
              {title || 'Not Available'}
            </li>
          ))}
      </ul>
    </footer>
  );
}
