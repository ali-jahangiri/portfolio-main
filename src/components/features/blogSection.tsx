import { getAllPosts } from '@/lib/blog-utils';
import BlogCard from './blogCard';
import RedirectAction from './redirectAction';
import MobileBlogSlider from './mobileBlogSlider';

const BlogSection = () => {
  const posts = getAllPosts();

  return (
    <div>
      <div id="blog" className="h-[60px] sm:h-[70px] md:h-[90px]"></div>
      <div className="md:h-(--entire-screen) w-full flex flex-col md:flex-row px-4 sm:px-6 md:px-0">
        <div className="w-full md:w-2/3 h-full flex flex-col">
          <span className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-8xl md:mr-2 leading-tight sm:leading-tight md:leading-normal">
            My thoughts turned into writing
            <RedirectAction
              href="/blog"
              title="Read All"
              className="ml-2 sm:ml-3 md:ml-5 text-sm sm:text-base md:text-lg"
            />
          </span>

          <MobileBlogSlider posts={posts} />
          {/* <div className="flex h-full flex-1 mt-10 gap-5  px-5">
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
          </div> */}
        </div>
        <div className="md:w-1/3 hidden h-full pr-5">
          {/* {posts.slice(-1).map((post, i) => (
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
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
