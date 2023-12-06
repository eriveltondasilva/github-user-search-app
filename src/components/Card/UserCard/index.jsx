import { Suspense } from 'react'

import CardSkeleton from '@/components/Loading/CardSkeleton'
import Card from '../index'

// ==============================
export default function UserCard({ user = {} }) {
  const { avatar_url, bio, html_url, login, name } = user

  if (!user) return null

  return (
    <Suspense fallback={<CardSkeleton />}>
      <Card>
        <Card.Image
          src={avatar_url}
          alt={name ?? login}
        />
        <Card.Content>
          <Card.Header>
            <Card.HeaderWrapper className='sm:w-96'>
              <Card.Title title={name} />

              <Card.Link href={html_url}>{login}</Card.Link>
            </Card.HeaderWrapper>
          </Card.Header>
          <Card.Bio>{bio}</Card.Bio>
        </Card.Content>
      </Card>
    </Suspense>
  )
}
