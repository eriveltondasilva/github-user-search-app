import { Suspense } from 'react'

import CardSkeleton from '@/components/Loading/CardSkeleton'
import getFetch from '@/utils/getFetch'
import Card from '../index'

export default async function UserCard({ user }) {
  const URL = `https://api.github.com/users/${user}`
  const DATA_USER = await getFetch(URL)

  const { avatar_url, bio, html_url, login, name } = DATA_USER

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
