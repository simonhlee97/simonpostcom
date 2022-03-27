import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'
import { FaCodeBranch, FaGithub } from 'react-icons/fa'

const Footer = () => {
	return (
		<footer className="bg-slate-100 border-t border-neutral-200">
			<Container>
				<div className="py-28 flex flex-col lg:flex-row items-center">
					<h3 className="text-4xl lg:text-[2.5rem] font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
						SimonPost.com
					</h3>
					<div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
						<a
							href="https://github.com/simonhlee97/"
							className="mx-8 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0">
							<FaGithub size={19} className="inline" /> &nbsp; My GitHub Profile
						</a>

						<div className="group">
							<a
								href="https://github.com/simonhlee97/simonpostcom"
								data-tooltip="Source code for my blog"
								className="hover:text-blue-500 duration-200 transition-colors">
								<FaCodeBranch size={40} />
								<span className='tooltip-text bg-blue-200 p-3 mt-2 -ml-8 rounded hidden group-hover:block absolute text-center py-2 px-6 z-50"'>
									Source code for my blog
								</span>
							</a>
						</div>
					</div>
				</div>
				<div className="text-center pb-8">
					<p>built with Next.js, TypeScript, TailwindCSS</p>
				</div>
			</Container>
		</footer>
	)
}

export default Footer
