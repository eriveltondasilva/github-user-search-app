// import { useState } from 'react';

export default async function useData(login) {
//   const [user, setUser] = useState();

  const url = `https://api.github.com/users/${login}`;
  const res = await fetch(url).then((e) => e.json());

  return res;
}
