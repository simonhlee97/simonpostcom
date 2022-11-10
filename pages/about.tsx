import Container from '../components/container'
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa'

export default function About() {
	return (
		<>
			<Container>
				<div className="mycontainer">
					<img
						src="/assets/blog/authors/simonface.jpg"
						className="mt-8 mb-4 mx-auto simonface"
						alt="simonface"
					/>
					<h4 className="mb-8 text-3xl text-center">Hi, I'm Simon.</h4>
					<p className="mb-8">
						I'm a Korean-born 'Hoosier' (a person from Indiana), so born in rice fields
						🌾, grew up in corn fields 🌽. I also lived in Chicago for about 10 years,
						so a Cubs fan as well ⚾️.
					</p>

					<p className="mb-8">
						This 'Sandbox' is my home for experimenting with code! 💾
					</p>

					<p className="mb-8">
						I'm a Frontend Developer who enjoys building UIs and fullstack applications
						with Jamstack and serverless tools. I am also a books/podcast nerd, 4.0
						tennis player, 15-handicap golfer, pizza/taco connoisseur, and (not ashamed
						to admit) a die-hard Indiana Pacers fan 🏀.
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
		</>
	)
}
