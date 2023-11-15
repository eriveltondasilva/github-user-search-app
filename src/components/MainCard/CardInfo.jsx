export default function CardInfo({ items }) {
  return (
    <ul
      className={`flex justify-between py-4 my-5 rounded-lg bg-slate-900 px-7${
        !items ? ' hidden' : ''
      }`}>
      {items?.map(([title, value], index) => (
        <li key={`${title}-${index}`}>
          <h5>{title}</h5>
          <div className='text-xl font-semibold'>{value}</div>
        </li>
      ))}
    </ul>
  );
}
