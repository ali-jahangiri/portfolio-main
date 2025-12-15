import Link from 'next/link';

import Badge from '../ui/badge';
import Image from 'next/image';

interface Props {
  slug?: string;
  title?: string;
  date: string;
  readingTime: string;
  categories: string[];
  thumbImgSrc: string;
  className?: string;
}

const BlogCard = (props: Props) => (
  <Link
    className={`group rounded-2xl bg-gray-100 p-4 sm:p-6 xl:p-10 h-120 flex flex-col justify-end ${props.className}`}
    href={`/blog/${props.slug}`}
  >
    <Image
      className="mb-auto w-32 h-32 sm:w-32 sm:h-32 xl:w-[200px] xl:h-[200px]"
      src={props.thumbImgSrc}
      width={200}
      height={200}
      alt="blog-thumb"
    />

    <div className="flex flex-wrap gap-2 items-center gap-x-3 mb-2 sm:mb-5">
      <p className="text-xs sm:text-sm ml-2 xl:text-base text-neutral-500 xl:text-neutral-400">{props.date}</p>
      <div className="xl:shrink-0 flex-wrap gap-2 flex items-center xl:justify-center">
        {props.categories.map((category, i) => (
          <Badge title={category} key={i} />
        ))}
      </div>
    </div>
    <p className="text-lg sm:text-xl xl:text-2xl lg:text-3xl text-neutral-800 xl:text-neutral-700 leading-tight mt-5 sm:mt-0 sm:leading-tight xl:leading-normal">
      {props.title}
    </p>
  </Link>
);

export default BlogCard;
