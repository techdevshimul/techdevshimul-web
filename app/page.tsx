import BrandTicker from "@/components/home/BrandTicker";
import HeroSection from "@/components/home/HeroSection";
import AppPurposeSection from "@/components/home/AppPurposeSection";
import StatsSection from "@/components/home/StatsSection";
import FeaturedProjectsSection from "@/components/home/FeaturedProjectsSection";
import TechStackExpertiseSection from "@/components/home/TechStackExpertiseSection";
import ContactSection from "@/components/home/ContactSection";

export default function Home() {
  return (
    <main className="pt-16">
      <HeroSection />
      <AppPurposeSection />
      <BrandTicker />
      <StatsSection />
      <FeaturedProjectsSection />
      <TechStackExpertiseSection />
      <ContactSection />
    </main>
  );
}
