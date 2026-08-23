import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { Reveal } from '@/components/motion/Reveal';
import { getAllProjects, getProjectBySlug } from '@/lib/mdx';

export function generateStaticParams() {
  return getAllProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata(props: PageProps<'/projects/[slug]'>): Promise<Metadata> {
  const { slug } = await props.params;
  const project = getProjectBySlug(slug);

  if (!project) return {};

  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: project.title,
      description: project.summary,
      type: 'article',
    },
  };
}

export default async function ProjectPage(props: PageProps<'/projects/[slug]'>) {
  const { slug } = await props.params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <Reveal>
        <p className="font-mono text-xs text-muted-foreground">{project.role}</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight">{project.title}</h1>
        <p className="mt-4 text-lg text-muted-foreground">{project.summary}</p>

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

        {project.metrics && project.metrics.length > 0 && (
          <dl className="mt-6 flex flex-wrap gap-6">
            {project.metrics.map((metric) => (
              <div key={metric.label}>
                <dt className="text-xs text-muted-foreground">{metric.label}</dt>
                <dd className="text-lg font-semibold">{metric.value}</dd>
              </div>
            ))}
          </dl>
        )}

        {(project.links.repo || project.links.live) && (
          <div className="mt-6 flex gap-4 text-sm">
            {project.links.repo && (
              <Link href={project.links.repo} className="underline">
                Repository
              </Link>
            )}
            {project.links.live && (
              <Link href={project.links.live} className="underline">
                Live site
              </Link>
            )}
          </div>
        )}
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-10 space-y-4">
          <MDXRemote source={project.content} />
        </div>
      </Reveal>
    </article>
  );
}
