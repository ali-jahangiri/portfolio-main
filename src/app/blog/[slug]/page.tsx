import { getAllPosts, getPostBySlug } from '@/lib/blog-utils'
import { MDXRemote } from 'next-mdx-remote/rsc'

export async function generateStaticParams() {
    const posts = getAllPosts()
    return posts.map((p) => ({ slug: p.slug }))
}

export default function PostPage({ params }: { params: { slug: string } }) {
    const post = getPostBySlug(params.slug)

    return (
        <article className="max-w-3xl mx-auto p-6 prose">
            <h1>{post.title}</h1>
            <p className="text-gray-500">
                {new Date(post.date).toLocaleDateString()} • {post.readingTime}
            </p>
            <MDXRemote source={post.content} />
        </article>
    )
}
