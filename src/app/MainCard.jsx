import Card from '@/components/Card';
import getFetch from '@/utils/getFetch';

// =============================
export default async function MainCard({ userName }) {
  const URL = `https://api.github.com/users/${userName}`;
  const DATA_USER = await getFetch(URL);

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
  } = DATA_USER;

  const INFO_ITEMS = [
    { name: 'Repos', value: public_repos },
    { name: 'Followers', value: followers },
    { name: 'Following', value: following },
  ];

  const twitter_url = twitter_username
    ? `https://twitter.com/${twitter_username}`
    : null;

  const LIST_ITEMS = [
    { icon: 'MapPin', name: location, link: null },
    { icon: 'Twitter', name: twitter_username, link: twitter_url },
    { icon: 'Link', blog, name: blog, link: blog },
    { icon: 'Building2', name: company, link: null },
  ];

  let date = new Date(created_at);
  date = date?.toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

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
