import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'
import { BlogPost } from '@/types/blog.type'



const postsDirectory = path.join(process.cwd(), 'src/content/posts')


export function getAllPosts(): BlogPost[] {
    const files = fs.readdirSync(postsDirectory);

    const posts = files.map((filename) => {
        const filePath = path.join(postsDirectory, filename)
        const fileContent = fs.readFileSync(filePath, 'utf-8')
        const { data, content } = matter(fileContent)
        const slug = filename.replace(/\.mdx?$/, '')

        return {
            slug,
            ...data,
            content: '', // Not needed for list view
            readingTime: readingTime(content).text,
        } as BlogPost
    })

    return posts.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    )
}

export function getPostBySlug(slug: string): BlogPost | null {
    try {
        const filePath = path.join(postsDirectory, `${slug}.mdx`)
        const fileContent = fs.readFileSync(filePath, 'utf-8')
        const { data, content } = matter(fileContent)

        return {
            slug,
            ...data,
            content,
            readingTime: readingTime(content).text
        } as BlogPost
    } catch {
        return null
    }
}
