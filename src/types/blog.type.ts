export interface BlogPost {
    slug: string
    title: string
    description: string
    date: string
    updatedAt?: string
    readingTime: string
    tags: string[]
    thumbnail: string
    content: string
}