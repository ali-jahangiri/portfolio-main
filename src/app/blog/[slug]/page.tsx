import { notFound } from 'next/navigation';
import Link from 'next/link';

import PageContentContainer from '@/components/features/pageContentContainer';
import Container from '@/components/ui/container';
import Footer from '@/components/features/footer';

import TableOfContentsWrapper from '@/components/features/tableOfContentsWrapper';
import { getAllPosts, getPostBySlug } from '@/lib/blog-utils';
import { extractHeadings } from '@/lib/toc-utils';
import Badge from '@/components/ui/badge';
import { formatDate } from '@/lib/utils';
import MarkdownParser from '@/components/features/markdownParser';
import Image from 'next/image';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      ...(post.updatedAt && { modifiedTime: post.updatedAt }),
      tags: post.tags,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const headings = extractHeadings(post.content);

  return (
    <PageContentContainer>
      <Container>
        {/* Back Button */}
        <Link
          href="/blog"
          className="inline-flex sticky top-16 xl:top-20 left-2 xl:left-4 z-10 items-center gap-1.5 xl:gap-2 text-sm xl:text-base text-neutral-600 hover:text-neutral-800 transition-colors mb-4 xl:mb-0"
        >
          <svg
            className="size-4 xl:size-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m12 19-7-7 7-7" />
            <path d="M19 12H5" />
          </svg>
          <span className="hidden sm:inline">Back to Blog</span>
          <span className="sm:hidden">Back</span>
        </Link>

        <div className="flex flex-col xl:flex-row items-start justify-center relative gap-6 xl:gap-8">
          <article className="flex-1 max-w-4xl px-4 sm:px-6 lg:px-8 xl:px-0 mb-6 xl:mb-10 mx-auto w-full">
            {/* Article Header */}
            <div className="mb-6 xl:mb-10">
              <div className="mb-4 xl:mb-6">
                <Image
                  className="w-full h-auto rounded-lg"
                  src={post.thumbnail}
                  width={800}
                  height={400}
                  alt="blog-thumb"
                  priority
                />
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-neutral-900 mb-4 xl:mb-6 leading-tight">{post.title}</h1>
              <div className="flex flex-wrap items-center gap-2 xl:gap-4 text-sm xl:text-base text-neutral-600 mb-4 xl:mb-6">
                <time dateTime={post.date}>{formatDate(post.date)}</time>
                <span className="hidden sm:inline">•</span>
                <span>{post.readingTime}</span>
                {post.tags && !!post.tags.length && (
                  <>
                    <span className="hidden sm:inline">•</span>
                    <div className="flex flex-wrap gap-1.5 xl:gap-2">
                      {post.tags.map((tag: string) => (
                        <Badge key={tag} title={tag} />
                      ))}
                    </div>
                  </>
                )}
              </div>

              {post.description && (
                <p className="text-lg sm:text-xl xl:text-xl text-neutral-700 my-6 xl:my-10 leading-relaxed">
                  {post.description}
                </p>
              )}
            </div>
            {/* Article Content */}
            <MarkdownParser content={post.content} />
          </article>

          {!!headings.length && (
            <div className="hidden xl:block">
              <TableOfContentsWrapper headings={headings} />
            </div>
          )}
        </div>
        <Footer />
      </Container>
    </PageContentContainer>
  );
}
