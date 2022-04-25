import useSWR from 'swr'
import fetcher from '../../lib/fetcher'

export const ViewCount = () => {
  const { data, error } = useSWR('/api/youtube', fetcher)
  if (error) {
    console.log(error)
  }
  const viewCount = data?.viewCount
  return (
    <>
      <h3>YouTube Views (Fireship)</h3>
      <p>{viewCount}</p>
    </>
  )
}
