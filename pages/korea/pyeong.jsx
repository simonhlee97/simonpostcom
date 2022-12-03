import { useState, useEffect } from 'react'
import Container from '../../components/container'
import Layout from './layout'

function Pyeong() {
	const [pyg, setPyg] = useState(1)

	function roundToTwo(num) {
		return +(Math.round(num + 'e+2') + 'e-2')
	}
	function handleChange(e) {
		setPyg(e.target.value)
	}
	function convert(pyg) {
		return roundToTwo(pyg * 3.30579)
	}
	function convertFeet(pyg) {
		return roundToTwo(pyg * 35.583)
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

					<section>
						<div className="row bg-gray-100">
							<div className="column">
								<h2>
									<span className="pyg">{pyg}</span>
								</h2>
								<p>Pyeong</p>
							</div>
							<div className="column">
								<h2>
									<span className="pyg">{convert(pyg)}</span>
								</h2>
								<p>Sq. Meters</p>
							</div>
							<div className="column">
								<h2>
									<span className="pyg">{convertFeet(pyg)}</span>
								</h2>
								<p>Sq. Feet 🇺🇸</p>
							</div>
						</div>
					</section>

					<hr className="my-8" />
				</div>
			</Layout>
		</Container>
	)
}

export default Pyeong
