import { Hero } from '@/components/sections/Hero';
import { ProjectCard } from '@/components/sections/ProjectCard';
import { getFeaturedProjects } from '@/lib/mdx';

export default function HomePage() {
  const featuredProjects = getFeaturedProjects();

  return (
    <>
      <Hero />
      <section className="mx-auto max-w-5xl px-6 pb-24">
        <h2 className="text-2xl font-semibold">Featured projects</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </>
  );
}
