import Image from 'next/image';
import Link from 'next/link';
import type { Project } from '@/types/content';

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="border-line bg-surface rounded-[var(--radius-card)] border p-6 backdrop-blur-lg transition-transform duration-300 ease-out hover:-translate-y-1">
      {project.coverImage && (
        <div className="border-line relative mb-4 aspect-video overflow-hidden rounded-[var(--radius-tile)] border">
          <Image
            src={project.coverImage}
            alt={project.coverImageAlt ?? ''}
            fill
            className="object-cover"
          />
        </div>
      )}
      <p className="text-dim font-mono text-[10.5px] tracking-[0.1em] uppercase">
        {project.category ?? project.role}
      </p>
      <h3 className="font-display text-fg mt-2 text-lg font-bold tracking-[-0.01em]">
        <Link href={`/projects/${project.slug}`} className="df-focus hover:text-violet">
          {project.title}
        </Link>
      </h3>
      <p className="text-body mt-2 text-sm">{project.summary}</p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <li
            key={item}
            className="border-line text-dim rounded-[var(--radius-pill)] border px-2.5 py-0.5 font-mono text-[10.5px] tracking-[0.06em] uppercase"
          >
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}
