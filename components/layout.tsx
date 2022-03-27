import Footer from './footer'
import Meta from './meta'
import Link from 'next/link'
type Props = {
	preview?: boolean
	children: React.ReactNode
}

const Layout = ({ preview, children }: Props) => {
	return (
		<>
			<Meta />
			<div className="container mx-auto px-4">
				<Navbar />
				<main>{children}</main>
			</div>
			<Footer />
		</>
	)
}

function Navbar() {
	return (
		<nav
			className="
          flex flex-wrap
          items-center
          justify-between
          max-w-4xl
          py-4
          md:py-0
          px-4
          text-base text-gray-200">
			<div>
				<a href="/">simonpost.com</a>
			</div>

			<div className="hidden w-full md:flex md:items-center md:w-auto" id="menu">
				<ul
					className="
              pt-4
              text-base text-gray-700
              md:flex
              md:justify-between 
              md:pt-0">
					<li>
						<Link href="/posts">
							<a className="md:p-4 py-2 block hover:text-purple-400">Blog</a>
						</Link>
					</li>
					<li>
						<a
							className="md:p-4 py-2 block hover:text-purple-400 text-purple-500"
							href="/about">
							About
						</a>
					</li>
				</ul>
			</div>
		</nav>
	)
}

export default Layout
