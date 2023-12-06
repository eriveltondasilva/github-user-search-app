export default function getDate(date) {
  const tempDate = new Date(date)
  const formatDate = tempDate.toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })

  return formatDate
}
