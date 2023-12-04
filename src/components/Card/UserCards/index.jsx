import Link from 'next/link';
import { Suspense } from 'react';

import Card from '@/components/Card';
import CardSkeleton from '@/components/Loading/CardSkeleton';
import getFetch from '@/utils/getFetch';

export default async function UserCards({ url }) {
  const DATA_FOLLOWING = await getFetch(url);

  if (!DATA_FOLLOWING) return null;

  return (
    <ul>
      {DATA_FOLLOWING.map((user) => (
        <li
          key={user.login}
          className='my-8'>
          <Suspense fallback={<CardSkeleton />}>
            <UserCard user={user} />
          </Suspense>
        </li>
      ))}
    </ul>
  );
}

function UserCard({ user }) {
  return (
    <Link href={`/users/${user.login}`}>
      <Card>
        <Card.Image
          src={user.avatar_url}
          alt={user.login}
        />
        <Card.Content>
          <Card.Header>
            <Card.HeaderWrapper className='sm:w-96'>
              <Card.Title title={user.login} />
              <Card.Description>{user.html_url}</Card.Description>
            </Card.HeaderWrapper>
          </Card.Header>
        </Card.Content>
      </Card>
    </Link>
  );
}
