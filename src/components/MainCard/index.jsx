'use client';
import { useUserContext } from '@/contexts/UserContext';
import Card from './Card';

// =============================
export default function CardIndex() {
  const { user } = useUserContext();
  const { name, login, html_url, avatar_url, bio } = user;

  if (!user) {
    return;
  }

  return (
    <Card>
      <Card.Image
        src={avatar_url}
        alt={name}
      />
      <Card.Content>
        <Card.Header>
          <Card.Title>{name}</Card.Title>

          <Card.Subtitle>Joined 25 Jan 2011</Card.Subtitle>

          <Card.Link href={html_url}>@{login}</Card.Link>
        </Card.Header>

        <Card.Bio>{bio}</Card.Bio>

        <Card.Info />

        <Card.List />
      </Card.Content>
    </Card>
  );
}
