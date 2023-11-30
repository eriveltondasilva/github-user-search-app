import { Suspense } from 'react';

import Card from '@/components/Card';
import CardSkeleton from '@/components/Loading/CardSkeleton';
import getDate from '@/utils/getDate';

// =============================
export default async function ReposCards({ dataRepos }) {
  if (dataRepos.length === 0) {
    return <div className='py-8 text-xl text-center'>No repository...</div>;
  }

  return (
    <ul>
      {dataRepos.map((repos, index) => (
        <li
          key={repos.name}
          className='my-8'>
          <Suspense fallback={<CardSkeleton />}>
            <ReposCard
              repos={repos}
              index={index}
            />
          </Suspense>
        </li>
      ))}
    </ul>
  );
}

function ReposCard({ repos, index }) {
  const DATE = getDate(repos.created_at);
  return (
    <Card href={repos.html_url}>
      <Card.Content>
        <Card.Header>
          <Card.HeaderWrapper>
            <Card.Title
              title={repos.name + ' aaaaaaaaaaaaaaaaaaaaaa11111'}
              index={index + 1}
            />
          </Card.HeaderWrapper>
        </Card.Header>
        <Card.Created>Created in {DATE}</Card.Created>

        <Card.Description>{repos.description}</Card.Description>

        <Card.Topics>
          {repos.topics.length > 0
            ? 'Topics: ' + repos.topics.join(', ')
            : 'No topics'}
        </Card.Topics>
      </Card.Content>
    </Card>
  );
}
