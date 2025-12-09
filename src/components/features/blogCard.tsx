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
    className={`group rounded-2xl bg-gray-100 p-10 h-120 flex flex-col justify-end ${props.className}`}
    href={`/blog/${props.slug}`}
  >
    <Image className='mb-auto' src={props.thumbImgSrc} width={200} height={200} alt="blog-thumb" />

    <div className="flex flex-wrap gap-2 items-center gap-x-3 mb-3">
      <p className="text-neutral-400">{props.date}</p>
      <div className="shrink-0 gap-x-2 flex items-center justify-center">
        {props.categories.map((category, i) => (
          <Badge title={category} key={i} />
        ))}
      </div>
    </div>
    <p className="text-3xl text-neutral-700">{props.title}</p>
  </Link>
);

export default BlogCard;
