export default function getDate(date) {
  const TEMP_DATE = new Date(date)
  const DATE = TEMP_DATE.toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })

  return DATE
}
