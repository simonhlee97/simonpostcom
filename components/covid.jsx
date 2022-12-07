import { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2'
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js'
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

const COVID_URL = 'https://api.covid19api.com/country/korea-south/status/confirmed/live'

function Covid() {
	const [cases, setCases] = useState([])

	const getApiData = async () => {
		const response = await fetch(COVID_URL).then((response) => response.json())
		// console.log(response.slice(-7))
		setCases(response.slice(-7))
	}

	useEffect(() => {
		getApiData()
	}, [])

	const options = {
		responsive: true,
		plugins: {
			legend: {
				position: 'top',
			},
			title: {
				display: true,
				text: 'South Korea COVID cases - last 7 days running count',
			},
		},
	}

	let datanew = {
		labels: cases.map((x) => new Date(x.Date).toLocaleDateString()),
		datasets: [
			{
				label: 'COVID cases',
				data: cases.map((x) => x.Cases),
				backgroundColor: 'blue',
			},
		],
	}

	return (
		<div className="text-center pt-12">
			<div className="covid py-8 my-8">
				<section className="mx-auto relative" style={{ width: '800px', height: '800px' }}>
					<Line options={options} data={datanew} />
				</section>
			</div>
			<div className="pt-2 pb-12">
				<a href="https://documenter.getpostman.com/view/10808728/SzS8rjbc" target="_blank">
					source: Korea COVID19 Data
				</a>
			</div>
		</div>
	)
}
export default Covid
