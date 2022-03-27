// import styles from '../styles/youtube.module.css'
import Image from 'next/image'

export default function Thumbnail({ id }: { id: string }) {
	return (
		<div className="my-6 aspect-w-16 aspect-h-9">
			<Image
				// src={`/${src}`}
				src={`https://picsum.photos/id/${id}/800/450`}
				width={800}
				height={450}
				layout='responsive'
				quality={75}
				className="max-w-full h-auto rounded"
			/>
		</div>
	)
}

