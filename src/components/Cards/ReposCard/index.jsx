import Card from '../MainCard/Card';

export default function ReposCard() {
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
      </Card.Content>
    </Card>
  );
}
