import Card from './Card';

// =============================

export default function CardIndex() {
  const cardInfo = [
    ['repos', 8],
    ['Followers', 3965],
    ['Following', 9],
  ];

  const cardList = [
    ['MapPin', 'San Francisco'],
    ['Twitter', 'Not Available'],
    ['Link', 'github.blog', 'teste'],
    ['Building2', '@github'],
  ];

  return (
    <Card>
      <Card.Image
        src='https://xsgames.co/randomusers/avatar.php?g=female'
        alt='test'
      />

      <Card.Content>
        <Card.Header>
          <Card.Title>The Octocat</Card.Title>

          <Card.Subtitle>Joined 25 Jan 2011</Card.Subtitle>

          <Card.Link href='#'>@octocat</Card.Link>
        </Card.Header>

        <Card.Bio>This profile has no bio</Card.Bio>

        <Card.Info items={cardInfo}/>

        <Card.List items={cardList}/>
      </Card.Content>
    </Card>
  );
}
