import { Hero } from '@/components/sections/Hero';
import { ProjectCard } from '@/components/sections/ProjectCard';
import { Reveal } from '@/components/motion/Reveal';
import { getFeaturedProjects } from '@/lib/mdx';

export default function HomePage() {
  const featuredProjects = getFeaturedProjects();

  return (
    <>
      <Hero />
      <section className="mx-auto max-w-5xl px-6 pb-24">
        <Reveal>
          <h2 className="font-heading text-2xl font-semibold">Featured projects</h2>
        </Reveal>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.07}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
