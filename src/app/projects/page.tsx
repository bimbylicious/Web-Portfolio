import type { Metadata } from 'next';
import { ProjectCard } from '@/components/sections/ProjectCard';
import { getAllProjects } from '@/lib/mdx';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Full-stack and cloud engineering projects.',
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
