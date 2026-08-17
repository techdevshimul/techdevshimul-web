import WorkflowsCta from "@/components/public/workflows/WorkflowsCta";
import WorkflowsFaq from "@/components/public/workflows/WorkflowsFaq";
import WorkflowsHero from "@/components/public/workflows/WorkflowsHero";
import WorkflowsTechnicalWorkflow from "@/components/public/workflows/WorkflowsTechnicalWorkflow";

export default function WorkflowsPage() {
  return (
    <main className="pt-32 pb-stack-lg">
      <WorkflowsHero />
      <WorkflowsTechnicalWorkflow />
      <WorkflowsFaq />
      <WorkflowsCta />
    </main>
  );
}
