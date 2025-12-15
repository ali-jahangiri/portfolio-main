'use client';

import { BlogPost } from '@/types/blog.type';
import PureSlider from '../ui/slider';
import BlogCard from './blogCard';

interface Props {
  posts: BlogPost[];
}

const MobileBlogSlider = ({ posts }: Props) => {
  return (
    <div>
      <div className="max-w-screen xl:hidden mt-6 sm:mt-8">
        <PureSlider
          speed={700}
          height="auto"
          autoplay
          infinite
          autoplayDelay={3000}
          slides={posts.map((post, i) => (
            <div className='w-full' key={i}>
              <BlogCard
                title={post.title}
                date={post.date}
                slug={post.slug}
                readingTime={post.readingTime}
                categories={post.tags}
                className="h-full w-full min-h-[400px] sm:min-h-[450px]"
                thumbImgSrc={post.thumbnail}
              />
            </div>
          ))}
        />
      </div>
    </div>
  );
};

export default MobileBlogSlider;
