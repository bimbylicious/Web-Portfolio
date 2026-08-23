'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Link from 'next/link';
import { NAV_LINKS, SITE_NAME } from '@/lib/constants';

export function Nav() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.nav
      aria-label="Primary"
      className="border-b bg-background"
      initial={shouldReduceMotion ? undefined : { opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: shouldReduceMotion ? 0 : 0.1, ease: 'easeOut' }}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-heading font-semibold">
          {SITE_NAME}
        </Link>
        <ul className="flex gap-6 text-sm">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="group relative inline-block py-1">
                {link.label}
                <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-signal-blue transition-transform duration-300 ease-out group-hover:scale-x-100" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}
