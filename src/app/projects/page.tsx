import type { Metadata } from 'next';
import { AmbientField } from '@/components/motion/AmbientField';
import { Reveal } from '@/components/motion/Reveal';
import { ProjectCard } from '@/components/sections/ProjectCard';
import { getAllProjects } from '@/lib/mdx';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Full-stack and cloud engineering projects.',
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <div className="bg-bg text-fg relative">
      <AmbientField />
      <section className="relative mx-auto max-w-5xl px-6 py-24">
        <Reveal>
          <p className="text-dim font-mono text-[11px] tracking-[0.12em] uppercase">Projects</p>
          <h1 className="font-display text-fg mt-3 text-[32px] leading-tight font-extrabold tracking-[-0.03em] lg:text-[52px]">
            Everything I&apos;ve shipped.
          </h1>
        </Reveal>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.07}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
