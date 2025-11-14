import Link from 'next/link';

import Badge from '../ui/badge';
import Image from 'next/image';

interface Props {
  slug?: string;
  title?: string;
  desc?: string;
  date: string;
  readingTime: string;
  categories: string[];
  thumbImgSrc: string;
  className?: string;
}

const BlogCard = (props: Props) => (
  <Link
    className={`group rounded-2xl bg-gray-100 p-10 h-[30rem] flex flex-col justify-end ${props.className}`}
    href={`/blog/${props.slug}`}
  >
    <div className="mb-auto opacity-0 transition group-hover:opacity-100 group-hover:-translate-y-2">
      <Image src={props.thumbImgSrc} width={100} height={100} alt="blog-thumb" />
    </div>
    <div className="flex items-center gap-x-3 mb-3">
      <p className="text-neutral-400">{props.date}</p>
      {props.categories.map((category, i) => (
        <Badge title={category} key={i} />
      ))}
    </div>
    <p className="text-3xl text-neutral-700">{props.title}</p>
    <p className="text-neutral-400">{props.desc}</p>
  </Link>
);

export default BlogCard;
