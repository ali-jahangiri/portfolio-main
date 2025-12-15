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
    className={`group rounded-2xl bg-gray-100 p-4 sm:p-6 md:p-10 h-120 flex flex-col justify-end ${props.className}`}
    href={`/blog/${props.slug}`}
  >
    <Image
      className="mb-auto w-24 h-24 sm:w-32 sm:h-32 md:w-[200px] md:h-[200px]"
      src={props.thumbImgSrc}
      width={200}
      height={200}
      alt="blog-thumb"
    />

    <div className="flex flex-wrap gap-2 items-center gap-x-3 mb-2 sm:mb-3">
      <p className="text-xs sm:text-sm md:text-base text-neutral-500 md:text-neutral-400">{props.date}</p>
      <div className="md:shrink-0 flex-wrap gap-x-2 flex items-center md:justify-center">
        {props.categories.map((category, i) => (
          <Badge title={category} key={i} />
        ))}
      </div>
    </div>
    <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-neutral-800 md:text-neutral-700 leading-tight sm:leading-tight md:leading-normal">
      {props.title}
    </p>
  </Link>
);

export default BlogCard;
