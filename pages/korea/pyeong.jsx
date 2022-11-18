import { useState, useEffect } from 'react'
import Container from '../../components/container'
import Layout from './layout'

function Pyeong() {
	const [pyg, setPyg] = useState(1)

	function handleChange(e) {
		setPyg(e.target.value)
	}
	function convert(pyg) {
		return pyg * 3.30579
	}
	function convertFeet(pyg) {
		return pyg * 35.583
	}

	return (
		<Container>
			<Layout>
				<div className="text-center">
					<h1 className="py-12">Pyeong Converter</h1>
					<h3>
						What's a Pyeong? 🇰🇷 Korea uses pyeong (평) for measuring apartments,
						offices, villas, etc.
					</h3>

					<input
						type="number"
						className="my-8"
						placeholder="enter amount (평)"
						value={pyg}
						onChange={handleChange}
					/>
					<h4>
						<span className="pyg">{pyg}</span> pyeong is{' '}
						<span className="pyg">{convert(pyg)}</span> square meters or{' '}
						<span className="pyg">{convertFeet(pyg)}</span> square feet for you silly
						Americans 🇺🇸.
					</h4>
					<hr className="my-8" />
				</div>
			</Layout>
		</Container>
	)
}

export default Pyeong
