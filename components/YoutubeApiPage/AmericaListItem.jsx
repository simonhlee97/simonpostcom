import Link from 'next/link'
import { BiLike, BiLineChart } from 'react-icons/bi'


export default function AmericaListItem({ imgurl, likeCount, title, viewCount, id }) {
	return (
		<div className="video-card">
			<p className='video-title'>{title}</p>

			<div className="flex justify-around">
				<div className="flex justify-center items-center">
					<span className="mr-4">
						<BiLineChart />
					</span>
					<span>{new Intl.NumberFormat('en-US').format(viewCount)}</span>
				</div>
				<div className="flex justify-center items-center">
					<span className="mr-4">
						<BiLike />
					</span>
					<span>{new Intl.NumberFormat('en-US').format(likeCount)}</span>
				</div>
			</div>

			<Link href={`https://www.youtube.com/watch?v=${id}`}>
				<a target="_blank">
					<img
						src={imgurl}
						alt="ytthumbnail"
						className="youtube-thumb"
					/>
				</a>
			</Link>
		</div>
	)
}
