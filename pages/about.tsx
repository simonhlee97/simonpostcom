import Container from '../components/container'
import Layout from '../components/layout'
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa'

export default function About() {
	return (
		<>
			<Layout>
				<Container>
					<div className="py-2 m-auto max-w-prose">
						<img
							src="/assets/blog/authors/simonface.jpg"
							className="mt-20 mb-4 mx-auto simonface"
							alt="simonface"
						/>
						<p className="mb-8 text-3xl text-center">Hi, I'm Simon.</p>
						<p className="mb-8">
							I'm a Korean-born 'Hoosier' (a person from Indiana), so born in rice
							fields, grew up in corn fields. I also lived in Chicago for about 10
							years. Go Cubs.
						</p>

						<p className="mb-8">
							I'm a web developer, books/podcast nerd, 4.0 tennis player, terrible
							golfer, pizza/taco connoisseur, and (not ashamed to admit) a die-hard
							Indiana Pacers fan.
						</p>
						<p className="mb-8">
							My blog is mostly about tech and web development topics like JavaScript,
							React, VueJS, HTML, CSS, databases, etc. and (occasionally) everyday
							life as a Hoosier-expat in Korea.
						</p>
						<p className="mb-8 text-xl">Connect:</p>
						<p className="mb-8 flex">
							<a href="https://github.com/simonhlee97">
								<FaGithubSquare
									className="mr-4 hover:cursor-pointer hover:text-blue-600"
									size={34}
								/>
							</a>

							<a href="https://linkedin.com/in/simon-h-lee">
								<FaLinkedin
									className="mr-4 hover:cursor-pointer hover:text-blue-600"
									size={34}
								/>
							</a>

							<a href="https://twitter.com/simonhlee97">
								<FaTwitterSquare
									className="hover:cursor-pointer hover:text-blue-600"
									size={34}
								/>
							</a>
						</p>
					</div>
				</Container>
			</Layout>
		</>
	)
}
