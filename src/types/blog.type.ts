export interface BlogPost {
    slug: string
    title: string
    description: string
    date: string
    publishedAt: string
    updatedAt?: string
    readingTime: string
    tags: string[]
    thumbnail: string
    content: string
}

export interface BlogPostFrontmatter {
    title: string
    description: string
    date: string
    publishedAt: string
    updatedAt?: string
    tags: string[]
    thumbnail: string
}