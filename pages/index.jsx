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

import Container from '../components/container'

const Home = () => {
	return (
		<Container>
			<div className="flex flex-col justify-center items-center mycontainer pb-12">
				<h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-gray-100">
					Simon - Sandbox
				</h1>
				<h3 className="my-4">Small projects with Next.js and Notion (as a CMS)</h3>
			</div>
		</Container>
	)
}

export default Home
