'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { Reveal } from '@/components/motion/Reveal';
import type { Project } from '@/types/content';

function SpotlightVisual({ project }: { project: Project }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  if (project.spotlightVideo) {
    const webmSrc = project.spotlightVideo.replace(/\.mp4$/, '.webm');
    return (
      <motion.video
        ref={videoRef}
        muted
        loop
        playsInline
        className="h-full w-full object-cover"
        onViewportEnter={() => videoRef.current?.play()}
        onViewportLeave={() => videoRef.current?.pause()}
        viewport={{ margin: '-10%' }}
      >
        <source src={webmSrc} type="video/webm" />
        <source src={project.spotlightVideo} type="video/mp4" />
      </motion.video>
    );
  }

  if (project.coverImage) {
    return (
      <Image
        src={project.coverImage}
        alt={project.coverImageAlt ?? ''}
        fill
        className="object-cover"
      />
    );
  }

  return (
    <div className="flex h-full items-center justify-center border-2 border-dashed border-border">
      <p className="font-mono text-xs text-muted-foreground">Screenshots coming soon</p>
    </div>
  );
}

export function FeaturedProjectSpotlight({ project }: { project: Project }) {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <Reveal>
        <p className="font-mono text-xs tracking-wide text-signal-blue uppercase">
          Featured project
        </p>
      </Reveal>
      <div className="mt-4 grid items-center gap-10 lg:grid-cols-[1fr_1.1fr]">
        <Reveal delay={0.05}>
          <div className="relative aspect-video overflow-hidden rounded-lg border bg-card">
            <SpotlightVisual project={project} />
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-heading text-2xl font-bold tracking-tight sm:text-3xl">
            {project.title}
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">
            {project.spotlightTagline ?? project.summary}
          </p>
          {project.metrics && project.metrics.length > 0 && (
            <dl className="mt-6 flex flex-wrap gap-6">
              {project.metrics.slice(0, 3).map((metric) => (
                <div key={metric.label}>
                  <dt className="font-mono text-xs text-muted-foreground uppercase">
                    {metric.label}
                  </dt>
                  <dd className="text-lg font-semibold">{metric.value}</dd>
                </div>
              ))}
            </dl>
          )}
          <Link
            href={`/projects/${project.slug}`}
            className="mt-6 inline-block font-medium text-signal-blue hover:underline"
          >
            View full case study →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
