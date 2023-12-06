import Link from 'next/link'
import { Suspense } from 'react'

import CardSkeleton from '@/components/Loading/CardSkeleton'
import Card from '../index'

// ==============================
export default function UserCards({ users }) {
  if (!users) return null

  return (
    <ul>
      {users.map((user) => (
        <li
          key={user.login}
          className='my-8'>
          <Suspense fallback={<CardSkeleton />}>
            <UserCard user={user} />
          </Suspense>
        </li>
      ))}
    </ul>
  )
}

// ------------------------------
function UserCard({ user }) {
  const { avatar_url, login, html_url } = user

  return (
    <Link href={`/users/${login}`}>
      <Card>
        <Card.Image
          src={avatar_url}
          alt={login}
        />
        <Card.Content>
          <Card.Header>
            <Card.HeaderWrapper className='sm:w-96'>
              <Card.Title title={login} />
              <Card.Description>{html_url}</Card.Description>
            </Card.HeaderWrapper>
          </Card.Header>
        </Card.Content>
      </Card>
    </Link>
  )
}
