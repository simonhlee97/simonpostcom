import Container from '../components/container'
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa'
import styles from '../styles/test.module.css'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
import { useState } from 'react'

export default function About() {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [message, setMessage] = useState('')

	// Form submit handler
	const submitForm = async (e) => {
		e.preventDefault()
		const res = await fetch('/api/submit-form', {
			method: 'POST',
			body: JSON.stringify({ name, email, message }),
		})
		// Success if status code is 201
		if (res.status === 201) {
			toast('Thank you for contacting us!', { type: 'success' })
			setName('')
			setEmail('')
			setMessage('')
		} else {
			toast('Please re-check your inputs.', { type: 'error' })
		}
	}

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

				<div className="pt-12">
					<div className={styles.container}>
						<ToastContainer />
						<form className={styles.form} onSubmit={submitForm}>
							<h1 className={styles.title}>Contact me</h1>
							<div>
								<label htmlFor="name">Full Name</label>
								<input
									type="text"
									id="name"
									name="name"
									placeholder="Rex Kwon Do"
									value={name}
									onChange={(e) => setName(e.target.value)}
									required
								/>
							</div>
							<div className={styles.inputs}>
								<div>
									<label htmlFor="email">E-Mail Address</label>
									<input
										type="email"
										name="email"
										placeholder="johndoe@example.io"
										value={email}
										onChange={(e) => setEmail(e.target.value)}
										required
									/>
								</div>
							</div>
							<div>
								<label htmlFor="message">Message</label>
								<textarea
									name="message"
									id="message"
									rows="5"
									placeholder="Hi there!"
									value={message}
									onChange={(e) => setMessage(e.target.value)}
									required></textarea>
							</div>
							<button className={styles.btn} type="submit">
								Submit
							</button>
						</form>
					</div>
				</div>
			</Container>
		</>
	)
}
