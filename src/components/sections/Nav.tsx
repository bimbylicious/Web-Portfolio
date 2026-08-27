'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useReducedMotionSafe } from '@/hooks/useReducedMotionSafe';
import { NAV_LINKS, SITE_NAME } from '@/lib/constants';

function StatusDot() {
  return (
    <span className="relative flex h-2.5 w-2.5">
      <span className="bg-violet motion-reduce:hidden absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" />
      <span className="bg-violet relative inline-flex h-2.5 w-2.5 rounded-full" />
    </span>
  );
}

export function Nav() {
  const shouldReduceMotion = useReducedMotionSafe();

  return (
    <motion.nav
      aria-label="Primary"
      className="border-line bg-bg sticky top-0 z-50 border-b backdrop-blur-lg"
      initial={shouldReduceMotion ? undefined : { opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: shouldReduceMotion ? 0 : 0.1, ease: 'easeOut' }}
    >
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-x-6 gap-y-3 px-6 py-4">
        <Link href="/" aria-label={`${SITE_NAME} — Home`} className="df-focus inline-flex p-1">
          <StatusDot />
        </Link>
        <ul className="flex flex-wrap gap-x-5 gap-y-1 font-mono text-[11px] tracking-[0.1em] uppercase">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="df-focus text-dim hover:text-fg group relative inline-block py-1"
              >
                {link.label}
                <span className="bg-violet absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}
