import Image from 'next/image';
import RedirectAction from './redirectAction';

const ExperienceSection = () => {
  return (
    <div className="mt-10">
      <div id="experience" className="h-[90px]"></div>
      <div className="min-h-(--entire-screen) w-full flex flex-col md:flex-row overflow-visible">
        <div>
          <p className="text-8xl md:sticky top-24 left-0">
            Shaping Digital Experiences
            <RedirectAction
              href="https://www.linkedin.com/in/jahangiridev/details/experience/"
              title="Watch All"
              className="ml-5"
            />
          </p>
        </div>
        <div className="w-full rounded-2xl bg-gray-100 m-5">
          <p className="text-2xl w-2/3 text-neutral-600 ml-auto p-10 text-justify italic">
            {"''"}As a front-end developer, I focus on creating seamless and accessible user experiences. I’ve
            contributed to complex projects, mentored developers, and helped teams deliver maintainable and performant
            code for long-term growth.{"''"}
          </p>

          <div className="m-10">
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
  <div className="flex items-start mt-20 relative">
    <div
      className={`flex shrink-0 items-center justify-center rounded-xl bg-white shadow-2xl p-2 size-22 ${secondImgSrc ? 'relative -top-10' : ''
        }`}
    >
      <Image width={50} height={50} src={imgSrc} alt="compony-logo" />
    </div>
    {secondImgSrc && (
      <div className="flex absolute top-5 left-5 shrink-0 items-center justify-center rounded-xl bg-white shadow-2xl p-2 size-22">
        <Image width={100} height={100} src={secondImgSrc} alt="compony-logo" />
      </div>
    )}
    <div className="ml-9 mt-12">
      <p className="text-2xl font-semibold mb-4">{title}</p>
      <p className="text-neutral-700">{desc}</p>
    </div>
  </div>
);

export default ExperienceSection;
