import EducationCertificationsAndAchievements from "@/components/public/education/EducationCertificationsAndAchievments";
import EducationHero from "@/components/public/education/EducationHero";
import EducationTimeline from "@/components/public/education/EducationTimeline";

export default function Education() {
  return (
    <main className="pt-32 pb-stack-lg">
      <EducationHero />
      <EducationTimeline />
      <EducationCertificationsAndAchievements />
    </main>
  );
}
