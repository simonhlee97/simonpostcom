import Footer from './footer'
import Meta from './meta'
import { BiHome } from 'react-icons/bi'
import Link from 'next/link'
type Props = {
	preview?: boolean
	children: React.ReactNode
}

const Layout = ({ preview, children }: Props) => {
	return (
		<>
			<Meta />
			<div className="min-h-screen">
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
          w-full
          py-4
          md:py-0
          px-4
          text-lg text-gray-700
					bg-slate-100
        ">
			<div>
				<a className="hover:text-blue-500" href="/">
					<BiHome size={30} />
				</a>
			</div>

			<div className="w-full md:flex md:items-center md:w-auto " id="menu">
				<ul
					className="
              text-base text-gray-700
              pt-4
              md:flex
              md:justify-between
              md:pt-0">
					<li>
						<Link href="/about">
							<a className="md:p-4 py-2 block hover:text-blue-500">
								About
							</a>
						</Link>
					</li>
					<li>
						<Link href="/archive">
							<a className="md:p-4 py-2 block hover:text-blue-500">Archive</a>
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	)
}

export default Layout
