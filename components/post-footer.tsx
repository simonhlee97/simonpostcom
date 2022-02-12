import Gallery from 'react-photo-gallery'
import { BsCameraFill } from 'react-icons/bs'
import Comments from './comments'
import Link from 'next/link'

// import { BlogPostsProps } from '../types/juliaTypes'


interface Props {
	thumbnails2?: {
		src: string
		width: number
		height: number
	}[]
	camera?: string | ''
}

// const PostFooter = ({ posts }: BlogPostsProps) => { 
// 	return (
// 		<div className="posts">
// 			{!posts && <div>No posts!</div>}
// 			<ul>
// 				{posts &&
// 					posts
// 						.map((post) => {
// 							return (
// 								<article key={post.slug} className="post-title text-blue-500">
// 									<div className="my-0">
// 										{post.frontMatter.tags && post.frontMatter.tags.map((tag) => (
// 											<div key={tag} className="tag text-green-400">
// 												<a href={`/blog/tags/${tag}`}>#{tag}</a>
// 											</div>
// 										))}
// 									</div>
// 									<hr />
// 								</article>
// 							)
// 						})}
// 			</ul>
// 		</div>
// 	)
// }


const PostFooter = ({ thumbnails2, camera }: Props) => {
	
	return (
		<>
			<div className="mt-16 mb-6 md:mb-8 sm:mx-0">
				{thumbnails2 ? <Gallery photos={thumbnails2} /> : ''}
			</div>
			<div className="bg-gray-900 text-gray-200 w-fit px-2 m-auto text-center">
				{camera ? (
					<span className="post-meta">
						<BsCameraFill size={20} className="mr-2" />
						{camera}
					</span>
				) : (
					''
				)}
			</div>
			
			
			<div className="comments">
				<hr className="my-4" />
				<Comments />
			</div>
		</>
	)
}

export default PostFooter
