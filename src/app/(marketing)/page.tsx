import { AboutCard } from '@/components/sections/AboutCard';
import { ContactCTA } from '@/components/sections/ContactCTA';
import { DepthHero } from '@/components/sections/DepthHero';
import { SelectedWork } from '@/components/sections/SelectedWork';
import { ToolsGrid } from '@/components/sections/ToolsGrid';
import { AmbientField } from '@/components/motion/AmbientField';
import { getAllProjects } from '@/lib/mdx';

export default function HomePage() {
  const selectedWork = getAllProjects()
    .filter((project) => project.featured)
    .slice(0, 2);

  return (
    <div className="bg-bg text-fg relative">
      <AmbientField />
      <DepthHero />
      <SelectedWork projects={selectedWork} />
      <ToolsGrid />
      <AboutCard />
      <ContactCTA />
    </div>
  );
}
