'use client';

import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { useReducedMotionSafe } from '@/hooks/useReducedMotionSafe';
import { NAV_LINKS, RESUME_PDF_URL, SITE_OWNER, SOCIAL_LINKS } from '@/lib/constants';

export function Footer() {
  const year = new Date().getFullYear();
  const shouldReduceMotion = useReducedMotionSafe();
  const footerRef = useRef<HTMLElement>(null);
  const spacerRef = useRef<HTMLDivElement>(null);
  const isRevealed = useInView(spacerRef, { once: false, amount: 0.1 });

  useEffect(() => {
    const node = footerRef.current;
    if (!node) return;

    const observer = new ResizeObserver((entries) => {
      const height = entries[0]?.contentRect.height;
      if (height) document.documentElement.style.setProperty('--footer-h', `${height}px`);
    });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Real, in-flow spacer the fixed footer below borrows its height from, so
          scrolling the last footer-h worth of page uncovers the footer beneath. */}
      <div ref={spacerRef} aria-hidden="true" style={{ height: 'var(--footer-h, 0px)' }} />
      <footer
        ref={footerRef}
        className="border-line bg-bg text-dim fixed inset-x-0 bottom-0 z-0 border-t"
      >
        <motion.div
          className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-10 text-sm sm:flex-row sm:items-center sm:justify-between"
          initial={{ opacity: 0, y: 24 }}
          animate={shouldReduceMotion || isRevealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={
            shouldReduceMotion ? { duration: 0 } : { type: 'spring', stiffness: 260, damping: 14 }
          }
        >
          <p className="font-mono text-[11px] tracking-[0.1em] uppercase">
            &copy; {year} {SITE_OWNER}
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
            <ul className="flex flex-wrap gap-6 font-mono text-[11px] tracking-[0.1em] uppercase">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="df-focus hover:text-fg transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="flex flex-wrap gap-6 font-mono text-[11px] tracking-[0.1em] uppercase">
              {SOCIAL_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="df-focus hover:text-fg transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={RESUME_PDF_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="df-focus hover:text-fg transition-colors"
                >
                  Résumé
                </a>
              </li>
            </ul>
          </div>
        </motion.div>
      </footer>
    </>
  );
}
