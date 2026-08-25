import { ProjectCard } from '@/components/sections/ProjectCard';
import { Reveal } from '@/components/motion/Reveal';
import { SKILLS } from '@/lib/constants';
import type { Project } from '@/types/content';

export function SecondaryHighlights({ projects }: { projects: Project[] }) {
  if (projects.length === 0) return null;

  return (
    <section className="mx-auto max-w-5xl px-6 pb-20">
      <Reveal>
        <h2 className="font-heading text-xl font-semibold">More projects</h2>
      </Reveal>
      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        {projects.map((project, index) => (
          <Reveal key={project.slug} delay={index * 0.06}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <h2 className="mt-14 font-heading text-xl font-semibold">Toolbox</h2>
        <ul className="mt-4 flex flex-wrap gap-2">
          {SKILLS.map((skill) => (
            <li
              key={skill}
              className="rounded-full border px-2 py-0.5 font-mono text-xs text-muted-foreground"
            >
              {skill}
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
