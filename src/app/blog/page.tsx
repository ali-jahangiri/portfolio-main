import PageContentContainer from '@/components/features/pageContentContainer';
import Container from '@/components/ui/container';
import BlogCard from '@/components/features/blogCard';
import Footer from '@/components/features/footer';
import { getAllPosts } from '@/lib/blog-utils';
import ScrollToTop from '@/components/features/scrollToTop';

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <PageContentContainer>
      <h1 className="text-8xl">Blog</h1>

      <ScrollToTop />
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-12">
          {posts.map((post, i) => (
            <BlogCard
              title={post.title}
              date={post.date}
              slug={post.slug}
              readingTime={post.readingTime}
              categories={post.tags}
              thumbImgSrc={post.thumbnail}
              key={i}
            />
          ))}
        </div>
        <Footer />
      </Container>
    </PageContentContainer >
  );
}
