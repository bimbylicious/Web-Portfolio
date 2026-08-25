import { CredibilityStrip } from '@/components/sections/CredibilityStrip';
import { FeaturedProjectSpotlight } from '@/components/sections/FeaturedProjectSpotlight';
import { Hero } from '@/components/sections/Hero';
import { SecondaryHighlights } from '@/components/sections/SecondaryHighlights';
import { WritingTeaser } from '@/components/sections/WritingTeaser';
import { getAllPosts, getAllProjects } from '@/lib/mdx';

export default function HomePage() {
  const projects = getAllProjects();
  const spotlightProject = projects.find((project) => project.featured) ?? projects[0];
  const secondaryProjects = projects.filter((project) => project.slug !== spotlightProject?.slug);
  const [latestPost] = getAllPosts();

  return (
    <>
      <Hero />
      <CredibilityStrip standoutMetric={spotlightProject?.metrics?.[0]} />
      {spotlightProject && <FeaturedProjectSpotlight project={spotlightProject} />}
      <SecondaryHighlights projects={secondaryProjects} />
      {latestPost && <WritingTeaser post={latestPost} />}
    </>
  );
}
