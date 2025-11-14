import { getAllPosts } from '@/lib/blog-utils';
import BlogCard from './blogCard';
import RedirectAction from './redirectAction';

const BlogSection = () => {
  const posts = getAllPosts();

  return (
    <div>
      <div id="blog" className="h-[90px]"></div>
      <div className="h-(--entire-screen) w-full flex">
        <div className="w-2/3 h-full flex flex-col">
          <span className="text-8xl mr-2">
            My thoughts turned into writing
            <RedirectAction href="/blog" title="Read All" className="ml-5" />
          </span>
          <div className="flex h-full flex-1 mt-10 gap-5 px-5">
            {posts.slice(0, 2).map((post, i) => (
              <BlogCard
                title={post.title}
                desc={post.description}
                date={post.date}
                slug={post.slug}
                readingTime={post.readingTime}
                categories={['Devops', 'Develop']}
                className="h-full"
                thumbImgSrc="/objects/i-letter.png"
                key={i}
              />
            ))}
          </div>
        </div>
        <div className="w-1/3 h-full pr-5">
          {posts.slice(-1).map((post, i) => (
            <BlogCard
              title={post.title}
              desc={post.description}
              date={post.date}
              slug={post.slug}
              readingTime={post.readingTime}
              categories={['Devops', 'Develop']}
              thumbImgSrc="/objects/i-letter.png"
              className="h-full mt-auto"
              key={i}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
