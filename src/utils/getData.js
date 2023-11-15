export default async function getData(user) {
  const url = `https://api.github.com/users/${user}`;
  const res = await fetch(url).then((e) => e.json());

  return res;
}
