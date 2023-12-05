'use client'
import { SessionProvider } from 'next-auth/react'

export default function ProviderContext({ children }) {
  return <SessionProvider>{children}</SessionProvider>
}
