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
          className="inline-flex sticky top-20 left-2 z-10 items-center gap-2 text-neutral-600 hover:text-neutral-800 transition-colors"
        >
          <svg
            className="size-5"
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
          Back to Blog
        </Link>

        <div className="flex items-start justify-center relative">
          <article className="flex-1 max-w-3xl px-4 mb-10 ml-auto mr-auto sm:px-6 lg:px-0 w-full">
            {/* Article Header */}
            <div className="mb-10">
              <h1 className="text-5xl md:text-6xl font-bold text-neutral-900 mb-6 leading-tight">{post.title}</h1>
              <div className="flex flex-wrap items-center gap-4 text-neutral-600 mb-6 text-base">
                <time dateTime={post.date}>{formatDate(post.date)}</time>
                <span>•</span>
                <span>{post.readingTime}</span>
                <span>•</span>
                {post.tags && !!post.tags.length && (
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag: string) => (
                      <Badge key={tag} title={tag} />
                    ))}
                  </div>
                )}
              </div>

              {post.description && <p className="text-xl text-neutral-700 my-10 leading-relaxed">{post.description}</p>}
            </div>
            {/* Article Content */}
            <MarkdownParser content={post.content} />
          </article>

          {!!headings.length && <TableOfContentsWrapper headings={headings} />}
        </div>
        <Footer />
      </Container>
    </PageContentContainer>
  );
}
