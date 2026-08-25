'use client';

import { motion } from 'framer-motion';
import { useReducedMotionSafe } from '@/hooks/useReducedMotionSafe';
import { DURATION, EASE, revealUp, VIEWPORT_ONCE } from '@/lib/motion';
import { TOOLS } from '@/lib/constants';

function ToolMark({ seed }: { seed: number }) {
  const tickCount = 3 + (seed % 5);
  const ticks = Array.from({ length: tickCount }, (_, i) => {
    const angle = (i / tickCount) * Math.PI * 2 - Math.PI / 2;
    const x1 = 12 + Math.cos(angle) * 7;
    const y1 = 12 + Math.sin(angle) * 7;
    const x2 = 12 + Math.cos(angle) * 10;
    const y2 = 12 + Math.sin(angle) * 10;
    return { x1, y1, x2, y2 };
  });

  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <circle cx="12" cy="12" r="4.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
      {ticks.map((tick, i) => (
        <line
          key={i}
          x1={tick.x1}
          y1={tick.y1}
          x2={tick.x2}
          y2={tick.y2}
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      ))}
    </svg>
  );
}

function ToolTile({ tool, index }: { tool: (typeof TOOLS)[number]; index: number }) {
  const shouldReduceMotion = useReducedMotionSafe();

  return (
    <motion.div
      initial={revealUp.hidden}
      whileInView={shouldReduceMotion ? undefined : revealUp.visible}
      animate={shouldReduceMotion ? revealUp.visible : undefined}
      viewport={VIEWPORT_ONCE}
      transition={
        shouldReduceMotion
          ? { duration: 0 }
          : { duration: DURATION.base, delay: index * 0.04, ease: EASE }
      }
    >
      <motion.div
        animate={
          shouldReduceMotion
            ? undefined
            : {
                y: [0, -7, 0],
                borderColor: [
                  'rgba(236,235,243,0.12)',
                  'rgba(166,139,255,0.6)',
                  'rgba(236,235,243,0.12)',
                ],
              }
        }
        transition={
          shouldReduceMotion
            ? undefined
            : { duration: 7, repeat: Infinity, delay: index * 0.35, ease: EASE }
        }
        className="border-line bg-surface rounded-[var(--radius-tile)] border p-5 backdrop-blur-lg"
      >
        <div className="text-faint">
          <ToolMark seed={index} />
        </div>
        <p className="text-fg mt-3 text-[15px] font-medium">{tool.name}</p>
        <p className="text-dim mt-1 text-[13px]">{tool.why}</p>
      </motion.div>
    </motion.div>
  );
}

export function ToolsGrid() {
  const shouldReduceMotion = useReducedMotionSafe();

  return (
    <section className="relative mx-auto max-w-5xl px-6 py-24">
      <motion.div
        initial={revealUp.hidden}
        whileInView={shouldReduceMotion ? undefined : revealUp.visible}
        animate={shouldReduceMotion ? revealUp.visible : undefined}
        viewport={VIEWPORT_ONCE}
        transition={shouldReduceMotion ? { duration: 0 } : { duration: DURATION.base, ease: EASE }}
        className="flex flex-col justify-between gap-4 lg:flex-row lg:items-end"
      >
        <div>
          <p className="text-dim font-mono text-[11px] tracking-[0.12em] uppercase">
            02 — Tools I use
          </p>
          <h2 className="font-display text-fg mt-3 text-[32px] leading-tight font-extrabold tracking-[-0.03em] lg:text-[52px]">
            What I reach for, and why.
          </h2>
        </div>
        <p className="text-body max-w-sm text-[16px]">
          Typed end to end, tested before merge, deployed on green. Boring on purpose — the
          interesting part should be the product.
        </p>
      </motion.div>

      <div className="mt-10 grid grid-cols-2 gap-3 lg:grid-cols-4">
        {TOOLS.map((tool, index) => (
          <ToolTile key={tool.name} tool={tool} index={index} />
        ))}
      </div>
    </section>
  );
}
