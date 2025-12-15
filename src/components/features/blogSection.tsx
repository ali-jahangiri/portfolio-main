import { getAllPosts } from '@/lib/blog-utils';
import BlogCard from './blogCard';
import RedirectAction from './redirectAction';
import MobileBlogSlider from './mobileBlogSlider';

const BlogSection = () => {
  const posts = getAllPosts();

  return (
    <div>
      <div id="blog" className="h-[60px] sm:h-[70px] xl:h-[90px]"></div>
      <div className="xl:h-(--entire-screen) w-full flex flex-col xl:flex-row px-4 sm:px-6 xl:px-0">
        <div className="w-full xl:w-2/3 h-full flex flex-col">
          <span className="text-2xl sm:text-3xl lg:text-6xl xl:text-8xl xl:mr-2 leading-tight sm:leading-tight xl:leading-normal">
            My thoughts turned into writing
            <RedirectAction
              href="/blog"
              title="Read All"
              className="ml-2 sm:ml-3 xl:ml-5 text-sm sm:text-base xl:text-lg"
            />
          </span>

          <MobileBlogSlider posts={posts} />
          <div className="hidden xl:flex h-full flex-1 mt-10 gap-5 px-5">
            {posts.slice(0, 2).map((post, i) => (
              <div className="flex-1" key={i}>
                <BlogCard
                  title={post.title}
                  date={post.date}
                  slug={post.slug}
                  readingTime={post.readingTime}
                  categories={post.tags}
                  className="h-full"
                  thumbImgSrc={post.thumbnail}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="xl:flex xl:w-1/3 hidden h-full pr-5">
          {posts.slice(-1).map((post, i) => (
            <BlogCard
              title={post.title}
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
