'use client';

import Image from 'next/image';
import PureSlider from '../ui/slider';

const AboutMeSection = () => {
  return (
    <div>
      <div id="about-me" className="h-[60px] sm:h-[70px] md:h-[90px]"></div>
      <div className="md:h-(--entire-screen) w-full flex flex-col px-4 sm:px-6 md:px-0">
        <p className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-8xl leading-tight sm:leading-tight md:leading-normal">
          Behind the Code
        </p>
        <div className="flex h-full w-full flex-col-reverse md:flex-row">
          <div className="w-full sm:w-[90%] md:w-3/5 flex flex-col items-end justify-center bg-gray-100 mx-auto mt-4 sm:mt-3 md:mt-2 md:m-5 rounded-2xl h-full">
            <p className="p-6 sm:p-8 md:p-10 mt-auto font-semibold text-justify text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-neutral-600 md:text-neutral-500 leading-relaxed sm:leading-relaxed">
              {`I started my journey as a junior developer in Tehran back in 2020. Over the years, I’ve learned how to
              develop and maintain products with teams of all sizes, from small startups to big enterprises. When I'm
              not behind a monitor, you might probably find me somewhere far away (maybe in a forest) with my loud
              little dirt-bike, exploring new stuff and places. Over the years, what I’ve learned the most is how to
              adapt to all kinds of challenges, whether it’s heat, cold, or anything in between.`}
            </p>
          </div>
          <div className="w-full sm:w-[90%] md:w-2/5 flex items-center justify-center p-4 sm:p-6 md:p-10 rounded-2xl bg-gray-100 md:mr-5 mx-auto mt-4 sm:mt-5 h-full">
            <PureSlider
              speed={700}
              height="100%"
              className=""
              autoplay
              infinite
              autoplayDelay={3000}
              slides={[
                <Image
                  key="6"
                  src="/images/about-me-pics/Frame 9.png"
                  alt="about-me"
                  width={450}
                  height={450}
                  className="m-auto w-52 my-10 shadow-2xl"
                />,
                <Image
                  key="5"
                  src="/images/about-me-pics/Frame 8.png"
                  alt="about-me"
                  width={450}
                  height={450}
                  className="m-auto w-52 my-10 rotate-10 shadow-2xl"
                />,
                <Image
                  key="7"
                  src="/images/about-me-pics/Group 19.png"
                  alt="about-me"
                  width={450}
                  height={450}
                  className="m-auto w-52 my-10 -rotate-10 shadow-2xl"
                />,
                <Image
                  key="2"
                  src="/images/about-me-pics/Frame 4.png"
                  alt="about-me"
                  width={450}
                  height={450}
                  className="m-auto w-52 my-10 rotate-10 shadow-2xl"
                />,
                <Image
                  key="3"
                  src="/images/about-me-pics/Frame 5.png"
                  alt="about-me"
                  width={450}
                  height={450}
                  className="m-auto w-52 my-10 -rotate-10 shadow-2xl"
                />,
                <Image
                  key="1"
                  src="/images/about-me-pics/Frame 3.png"
                  alt="about-me"
                  width={450}
                  height={450}
                  className="m-auto w-52 my-10 rotate-10 shadow-2xl"
                />,
                <Image
                  key="4"
                  src="/images/about-me-pics/Frame 6.png"
                  alt="about-me"
                  width={450}
                  height={450}
                  className="m-auto w-52 my-10 -rotate-10 shadow-2xl"
                />,
                <Image
                  key="8"
                  src="/images/about-me-pics/Group 20.png"
                  alt="about-me"
                  width={450}
                  height={450}
                  className="m-auto w-52 my-10 rotate-10 shadow-2xl"
                />,
                <Image
                  key="9"
                  src="/images/about-me-pics/Group 22.png"
                  alt="about-me"
                  width={450}
                  height={450}
                  className="m-auto w-52 my-10 -rotate-10 shadow-2xl"
                />,
                <Image
                  key="10"
                  src="/images/about-me-pics/Frame 98.png"
                  alt="about-me"
                  width={450}
                  height={450}
                  className="m-auto w-52 my-10 rotate-10 shadow-2xl"
                />,
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeSection;
