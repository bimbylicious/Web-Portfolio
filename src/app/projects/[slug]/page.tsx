import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { AmbientField } from '@/components/motion/AmbientField';
import { Reveal } from '@/components/motion/Reveal';
import { TransitionLink } from '@/components/motion/TransitionLink';
import { ProjectMediaGallery } from '@/components/sections/ProjectMediaGallery';
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
    <div className="bg-bg text-fg relative">
      <AmbientField />
      <article className="relative mx-auto max-w-3xl px-6 py-24">
        <Reveal>
          <TransitionLink
            href="/#selected-work"
            className="df-focus text-dim hover:text-fg inline-flex items-center gap-1.5 font-mono text-[11px] tracking-[0.12em] uppercase transition-colors"
          >
            <span aria-hidden="true">←</span> Back to work
          </TransitionLink>
          <p className="text-dim mt-8 font-mono text-[11px] tracking-[0.12em] uppercase">
            {project.category ?? project.role}
            {project.dateRange ? ` · ${project.dateRange}` : ''}
          </p>
          <h1 className="font-display text-fg mt-3 text-[32px] leading-tight font-extrabold tracking-[-0.03em] lg:text-[46px]">
            {project.title}
          </h1>
          <p className="text-body mt-4 text-lg">{project.summary}</p>

          <ul className="mt-5 flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <li
                key={item}
                className="border-line text-dim rounded-[var(--radius-pill)] border px-3 py-1 font-mono text-[10.5px] tracking-[0.08em] uppercase"
              >
                {item}
              </li>
            ))}
          </ul>

          {project.metrics && project.metrics.length > 0 && (
            <dl className="mt-6 flex flex-wrap gap-6">
              {project.metrics.map((metric) => (
                <div key={metric.label}>
                  <dd className="text-fg text-lg font-semibold">{metric.value}</dd>
                  <dt className="text-dim font-mono text-[10.5px] tracking-[0.1em] uppercase">
                    {metric.label}
                  </dt>
                </div>
              ))}
            </dl>
          )}

          {(project.links.repo || project.links.live) && (
            <div className="mt-6 flex gap-6 text-sm">
              {project.links.repo && (
                <Link href={project.links.repo} className="df-focus text-violet hover:underline">
                  Repository
                </Link>
              )}
              {project.links.live && (
                <Link href={project.links.live} className="df-focus text-violet hover:underline">
                  Live site
                </Link>
              )}
            </div>
          )}
        </Reveal>

        {project.media && project.media.length > 0 && (
          <Reveal delay={0.1}>
            <ProjectMediaGallery media={project.media} />
          </Reveal>
        )}

        <Reveal delay={0.15}>
          <div className="text-body border-line mt-10 space-y-4 border-t pt-10 text-[16px] [&_a]:text-violet [&_a]:underline [&_h2]:font-display [&_h2]:text-fg [&_h2]:mt-8 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:tracking-[-0.02em] [&_li]:ml-5 [&_strong]:text-fg [&_ul]:list-disc [&_ul]:space-y-1">
            <MDXRemote source={project.content} />
          </div>
        </Reveal>
      </article>
    </div>
  );
}
