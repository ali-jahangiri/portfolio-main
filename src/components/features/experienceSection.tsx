import RedirectAction from "./redirectAction"

const ExperienceSection = () => {
    return (
        <div>
            <div id='experience' className="h-[90px]"></div>
            <div className='h-(--entire-screen) w-full flex overflow-visible'>
                <div>
                    <p className="text-8xl sticky top-24 left-0">
                        Shaping Digital Experiences
                        <RedirectAction href="/experience" title="Watch All" className="ml-5" />
                    </p>
                </div>
                <div className="w-full rounded-2xl bg-gray-100 m-5">
                    <p className="text-2xl w-2/3 text-neutral-600 ml-auto p-10 text-justify italic">
                        {"''"}As a front-end developer, I focus on creating seamless and accessible user experiences. I’ve contributed to complex projects, mentored developers, and helped teams deliver maintainable and performant code for long-term growth.{"''"}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ExperienceSection
