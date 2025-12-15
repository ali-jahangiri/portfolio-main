import Image from 'next/image';
import RedirectAction from './redirectAction';

const ExperienceSection = () => {
  return (
    <div className="mt-6 sm:mt-8 xl:mt-10">
      <div id="experience" className="h-[60px] sm:h-[70px] xl:h-[90px]"></div>
      <div className="w-full flex flex-col xl:flex-row px-4 sm:px-6 xl:px-0">
        <div className="">
          <p className="text-2xl sm:text-3xl lg:text-6xl xl:text-8xl leading-tight sm:leading-tight xl:leading-normal">
            Shaping Digital Experiences
            <RedirectAction
              href="https://www.linkedin.com/in/jahangiridev/details/experience/"
              title="Watch All"
              className="ml-2 sm:ml-3 xl:ml-5 text-sm sm:text-base xl:text-lg"
            />
          </p>
        </div>
        <div className="w-full rounded-2xl bg-gray-100 mt-5 xl:m-5">
          <p className="text-base sm:text-lg xl:text-xl lg:text-2xl xl:w-2/3 text-neutral-700 xl:text-neutral-600 ml-auto p-6 sm:p-8 xl:p-10 text-justify italic leading-relaxed sm:leading-relaxed">
            {"''"}As a front-end developer, I focus on creating seamless and accessible user experiences. I’ve
            contributed to complex projects, mentored developers, and helped teams deliver maintainable and performant
            code for long-term growth.{"''"}
          </p>

          <div className="m-4 sm:m-6 xl:m-10">
            <ExperienceRecord
              title="Tamin"
              imgSrc="/compony/tamin.png"
              desc="As a Front-End Chapter Lead, I drive engineering standards, architecture governance, and cross-squad consistency. I design and maintain core enterprise systems—including SSO/OAuth2 authentication, dynamic RBAC/ABAC authorization, payment infrastructure, and multi-project modernization into a single Next.js 15 codebase. I establish coding conventions, performance and accessibility guidelines, front-end security practices, and scalable directory/resource strategies. I collaborate tightly with backend teams on API schema design, lead code reviews and paired refactoring, mentor engineers, and build shared tooling, documentation, and decision records to ensure a reliable and future-proof front-end ecosystem."
            />
            <ExperienceRecord
              title="Fanap"
              imgSrc="/compony/fanap-soft.png"
              desc="Designed and built a real-time chat application using React and Redux, facilitating seamless communication between patients and doctors. Created a custom styling system with styled-components and integrated PWA features with an intelligent caching strategy to deliver a native-like experience across all devices."
            />
            <ExperienceRecord
              title="POD"
              imgSrc="/compony/pod.png"
              desc="I spearheaded the frontend architecture for two health super apps, building the project boilerplate from scratch. Developed a library of 20+ reusable UI components and 30+ logic modules, and engineered a unique JSON-schema-based state management system to seamlessly sync data in a no-SQL backend environment."
            />
            <ExperienceRecord
              title="Maaher"
              imgSrc="/compony/maaher.png"
              desc="I architected a dynamic role-permission system from the ground up, enabling fine-grained access control across the application. By implementing an intelligent, viewport-responsive modal structure with advanced code splitting and lazy loading, I boosted performance by over 30% and modernized the legacy codebase for better scalability."
            />
            <ExperienceRecord
              title="Avan"
              imgSrc="/compony/avan.jpg"
              desc="Translated complex Figma designs into a high-performance Next.js v14 application with PWA capabilities, serving 5,000+ users. Enhanced the centralized design system with 10+ Tailwind CSS components and implemented detailed user behavior monitoring using Sentry to optimize the entire user journey."
            />
            <ExperienceRecord
              title="DataCoLab & Straiberry AI"
              secondImgSrc="/compony/Logo-DCL-1.png"
              imgSrc="/compony/straiberry.jpg"
              desc="Engineered a comprehensive dental clinic dashboard with sophisticated access control for 20+ international clinics. Developed a robust internal design system with 40+ TypeScript components and design tokens, while also mentoring junior developers and implementing multilingual support to expand global reach."
            />
            <ExperienceRecord
              title="Karbalad CMS"
              imgSrc="/compony/karbaladcms.jpeg"
              desc="Built a native mobile application from concept to deployment using React Native and Expo, dramatically improving the experience for 50+ brokers. Revitalized the codebase by developing 20+ modular components with JSS and Ant Design, resulting in a 100% improvement in application stability and reliability."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const ExperienceRecord = ({
  title,
  imgSrc,
  secondImgSrc,
  desc,
}: {
  title: string;
  imgSrc: string;
  secondImgSrc?: string;
  desc: string;
}) => (
  <div className="flex flex-col xl:flex-row items-start mt-12 sm:mt-12 xl:mt-20 relative">
    <div
      className={`flex shrink-0 items-center justify-center rounded-xl bg-white shadow-2xl p-2 size-16 sm:size-20 xl:size-22 ${secondImgSrc ? 'relative -top-6 xl:-top-10' : ''
        }`}
    >
      <Image
        width={50}
        height={50}
        src={imgSrc}
        alt="compony-logo"
        className="w-8 h-8 sm:w-10 sm:h-10 xl:w-[50px] xl:h-[50px] object-contain"
      />
    </div>
    {secondImgSrc && (
      <div className="flex absolute top-2 left-2 sm:top-3 sm:left-3 xl:top-5 xl:left-5 shrink-0 items-center justify-center rounded-xl bg-white shadow-2xl p-2 size-16 sm:size-20 xl:size-22">
        <Image
          width={100}
          height={100}
          src={secondImgSrc}
          alt="compony-logo"
          className="w-12 h-12 sm:w-16 sm:h-16"
        />
      </div>
    )}
    <div className="ml-0 sm:ml-1 mt-4 sm:mt-5 xl:ml-9 xl:mt-12">
      <p className="text-lg sm:text-xl xl:text-2xl font-semibold mb-2 sm:mb-3 xl:mb-4">{title}</p>
      <p className="text-sm sm:text-base xl:text-lg text-neutral-700 text-justify leading-relaxed">{desc}</p>
    </div>
  </div>
);

export default ExperienceSection;
