import { Suspense } from 'react'

import CardSkeleton from '@/components/Loading/CardSkeleton'
import getDate from '@/utils/getDate'
import Card from '../index'

// =============================
export default async function ReposCards({ items }) {
  if (!items) {
    return <div className='py-8 text-center text-xl'>No repository...</div>
  }

  return (
    <ul>
      {items.map((item, index) => (
        <li
          key={item.id}
          className='my-8'>
          <Suspense fallback={<CardSkeleton />}>
            <ReposCard
              item={item}
              index={index}
            />
          </Suspense>
        </li>
      ))}
    </ul>
  )
}

function ReposCard({ item, index }) {
  const date = getDate(item.created_at)
  const { html_url, name, description, topics } = item
  const topicsText = topics ? 'Topics: ' + topics.join(', ') : 'No topics'

  return (
    <Card href={html_url}>
      <Card.Content>
        <Card.Header>
          <Card.HeaderWrapper className='sm:w-[30rem]'>
            <Card.Title
              title={name}
              index={index + 1}
            />
          </Card.HeaderWrapper>
        </Card.Header>
        <Card.Created>Created in {date}</Card.Created>

        <Card.Description>{description}</Card.Description>

        <Card.Topics>{topicsText}</Card.Topics>
      </Card.Content>
    </Card>
  )
}
