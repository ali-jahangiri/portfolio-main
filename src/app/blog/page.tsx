import PageContentContainer from '@/components/features/pageContentContainer';
import Container from '@/components/ui/container';
import BlogCard from '@/components/features/blogCard';
import Footer from '@/components/features/footer';
import { getAllPosts } from '@/lib/blog-utils';

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <PageContentContainer>
      <h1 className="text-8xl">Blog</h1>

      <Container>
        {/* Main Blog Sections */}
        <div className="w-full h-120 group rounded-2xl overflow-hidden bg-gray-100 cursor-pointer flex items-center mt-10">
          {/* Content */}
          <div className="bg-primary/20  flex items-start justify-center gap-y-6 flex-col p-10 w-5/12 h-full">
            <h2 className="text-neutral-800 text-5xl font-semibold">
              10 Surprising Facts About JavaScript Engines Every Developer Should Know
            </h2>
            <h3 className="text-neutral-600 mt-4">
              Discover the hidden mechanisms behind JavaScript engines and how these powerful tools impact your code
              performance, compatibility, and debugging. Dive into essential insights every developer should have in
              their toolkit.
            </h3>
            {/* Action */}

            <div className="flex items-center">
              <div className="flex items-center justify-center bg-primary rounded-full size-10 transition group-hover:scale-110">
                <svg
                  className="size-4 fill-white"
                  xmlns="http://www.w3.org/2000/svg"
                  id="Layer_1"
                  data-name="Layer 1"
                  viewBox="0 0 24 24"
                  width="512"
                  height="512"
                >
                  <path d="M21.5,0H9V3h9.879L.026,21.853l2.121,2.121L21,5.121V15h3V2.5c0-1.378-1.121-2.5-2.5-2.5Z" />
                </svg>
              </div>
              <span className="text-neutral-800 ml-2 font-semibold">Read Full article!</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-12">
          {posts.map((post, i) => (
            <BlogCard
              title={post.title}
              desc={post.description}
              date={post.date}
              slug={post.slug}
              readingTime={post.readingTime}
              categories={['Devops', 'Develop']}
              thumbImgSrc="/objects/i-letter.png"
              key={i}
            />
          ))}
        </div>
        <Footer />
      </Container>
    </PageContentContainer>
  );
}
