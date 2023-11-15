import Card from './Card'

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
    <Card.root>
      <Card.image
        src='https://xsgames.co/randomusers/avatar.php?g=female'
        alt='test'
      />

      <Card.content>
        <Card.header>
          <Card.title>The Octocat</Card.title>

          <Card.subtitle>Joined 25 Jan 2011</Card.subtitle>

          <Card.link href='#'>@octocat</Card.link>
        </Card.header>

        <Card.bio>This profile has no bio</Card.bio>

        <Card.info items={cardInfo} />

        <Card.list items={cardList} />
      </Card.content>
    </Card.root>
  );
}
