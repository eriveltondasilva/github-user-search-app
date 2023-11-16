export default function CardInfo({ items }) {
  return (
    <ul
      className={`flex justify-between py-4 my-5 rounded-lg bg-slate-900 px-7${
        !items ? ' hidden' : ''
      }`}>
      {items &&
        items.map(([title, value], i) => (
          <li key={`${title}-${i}`}>
            <h5>{title}</h5>
            <div className='text-xl font-semibold'>{value}</div>
          </li>
        ))}
    </ul>
  );
}
