import { Suspense } from 'react'

import CardSkeleton from '@/components/Loading/CardSkeleton'
import getDate from '@/utils/getDate'
import getFetch from '@/utils/getFetch'
import Card from '../index'

// =============================
export default async function MainCard({ url }) {
  const { data, error } = await getFetch(url)

  const {
    avatar_url,
    bio,
    created_at,
    followers,
    following,
    html_url,
    login,
    name,
    public_repos,
    blog,
    company,
    location,
    twitter_username,
  } = data

  const twitterUrl = twitter_username
    ? `https://twitter.com/${twitter_username}`
    : null

  const infoItems = [
    { name: 'Repos', value: public_repos, link: `/users/${login}/repos` },
    { name: 'Followers', value: followers, link: `/users/${login}/followers` },
    { name: 'Following', value: following, link: `/users/${login}/following` },
  ]

  const listItems = [
    { icon: 'MapPin', name: location, link: null },
    { icon: 'Twitter', name: twitter_username, link: twitterUrl },
    { icon: 'Link', blog, name: blog, link: blog || null },
    { icon: 'Building2', name: company, link: null },
  ]

  const formatDate = getDate(created_at)

  //
  if (error) {
    return (
      <Card type='danger'>
        <Card.NotFound error={error} />
      </Card>
    )
  }

  return (
    <Suspense fallback={<CardSkeleton />}>
      <Card>
        <Card.Image
          src={avatar_url}
          alt={name ?? login}
          GITHUB_TOKEN
        />
        <Card.Content>
          <Card.Header>
            <Card.HeaderWrapper>
              <Card.Title title={name} />

              <Card.Link href={html_url}>{login}</Card.Link>
            </Card.HeaderWrapper>

            <Card.Created>Joined {formatDate}</Card.Created>
          </Card.Header>

          <Card.Bio>{bio}</Card.Bio>

          <Card.Info items={infoItems} />

          <Card.List items={listItems} />
        </Card.Content>
      </Card>
    </Suspense>
  )
}
