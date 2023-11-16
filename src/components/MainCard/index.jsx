'use client';
import { useUserContext } from '@/contexts/UserContext';
import LoadingSkeleton from '../LoadingSkeleton';
import Card from './Card';

// =============================
export default function CardIndex() {
  const { user } = useUserContext();
  const {
    name,
    login,
    html_url,
    avatar_url,
    bio,
    created_at,
    public_repos,
    followers,
    following,
  } = user;

  const items = [
    ['Repos', public_repos],
    ['Followers', followers],
    ['Following', following],
  ];

  if (!user) {
    return <LoadingSkeleton />;
  }

  return (
    <Card>
      <Card.Image src={avatar_url} alt={name} />
      <Card.Content>
        <Card.Header>
          <Card.Title title={name} />

          <Card.Subtitle subtitle={created_at} />

          <Card.Link href={html_url}>{login}</Card.Link>
        </Card.Header>

        <Card.Bio>{bio}</Card.Bio>

        <Card.Info items={items} />

        <Card.List />
      </Card.Content>
    </Card>
  );
}
