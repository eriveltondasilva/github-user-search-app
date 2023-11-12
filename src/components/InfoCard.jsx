export default function InfoCard({ items }) {
  return (
    <ul className='flex justify-between py-4 rounded-lg bg-slate-900 px-7'>
      {items.map((item, i) => (
        <li key={item[0]}>
          <h5>{item[0]}</h5>
          <div className='text-xl font-semibold'>{item[1]}</div>
        </li>
      ))}
    </ul>
  );
}
