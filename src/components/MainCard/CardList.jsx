import { Building2, Link as LinkIcon, MapPin, Twitter } from 'lucide-react';

export default function CardList({ items }) {
  const iconMap = {
    Link: <LinkIcon size={16} />,
    MapPin: <MapPin size={16} />,
    Building2: <Building2 size={16} />,
    Twitter: <Twitter size={16} />,
  };

  return (
    <footer>
      <ul className={`grid grid-cols-2${!items ? ' hidden' : ''}`}>
        {items?.map(([icon, title, link]) => (
          <li className='flex items-center gap-3 mb-3' key={icon}>
            <span>{iconMap[icon]}</span>
            {link ? <a href={link}>{title}</a> : <div>{title}</div>}
          </li>
        ))}
      </ul>
    </footer>
  );
}
