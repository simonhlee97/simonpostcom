import { fetchData } from '../lib/utils'

export default function Test(props) {
  console.log(props.trends);
  
  return (
    <div>Test</div>
  )
}

export async function getStaticProps() {
	let KEY = process.env.NEXT_PUBLIC_YOUTUBE_KEY
	const URL = `https://youtube.googleapis.com/youtube/v3/search?part=snippet%2Cstatistics&publishedAfter=2014-12-31T23%3A59%3A59Z&publishedBefore=2016-01-01T00%3A00%3A01Z&order=viewCount&chart=mostPopular&maxResults=5&regionCode=KR&key=${KEY}`

	async function getData() {
		const youtubeData = fetchData(URL)
		return {
			stats: await youtubeData,
		}
	}
	const {stats} = await getData()
	return {
		props: {
			trends: stats.items,
		},
	}
}