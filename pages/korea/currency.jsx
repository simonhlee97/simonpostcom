import { useState, useEffect } from 'react'
import CurrencyInput from '../../components/CurrencyInput'
import Container from '../../components/container'
import Layout from './layout'

const API = process.env.NEXT_PUBLIC_EXCHANGE_API
const BASE_URL = `https://api.apilayer.com/fixer/latest?base=USD&apikey=${API}`

function Currency() {
	const [amount1, setAmount1] = useState(1)
	const [amount2, setAmount2] = useState(1)
	const [currency1, setCurrency1] = useState('USD')
	const [currency2, setCurrency2] = useState('KRW')
	const [rates, setRates] = useState([])

	useEffect(() => {
		fetch(BASE_URL)
			.then((res) => res.json())
			.then((data) => {
				setRates(data.rates)
			})
	}, [])

	useEffect(() => {
		if (!!rates) {
			function init() {
				handleAmount1Change(1)
			}
			init()
		}
	}, [rates])

	function format(number) {
		return number.toFixed(4)
	}

	function handleAmount1Change(amount1) {
		setAmount2(format((amount1 * rates[currency2]) / rates[currency1]))
		setAmount1(amount1)
	}

	function handleCurrency1Change(currency1) {
		setAmount2(format((amount1 * rates[currency2]) / rates[currency1]))
		setCurrency1(currency1)
	}

	function handleAmount2Change(amount2) {
		setAmount1(format((amount2 * rates[currency1]) / rates[currency2]))
		setAmount2(amount2)
	}

	function handleCurrency2Change(currency2) {
		setAmount1(format((amount2 * rates[currency1]) / rates[currency2]))
		setCurrency2(currency2)
	}

	return (
		<Container>
			<Layout>
				<div className="text-center">
					<h1 className="py-12">Currency Converter</h1>
					<CurrencyInput
						onAmountChange={handleAmount1Change}
						onCurrencyChange={handleCurrency1Change}
						currencies={Object.keys(rates)}
						amount={amount1}
						currency={currency1}
					/>
					<CurrencyInput
						onAmountChange={handleAmount2Change}
						onCurrencyChange={handleCurrency2Change}
						currencies={Object.keys(rates)}
						amount={amount2}
						currency={currency2}
					/>
				</div>
			</Layout>
		</Container>
	)
}

export default Currency
