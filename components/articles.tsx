import Link from "next/link";
import type { PostMeta } from "../lib/newapi";
import styles from '../styles/articles.module.css';

export default function Articles({ posts }: { posts: PostMeta[] }) {
  
  return (
		<ul className={styles.list}>
			{posts.map((post) => (
				<li key={post.slug}>
					<div className={styles.title}>
						<Link href={`/posts/${post.slug}`}>{post.title}</Link>
					</div>
					<p>{post.excerpt}</p>
					<p className={styles.tags}>{post.date}</p>
					<p className={styles.tags}>
						{post.tags.map((tag) => (
							<Link key={tag} href={`/tags/${tag}`}>
								<a className={styles.tag}>{tag}</a>
							</Link>
						))}
					</p>
				</li>
			))}
		</ul>
  )
}