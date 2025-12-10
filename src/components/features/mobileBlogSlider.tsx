'use client';

import { BlogPost } from "@/types/blog.type";
import PureSlider from "../ui/slider";
import BlogCard from "./blogCard";

interface Props {
    posts: BlogPost[]
}

const MobileBlogSlider = ({ posts }: Props) => {
    return (
        <div >
            <div className="max-w-screen md:hidden">
                <PureSlider
                    speed={700}
                    height="500px"
                    autoplay
                    infinite
                    autoplayDelay={3000}
                    slides={posts.map((post, i) => (
                        <div key={i}>
                            <BlogCard
                                title={post.title}
                                date={post.date}
                                slug={post.slug}
                                readingTime={post.readingTime}
                                categories={post.tags}
                                className="h-full w-screen min-h-[500px]"
                                thumbImgSrc={post.thumbnail}
                            />
                        </div>
                    ))}
                />
            </div>
        </div>
    )
}

export default MobileBlogSlider
