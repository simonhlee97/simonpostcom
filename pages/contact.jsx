import Container from '../components/container'
import styles from '../styles/test.module.css'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
import { useState } from 'react'

const Contact = () => {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [message, setMessage] = useState('')

	// Form submit handler
	const submitForm = async (e) => {
		e.preventDefault()
		const res = await fetch('http://localhost:3000/api/submit-form', {
			method: 'POST',
			body: JSON.stringify({ name, email, purpose, message }),
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

	// https://blog.logrocket.com/creating-contact-forms-with-the-notion-api-and-next-js/
	return (
		<>
			<Container>
				<div className="py-16 px-16">
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
								{/* <div>
									<label htmlFor="purpose">Purpose</label>
									<select
										name="purpose"
										id="purpose"
										value={purpose}
										onChange={(e) => setPurpose(e.target.value)}>
										<option value="one" disabled required>
											Select one
										</option>
										<option value="Web Development">Web Development</option>
										<option value="App Development">App Development</option>
										<option value="Query / Question">Query / Question</option>
										<option value="Feedback / Message">
											Feedback / Message
										</option>
									</select>
								</div> */}
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

export default Contact
