import BrandTicker from "@/components/public/home/BrandTicker";
import HeroSection from "@/components/public/home/HeroSection";
// import AppPurposeSection from "@/components/publichome/AppPurposeSection";
import StatsSection from "@/components/public/home/StatsSection";
import FeaturedProjectsSection from "@/components/public/home/FeaturedProjectsSection";
import TechStackExpertiseSection from "@/components/public/home/TechStackExpertiseSection";
import ContactSection from "@/components/public/home/ContactSection";

export default function Home() {
  return (
    <main className="pt-16">
      <HeroSection />
      {/* <AppPurposeSection /> */}
      <BrandTicker />
      <StatsSection />
      <FeaturedProjectsSection />
      <TechStackExpertiseSection />
      <ContactSection />
    </main>
  );
}
