import EducationHistory from "@/components/public/about/EducationHistory";
import Story from "@/components/public/about/Story";
import TechStack from "@/components/public/about/TechStack";

export default function About() {
  return (
    <main className="pt-32 pb-stack-lg max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
      <Story />
      <TechStack />
      <EducationHistory />
    </main>
  );
}
