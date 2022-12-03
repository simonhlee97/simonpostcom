import Link from 'next/link'
import React from 'react'
import { FaHamburger } from 'react-icons/fa'

export default function Newnav() {
	const [navbarOpen, setNavbarOpen] = React.useState(false)
	return (
		<>
			<nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-indigo-500 mb-3">
				<div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
					<div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
						<Link href="/">
							<a className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white">
								Simon-Sandbox
							</a>
						</Link>

						<button
							className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
							type="button"
							onClick={() => setNavbarOpen(!navbarOpen)}>
							<FaHamburger />
						</button>
					</div>
					<div
						className={
							'lg:flex flex-grow items-center' + (navbarOpen ? ' flex' : ' hidden')
						}
						id="example-navbar-danger">
						<ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
							<li className="nav-item">
								<Link href="/about">
									<a className="text-sm font-bold leading-relaxed inline-block mr-4 pt-4 whitespace-nowrap uppercase text-white">
										About
									</a>
								</Link>
							</li>
							<li className="nav-item">
								<Link href="/korea">
									<a className="text-sm font-bold leading-relaxed inline-block mr-4 pt-4 whitespace-nowrap uppercase text-white">
										Korea-Travel-Tips
									</a>
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	)
}
