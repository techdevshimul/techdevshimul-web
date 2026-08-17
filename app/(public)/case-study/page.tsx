import CaseStudyBottomCta from "@/components/public/case-study/CaseStudyBottomCta";
import CaseStudyHero from "@/components/public/case-study/CaseStudyHero";
import CaseStudyKeyFeatures from "@/components/public/case-study/CaseStudyKeyFeatures";
import CaseStudyOverview from "@/components/public/case-study/CaseStudyOverview";
import CaseStudyResultSection from "@/components/public/case-study/CaseStudyResultSection";
import CaseStudyTechnicalSolution from "@/components/public/case-study/CaseStudyTechnicalSolution";
import CodeShowcase from "@/components/public/case-study/CodeShowcase";

export default function CaseStudyPage() {
  return (
    <main className="pt-32 pb-stack-lg relative overflow-hidden">
      <article className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <CaseStudyHero />
        <CaseStudyOverview />
        <CaseStudyTechnicalSolution />
        <CodeShowcase />
        <CaseStudyKeyFeatures />
        <CaseStudyResultSection />
        <CaseStudyBottomCta />
      </article>
    </main>
  );
}
