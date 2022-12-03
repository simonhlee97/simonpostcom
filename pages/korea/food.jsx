import Container from '../../components/container'
import Layout from './layout'

function Food() {
	return (
		<Container>
			<Layout>
				<div className="text-center">
					<h1 className="py-12">Best Food in Korea</h1>
					<h3 className="pb-4">
						This list is open source. Feel free to add your favorite restaurant or cafe.
					</h3>

					<FormInput />
				</div>
			</Layout>
		</Container>
	)
}

export default Food

function FormInput() {
	const handleSubmit = (e) => {
		e.preventDefault()
		console.log('not completely ready yet')
	}
	return (
		<>
			<div className="container mx-auto px-4 max-w-xl">
				<div className="w-full px-4">
					<div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0">
						<div className="rounded-t mb-0 px-6 py-6">
							<div className="text-center mb-3">
								<h6 className="text-gray-600 uppercase text-sm font-bold">
									Recommend best food spots in Korea
								</h6>
							</div>
							<hr className="mt-6 border-b-1 border-gray-400" />
						</div>
						<div className="flex-auto px-4 lg:px-10 py-10 pt-0">
							<form onSubmit={handleSubmit}>
								<div className="relative w-full mb-3">
									<input
										type="text"
										className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
										placeholder="best food in Korea"
										style={{ transition: 'all .15s ease' }}
									/>
								</div>

								<div className="text-center mt-6">
									<button
										className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
										type="submit"
										style={{ transition: 'all .15s ease' }}>
										Suggest it!
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
