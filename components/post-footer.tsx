// import ThumbnailImage from './thumbnail-image'
import Gallery from 'react-photo-gallery'

interface Props {
	thumbnails2: {
		src: string
		width: number
		height: number
	}[]
}

const PostFooter = ({ thumbnails2 }: Props) => {
	return (
		<>
			<div className="mb-8 md:mb-16 sm:mx-0">
				<Gallery photos={thumbnails2} />
			</div>
		</>
	)
}

export default PostFooter
