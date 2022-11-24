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
				<div className="py-16 px-16"></div>
			</Container>
		</>
	)
}

export default Contact
