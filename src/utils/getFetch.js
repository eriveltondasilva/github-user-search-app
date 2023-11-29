export default async function getFetch(url) {
  const token = process.env.GITHUB_TOKEN;

  const DATA = await fetch(url, {
    headers: {
      Authorization: `token ${token}`,
    },
  }).then((res) => res.json());

  return DATA;
}
