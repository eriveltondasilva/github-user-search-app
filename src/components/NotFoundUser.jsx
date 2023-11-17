import { Ban } from 'lucide-react';

export default function NotFoundUser({ error }) {
  return (
    <div className='flex gap-4 my-2 text-xl font-semibold'>
      <Ban />
      {error}
    </div>
  );
}
