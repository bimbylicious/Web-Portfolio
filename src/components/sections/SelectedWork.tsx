import { WorkCard } from '@/components/sections/WorkCard';
import type { Project } from '@/types/content';

export function SelectedWork({ projects }: { projects: Project[] }) {
  return (
    <section id="selected-work" className="relative mx-auto max-w-5xl px-6 py-24">
      <p className="text-dim font-mono text-[11px] tracking-[0.12em] uppercase">
        01 — Selected work
      </p>
      <h2 className="font-display text-fg mt-3 max-w-2xl text-[32px] leading-tight font-extrabold tracking-[-0.03em] lg:text-[52px]">
        Two consoles, built end to end.
      </h2>
      <div className="mt-10 flex flex-col gap-8">
        {projects.map((project, index) => (
          <WorkCard key={project.slug} project={project} index={index} reverse={index % 2 === 1} />
        ))}
      </div>
    </section>
  );
}
