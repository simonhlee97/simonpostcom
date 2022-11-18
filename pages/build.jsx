import Container from '../components/container'

export default function Build() {
	return (
		<Container>
			<h2>Select and draft your fantasy team</h2>
			<div className="component">
				<input type="search" placeholder="search players" />
			</div>
		</Container>
	)
}
