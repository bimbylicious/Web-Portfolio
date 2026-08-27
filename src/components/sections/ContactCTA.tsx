'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Reveal } from '@/components/motion/Reveal';
import { useReducedMotionSafe } from '@/hooks/useReducedMotionSafe';
import { RESUME_PDF_URL } from '@/lib/constants';

const CONTACT_EMAIL = 'raphaelmiguelsanchezz@gmail.com';

const HEADLINE_SEGMENTS = [
  { text: 'So', duration: 0.5, delay: 0 },
  { text: '...', duration: 1.1, delay: 0.5 },
  { text: ' wanna talk?', duration: 0.4, delay: 1.6 },
] as const;

function RevealHeadline({ shouldReduceMotion }: { shouldReduceMotion: boolean }) {
  return (
    <h2 className="font-display text-fg mt-4 text-[36px] leading-[1.05] font-extrabold tracking-[-0.03em] lg:text-[76px]">
      {HEADLINE_SEGMENTS.map((segment) => (
        <motion.span
          key={segment.text}
          className="inline-block"
          initial={{ clipPath: 'inset(0 100% 0 0)' }}
          whileInView={shouldReduceMotion ? undefined : { clipPath: 'inset(0 0% 0 0)' }}
          animate={shouldReduceMotion ? { clipPath: 'inset(0 0% 0 0)' } : undefined}
          viewport={{ once: false }}
          transition={
            shouldReduceMotion
              ? { duration: 0 }
              : { duration: segment.duration, delay: segment.delay, ease: 'easeInOut' }
          }
        >
          {segment.text}
        </motion.span>
      ))}
    </h2>
  );
}

export function ContactCTA() {
  const shouldReduceMotion = useReducedMotionSafe();
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable; the email is still visible to copy manually.
    }
  }

  return (
    <section id="contact" className="relative mx-auto max-w-3xl px-6 py-32 text-center">
      <Reveal>
        <p className="text-dim font-mono text-[11px] tracking-[0.12em] uppercase">04 / Contact</p>
        <RevealHeadline shouldReduceMotion={shouldReduceMotion} />
        <p className="text-body mx-auto mt-6 max-w-md text-[16px]">
          Click below to copy my email address.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <button
            type="button"
            onClick={handleCopy}
            className="df-focus bg-fg text-bg inline-flex min-h-11 items-center rounded-[var(--radius-pill)] px-6 py-3 font-medium transition-transform hover:scale-[1.03]"
          >
            {copied ? 'Copied to clipboard' : CONTACT_EMAIL}
          </button>
          <a
            href={RESUME_PDF_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="df-focus border-line text-fg hover:bg-surface inline-flex min-h-11 items-center rounded-[var(--radius-pill)] border px-6 py-3 font-medium transition-colors"
          >
            Résumé
          </a>
        </div>
      </Reveal>
    </section>
  );
}
