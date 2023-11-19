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

  const infoItems = [
    ['Repos', public_repos],
    ['Followers', followers],
    ['Following', following],
  ];

  const listItems = [
    ['MapPin', location],
    ['Twitter', twitter_username],
    ['Link', blog],
    ['Building2', company],
  ];

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
      <Card.Image src={avatar_url} alt={name} />
      <Card.Content>
        <Card.Header>
          <Card.HeaderWrapper>
            <Card.Title title={name} />

            <Card.Link href={html_url}>{login}</Card.Link>
          </Card.HeaderWrapper>

          <Card.Subtitle subtitle={created_at} />
        </Card.Header>

        <Card.Bio>{bio}</Card.Bio>

        <Card.Info items={infoItems} />

        <Card.List items={listItems} />
      </Card.Content>
    </Card>
  );
}
