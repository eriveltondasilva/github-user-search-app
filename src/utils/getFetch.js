export default async function getFetch(url) {
  const token = `token ${process.env.GITHUB_TOKEN}`

  try {
    const response = await fetch(url, {
      headers: {
        Authorization: token,
      },
    })

    const data = await response.json()

    const error = data.ok ? '' : data.message

    return { data, error }
  } catch (err) {
    //
    const error = err.message
    return { error }
  }
}
