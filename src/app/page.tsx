import AboutMeSection from "@/components/features/aboutMeSection";
import BlogSection from "@/components/features/blogSection";
import ConnectSection from "@/components/features/connectSection";
import ExperienceSection from "@/components/features/experienceSection";
import HeroSection from "@/components/features/heroSection";
import Navbar from "@/components/features/navbar";

export default function Home() {
  return (
    <div className=" ">
      <Navbar />
      <HeroSection />
      <BlogSection />
      <ExperienceSection />
      <AboutMeSection />
      <ConnectSection />
    </div>
  );
}
