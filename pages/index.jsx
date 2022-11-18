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
import { FaGithubSquare } from 'react-icons/fa'

const Home = () => {
	return (
		<Container>
			<div className="flex flex-col justify-center items-center mycontainer pb-12">
				<h1 className="pt-8 font-bold text-3xl md:text-5xl tracking-tight mb-1 text-gray-700">
					Simon Sandbox
				</h1>
				<h3 className="my-4 py-8">
					Small web development projects with Next.js, Notion API
				</h3>
				<p>
					<a
						href="https://github.com/simonhlee97"
						className="inline-flex items-center justify-center h-16 px-10 py-0 text-lg font-semibold text-center text-gray-600 no-underline align-middle transition-all duration-300 ease-in-out bg-transparent border-2 border-gray-600 border-solid rounded-full cursor-pointer select-none hover:text-gray-800 hover:border-gray-800 focus:shadow-xs focus:no-underline">
						visit repo &nbsp; <FaGithubSquare />
					</a>
				</p>
			</div>
		</Container>
	)
}

export default Home
