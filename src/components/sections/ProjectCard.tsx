import Link from 'next/link';
import { CardShell } from '@/components/sections/CardShell';
import type { Project } from '@/types/content';

export function ProjectCard({ project }: { project: Project }) {
  return (
    <CardShell>
      <h3 className="font-heading text-lg font-semibold">
        <Link href={`/projects/${project.slug}`} className="hover:underline">
          {project.title}
        </Link>
      </h3>
      <p className="mt-2 text-sm text-muted-foreground">{project.summary}</p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <li
            key={item}
            className="rounded-full border px-2 py-0.5 font-mono text-xs text-muted-foreground"
          >
            {item}
          </li>
        ))}
      </ul>
    </CardShell>
  );
}
