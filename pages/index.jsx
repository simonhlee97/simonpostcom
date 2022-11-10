// import { getAllPosts, PostMeta } from '../lib/api'
// import Articles from '../components/articles'
// export default function Home({ posts }: { posts: PostMeta[] }) {
// 	return (
// 		<Container>
// <div className="flex flex-col justify-center items-center mycontainer pb-12">
// 	<h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-gray-100">
// 		SimonPost.com
// 	</h1>
// 	<h2>A blog by Simon Lee</h2>
// 	<p className="mb-16">Blogging about web development and expat-life in Korea.</p>
// 	<Articles posts={posts} />
// </div>
// 		</Container>
// 	)
// }
// export async function getStaticProps() {
// 	const posts = getAllPosts()
// 		.slice(0, 9)
// 		.map((post) => post.meta)

// 	return { props: { posts } }
// }

import React from 'react'
import Container from '../components/container'
import { Client } from '@notionhq/client'

const Home = ({ ideas }) => {
	return (
		<Container>
			<div className="flex flex-col justify-center items-center mycontainer pb-12">
				<h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-gray-100">
					Simon - Sandbox
				</h1>
				<h3 className="my-4">Small projects with Next.js and Notion (as a CMS)</h3>

				<div className="projects">
					{ideas.map((idea) => (
						<div key={idea.id}>
							<h2>{idea.properties.column.title[0].plain_text} &rarr;</h2>
							{/* <p>{idea.properties.description.rich_text[0]}</p> */}
						</div>
					))}
				</div>
			</div>
		</Container>
	)
}

export default Home

export async function getStaticProps() {
	const notion = new Client({ auth: process.env.NOTION_API_KEY })

	const response = await notion.databases.query({
		database_id: process.env.NOTION_DATABASE_ID,
	})

	return {
		props: {
			ideas: response.results,
		},
		revalidate: 7200,
	}
}
