import Link from 'next/link'
import React from 'react'

interface Props {
    slug?: string;
    title?: string;
    desc?: string;
}

const BlogCard = (props: Props) => {
    return (
        <Link className='rounded-2xl bg-gray-100 p-10 h-[30rem]' href={`/blog/${props.slug}`}>
            <p className='text-3xl text-neutral-700'>{props.title}</p>
            <p className='text-neutral-400'>{props.desc}</p>
        </Link>
    )
}

export default BlogCard
