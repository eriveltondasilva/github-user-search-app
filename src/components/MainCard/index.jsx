'use client';
import { useUserContext } from '@/contexts/UserContext';
import LoadingSkeleton from '../LoadingSkeleton';
import NotFoundUser from '../NotFoundUser';
import Card from './Card';

// =============================
export default function CardIndex() {
  const { user, error, isLoading } = useUserContext();
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
  } = user;

  const INFO_ITEMS = [
    ['Repos', public_repos],
    ['Followers', followers],
    ['Following', following],
  ];

  const twitter_url =
    twitter_username && `https://twitter.com/${twitter_username}`;

  const LIST_ITEMS = [
    ['MapPin', location],
    ['Twitter', twitter_username, twitter_url],
    ['Link', blog, blog],
    ['Building2', company],
  ];

  const OPTION_DATE = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  };

  let date = new Date(created_at);
  date = date?.toLocaleDateString('en-GB', OPTION_DATE);

  // ------------------------------
  if (error) {
    return (
      <Card type='danger'>
        <NotFoundUser error={error} />
      </Card>
    );
  }

  if (isLoading || !user) {
    return (
      <Card>
        <LoadingSkeleton />
      </Card>
    );
  }

  return (
    <Card>
      <Card.Image
        src={avatar_url}
        alt={name}
      />
      <Card.Content>
        <Card.Header>
          <Card.HeaderWrapper>
            <Card.Title title={name} />

            <Card.Link href={html_url}>{login}</Card.Link>
          </Card.HeaderWrapper>

          <Card.Subtitle created_at={date} />
        </Card.Header>

        <Card.Bio>{bio}</Card.Bio>

        <Card.Info items={INFO_ITEMS} />

        <Card.List items={LIST_ITEMS} />
      </Card.Content>
    </Card>
  );
}
