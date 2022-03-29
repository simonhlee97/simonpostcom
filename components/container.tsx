import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState, ReactNode, ReactElement } from 'react'
import NextLink from 'next/link'
import cn from 'classnames'
import MobileMenu from './mobileMenu'

interface NavItem {
	href: string;
	text: string;
}

interface ContainerChildren { 
	children: [];
}
interface ContainerProps { 

}

function NavItem({ href, text }: NavItem) {
	const router = useRouter()
	const isActive = router.asPath === href

	return (
		<NextLink href={href}>
			<a
				className={cn(
					isActive
						? 'font-semibold text-gray-200'
						: 'font-normal text-gray-400',
					'hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-800 transition-all text-sm'
				)}>
				<span className="capsize">{text}</span>
			</a>
		</NextLink>
	)
}

export default function Container({ children }: {children: ReactNode}, props: ContainerProps): ReactElement | null {
	const [mounted, setMounted] = useState(false)
	const { ...customMeta } = props
	const router = useRouter()
	const meta = {
		title: 'Simon Lee | Web Developer, blogger',
		description: `JavaScript, React, JamStack, Vuejs coder`,
		image: 'https://avatars.githubusercontent.com/u/22103041?s=400&u=668d531fbba9162341e3b1510491bcf9baf9eff4&v=4',
		date: 'date',
		type: 'website',
		...customMeta,
	}

	return (
		<div>
			<Head>
				<title>{meta.title}</title>
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
			<div className="flex flex-col justify-center px-8">
				<nav className="flex items-center justify-center w-full relative max-w-2xl border-gray-700 mx-auto pt-8 pb-8 sm:pb-16 bg-opacity-60 text-gray-100">
					<div>
						<MobileMenu />
						<NavItem href="/" text="Home" />
						<NavItem href="/about" text="About" />
					</div>
				</nav>
			</div>
			<main className="flex flex-col justify-center px-8">{children}</main>
		</div>
	)
}
