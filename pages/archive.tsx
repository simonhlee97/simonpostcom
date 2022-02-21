import { getAllPosts } from '../lib/api'
import Post from '../types/post'
import Layout from '../components/layout'
import Container from '../components/container'
import PostTitle from '../components/post-title'

import Link from 'next/link'
import SectionSeparator from '../components/section-separator';


type Props = {
	allPosts: Post[]
}

const Archive = ({ allPosts }: Props) => { 
  return (
		<Layout>
			<Container>
				<div className="mt-12">
					<PostTitle>Archive</PostTitle>
					{allPosts.map((post) => (
						<li className="article">
							<Link href={`/posts/${post.slug}`}>{post.title}</Link>
						</li>
					))}
				</div>
			</Container>
		</Layout>
  )
}
export default Archive

export const getStaticProps = async () => {
	const allPosts = getAllPosts(['title', 'date', 'slug'])

	return {
		props: { allPosts },
	}
}
