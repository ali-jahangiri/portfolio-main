import RedirectAction from "./redirectAction"

const BlogSection = () => {
    return (
        <div>
            <div id='blog' className="h-[90px]"></div>
            <div className='h-(--entire-screen) w-full flex'>
                <div className='w-2/3 h-full flex flex-col'>
                    <span className='text-8xl'>My thoughts turned into writing
                        <RedirectAction href="/blog" title="Read All" className="ml-5" />
                    </span>
                    <div className="flex h-full flex-1 mt-10 gap-5 px-5">
                        <BlogCard />
                        <BlogCard />
                    </div>
                </div>

                <div className='w-1/3 h-full pr-5'>
                    <BlogCard />
                </div>
            </div>

        </div>
    )
}


const BlogCard = () => {
    return (
        <div className='block rounded-2xl bg-gray-100 w-full h-full p-10 cursor-pointer'>
            <p className="text-3xl text-neutral-700">How to work with environment variables in enterprise system and software?</p>
            <p className="text-neutral-400">in this article we found out how to work with env and store theme</p>
        </div>
    )
}

export default BlogSection
