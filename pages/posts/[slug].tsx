import type { GetStaticProps, GetStaticPaths } from 'next'
import Image from 'next/image'
import Head from 'next/head'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeHighlight from 'rehype-highlight'
import { getPostFromSlug, getSlugs, PostMeta } from '../../lib/api'
import { YouTube, Thumbnail } from '../../components'

import 'highlight.js/styles/atom-one-dark.css'
import Container from '../../components/container'
import Comments from '../../components/comments'
import SectionSeparator from '../../components/section-separator';

interface MDXPost {
	source: MDXRemoteSerializeResult<Record<string, unknown>>
	meta: PostMeta
}

export default function PostPage({ post }: { post: MDXPost }) {
	return (
		<>
			<Head>
				<title>{post.meta.title}</title>
			</Head>
			<Container>
				<div className="mycontainer">
					<h1 className="text-center font-bold">{post.meta.title}</h1>
					<p className="text-center">{post.meta.date}</p>
					<SectionSeparator />
					<MDXRemote
						{...post.source}
						components={{
							
							YouTube,
							Image,
							Thumbnail,
							
						}}
					/>
				</div>
				<div className="post-footer max-w-2xl mx-auto w-full">
					<hr className="hr" />
					<p className="text-center mx-auto my-4">Feel free to drop a comment</p>
					<Comments />
				</div>
			</Container>
		</>
	)
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const { slug } = params as { slug: string }
	const { content, meta } = getPostFromSlug(slug)
	const mdxSource = await serialize(content, {
		mdxOptions: {
			rehypePlugins: [
				rehypeSlug,
				[rehypeAutolinkHeadings, { behavior: 'wrap' }],
				rehypeHighlight,
			],
		},
	})

	return { props: { post: { source: mdxSource, meta } } }
}

export const getStaticPaths: GetStaticPaths = async () => {
	const paths = getSlugs().map((slug) => ({ params: { slug } }))

	return {
		paths,
		fallback: false,
	}
}
