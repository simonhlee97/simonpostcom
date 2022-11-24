import Image from 'next/image'

export function Thumbnail({ src }: { src: string }) {
	return (
		<div className="my-8 aspect-w-16 aspect-h-9">
			<Image
				src={src}
				width={800}
				height={450}
				layout="responsive"
				quality={80}
				className="max-w-full h-auto rounded"
			/>
		</div>
	)
}
