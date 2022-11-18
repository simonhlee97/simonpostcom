import { Client } from '@notionhq/client'
import Container from '../components/container'
import { Table } from '../components/Table'

const columns = [
	{
		label: 'Last Name',
		accessor: 'last_name.rich_text[0].plain_text',
		sortable: true,
	},
	{ label: 'First Name', accessor: 'properties.first_name.title[0].plain_text', sortable: true },
	{ label: 'Salary', accessor: 'properties.salary_2022.number', sortable: true },
	{ label: 'Age', accessor: 'properties.age.number', sortable: true },
]

const Landers = ({ data, headers }) => {
	console.log('headers', headers)

	return (
		<>
			<Container>
				<div className="py-16 px-16">
					<h3>SSG Landers Roster</h3>
					<Table
						caption="SSG Landers Roster"
						data={data}
						columns={columns}
						headers={headers}
					/>
				</div>
			</Container>
		</>
	)
}

export default Landers

export async function getStaticProps() {
	const notion = new Client({ auth: process.env.NOTION_API_KEY })

	const response = await notion.databases.query({
		database_id: process.env.NOTION_DATABASE_ID2,
	})

	return {
		props: {
			data: response.results,
			headers: response,
		},
		revalidate: 290,
	}
}
