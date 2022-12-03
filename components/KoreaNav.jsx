import Link from 'next/link'
import { useRouter } from 'next/router'

export default function KoreaNav() {
	const router = useRouter()

	return (
		<div className="pt-4 flex justify-center">
			<Link href="/korea">
				<a className={router.pathname == '/korea' ? 'korea-active' : 'korea-links'}>
					Korea Tips 🏡
				</a>
			</Link>
			<Link href="/korea/currency">
				<a
					className={
						router.pathname == '/korea/currency' ? 'korea-active' : 'korea-links'
					}>
					Currency Converter
				</a>
			</Link>
			<Link href="/korea/pyeong">
				<a className={router.pathname == '/korea/pyeong' ? 'korea-active' : 'korea-links'}>
					Real Estate Measurement Converter
				</a>
			</Link>
			<Link href="/korea/food">
				<a className={router.pathname == '/korea/food' ? 'korea-active' : 'korea-links'}>
					Best Food
				</a>
			</Link>
		</div>
	)
}
