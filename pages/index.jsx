import Container from '../components/container'
import { FaGithubSquare } from 'react-icons/fa'

const Home = () => {
	return (
		<Container>
			<div className="flex flex-col justify-center items-center mycontainer pb-12">
				<h1 className="pt-8 font-bold text-3xl md:text-5xl tracking-tight mb-1 text-gray-700">
					Simon Sandbox
				</h1>
				<h3 className="py-8">Small web development projects with Next.js, Notion API</h3>
				<p>Suggestions, feedback, PRs are welcome. Please visit the Github repo.</p>
				<p>
					<a
						href="https://github.com/simonhlee97/simonpostcom"
						className="inline-flex items-center justify-center h-16 px-10 py-0 text-lg font-semibold text-center text-gray-500 no-underline align-middle transition-all duration-300 ease-in-out bg-transparent border-2 border-gray-600 border-solid rounded-full cursor-pointer select-none hover:text-gray-800 hover:border-gray-800 focus:shadow-xs focus:no-underline">
						visit repo &nbsp; <FaGithubSquare size={42} />
					</a>
				</p>
			</div>
		</Container>
	)
}

export default Home
