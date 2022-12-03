import Head from 'next/head'
import { useRouter } from 'next/router'
import { ReactNode, ReactElement } from 'react'
import Newnav from './Newnav'

interface ContainerChildren {
	children: []
}
interface ContainerProps {}

export default function Container(
	{ children }: { children: ReactNode },
	props: ContainerProps
): ReactElement | null {
	const { ...customMeta } = props
	const router = useRouter()
	const meta = {
		title: 'Simon Lee | Web Developer',
		description: `JavaScript, React, JamStack, VueJS, NodeJS, Rails`,
		image: 'https://avatars.githubusercontent.com/u/22103041?s=400&u=668d531fbba9162341e3b1510491bcf9baf9eff4&v=4',
		date: 'date',
		type: 'website',
		...customMeta,
	}

	return (
		<>
			<Head>
				<title>{meta.title}</title>
				<link
					rel="icon"
					type="image/svg+xml"
					href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22256%22 height=%22256%22 viewBox=%220 0 100 100%22><rect width=%22100%22 height=%22100%22 rx=%2250%22 fill=%22%230f1f9b%22></rect><text x=%2250%%22 y=%2250%%22 dominant-baseline=%22central%22 text-anchor=%22middle%22 font-size=%2279%22>📬</text></svg>"
				/>
				<meta name="robots" content="follow, index" />
				<meta content={meta.description} name="description" />
				<meta property="og:url" content={`https://simonpost.com${router.asPath}`} />
				<link rel="canonical" href={`https://simonpost.com${router.asPath}`} />
				<meta property="og:type" content={meta.type} />
				<meta property="og:site_name" content="SIMONPOST.COM" />
				<meta property="og:description" content={meta.description} />
				<meta property="og:title" content={meta.title} />
				<meta property="og:image" content={meta.image} />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:site" content="@simonhlee97" />
				<meta name="twitter:title" content={meta.title} />
				<meta name="twitter:description" content={meta.description} />
				<meta name="twitter:image" content={meta.image} />
				{meta.date && <meta property="article:published_time" content={meta.date} />}
			</Head>
			<Newnav />
			<main className="min-h-full container-content flex flex-col justify-center px-8 pt-8">
				{children}
			</main>
		</>
	)
}
