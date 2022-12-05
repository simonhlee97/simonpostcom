import Container from '../../components/container'
import Covid from '../../components/covid'
import Layout from './layout'

export default function Korea() {
	return (
		<Container>
			<Layout>
				<div className="text-center pt-12">
					<h3>
						Some tools and tips that you may find helpful if you are traveling to Korea
						🇰🇷
					</h3>
					<h4>I'll be adding more to this project. Feel free to send suggestions.</h4>
				</div>
				<section>
					<Covid />
				</section>
			</Layout>
		</Container>
	)
}
