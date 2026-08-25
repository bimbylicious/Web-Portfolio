'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useReducedMotionSafe } from '@/hooks/useReducedMotionSafe';
import { DURATION, EASE, revealUp } from '@/lib/motion';

export function DepthHero() {
  const shouldReduceMotion = useReducedMotionSafe();

  const stagger = (index: number) => ({
    initial: revealUp.hidden,
    animate: revealUp.visible,
    transition: shouldReduceMotion
      ? { duration: 0 }
      : { duration: DURATION.base, delay: index * 0.12, ease: EASE },
  });

  return (
    <section className="relative flex min-h-[90vh] flex-col items-center justify-center px-6 py-32 text-center">
      <motion.div
        {...stagger(0)}
        className="border-line bg-surface text-dim inline-flex items-center gap-2 rounded-[var(--radius-pill)] border px-4 py-1.5 font-mono text-[11px] tracking-[0.12em] uppercase backdrop-blur-lg"
      >
        <span className="relative flex h-2 w-2">
          <span className="bg-violet motion-reduce:hidden absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" />
          <span className="bg-violet relative inline-flex h-2 w-2 rounded-full" />
        </span>
        Open to junior dev roles
      </motion.div>

      <motion.h1
        {...stagger(1)}
        className="font-display text-fg mt-8 w-full max-w-4xl text-[42px] leading-[1.05] font-extrabold tracking-[-0.04em] break-words lg:max-w-6xl lg:text-[94px]"
      >
        Full-stack interfaces for{' '}
        <span className="from-violet to-cyan bg-gradient-to-r bg-clip-text text-transparent">
          infrastructure and data systems
        </span>
        .
      </motion.h1>

      <motion.p {...stagger(2)} className="text-body mt-6 max-w-xl text-[16px]">
        A cascade-failure simulator for cloud infrastructure, and an employee master data console.
        Both built solo, end to end.
      </motion.p>

      <motion.div
        {...stagger(3)}
        className="mt-10 flex flex-wrap items-center justify-center gap-4"
      >
        <Link
          href="#selected-work"
          className="df-focus bg-fg text-bg inline-flex min-h-11 items-center rounded-[var(--radius-pill)] px-6 py-3 font-medium transition-transform hover:scale-[1.03]"
        >
          See the work
        </Link>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="df-focus border-line text-fg hover:bg-surface inline-flex min-h-11 items-center rounded-[var(--radius-pill)] border px-6 py-3 font-medium transition-colors"
        >
          Résumé
        </a>
      </motion.div>
    </section>
  );
}
