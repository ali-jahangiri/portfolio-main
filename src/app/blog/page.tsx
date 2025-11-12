import { getAllPosts } from '@/lib/blog-utils'
import PageContentContainer from '@/components/features/pageContentContainer';
import Container from '@/components/ui/container';
import Link from 'next/link';
import BlogCard from '@/components/features/blogCard';

export default function BlogPage() {
    const posts = getAllPosts()

    console.log(posts);


    return (
        <PageContentContainer >
            <h1 className='text-8xl'>Blog</h1>

            <Container>
                {/* Main Blog Sections */}
                <div className='w-full h-120 group rounded-2xl overflow-hidden bg-gray-100 cursor-pointer flex items-center mt-10'>
                    {/* Content */}
                    <div className='bg-primary/20  flex items-start justify-center gap-y-6 flex-col p-10 w-5/12 h-full'>
                        <h2 className='text-neutral-800 text-5xl font-semibold'>10 Surprising Facts About JavaScript Engines Every Developer Should Know</h2>
                        <h3 className='text-neutral-600 mt-4'>
                            Discover the hidden mechanisms behind JavaScript engines and how these powerful tools impact your code performance, compatibility, and debugging. Dive into essential insights every developer should have in their toolkit.
                        </h3>
                        {/* Action */}

                        <div className='flex items-center'>
                            <div className='flex items-center justify-center bg-primary rounded-full size-10 transition group-hover:scale-110'>
                                <svg className="size-4 fill-white" xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512"><path d="M21.5,0H9V3h9.879L.026,21.853l2.121,2.121L21,5.121V15h3V2.5c0-1.378-1.121-2.5-2.5-2.5Z" /></svg>
                            </div>
                            <span className='text-neutral-800 ml-2 font-semibold'>Read Full article!</span>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
                    <BlogCard
                        title="Understanding TypeScript Generics"
                        desc="Master the concept of generics in TypeScript to write flexible and reusable components."
                        date="2024-03-01"
                        slug="understanding-typescript-generics"
                        readingTime="5 min read"
                        coverImage="/images/blog/typescript-generics.jpg"
                    />
                    <BlogCard
                        title="React Server Components: The Future"
                        desc="Get to grips with Server Components in React and how they change modern frontend development."
                        date="2024-02-18"
                        slug="react-server-components"
                        readingTime="7 min read"
                        coverImage="/images/blog/react-server-components.jpg"
                    />
                    <BlogCard
                        title="CSS Grid vs Flexbox: When to Use What"
                        desc="A practical comparison between CSS Grid and Flexbox for responsive layouts."
                        date="2024-02-05"
                        slug="css-grid-vs-flexbox"
                        readingTime="6 min read"
                        coverImage="/images/blog/css-grid-flexbox.jpg"
                    />
                    <BlogCard
                        title="Improve API Performance with Caching"
                        desc="Learn simple caching strategies to supercharge your REST APIs."
                        date="2024-01-29"
                        slug="api-performance-caching"
                        readingTime="4 min read"
                        coverImage="/images/blog/api-caching.jpg"
                    />
                    <BlogCard
                        title="A Beginner’s Guide to Next.js"
                        desc="Everything you need to start building incredible websites with Next.js."
                        date="2024-01-16"
                        slug="beginners-guide-nextjs"
                        readingTime="8 min read"
                        coverImage="/images/blog/nextjs-guide.jpg"
                    />
                    <BlogCard
                        title="Effective Debugging in VSCode"
                        desc="Unlock VSCode’s hidden debugging features for a better developer experience."
                        date="2024-01-12"
                        slug="effective-debugging-vscode"
                        readingTime="5 min read"
                        coverImage="/images/blog/vscode-debugging.jpg"
                    />
                    <BlogCard
                        title="How JavaScript Closures Work"
                        desc="Demystify closures in JavaScript with clear explanations and simple examples."
                        date="2023-12-28"
                        slug="javascript-closures-explained"
                        readingTime="4 min read"
                        coverImage="/images/blog/js-closures.jpg"
                    />
                    <BlogCard
                        title="Deploying on Vercel: Best Practices"
                        desc="Ensure your sites are fast and reliable with these Vercel deployment tips."
                        date="2023-12-15"
                        slug="vercel-deployment-best-practices"
                        readingTime="6 min read"
                        coverImage="/images/blog/vercel-deploy.jpg"
                    />
                </div>
            </Container>
        </PageContentContainer>
    )
}
