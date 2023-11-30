import { Suspense } from 'react';

import Card from '@/components/Card';
import CardSkeleton from '@/components/Loading/CardSkeleton';
import getFetch from '@/utils/getFetch';

// =============================
export default async function ReposCards({ url }) {
  const DATA_REPOS = await getFetch(url);

  const { name } = DATA_REPOS;

  return (
    <Suspense fallback={<CardSkeleton />}>
      <Card>
        <Card.Content>
          <Card.Header>
            <Card.HeaderWrapper>
              <Card.Title title={name} />

              {/* <Card.Link href={html_url}>{login}</Card.Link> */}
            </Card.HeaderWrapper>

            {/* <Card.Subtitle created_at={date} /> */}
          </Card.Header>

          {/* <Card.Bio>{bio}</Card.Bio> */}

          {/* <Card.Info items={INFO_ITEMS} /> */}

          {/* <Card.List items={LIST_ITEMS} /> */}
        </Card.Content>
      </Card>
    </Suspense>
  );
}
