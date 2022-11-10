import { Client } from '@notionhq/client'
import Container from '../components/container'
const FreeCodeCamp = ({ events }) => {
	console.log(events)

	return (
		<Container>
			<div className="py-16 px-16">
				<h3>freeCodeCamp-Seoul Event Calendar</h3>

				<div className="projects">
					{events.map((item) => (
						<div key={item.id} className="event-card">
							<h2>Event: {item.properties.Name.title[0].plain_text}</h2>
							<h4>location: {item.properties.location.rich_text[0].plain_text}</h4>
							<p>summary: {item.properties.short_desc.rich_text[0].plain_text}</p>
							<p>
								date: {new Date(item.properties.Date.date.start).toLocaleString()}
							</p>

							{/* <h2>{item.properties.movie_title.title[0].plain_text} &rarr;</h2> */}
							{/* <p>{item.properties.description.rich_text[0]}</p> */}
						</div>
					))}
				</div>
			</div>
		</Container>
	)
}
export default FreeCodeCamp

export async function getStaticProps() {
	const notion = new Client({ auth: process.env.NOTION_API_KEY })

	const response = await notion.databases.query({
		database_id: process.env.NOTION_DATABASE_ID2,
	})

	return {
		props: {
			events: response.results,
		},
		revalidate: 7200,
	}
}
