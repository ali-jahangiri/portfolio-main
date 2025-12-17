import AboutMeSection from '@/components/features/aboutMeSection';
import BlogSection from '@/components/features/blogSection';
import ConnectSection from '@/components/features/connectSection';
import ExperienceSection from '@/components/features/experienceSection';
import HeroSection from '@/components/features/heroSection';

export default function Home() {
  return (
    <div className="w-full">
      <HeroSection />
      <BlogSection />
      <ExperienceSection />
      <AboutMeSection />
      <ConnectSection />
    </div>
  );
}
