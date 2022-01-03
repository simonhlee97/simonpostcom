import Author from './author'

type PostType = {
	slug: string
	title: string
	date: string
	coverImage: string
	thumbnails2: {
		src: string
		width: number
		height: number
	}[]
	author: Author
	excerpt: string
	ogImage: {
		url: string
	}
	content: string
}

export default PostType
