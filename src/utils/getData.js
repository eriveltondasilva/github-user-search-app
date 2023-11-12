export default async function getData(login) {
  const url = `https://api.github.com/users/${login}`;
  const res = await fetch(url).then((e) => e.json());

  return res;
}
