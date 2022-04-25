import AmericaListItem from './AmericaListItem'

export default function AmericaList({ stats }) {
	const sortedVids = stats.sort((a, b) =>
		Number(b.statistics.viewCount - Number(a.statistics.viewCount))
	)
	return (
		<div className="video-list" style={{ overflowX: 'auto' }}>
			{sortedVids &&
				sortedVids.map((vid) => (
					<AmericaListItem
						key={vid.id}
						id={vid.id}
						title={vid.snippet.title}
						imgurl={vid.snippet.thumbnails.high.url}
						viewCount={vid.statistics.viewCount}
						likeCount={vid.statistics.likeCount}
					/>
				))}
		</div>
	)
}
