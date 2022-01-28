import Gallery from 'react-photo-gallery'
import { BsCameraFill } from 'react-icons/bs'
import Comments from './comments'

interface Props {
	thumbnails2?: {
		src: string
		width: number
		height: number
	}[]
	camera?: string | ''
}

const PostFooter = ({ thumbnails2 , camera}: Props) => {
	return (
		<>
			<div className="mt-16 mb-6 md:mb-8 sm:mx-0">
				<Gallery photos={thumbnails2} />
			</div>
			<div className="bg-gray-900 text-gray-200 w-fit px-2 m-auto text-center">
				<span
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
					}}>
					<BsCameraFill size={20} className='mr-1' />
					{camera}
				</span>
			</div>

			<div className="comments">
				<hr className='my-4' />
				<Comments />
			</div>
		</>
	)
}

export default PostFooter
