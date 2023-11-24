import CardInfo from './CardInfo';

// ==============================
export default function CardInfoIndex({ items }) {
  //
  if (!items) return null;

  return (
    <CardInfo>
      {items.map(([name, value], index) => (
        <CardInfo.Item
          key={`${name}-${index}`}
          name={name}
          value={value}
        />
      ))}
    </CardInfo>
  );
}
