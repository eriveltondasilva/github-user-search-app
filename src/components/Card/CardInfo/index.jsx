import CardInfo from './CardInfo';

// ==============================
export default function CardInfoIndex({ items }) {
  //
  if (!items) return null;

  return (
    <CardInfo>
      {items.map(({ name, value, link }, index) => (
        <CardInfo.Item
          key={`${name}-${index}`}
          name={name}
          value={value}
          link={link}
        />
      ))}
    </CardInfo>
  );
}
