import { Ban } from 'lucide-react'

// ==============================
export default function CardNotFound({ children }) {
  return (
    <div className='my-2 flex gap-4 text-xl font-semibold'>
      <Ban />
      {children}
    </div>
  )
}
