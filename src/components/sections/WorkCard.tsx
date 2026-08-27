'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import { TransitionLink } from '@/components/motion/TransitionLink';
import { useReducedMotionSafe } from '@/hooks/useReducedMotionSafe';
import { DURATION, EASE, revealUp, SCROLL_VIEWPORT } from '@/lib/motion';
import type { Project } from '@/types/content';

function WorkPreview({ project }: { project: Project }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  if (project.spotlightVideo) {
    const webmSrc = project.spotlightVideo.replace(/\.mp4$/, '.webm');
    return (
      <motion.video
        ref={videoRef}
        muted
        loop
        playsInline
        className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
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
        className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
      />
    );
  }

  return (
    <div className="border-line text-dim flex h-full items-center justify-center border-2 border-dashed font-mono text-xs">
      Screenshots coming soon
    </div>
  );
}

export function WorkCard({
  project,
  index,
  reverse,
}: {
  project: Project;
  index: number;
  reverse: boolean;
}) {
  const shouldReduceMotion = useReducedMotionSafe();

  return (
    <motion.article
      initial={revealUp.hidden}
      whileInView={shouldReduceMotion ? undefined : revealUp.visible}
      animate={shouldReduceMotion ? revealUp.visible : undefined}
      viewport={SCROLL_VIEWPORT}
      transition={shouldReduceMotion ? { duration: 0 } : { duration: DURATION.base, ease: EASE }}
      whileHover={
        shouldReduceMotion ? undefined : { y: -6, transition: { duration: 0.25, ease: 'easeOut' } }
      }
      className="border-line bg-surface group grid overflow-hidden rounded-[var(--radius-card)] border backdrop-blur-lg transition-shadow duration-300 hover:shadow-2xl hover:shadow-black/40 lg:grid-cols-2"
    >
      <div className={`p-8 lg:p-10 ${reverse ? 'lg:order-2' : 'lg:order-1'}`}>
        <p className="text-dim font-mono text-[11px] tracking-[0.12em] uppercase">
          {String(index + 1).padStart(2, '0')} / {project.category ?? project.role}
          {project.dateRange ? ` · ${project.dateRange}` : ''}
        </p>
        <h3 className="font-display text-fg mt-3 text-[28px] leading-tight font-bold tracking-[-0.02em] lg:text-[38px]">
          {project.title}
        </h3>
        <p className="text-body mt-4 text-[16px]">{project.spotlightTagline ?? project.summary}</p>
        <ul className="mt-5 flex flex-wrap gap-2">
          {project.stack.slice(0, 4).map((item) => (
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
            {project.metrics.slice(0, 2).map((metric) => (
              <div key={metric.label}>
                <dd className="text-fg text-lg font-semibold">{metric.value}</dd>
                <dt className="text-dim font-mono text-[10.5px] tracking-[0.1em] uppercase">
                  {metric.label}
                </dt>
              </div>
            ))}
          </dl>
        )}
        <TransitionLink
          href={`/projects/${project.slug}`}
          className="df-focus text-fg mt-6 inline-flex items-center gap-1.5 font-medium hover:underline"
        >
          Read the case study <span aria-hidden="true">→</span>
        </TransitionLink>
      </div>
      <div
        className={`relative min-h-[240px] overflow-hidden ${reverse ? 'lg:order-1' : 'lg:order-2'}`}
      >
        <WorkPreview project={project} />
      </div>
    </motion.article>
  );
}
