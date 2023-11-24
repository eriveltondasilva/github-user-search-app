import CardList from './CardList';

// ==============================
export default function CardListIndex({ items }) {
  //
  if (!items) return null;

  return (
    <CardList>
      {items.map(([icon, name, link], index) => (
        <CardList.Item
          key={`${icon}-${index}`}
          name={name}
          icon={icon}
          link={link}
        />
      ))}
    </CardList>
  );
}
