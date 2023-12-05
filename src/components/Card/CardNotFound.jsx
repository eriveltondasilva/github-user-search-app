import { Ban } from 'lucide-react'

export default function NotFound({ error }) {
  return (
    <div className='my-2 flex gap-4 text-xl font-semibold'>
      <Ban />
      {error}
    </div>
  )
}
