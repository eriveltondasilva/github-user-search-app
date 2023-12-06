'use client'
import { useRouter } from 'next/navigation'

export default function RouterBackUser({ url, error, children }) {
  const router = useRouter()

  if (error) {
    router.push(url)
  }

  return <>{children}</>
}
