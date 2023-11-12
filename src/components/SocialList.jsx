import { Building2, Link as LinkIcon, MapPin, Twitter } from 'lucide-react';

export default function SocialList({ items }) {
  const iconMap = {
    Link: <LinkIcon size={16} />,
    MapPin: <MapPin size={16} />,
    Building2: <Building2 size={16} />,
    Twitter: <Twitter size={16} />,
  };

  return (
    <ul className='grid grid-cols-2'>
      {items.map((i) => (
        <li className='flex items-center gap-3 mb-3' key={i.icon}>
          <span>{iconMap[i.icon]}</span>
          {i.link ? <a href={i.link}>{i.title}</a> : <div>{i.title}</div>}
        </li>
      ))}
    </ul>
  );
}
