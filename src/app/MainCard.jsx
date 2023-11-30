import Card from '@/components/Card';
import getDate from '@/utils/getDate';
import getFetch from '@/utils/getFetch';

// =============================
export default async function MainCard({ url }) {
  const DATA_USER = await getFetch(url);

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

  const twitter_url = twitter_username
    ? `https://twitter.com/${twitter_username}`
    : null;

  const INFO_ITEMS = [
    { name: 'Repos', value: public_repos, link: `/users/${login}/repos` },
    { name: 'Followers', value: followers, link: `/users/${login}/followers` },
    { name: 'Following', value: following, link: `/users/${login}/following` },
  ];

  const LIST_ITEMS = [
    { icon: 'MapPin', name: location, link: null },
    { icon: 'Twitter', name: twitter_username, link: twitter_url },
    { icon: 'Link', blog, name: blog, link: blog },
    { icon: 'Building2', name: company, link: null },
  ];

  const DATE = getDate(created_at);

  return (
    <Card>
      <Card.Image
        src={avatar_url}
        alt={name ?? login}
      />
      <Card.Content>
        <Card.Header>
          <Card.HeaderWrapper>
            <Card.Title title={name} />

            <Card.Link href={html_url}>{login}</Card.Link>
          </Card.HeaderWrapper>

          <Card.Created>Joined {DATE}</Card.Created>
        </Card.Header>

        <Card.Bio>{bio}</Card.Bio>

        <Card.Info items={INFO_ITEMS} />

        <Card.List items={LIST_ITEMS} />
      </Card.Content>
    </Card>
  );
}
