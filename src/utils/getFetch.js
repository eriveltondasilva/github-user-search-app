export default async function getFetch(url) {
  const token = `token ${process.env.GITHUB_TOKEN}`

  const RESPONSE = await fetch(url, {
    headers: {
      Authorization: token,
    },
  })

  const DATA = await RESPONSE.json()

  return DATA
}
