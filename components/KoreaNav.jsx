import Link from 'next/link'

export default function KoreaNav() {
	return (
		<div className="pt-4 flex justify-center">
			<Link href="/korea">
				<a className="korea-links">Korea Tips page</a>
			</Link>
			<Link href="/korea/currency">
				<a className="korea-links">Currency Converter</a>
			</Link>
			<Link href="/korea/pyeong">
				<a className="korea-links">Real Estate Measurement Converter</a>
			</Link>
		</div>
	)
}
