export default async function getFetch(URL) {
  const DATA = await fetch(URL, { cache: 'no-store' }).then((res) =>
    res.json()
  );

  return DATA;
}
